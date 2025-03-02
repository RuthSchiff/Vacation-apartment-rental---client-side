import { useEffect, useState } from 'react'
import '../componnents/api.css'
// import { getAll } from '../api'
// import { useSelector } from 'react-redux'
// import { apartmentCars} from './apartmentCars'
// import { Details } from './Details'
// import { geApartments } from './api'
import { getApartments } from '../api'
import { ApartmentCars } from './apartmentCard'

export const Home = () => {

    // הגדרת מערך ששולף את כל המאמרים מהסטור - useSelector
    // const list = useSelector(x => x.article.list)
    const [list, setList] = useState([])
    // const [select, setSelect] = useState()

    // הקומפוניטה תבצע קריאת שרת לשליפת כל המאמרים
    // תשמור ברידקס
    // שליפה מהרידקס - useSelector
    // השליפה תתבצע - בעת טעינת הקומפוננטה 
    useEffect(() => {
        getApartments()
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                setList(x.data)
            })
        // .catch(err => {
        //     console.log(err);
        //     if(status == 404){

        //     }
        // })
    }, [])

  

    return <>
        <div className="cards">
        {list.map(x => <ApartmentCars key={x.id} apartment={x} />)}
           
        </div>
        {/* {select && <Details id={select}></Details>} */}
    </>
}

// export const D =(props)=>{
// const {price} = props
// return 
// <div>
//     <h1>price:{price}</h1>
// </div>
// }