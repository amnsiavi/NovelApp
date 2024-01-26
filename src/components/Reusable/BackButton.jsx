import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import styles from "../../styles/styles.module.css";
import { useNavigate } from "react-router";

BackButton.propTypes = {
  children: PropTypes.node,
};
BackButton.propTypes = {
  to: PropTypes.string,
};
export default function BackButton({ to }) {
  const navigate = useNavigate();

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
        onClick={() => navigate(to)}
      >
        <IoArrowBack style={{ marginBottom: "0.2rem" }} />{" "}
        <p style={{ fontWeight: 700, fontSize: "16px" }}>Back</p>
      </button>
    </>
  );
}
