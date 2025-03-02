import React, { useEffect, useState } from 'react';
import { postApartment } from '../../api';
import { getCityies } from '../../api';
import { getAllCategory } from '../../api';
import { getAdvertiser } from '../../api';
import '../style/Form.css';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const CreateApartment  = () => {
    const navigate = useNavigate()


    const [apa, setApa] = useState({
        name: "",
        address: "",
        cityCode: "",
        codeCategoty: "",
        description: "",
        adds: "",
        beds: "",
        price: "",
        advertiserCode:"",

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //currentUser
    const currentUsere = useSelector(store => store.currentAdvertiser)
    //end currentUser

    // start city
    const [citi, setCiti] = useState([]);

    useEffect(() => {
     getCityies()
            .then(x => {
                setCiti(x.data);
            });
    }, []);

    const cities = [];
    citi.forEach(item => {
        if (item.cityName !== null)
            cities.push(item.cityName)
    })
 
    const [categorys, setCategorys] = useState([]);

    const category = [];
    useEffect(() => {
        getAllCategory()
            .then(x => {
               console.log(x.data);
               
                setCategorys(x.data);
            });
    }, []);

    categorys.forEach(item => {
     
        if (item.nameC !== null)
            category.push(item.nameC)
    })

    const [Alist, setAlist] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        getAdvertiser()
            .then(x => {
                setAlist(x.data);
            });
    }, []);

    
    useEffect(() => {
     console.log(currentUsere);
     
        if (currentUsere !== undefined) {
            setApa(prevState => ({
                ...prevState,
                advertiserCode: currentUsere._id
                
            }));
            const advertisers = [];
            for (let i = 0; i < Alist.length; i++) {
                if (currentUsere.email === Alist[i].email) {
                    advertisers.push(Alist[i]);
                    setList(Alist[i].apartArray);
                }
            }
            console.log(list);
        }
    }, [Alist, currentUsere]);



    const handleSubmit = async (event) => {
        event.preventDefault();
          console.log(apa);

            try {
               
                const response = await postApartment(apa);
                console.log('added:', response.data);
                console.log("Apartment data submitted:", apa);
                swal(`:הודעת מערכת`, 'הדירה הוספה למאגר', 'success');

            }
            catch (error) {
                console.error('Error adding PP:', error.response ? error.response.data : error.message);
            }
    };

    return (
        <div>
            <h2 className='header'>Add Apartment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label'>: שם</label>
                    <br></br>
                    <input className='input-field'
                        type="text"
                        name="name"
                        value={apa.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label'>: כתובת</label>
                    <br></br>
                    <input className='input-field'
                        type="text"
                        name="address"
                        value={apa.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label'>: עיר</label>
                    <br></br>
                    <select className='input-field'
                        name="cityCode"
                        value={apa.cityCode}
                        onChange={handleChange}
                    >
                        <option value="">בחר עיר</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label'>: קטגוריה</label>
                    <br></br>
                    <select className='input-field'
                        name="codeCategoty"
                        value={apa.codeCategoty}
                        onChange={handleChange}
                    >
                        <option value="">בחר קטגוריה</option>
                        {category.map(categories => (
                            <option key={categories} value={categories}>{categories}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label'>: תיאור</label>
                    <br></br>
                    <textarea className='input-field'
                        name="description"
                        value={apa.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label'>: תוספות</label>
                    <br></br>
                    <textarea className='input-field'
                        name="adds"
                        value={apa.adds}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label'>: מיטות</label>
                    <br></br>
                    <input className='input-field'
                        type="number"
                        name="beds"
                        value={apa.beds}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='label'>: מחיר</label>
                    <br></br>
                    <input className='input-field'
                        type="number"
                        name="price"
                        value={apa.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='submit-button'>Add- Apartment</button>
                
            </form>
        </div>
    );
};
export default CreateApartment ;





    
    











