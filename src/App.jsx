//hooks
import { useState, useEffect } from "react";
//components
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
//styles
import "./App.css";
//fetchData
import axios from "./axios";
import Loading from "./components/Loading";
import FastFoodList from "./components/FastFoodList";
import SearchBar from "./components/SearchBar";
//image
import notFound from "./assets/images/404.png"

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };
  const RenderContent = () => {
    return loading ? (
      <Loading theme="dark" />
    ) :fastFoodItems.length===0? <>
    <div className="alert alert-warning text-center">برای کلید واژه فوق هیچ آیتمی یافت نشد!</div>
    <img className="mx-auto mt-3 block" src={notFound} alt="صفحه 404" /></> :(
      <FastFoodList fastFoodItems={fastFoodItems} />
    );
  };
  const filterItems = (categoryId) => {
    fetchData(categoryId);
    console.log(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response  = await axios.get(`/FastFood/search/${term ? "?term=" + term :""}`)
    setLoading(false)
    setFastFoodItems(response.data)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper bg-faded-dark">
        <Header />
        <CategoryList filterItems={filterItems} >
          <SearchBar searchItems={searchItems}/>
        </CategoryList>
        <div className="container mt-4">
          <RenderContent />
        </div>
      </div>
    </>
  );
};

export default App;
