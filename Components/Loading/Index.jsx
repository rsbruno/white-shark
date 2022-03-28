import { useEffect, useState } from "react";
//@ts-ignore
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import styles from "./styles.module.scss";

const defaultStyle = {
  background: "transparent",
  border: "none",
  outline: "none",
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export function Loading({ animation = "zoom", contentStyle, visible }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => setIsLoading(visible), [visible]);

  return (
    <Rodal
      customStyles={defaultStyle || contentStyle}
      animation={animation}
      visible={isLoading}
      onClose={()=>{}}
    >
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Rodal>
  );
}
