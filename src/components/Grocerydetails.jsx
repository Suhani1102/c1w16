import React from "react";
import data from "../data.json";
import GroceryItem from "./GroceryItem";
//import CartButton from "./CartButton";
import styles from "./GroceryItem.module.css";

const GroceryDetails = () => {
  console.log(data);

  return (
    <>
      <h1 className={styles.appTitle}>Groceries</h1>
      <div className={styles.container}>
        {
          /* map through the data and display the cards */
          data.map((item) => {
            return (
              <>
                <GroceryItem {...item} />
              </>
            );
          })
        }
      </div>
    </>
  );
};
export default GroceryDetails;
