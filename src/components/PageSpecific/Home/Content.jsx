import PropTypes from "prop-types";
import React from "react";
import styles from "../../../styles/styles.module.css";

const Content = ({ title, subtitle }) => {
  return (
    <div>
      <p
        className={`${styles.Avenir}`}
        style={{ fontWeight: 700, fontSize: "40px" }}
      >
        {title}
      </p>
      <p
        style={{
          fontWeight: 600,
          fontSize: "16px",
        }}
        className={`${styles.SansPro}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default React.memo(Content);
