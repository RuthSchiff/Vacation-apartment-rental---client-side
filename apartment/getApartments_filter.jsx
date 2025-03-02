import { useEffect, useState } from "react";
import { getApartmentByCategory, getApartments, getByBgbeds, getApartmentByCity, getApartmentById, getCityies, getByPrice, getAllCategory } from '../../api';
import { ApartmentCard } from "./apartmentCard";
import "../style/Form.css"
import { useDispatch, useSelector } from "react-redux";
import { setApartments, setCategory, setCity } from "../Redux/Actions";

export const FilteredApartments = () => {
    //שליפת הדירות
    const apartmentsL = useSelector(s => s.apartments);
    //שליפת הערים
    const cityL = useSelector(s => s.cities);
    //שליפת הקטגוריות
    const categoryL = useSelector(s => s.categories);
    //הגדרת רשימה חדשה
    const [list, setList] = useState([]);
    //הגדרה משתנה של סוג
    const [type, setType] = useState("");
    // הגדרה משתנה של סוג נוסף
    const [type1, setType1] = useState("");
    //הגדרה משתנה של סוג נוסף
    const [type2, setType2] = useState("");
    //הגדרת משתנה סינון
    const [filterType, setFilterType] = useState('');
    // הגדרת משתנה מחיר
    const [price, setPrice] = useState('');
    //הגדרת משתנה קטגוריה
    const [selectedCategory, setSelectedCategory] = useState('');
    // הגדרת משתנה מיטה
    const [beds, setBeds] = useState('');
    //הגדרת dispatch
    const dispatch = useDispatch();

  
    //עידכון מערך הדירות ב state ועידכון הרשימה 
    useEffect(() => {
        getApartments()
            .then(x => {
                dispatch(setApartments(x.data));
                setList(x.data);
            })
            .catch(err => {
                console.log(err);
            });
        //עידכון מערך הערים ב state
        getCityies()
            .then(x => {
                dispatch(setCity(x.data));
            })
            .catch(err => {
                console.log(err);
            });
        //עידכון מערך הקטגוריות ב state
        getAllCategory()
            .then(x => {
                dispatch(setCategory(x.data));
                console.log(setCategory);

            })
            .catch(err => {
                console.log(err);
            });

    }, [dispatch]);


    //סינון לפי id - ה id שישלח
    const getById = (e) => {
        e.preventDefault();
        getApartmentById(e.target.value)
            .then(x => {
                console.log("Response from API:", x);
                setList([x.data]);
            })
            .catch(err => {
                console.log("Error:", err);
            });
    };
    //סינון לפי עיר
    const getByCity = (e) => {
        e.preventDefault();
        const cityId = e.target.value;

        // שולח את הבקשה עם cityId
        getApartmentByCity(cityId)
            .then(x => {
                console.log(x.data);
                if (Array.isArray(x.data)) {
                    setList(x.data);
                    // setApartments(x.data)

                } else {
                    setList([]);
                }
            })
            .catch(err => {
                console.log('Error:', err);
                setList([]);
            });
    };


    //סינון לפי קטגוריה
    const getByCategory = (e) => {
        e.preventDefault();
        const categoryId = e.target.value;

        getApartmentByCategory(categoryId)
            .then(x => {
                console.log(x.data);
                if (Array.isArray(x.data)) {
                    setList(x.data);
                } else {
                    setList([]);
                }
            })
            .catch(err => {
                console.log('Error:', err);
                setList([]);
            });
    };



    //סינון לפי כמות מיטות
    const getByBeds = () => {
     
        getByBgbeds(beds)
            .then(response => {
                setList(response.data);
                // setApartments(response.data);
            })
            .catch(err => {
                console.error("Error fetching apartments by beds:", err);
            });
    };
    //סינון לפי מחיר
    const getApartmentByPrice = () => {

        getByPrice(price)
            .then(x => {
                //
                setList(x.data)
                // setApartments(x.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <h1 className="header">:שליפת דירה על פי בקשת הלקוח</h1>

            <select className="input-field" onChange={e => setType(e.target.value)}>
                <option className="input-field" selected>select all</option>
                <option className="input-field">select by id</option>
                <option className="input-field">select by city</option>
                <option className="input-field">select by beds</option>
                <option className="input-field">select by price</option>
                <option className="input-field">select by category</option>
            </select>
            {/* אם המשתמש בחר את select-all הוא יראה את כל הדירות */}
            {type == "select all" && setList(apartmentsL)}
            {type == "select all" && setType("")}
            {/* אם נהחר האפשרות של סינון לפי id */}
            {type == "select by id" &&
                // מה שהמשתשמ יבחר עליו יהיה את הסינון לפי id 
                <select className="input-field" onChange={(e) => getById(e)}>
                    <option className="input-field" selected>בחר את הקוד הרצוי מתוך הרשימה</option>
                    {apartmentsL && apartmentsL.map((l) => (
                        <option key={l._id}>{l._id}</option>
                    ))}
                </select>}

            {type === "select by beds" && (
            <div>
                
                    
                    <input
                        type="number"
                        placeholder="הכנס עד איזה כמות מיטות"
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)} />
                        <button onClick={getByBeds}> סנן</button>
                    
                      </div>  
            )}  

            {type === "select by city" && (
                <select className="input-field" onChange={(e) => getByCity(e)}>
                    <option className="input-field">בחר עיר</option>
                    {Array.isArray(cityL) && cityL.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.cityName} ({Array.isArray(c.apartments) ? c.apartments.length : 0})
                        </option>
                    ))}
                </select>
            )}


            {type === "select by category" && (
                <select className="input-field"
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        getByCategory(e);
                    }}
                >
                    <option className="input-field" value="">בחר קטגוריה</option>
                    {Array.isArray(categoryL) && categoryL.map((c) => (
                        <option className="input-field" key={c._id} value={c._id}>
                            {c.nameC} ({Array.isArray(c.apartments) ? c.apartments.length : 0})
                        </option>
                    ))}
                </select>
            )}


            {type === "select by price" && (
                <div>

                    <input type="number" placeholder="הכנס מחיר" value={price} onChange={(e) => setPrice(e.target.value)} ></input>

                    <button onClick={getApartmentByPrice}>סנן</button>
                </div>
            )}
            <div className="cards-grid">
                {list.map((x, index) => (
                    <ApartmentCard
                        key={x._id}
                        apartment={x}
                        setList={setList}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};