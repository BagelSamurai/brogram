import { useState } from "react";
import type { Exercise } from "../types/types";
import Modal from "./Modal";

type WorkoutDetailProps = {
  day: number;
  warmup: Exercise[];
  workout: Exercise[];
  onExit: () => void;
  onComplete: () => void;
};

type ExerciseSectionProps = {
  title: string;
  exercises: Exercise[];
  isWarmup: boolean;
  weights: Record<string, string>;
  onWeightChange: (name: string, value: string) => void;
  onInfo: (name: string) => void;
};

const DAY_LABELS = ["Push", "Pull", "Legs"] as const;

function loadWeights(day: number): Record<string, string> {
  try {
    return JSON.parse(
      localStorage.getItem(`brogram-weights-${day}`) ?? "{}"
    );
  } catch {
    return {};
  }
}

function ExerciseSection({
  title,
  exercises,
  isWarmup,
  weights,
  onWeightChange,
  onInfo,
}: ExerciseSectionProps) {
  return (
    <div className="exercise-section">
      <div className="exercise-table-header">
        <span>{title}</span>
        <span>Sets</span>
        <span>Reps</span>
        <span>Max Weight</span>
      </div>
      {exercises.map((ex, i) => (
        <div key={ex.name} className="exercise-row">
          <span className="exercise-name">
            {i + 1}. {ex.name}
            <button
              className="exercise-info-btn"
              onClick={() => onInfo(ex.name)}
              aria-label={`Info for ${ex.name}`}
            >
              ?
            </button>
          </span>
          <span>{ex.sets}</span>
          <span>{ex.reps}</span>
          {isWarmup ? (
            <input
              className="weight-input"
              value="N/A"
              disabled
              readOnly
            />
          ) : (
            <input
              className="weight-input"
              type="text"
              placeholder=""
              value={weights[ex.name] ?? ""}
              onChange={(e) => onWeightChange(ex.name, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function WorkoutDetail({
  day,
  warmup,
  workout,
  onExit,
  onComplete,
}: WorkoutDetailProps) {
  const [weights, setWeights] = useState<Record<string, string>>(() =>
    loadWeights(day)
  );
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const label = DAY_LABELS[day % 3];

  function handleWeightChange(name: string, value: string) {
    setWeights((prev) => ({ ...prev, [name]: value }));
  }

  function handleExit() {
    localStorage.setItem(
      `brogram-weights-${day}`,
      JSON.stringify(weights)
    );
    onExit();
  }

  function handleComplete() {
    localStorage.setItem(
      `brogram-weights-${day}`,
      JSON.stringify(weights)
    );
    onComplete();
  }

  return (
    <>
      <div className="workout-detail">
        <div className="workout-detail-header">
          <div>
            <span className="workout-detail-day">
              Day {String(day + 1).padStart(2, "0")}
            </span>
            <h2 className="workout-detail-title">{label} Workout</h2>
          </div>
          <span className="workout-detail-icon">🏋️</span>
        </div>

        <ExerciseSection
          title="Warmup"
          exercises={warmup}
          isWarmup
          weights={weights}
          onWeightChange={handleWeightChange}
          onInfo={setSelectedExercise}
        />

        <ExerciseSection
          title="Workout"
          exercises={workout}
          isWarmup={false}
          weights={weights}
          onWeightChange={handleWeightChange}
          onInfo={setSelectedExercise}
        />

        <div className="workout-detail-actions">
          <button className="workout-btn workout-btn--exit" onClick={handleExit}>
            Save & Exit
          </button>
          <button
            className="workout-btn workout-btn--complete"
            onClick={handleComplete}
          >
            Complete
          </button>
        </div>
      </div>

      {selectedExercise && (
        <Modal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </>
  );
}
