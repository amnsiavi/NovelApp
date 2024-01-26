import { Html } from "@react-three/drei";
import { PlaneGeometry } from "three";
import * as THREE from "three";
import image1 from "../../assets/image 4.jpg";
import image2 from "../../assets/image 8.jpg";
import image3 from "../../assets/image 12.jpg";
import image4 from "../../assets/image 13.jpg";
import image5 from "../../assets/image 47.jpg";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

export default function Tool() {
  const colorMap1 = useLoader(TextureLoader, image1);
  const colorMap2 = useLoader(TextureLoader, image2);
  const colorMap3 = useLoader(TextureLoader, image3);
  const colorMap4 = useLoader(TextureLoader, image4);
  const colorMap5 = useLoader(TextureLoader, image5);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight />

      <group>
        <mesh position-z={1.49} rotation-x={-0.07}>
          <planeGeometry args={[3.7, 3]} />
          <meshStandardMaterial map={colorMap1} side={THREE.DoubleSide} />
        </mesh>
        <mesh position-z={0.77} position-x={3.1} rotation-y={0.5}>
          <planeGeometry args={[3, 3.02]} />
          <meshStandardMaterial map={colorMap2} side={THREE.DoubleSide} />
        </mesh>
        <mesh position-z={0.77} position-x={-3.1} rotation-y={-0.5}>
          <planeGeometry args={[3, 3.02]} />
          <meshStandardMaterial map={colorMap3} side={THREE.DoubleSide} />{" "}
        </mesh>
        <mesh position-z={0.9} position-y={2.4} rotation-x={-0.4}>
          <planeGeometry args={[3.77, 2.5]} />
          <meshStandardMaterial map={colorMap4} side={THREE.DoubleSide} />
          {/* <meshBasicMaterial
            color={"black"}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          /> */}
        </mesh>
        <mesh position-z={1} position-y={-2.4} rotation-x={0.5}>
          <planeGeometry args={[3.77, 2.4]} />
          <meshStandardMaterial map={colorMap5} side={THREE.DoubleSide} />
          {/* <meshBasicMaterial
            color={"black"}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          /> */}
        </mesh>
        {/* <mesh position-z={1.5}>
          <planeGeometry args={[3.7, 3]} />
          <meshBasicMaterial
            color={"black"}
            transparent={true}
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position-z={-1.44}>
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial
            color={"black"}
            transparent={true}
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position-x={1.64} rotation-y={1.7}>
          <planeGeometry args={[3, 3.1]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            color={"black"}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
        <mesh position-x={-1.64} rotation-y={-1.7}>
          <planeGeometry args={[3, 3.1]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            color={"black"}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
        <mesh position-y={-1.5} rotation-x={1.54} rotation-z={0.01}>
          <planeGeometry args={[3.2, 3.1]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            color={"black"}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
        <mesh position-y={1.6} rotation-x={1.58}>
          <planeGeometry args={[3.5, 3]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            color={"black"}
            transparent={true}
            opacity={0.7}
          />
        </mesh> */}
      </group>
    </>
  );
}
