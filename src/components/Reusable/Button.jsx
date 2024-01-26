import PropTypes from "prop-types";
import { Theme } from "../../utils";
import styles from "../../styles/styles.module.css";

const Button = ({ children, className, textColor, onClick, variant }) => {
  switch (variant) {
    case "outlined":
      return (
        <button
          style={{
            border: `2px solid ${Theme.colors.golden}`,
            color: `${Theme.colors.golden}`,
            fontWeight: 700,
          }}
          className={`${className} ${styles.Avenir}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          style={{
            backgroundColor: Theme.colors.golden,
            color: `${textColor}`,
            fontWeight: 700,
          }}
          className={`${className} ${styles.Avenir}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};
export default Button;
