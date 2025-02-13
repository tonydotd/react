import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false);

  const isValid = isEdited && validationFn(value);

  function handleChange(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  function handleBlur() {
    setIsEdited(true);
  }

  return {
    value,
    isValid,
    isEdited,
    handleChange,
    handleBlur,
  };
}
