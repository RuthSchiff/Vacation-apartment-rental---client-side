import React from "react";
import theStore from "./Redux/store";
import { Nav } from "./Nav";
import { Routing } from "./Routing";
import { Provider } from "react-redux"
// import { Provider } from "react-redux"
// import { Home } from "./Home";
// // import { Login } from "../enter/logInAdvertiser"
// import { LogIn } from "./enter/logInAdvertiser";
// import { Register } from "./enter/registerAdvertiser";
// import { ShowCategory } from "./category/allCategory";
// import {CreateCategory} from "./category/addCategory";
// import {AllCityies} from "./city/allCity";
// import {CreateCity} from "./city/addCity";
import { BrowserRouter } from "react-router-dom";

export const Main =()=>{
    return <>
    {/* <ApartmentCars></ApartmentCars> */}
    <Provider store={theStore}>
        <BrowserRouter>
        <Nav></Nav>
        <Routing></Routing>
        </BrowserRouter>
        </Provider>
        </>
    {/* <Home></Home> */}
    {/* <LogIn></LogIn> */}
    {/* <Register></Register> */}
    {/* <ShowCategory></ShowCategory> */}
    {/* <CreateCategory></CreateCategory> */}
    {/* <AllCityies></AllCityies> */}
    {/* <CreateCity></CreateCity> */}
    {/* <AllCategory></AllCategory> */}
    {/* <Login></Login> */}
   
    {/* <h1>welcome</h1> */}
    
  
}