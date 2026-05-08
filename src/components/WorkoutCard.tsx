const DAY_LABELS = ["Push", "Pull", "Legs"] as const;

type WorkoutCardProps = {
  day: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  onDayClick: (day: number) => void;
};

function dayIcon(isUnlocked: boolean, isCompleted: boolean): string {
  if (isCompleted) return "✅";
  if (isUnlocked) return "🏋️";
  return "🔒";
}

export default function WorkoutCard({
  day,
  isUnlocked,
  isCompleted,
  onDayClick,
}: WorkoutCardProps) {
  const label = DAY_LABELS[day % 3];

  return (
    <button
      className={`day-card${isUnlocked ? " day-card--active" : ""}${isCompleted ? " day-card--completed" : ""}`}
      onClick={() => onDayClick(day)}
    >
      <div className="day-card-header">
        <span className="day-card-label">
          Day {String(day + 1).padStart(2, "0")}
        </span>
        <span className="day-card-icon">{dayIcon(isUnlocked, isCompleted)}</span>
      </div>
      <span className="day-card-type">{label}</span>
    </button>
  );
}
