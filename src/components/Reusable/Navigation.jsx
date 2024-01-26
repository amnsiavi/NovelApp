import styles from "../../styles/styles.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navigation() {
  return (
    <>
      <div className={`${styles["navigation-container"]}`}>
        <div className={`${styles["navigation-nav-items"]} ${styles.SansPro}`}>
          <HomeIcon sx={{ width: "25px", height: "25px" }} />
          <h2>Home</h2>
        </div>
        <div className={`${styles["navigation-nav-items"]} ${styles.SansPro}`}>
          <ShoppingCartIcon sx={{ width: "25px", height: "25px" }} />
          <h2>Cart</h2>
        </div>
        <div className={`${styles["navigation-nav-items"]} ${styles.SansPro}`}>
          <MdOutlineAccountCircle size={20} />
          <h2>Profile</h2>
        </div>
        <div className={`${styles["navigation-nav-items"]} ${styles.SansPro}`}>
          <IoSettingsOutline style={{ width: "20px", height: "20px" }} />
          <h2>Setting</h2>
        </div>
      </div>
    </>
  );
}
