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

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true)
    const response = await axios.get(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId :""}`)
    setLoading(false);
    setFastFoodItems(response.data)
  };
const RenderContent = () =>{
 return loading ? <Loading theme="dark"/> : <FastFoodList FastFoodItems={fastFoodItems}/>
}
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrapper bg-faded-dark">
        <Header />
        <CategoryList />
        <div className="container mt-4">
         <RenderContent/>
        </div>
      </div>
    </>
  );
};

export default App;
