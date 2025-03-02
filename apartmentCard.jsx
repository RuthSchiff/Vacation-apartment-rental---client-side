import React from "react";
// import { getApartments } from "../api";

// import { Apartment } from "@mui/icons-material";

export const ApartmentCars = ({apartment}) => {

    return (
        <div className="card" >
            <p>{apartment.description}</p>

            <p>כתובת: {apartment.address}</p>
            <p>בנוסף: {apartment.adds}</p>
            <p>כמות מיטות: {apartment.beds}</p>
            <p>מחיר: {apartment.price}</p>
        </div>
   );
}