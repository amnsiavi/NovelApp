import womenWithBag from "../assets/womenWithBag2.jpg";
import styles from "../styles/styles.module.css";
import Capsule from "../components/PageSpecific/Authorization/Capsule";
import Text from "../components/PageSpecific/Authorization/Text";
import { AuthorizationConstants } from "../constants";
import Button from "../components/Reusable/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

export default function Authorization() {
  const isSmallScreen = useMediaQuery("(max-width:640px)");
  const navigate = useNavigate();

  console.log(isSmallScreen);
  return (
    <>
      <div
        className={`w-full h-screen ${styles["auth-main"]} relative`}
        style={{ zIndex: 2 }}
      >
        <div
          className={`${styles["auth-capsule-container"]}`}
          style={{
            background: `url(${womenWithBag}) center/cover no-repeat`,
            zIndex: -1,
          }}
        >
          <Capsule>
            <p className={`${styles.Avenir}`}>Spintura</p>
          </Capsule>
        </div>
        <Text {...AuthorizationConstants} />

        <div
          className={`${styles["button-container"]}`}
          style={{
            marginTop: "",
          }}
        >
          <Button
            className={`${styles["auth-button"]} h-[50px] text-[16px]`}
            onClick={() => navigate("/login")}
          >
            Proceed
          </Button>
          <Button
            className={`${styles["auth-button"]} h-[50px] text-[16px]`}
            variant={"outlined"}
            onClick={() => navigate("/signup")}
          >
            Swipe Frame (under development)
          </Button>
        </div>
      </div>
    </>
  );
}
