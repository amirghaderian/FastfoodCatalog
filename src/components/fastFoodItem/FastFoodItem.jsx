//icons
import { HiShoppingCart } from "react-icons/hi";
import "./fastFoodItem.css"
const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="card product-card h-full border-0 shadow-sm pb-1">
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        قیمت: {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder h-[220px]  "><img className="card-img-top" src={imageUrl} alt={name} /></div>
      
      <div className="card-body text-center pt-3 pb-2 flex flex-col">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms fw-bold text-muted mb-3 ">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm w-full mt-auto fw-bold">
          <HiShoppingCart className="fs-4   inline" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
