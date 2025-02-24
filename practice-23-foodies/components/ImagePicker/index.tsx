"use client";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  function handlePick() {
    inputRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {image ? (
            <Image src={image} alt="image" fill />
          ) : (
            <p>No image picked yet</p>
          )}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name="image"
          onChange={handleChange}
        />
        <button className={styles.button} type="button" onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
