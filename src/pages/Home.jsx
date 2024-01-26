import { useNavigate } from "react-router-dom";
import womenWithBag from "../assets/womenWithBag.jpg";
import { HomeConstants } from "../constants";
import Content from "../components/PageSpecific/Home/Content";
import Button from "../components/Reusable/Button";
import styles from "../styles/styles.module.css";

export default function Home() {
  const navigate = useNavigate();

  console.log(womenWithBag);
  return (
    <>
      <div
        className={`w-full h-screen flex flex-col items-center justify-center`}
        style={{
          background: `url(${womenWithBag}) center/cover no-repeat`,
        }}
      >
        <div className="text-center text-white flex items-center justify-between flex-col w-full">
          <Content {...HomeConstants} />
          <Button
            className={`${styles["home-button"]} h-[50px] mb-[-250px] text-[16px]`}
            textColor={"#0D0D0D"}
            onClick={() => navigate("/authorization")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
