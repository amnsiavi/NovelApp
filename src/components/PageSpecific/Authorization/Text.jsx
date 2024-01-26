import { Typography } from "@mui/material";
import styles from "../../../styles/styles.module.css";
import PropTypes from "prop-types";

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Text({ text }) {
  return (
    <Typography className={`${styles.SansPro} ${styles["auth-main-text"]}`}>
      {text}
    </Typography>
  );
}
