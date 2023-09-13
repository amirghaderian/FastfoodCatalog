import { useState, useEffect } from "react";
import axios from "../axios";
import Loading from "./Loading";
import LoadingPiulse from "./LoadingPulse";
import SearchBar from "./SearchBar";

const CategoryList = ({ filterItems, children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const RenderComponent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    } else {
      return (
        <div className="flex  w-full items-baseline justify-between ml-[40px] ">
          <ul className="nav">
            <li className="nav-item flex  " onClick={() => filterItems()}>
              <a className="nav-link" href="#">
                همه فست فود ها
              </a>
            </li>
            {categories.map((category) => {
              return (
                <li
                  key={category.id}
                  className="nav-item"
                  onClick={() => filterItems(category.id)}
                >
                  <a className=" nav-link" href="#">
                    {category.name}
                  </a>
                </li>
              );
            })}
          </ul>
          {children}
        </div>
      );
    }
  };
  return (
    <nav className="container ">
      <div className="bg-white rounded-[3px] shadow-lg flex items-center h-[80px] mt-[-3em] ">
        <RenderComponent />
      </div>
    </nav>
  );
};

export default CategoryList;
