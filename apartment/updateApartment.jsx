import React, { useEffect, useState } from 'react';
import { getApartments, patchApartment, getAllCategory } from '../../api';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import "../style/Form.css"

export const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state || {};

    // בדוק אם item קיים לפני הקריאות ל-Hooks
    const [apa, setApa] = useState({
        name: '',
        description: '',
        // codeCategoty: '',
        beds: 0,
        adds: '',
        price: 0
    });

    
    const [categorys, setCategorys] = useState([]);
    const [listA, setListA] = useState([]);

    // ודא ש-item קיים לפני שמעדכנים את ה-state
    useEffect(() => {
        if (item) {
            setApa({
                name: item.name || '',
                description: item.description || '',
                codeCategory: item.codeCategory?.name || '',
                beds: item.beds || 0,
                adds: item.adds || '',
                price: item.price || 0
            });
        }
    }, [item]);

//שליפת קטגוריות
    useEffect(() => {
        getAllCategory().then(x => {
            setCategorys(x.data);
            // console.log(categorys +"categories");
            
        });
    }, []);
//שליפת דירות
    useEffect(() => {
        getApartments().then(x => {
            setListA(x.data);
        });
    }, []);

 
//פונקציה הפועלת לשעידכון ערך
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
//בעת לחיצה על כפתור העידכון
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(apa);
        //אם הדירה אכן קיימת - הצלחה
        try {
            // const response =
            // debugger
            
            await patchApartment(item._id, apa);
            swal(`:הודעת מערכת`, 'הדירה עודכנה במאגר', 'success');
            navigate(-1);
        } catch (error) {
            console.error('Error adding PP:', error.response ? error.response.data : error.message);
        }
    };

    if (!item) {
        return <div>הדירה לא נמצאה.</div>;
    }

    return (
        <div>
            <h2>Edit Apartment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <br></br>
                    <label className='label'>Name:</label>
                    <br></br>
                    <input className='input-field'
                        type="text"
                        name="name"
                        value={apa.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <br></br>
             
                </div>
                <div>
                    <br></br>
                    <label className='label'>Description:</label>
                    <br></br>
                    <textarea className='input-field'
                        name="description"
                        value={apa.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <br></br>
                    <label className='label'>adds:</label>
                    <br></br>
                    <textarea className='input-field'
                        name="adds"
                        value={apa.adds}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <br></br>
                    <label className='label' >Number of Beds:</label>
                    <br></br>
                    <input className='input-field'
                        type="number"
                        name="beds"
                        value={apa.beds}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <br></br>
                    <label className='label'>Price:</label>
                    <br></br>
                    <input className='input-field'
                        type="number"
                        name="price"
                        value={apa.price}
                        onChange={handleChange}
                    />
                </div>
                <button className='submit-button' type="submit">לעדכן</button>
                <br></br><br></br>
            </form>
        </div>
    );
};

export default Edit;
