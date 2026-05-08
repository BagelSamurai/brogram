import { useState } from "react";
import { workoutProgram } from "../utils/workoutProgram";
import WorkoutCard from "./WorkoutCard";
import Modal from "./Modal";

export default function Grid() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  return (
    <>
      <div className="workout-grid">
        {Object.entries(workoutProgram).map(([day, data]) => (
          <WorkoutCard
            key={day}
            day={Number(day)}
            warmup={data.warmup}
            workout={data.workout}
            onExerciseClick={setSelectedExercise}
          />
        ))}
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
