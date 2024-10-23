import styles from "./NavigationButton.module.css";

function NavigationButton({ text, route, isPrimary = false }) {
  const classes = `${styles.navigationButton} ${isPrimary ? styles.primary : ""}`;

  return (
    <a href={route} className={classes}>
      {text}
    </a>
  );
}

export default NavigationButton;
