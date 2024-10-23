import styles from "./SectionBar.module.css";

import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationButton from "/src/components/NavigationButton/NavigationButton.jsx";

function SectionBar({ title, button, style }) {
  return (
    <div className={styles.sectionBar} style={style}>
      <SectionTitle content={title} />
      <hr />
      <NavigationButton text={button.text} route={button.route} />
    </div>
  );
}

export default SectionBar;
