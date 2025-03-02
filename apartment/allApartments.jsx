import { useEffect, useState } from 'react'
import '../style/allApartments.css'
import { getApartments } from '../../api'
import { ApartmentCard } from './apartmentCard'

//קומפוננטה ליבוא כל הדירות
export const Allapartmens = () => {

  //יצירת משתנה לדף - list 
    const [list, setList] = useState([])
    // on init the list will have all the date from the nodeJs couse use getApartments()
    useEffect(() => {
        getApartments()
            .then(x => {
                //שם ב list את הרשימה החוזרת מהשרת
                setList(x.data)
            })
    }, [])

    return <>
      
         <div className="cards-grid">
            {list.map((apartment, index) => (
                <ApartmentCard
                    key={apartment._id} 
                    apartment={apartment} 
                    setList={setList} 
                    index={index} 
                />
            ))}
        </div>
    </>
}
