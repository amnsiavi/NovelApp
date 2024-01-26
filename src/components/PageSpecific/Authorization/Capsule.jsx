import PropTypes from "prop-types";

import styles from "../../../styles/styles.module.css";
Capsule.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Capsule({ children }) {
  return <div className={`${styles["auth-capsule"]}`}>{children}</div>;
}
