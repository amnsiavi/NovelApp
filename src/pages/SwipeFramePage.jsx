import { Canvas } from "@react-three/fiber";
import { Color } from "three"; // Import the Color class from three.js
import { Html } from "@react-three/drei";
import womenWithBag from "../assets/whiteWomen.jpg";
import { PerspectiveCamera } from "@react-three/drei";
import Navigation from "../components/Reusable/Navigation";
import SwipeFrame from "../components/TestComponents/SwipeFrame";
import ButtonGroup from "../components/PageSpecific/SwpieFrame/ButtonGroup";
import UpperNavigation from "../components/PageSpecific/SwpieFrame/UpperNavigation";

export default function SwipeFramePage() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#fffce6",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute" }}>
          <UpperNavigation />
        </div>
        <ButtonGroup />
      </div>
      <div className="container-main">
        <div
          className="container"
          style={{
            background: `url(${womenWithBag}) center/cover no-repeat`,
            height: "410px",
          }}
        >
          <Canvas
            style={{ height: "550px", marginTop: "-3rem", width: "100%" }}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            <SwipeFrame />
          </Canvas>
          <Navigation />
        </div>
      </div>
    </>
  );
}
