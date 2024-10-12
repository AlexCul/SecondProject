import styles from "./Header.module.css";

import Logo from "/src/assets/images/logo.svg";
import Icon from "/src/assets/images/icons/icon.svg";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div className={styles.links}>
          <a href="/">Main Page</a>
          <a href="/categories">Categories</a>
          <a href="/products">All products</a>
          <a href="#">All sales</a>
        </div>
        <a href="shopping-cart">
          <img src={Icon} alt="icon" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
