import { Navigate, useNavigate } from "react-router";



export const ChooseFilter = () =>{

    const navigate = useNavigate()

const navigateCityFilter = () =>{
    navigate("/getByCity");
}

const navigateCategoryFilter = () =>{
    navigate("/getByCategory");
}

const navigatePriceFilter = () =>{
    navigate("/getByPrice");
}

const navigateBedsFilter = () =>{
    navigate("/getByBedsL");
}




return<>
<br></br>
<button onClick={navigateCityFilter}>סינון לפי עיר</button>
<br></br><br></br>
<button onClick={navigateCategoryFilter}>סינון לפי קטגוריה</button>
<br></br><br></br>
<button onClick={navigatePriceFilter}>סינון לפי מחיר</button>
<br></br><br></br>
<button onClick={navigateBedsFilter}>סינון לפי מיטות</button>
</>

}