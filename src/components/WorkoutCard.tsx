import type { Exercise } from "../types/types";

type WorkoutCardProps = {
  day: number;
  warmup: Exercise[];
  workout: Exercise[];
  onExerciseClick: (name: string) => void;
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

export default function WorkoutCard({
  day,
  warmup,
  workout,
  onExerciseClick,
}: WorkoutCardProps) {
  const label = DAY_LABELS[day % 3];

  return (
    <section className="nes-container with-title workout-card">
      <p className="title">
        Day {day + 1} — {label}
      </p>
      <h6>Warmup</h6>
      <ExerciseTable exercises={warmup} onExerciseClick={onExerciseClick} />
      <h6>Workout</h6>
      <ExerciseTable exercises={workout} onExerciseClick={onExerciseClick} />
    </section>
  );
}
