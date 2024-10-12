import { Fragment } from "react";

import styles from "./NavigationRow.module.css";

import NavigationButton from "/src/components/NavigationButton/NavigationButton.jsx";

function NavigationRow({
    buttons,
}) {
    buttons.at(-1).isPrimary = true;

    return (
        <div className={styles.navigationRow}>
        { buttons.map((button, index) => {
            return <Fragment key={button.text}>
                <NavigationButton text={button.text} route={button.route} isPrimary={button.isPrimary} key={button.text} />
                { index < buttons.length - 1 ? <hr /> : '' }
            </Fragment>;
        })}
        </div>
    );
}

export default NavigationRow;
