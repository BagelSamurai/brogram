import { useState } from "react";
import { workoutProgram } from "../utils/workoutProgram";
import WorkoutCard from "./WorkoutCard";
import Modal from "./Modal";

export default function Grid() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <>
      <div className="workout-grid">
        {Object.keys(workoutProgram).map((day) => (
          <WorkoutCard
            key={day}
            day={Number(day)}
            onDayClick={setSelectedDay}
          />
        ))}
      </div>
      {selectedDay !== null && (
        <Modal
          day={selectedDay}
          warmup={workoutProgram[selectedDay].warmup}
          workout={workoutProgram[selectedDay].workout}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  );
}
