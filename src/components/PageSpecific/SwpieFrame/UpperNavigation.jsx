import BackButton from "../../Reusable/BackButton";
import styles from "../../../styles/styles.module.css";
import { LuBellRing } from "react-icons/lu";
import PropTypes from "prop-types";

UpperNavigation.propTypes = {
  to: PropTypes.string,
};
export default function UpperNavigation({ to }) {
  return (
    <>
      <div
        className="upper-nav-container"
        style={{
          display: "flex",
          width: "100%",
          padding: "10px",
          gap: "75px",
        }}
      >
        <BackButton to={to} />
        <h2
          className={`${styles.Avenir} ${styles["upper-navigation-text-2"]}`}
          style={{}}
        >
          Spintura
        </h2>
        <div className={`${styles["upper-navigation-item-2"]}`}>
          <LuBellRing size={30} />
        </div>
      </div>
    </>
  );
}
