import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import styles from "../../styles/styles.module.css";

BackButton.propTypes = {
  children: PropTypes.node,
};

export default function BackButton() {
  return (
    <>
      <button
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={`${styles.Avenir}`}
      >
        <IoArrowBack style={{ marginBottom: "0.2rem" }} />{" "}
        <p style={{ fontWeight: 700, fontSize: "16px" }}>Back</p>
      </button>
    </>
  );
}
