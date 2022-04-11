// reusable card component
import styles from "./GroceryItem.module.css";

const GroceryItem = (props) => {
  const { title, imgURL, mrp, sellingPrice, discount } = props;
  return (
    <div className={styles.card}>
      <img src={imgURL} alt={title} />
      <h4>{title}</h4>
      <div className={styles.priceTag}>
        <span className={styles.sellPrice}>{sellingPrice}</span>
        <span className={styles.actualPrice}>{mrp}</span>
      </div>
    </div>
  );
};
export default GroceryItem;
