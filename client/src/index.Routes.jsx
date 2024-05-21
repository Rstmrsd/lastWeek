import Add from "./pages/Add.jsx";
import Basket from "./pages/Basket.jsx";
import Detail from "./pages/Detail.jsx";
import MainRoot from "./pages/MainRoot.jsx";

const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"detail",
                element:<Detail/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]

    }
]

export default ROUTES