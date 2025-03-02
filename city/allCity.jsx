import { useState, useEffect } from "react"
import { getCityies } from "../../api"
import { CityCard } from "./cityCard"
import "../style/Form.css"

export const AllCityies = () => {
    const [list, setList] = useState([]);
  
     useEffect(() => {
        getCityies()
                .then(x => {
                    console.log(x.data);
                    setList(x.data)
                })
        }, [])

    return <>
        <h1 className="header">כל הערים</h1>
      
       {list.map(x => <CityCard key={x.id} city={x} />)}

    </>
}
