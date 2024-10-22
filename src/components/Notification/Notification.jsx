import styles from "./Notification.module.css";

import CloseWhite from "/src/assets/images/icons/close-white.svg";

function Notification({ notification, setNotification, onClose = () => {} }) {
    return (
        <div className={`${styles.notification} notCentered`} style={{
            display: notification.isShown ? "flex" : "none",
        }}>
            <div className={styles.message}>
                <div className={styles.text}>
                    <span>{notification.title}</span>
                    <p>{notification.message}</p>
                </div>
                <button onClick={() => {
                    setNotification({ ...notification, isShown: false });

                    onClose();
                }}><img src={CloseWhite} /></button>
            </div>
        </div>
    );
}

export default Notification;
