import Add from "./pages/Add.jsx";
import Basket from "./pages/Basket.jsx";
import Detail from "./pages/Detail.jsx";
import Home from "./pages/Home/Home.jsx";
import MainRoot from "./pages/MainRoot.jsx";
import WishList from "./pages/WishList.jsx";

const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:":id",
                element:<Detail/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"wishlist",
                element:<WishList/>
            }


        ]

    }
]

export default ROUTES