import styles from "../../../styles/styles.module.css";

export default function ButtonGroup() {
  return (
    <>
      <div className={`flex w-full ${styles["button-group-container"]}`}>
        <button className={`${styles.Avenir} ${styles["swipe-frame-buttons"]}`}>
          Groups
        </button>
        <button className={`${styles.Avenir} ${styles["swipe-frame-buttons"]}`}>
          Social
        </button>
      </div>
    </>
  );
}
