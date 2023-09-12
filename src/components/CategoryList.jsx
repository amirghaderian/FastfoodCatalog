import { useState, useEffect } from "react";
import axios from "../axios";
import Loading from "./Loading";
import LoadingPiulse from "./LoadingPulse";

const CategoryList = () => {
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
      return <Loading theme="primary"/>;
    } else {
      return (
        <ul className="nav">
          <li className="nav-item flex  ">
            <a className="nav-link" href="#">
              همه فست فود ها
            </a>
          </li>
          {categories.map((category) => {
            return (
              <li key={category.id} className="nav-item  ">
                <a className=" nav-link" href="#">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
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
