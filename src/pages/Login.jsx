import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Navigation from "../components/Reusable/Navigation";
import Tool from "../components/TestComponents/Tool";
import image1 from "../assets/image 4.jpg";
import image2 from "../assets/image 8.jpg";
import image3 from "../assets/image 12.jpg";
import image4 from "../assets/image 13.jpg";
import image5 from "../assets/image 47.jpg";
export default function Login() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <Canvas className="" style={{ height: "40%" }}>
          <OrbitControls />
          <PerspectiveCamera makeDefault fov={90} position={[0, 0, 5]} />
          <Tool />
        </Canvas>
        <Navigation />
      </div>
    </>
  );
}
