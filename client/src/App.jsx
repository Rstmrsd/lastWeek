import { useEffect, useState } from "react";
import MainRoot from "./pages/MainRoot.jsx";
import axios from "axios";
import mainContext from "./context/Context.js";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./index.Routes.jsx";
const routes = createBrowserRouter(ROUTES);
function App() {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState([])
  useEffect(() => {
    axios.get("http://localhost:7008/api/product").then((res) => {
      setData(res.data);
      console.log(res.data);
      setSearch(res.data)
    });
  }, []);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [fav, setFav] = useState(
    localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : []
  );
  const addToWishlist = (item) => {
    const target=fav.find((x)=>x._id==item._id)
    if(target){
      alert("var")
    }
    else{
      setFav([...fav,item])
      localStorage.setItem("wish",JSON.stringify([...fav,item]))
      alert("add to fav")
    }
  };

  const addToBasket = (item) => {
    const target = basket.find((x) => x.product._id == item._id);
    if (target) {
      target.count += 1;
      target.totalPrice = target.count * target.product.price;
      setBasket([...basket]);
      localStorage.setItem("basket", JSON.stringify([...basket]));
    } else {
      const newItem = {
        _id: item._id,
        product: item,
        count: 1,
        totalPrice: item.price,
      };
      setBasket([...basket, newItem]);
      localStorage.setItem("basket", JSON.stringify([...basket, newItem]));
    }
  };

  const increaseItem = (item) => {
    const target = basket.find((x) => x.product._id == item._id);
    target.count += 1;
    target.totalPrice = target.count * target.product.price;
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify([...basket]));
  };
  const decreaseItem = (item) => {
    const target = basket.find((x) => x.product._id == item._id);
    if (target.count > 0) {
      target.count -= 1;
      target.totalPrice = target.count * target.product.price;
      setBasket([...basket]);
      localStorage.setItem("basket", JSON.stringify([...basket]));
    }
  };
  const deleteBasketItem = (item) => {
    const target = basket.find((x) => x.product._id == item._id);
    basket.splice(basket.indexOf(target), 1);
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify([...basket]));
  };

  const deleteWishList = (item) =>{
    const target = fav.find((x)=>x._id == item._id);
    fav.splice(fav.indexOf(target),1);
    setFav([...fav]);
    localStorage.setItem("wish",JSON.stringify([...fav]))

  }

  const values = {
    data,
    addToBasket,
    basket,
    decreaseItem,
    increaseItem,
    deleteBasketItem,
    addToWishlist,
    fav,
    deleteWishList,
    search,
    setSearch
  };
  return (
    <mainContext.Provider value={values}>
      <RouterProvider router={routes} />
    </mainContext.Provider>
  );
}

export default App;
