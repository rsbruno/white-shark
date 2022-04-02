import React, { useRef, useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { useField } from "@unform/core";
import styles from "./styles.module.scss";

export default function InputMask({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);
  return (
    <div className={styles.container}>
      <ReactInputMask
        ref={inputRef}
        mask="+9-999-999-9999"
        maskChar={null}
        alwaysShowMask={false}
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  );
}
