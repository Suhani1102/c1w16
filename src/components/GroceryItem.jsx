// reusable card component
import styles from "./GroceryItem.module.css";
//import CartButton from "./CartButton";

const GroceryItem = (props) => {
  const { title, imgURL, mrp, sellingPrice, discount } = props;
  return (
    <div className={styles.card}>
      <span className={styles.disTag}>
        <span className={styles.disText}>{discount}</span>
      </span>
      <img src={imgURL} alt={title} />
      <h4>{title}</h4>
      <div className={styles.priceTag}>
        <span className={styles.sellPrice}>{sellingPrice} </span>
        M.R.P.<span className={styles.actualPrice}>{mrp}</span>
      </div>
      {/* <CartButton /> */}
    </div>
  );
};
export default GroceryItem;
