import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, onClose, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const modal = ref.current;
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={ref} className={`modal ${className}`} onCancel={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
