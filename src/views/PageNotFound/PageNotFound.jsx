import { useNavigate } from "react-router-dom";

import styles from "./PageNotFound.module.css";

import Button from "/src/components/Button/Button.jsx";

function PageNotFound() {
  const buttonStyles = {
    width: "218px",
    marginTop: "40px",
  };
  const navigate = useNavigate();

  return (
    <section className={styles.notFoundArticle}>
      <img src="/src/assets/images/404.png" alt="404" />
      <h3>Page Not Found</h3>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Button
        style={buttonStyles}
        initialText="Go to home"
        clickedText="Redirecting..."
        onClick={(dependencies) => navigate("/")}
        dependencies={{}}
      />
    </section>
  );
}

export default PageNotFound;
