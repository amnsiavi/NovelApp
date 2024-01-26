import { Canvas } from "@react-three/fiber";
import { Color } from "three"; // Import the Color class from three.js
import { Html } from "@react-three/drei";
import womenWithBag from "../../assets/womenWithBag.jpg";
import { PerspectiveCamera } from "@react-three/drei";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FiFacebook } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

export default function SwipeFrame() {
  return (
    <>
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[1, 6.2, -2]} />
        {/* Use Color class to set the color */}
        <meshBasicMaterial color={new Color("yellow")} />
        <Html position={[-0.1, 0, 0]}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <TwitterIcon
              sx={{ width: "50px", height: "50px", marginLeft: "1.5rem" }}
            />
          </div>
        </Html>
      </mesh>
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[1, 6.2, -2]} />
        {/* Use Color class to set the color */}
        <meshBasicMaterial color={new Color("#daaf37")} />

        <Html position={[-1, 0, -0.1]}>
          <div
            style={{
              color: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiFacebook style={{ width: "50px", height: "50px" }} />
          </div>
        </Html>
      </mesh>
      <mesh position={[0, 2, 3]}>
        <boxGeometry args={[2.5, -1, 2]} />
        {/* Use Color class to set the color */}
        <meshBasicMaterial color={new Color("#FFE165")} />
        <Html position={[0, 0, -1]}>
          <div
            style={{
              color: "white",
              textAlign: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InstagramIcon
              style={{
                marginLeft: "-1rem",
                width: "50px",
                height: "50px",
                marginTop: "-0.5rem",
              }}
            />
          </div>
        </Html>
      </mesh>
      <mesh position={[0, -3, 1]}>
        <boxGeometry args={[4.9, 0, 4]} />
        {/* Use Color class to set the color */}
        <meshBasicMaterial color={new Color("#121212")} />
        <Html position={[-0.2, 0, -1]}>
          <div
            style={{
              color: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-1rem",
            }}
          >
            <FaPhoneVolume size={50} style={{ marginLeft: "-0.2rem" }} />
          </div>
        </Html>
      </mesh>
    </>
  );
}
