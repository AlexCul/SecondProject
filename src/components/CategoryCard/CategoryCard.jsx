import styles from "./CategoryCard.module.css";

function CategoryCard({ category }) {
    return (
        <div className={styles.card}>
        <a href={`/categories/${category.id}`}>
            <img src={`http://localhost:3333/${category.image}`} alt="" />
            <span>{category.title}</span>
        </a>
        </div>
    );
}

export default CategoryCard;
