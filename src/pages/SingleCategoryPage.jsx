import cubePic from "../assets/cubeFrame.jpg";
import UpperNavigation from "../components/PageSpecific/SwpieFrame/UpperNavigation";
import Navigation from "../components/Reusable/Navigation";
import SearchBar from "../components/Reusable/SearchBar";
import styles from "../styles/styles.module.css";
import { IoFilter } from "react-icons/io5";

export default function SingleCategoryPage() {
  return (
    <div className={`${styles["single-category-container"]}`}>
      <UpperNavigation />
      <div className="w-full flex gap-10 items-center justify-center p-4">
        <SearchBar />
        <IoFilter size={40} />
      </div>
      <div
        className="bg-lime-500 mt-12"
        style={{
          height: "50%",
          background: `url(${cubePic}) center/cover no-repeat`,
        }}
      >
        Hello
      </div>

      <Navigation />
    </div>
  );
}
