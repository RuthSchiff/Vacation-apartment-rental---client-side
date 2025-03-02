import { useState, useEffect  } from "react"
import { getAllCategory } from "../../api"
import { CategoryCard } from "./categoryC"
import { Navigate, useNavigate } from "react-router-dom"
import "../style/Form.css"

export const ShowCategory = () => {
    const [list, setList] = useState([]);
  
     useEffect(() => {
            getAllCategory()
                .then(x => {
                    console.log(x.data);
                    setList(x.data)
                })
        },  [])
    
        const navigate = useNavigate();

        const navigateCities = () =>{
              navigate("/allCity");
        }

    return <>
        <h1 className="header">כל הקטגוריות</h1>
      
       {list.map(x => <CategoryCard key={x.id} category={x} />)}
       <button className="submit-button"  onClick={navigateCities}> מקומות החופשים</button>

    </>
}
