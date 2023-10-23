import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function BackButton() {
  return (
    <Link to=".." className={`${styles.btn} ${styles.back}`}>
      Back
    </Link>
  );
}

export default BackButton;

// <Button
//   type="back"
//   onClick={(e) => {
//     e.preventDefault();
//     navigate("..");
//   }}
// >
//   &larr;Back
// </Button>
