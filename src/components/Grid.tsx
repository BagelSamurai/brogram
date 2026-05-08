import { useState } from "react";
import { workoutProgram } from "../utils/workoutProgram";
import WorkoutCard from "./WorkoutCard";
import WorkoutDetail from "./WorkoutDetail";

function loadCompleted(): number[] {
  try {
    return JSON.parse(localStorage.getItem("brogram-completed") ?? "[]");
  } catch {
    return [];
  }
}

export default function Grid() {
  const [completedDays, setCompletedDays] = useState<number[]>(loadCompleted);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  function isUnlocked(day: number): boolean {
    return day === 0 || completedDays.includes(day - 1);
  }

  function isCompleted(day: number): boolean {
    return completedDays.includes(day);
  }

  function handleComplete(day: number) {
    if (!completedDays.includes(day)) {
      const updated = [...completedDays, day];
      setCompletedDays(updated);
      localStorage.setItem("brogram-completed", JSON.stringify(updated));
    }
    setSelectedDay(null);
  }

  return (
    <>
      {selectedDay !== null && (
        <WorkoutDetail
          day={selectedDay}
          warmup={workoutProgram[selectedDay].warmup}
          workout={workoutProgram[selectedDay].workout}
          onExit={() => setSelectedDay(null)}
          onComplete={() => handleComplete(selectedDay)}
        />
      )}
      <div className="workout-grid">
        {Object.keys(workoutProgram)
          .filter((d) => Number(d) !== selectedDay)
          .map((d) => (
            <WorkoutCard
              key={d}
              day={Number(d)}
              isUnlocked={isUnlocked(Number(d))}
              isCompleted={isCompleted(Number(d))}
              onDayClick={setSelectedDay}
            />
          ))}
      </div>
    </>
  );
}
