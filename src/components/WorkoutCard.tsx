const DAY_LABELS = ["Push", "Pull", "Legs"] as const;

type WorkoutCardProps = {
  day: number;
  onDayClick: (day: number) => void;
};

export default function WorkoutCard({ day, onDayClick }: WorkoutCardProps) {
  const label = DAY_LABELS[day % 3];
  const isActive = day === 0;

  return (
    <button
      className={`day-card${isActive ? " day-card--active" : ""}`}
      onClick={() => onDayClick(day)}
    >
      <div className="day-card-header">
        <span className="day-card-label">
          Day {String(day + 1).padStart(2, "0")}
        </span>
        <span className="day-card-icon">{isActive ? "🏋️" : "🔒"}</span>
      </div>
      <span className="day-card-type">{label}</span>
    </button>
  );
}
