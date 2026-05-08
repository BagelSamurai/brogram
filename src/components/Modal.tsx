import { useState } from "react";
import type { Exercise } from "../types/types";
import { exerciseDescriptions } from "../utils/workoutDescription";

type ModalProps = {
  day: number;
  warmup: Exercise[];
  workout: Exercise[];
  onClose: () => void;
};

type ExerciseTableProps = {
  exercises: Exercise[];
  onExerciseClick: (name: string) => void;
};

const DAY_LABELS = ["Push", "Pull", "Legs"] as const;

function ExerciseTable({ exercises, onExerciseClick }: ExerciseTableProps) {
  return (
    <table className="nes-table is-bordered" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((ex) => (
          <tr key={ex.name}>
            <td>
              <button
                className="exercise-btn"
                onClick={() => onExerciseClick(ex.name)}
              >
                {ex.name}
              </button>
            </td>
            <td>{ex.sets}</td>
            <td>{ex.reps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Modal({ day, warmup, workout, onClose }: ModalProps) {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const label = DAY_LABELS[day % 3];

  if (selectedExercise) {
    return (
      <div className="modal-overlay">
        <section className="nes-container with-title modal-content">
          <p className="title">{selectedExercise}</p>
          <p>{exerciseDescriptions[selectedExercise] ?? "No description available."}</p>
          <button className="nes-btn" onClick={() => setSelectedExercise(null)}>
            ← Back
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <section className="nes-container with-title modal-content">
        <p className="title">
          Day {day + 1} — {label}
        </p>
        <h6>Warmup</h6>
        <ExerciseTable exercises={warmup} onExerciseClick={setSelectedExercise} />
        <h6>Workout</h6>
        <ExerciseTable exercises={workout} onExerciseClick={setSelectedExercise} />
        <button
          className="nes-btn is-error"
          onClick={onClose}
          style={{ marginTop: "1rem" }}
        >
          Close
        </button>
      </section>
    </div>
  );
}
