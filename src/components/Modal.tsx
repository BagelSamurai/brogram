import { exerciseDescriptions } from "../utils/workoutDescription";

type ModalProps = {
  exercise: string;
  onClose: () => void;
};

export default function Modal({ exercise, onClose }: ModalProps) {
  const description =
    exerciseDescriptions[exercise] ?? "No description available.";

  return (
    <div className="modal-overlay">
      <section className="nes-container with-title modal-content">
        <p className="title">{exercise}</p>
        <p>{description}</p>
        <button className="nes-btn is-primary" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}
