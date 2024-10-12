import styles from "./CategoryCard.module.css";

function CategoryCard({ category }) {
    return (
        <div className={styles.card}>
            <img src={`http://localhost:3333/${category.image}`} alt="" />
            <span>{category.title}</span>
        </div>
    );
}

export default CategoryCard;
