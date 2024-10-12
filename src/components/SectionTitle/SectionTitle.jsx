import styles from "./SectionTitle.module.css";

function SectionTitle({
    content,
}) {
    return (
        <h2 className={styles.title}>{content}</h2>
    );
}

export default SectionTitle
