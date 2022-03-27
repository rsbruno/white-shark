import { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import styles from "./styles.module.scss";

export function TextInput({ name, className, getMessageError, updateValue, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [errorField, setErrorField] = useState("");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        const value = ref.current.value;
        if (rest.type === "number") return value !== "" ? Number(value) : undefined;
        return value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (getMessageError) getMessageError(error ? error : "");
    else setErrorField(() => (error ? error : ""));
  }, [error]);

  return (
    <div className={styles.container}>
      <input
        className={`textInput`}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {errorField && (
        <small className="error">
          {errorField}
        </small>
      )}
    </div>
  );
}
