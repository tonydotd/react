import { useUserProgressContext } from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function OrderSuccess({ onFinish }) {
  const userProgress = useUserProgressContext();

  return (
    <Modal isOpen={userProgress.progress === "checkout"} onClose={onFinish}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <p className="modal-actions">
        <Button onClick={onFinish}>Okay</Button>
      </p>
    </Modal>
  );
}
