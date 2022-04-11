// keep the add to cart component here
const CartButton = (props) => {
  //manage state of the count
  const { count } = props;
  return (
    <>
      {/* add to cart button */}
      {/* count with - and  + button */}
      <div>
        <button>-</button>
        <p className="count-item">{count}</p>
        <button>+</button>
      </div>
    </>
  );
};
export default CartButton;
