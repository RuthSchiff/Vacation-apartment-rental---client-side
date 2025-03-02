import React from "react";
import theStore from "./Redux/store";
import { Nav } from "./Nav";
import { Routing } from "./Routing";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";

export const Main =()=>{
    return <>
  
    <Provider store={theStore}>
        <BrowserRouter>
        <Nav></Nav>
        <Routing></Routing>
        </BrowserRouter>
        </Provider>
        </>
 
    
  
}