import swal from "sweetalert";
import React from "react";
import '../style/apartmentsCard.css';
import {deleteApartment} from "../../api"
import { useNavigate } from "react-router-dom";
import axios from "axios";

//יצירת כרטיס דירה
    export const ApartmentCard = ({ apartment, setList, index }) => {
//הבאת יבוא
    const navigate = useNavigate();
//פונקצית מחיקה שתיהיה בלחיצה על המחיקה
    const Ndelete = async () => {
        
        try {
           //צורת סינכרונית 
           //מציאת ה  id של הדירה -  אם קיימת
           //שליחה לפונקציה של המחיקה ב nodeJs את ה apartment id למחיקה
            const response = await deleteApartment(apartment._id);
            if(response)
            swal(`:הודעת מערכת`, 'הדירה נמחקה מן המאגר', 'success');
        //הגדרת הרשימה - בלי ה id הנבחר
        setList(prevList => prevList.filter(a => a._id !== apartment._id));
           
        }
        //
        catch (error) {
            console.error('Error adding PP:', error.response ? error.response.data : error.message);
            swal(`שגיאה`, 'הייתה בעיה במחיקת הדירה', 'error');
        }
    };

//ניתוב לעידכון
    const Nupdate = (item) => {
        navigate('/Edit', { state: { item } });
    };

    

// 🌤️ פונקציה לקבלת תחזית מזג אוויר
const getWeatherForecast = async () => {
    //המפתח
    const apiKey = '9264170bd4ac0d43a4c61c63fcb7ec4b';
    // מקודד את שם העיר ל-URL
    const city = encodeURIComponent(apartment.cityCode.cityName); 
    //קריאת שרת למזג אוויר אם העיר של הדירה שנשלחה
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`
           
            
        );
        
        //data - מכיל את המידע שחזר מהקרית שרת
        const data = response.data;
        //תיאור מזג האוויר
        const description = data.weather[0].description;
        //טמפרטורה
        const temperature = data.main.temp;
        //alert - results
        swal(`תחזית מזג אוויר ב-${apartment.cityCode.cityName}`, 
             `🌡️ טמפרטורה: ${temperature}°C\n☁️ תיאור: ${description}`, 'info');
    } 
    //error 
    catch (error) {
        console.error('Error fetching weather data:', error.response?.data || error.message);
        swal('שגיאה', 'לא ניתן לקבל את תחזית מזג האוויר כעת. בדוק את המפתח או נסה שוב מאוחר יותר.', 'error');
    }
};
const imageNumber = (index % 11) + 1; // כדי להבטיח שהתמונות חוזרות על עצמן אם יש יותר מ-11
    const imagePath = `/pic/p${imageNumber}.jpg`;



    return (
        <div className="card" >
            
            
            <img src={imagePath} alt={`תמונה של דירה ${apartment.name}`} className="apartment-image" />
            <span>{apartment.description}</span>
            <br/>
            <span>עיר:{apartment.cityCode.cityName}</span>
            <br></br>
            <span>בנוסף: {apartment.adds}</span>
            <br/>
            <span>כמות מיטות: {apartment.beds}</span>
            <br/>
            <span>מחיר: {apartment.price}</span>
            <br></br>
            {/* a btn to get getWeatherForecast */}
            <button className="button"   onClick={getWeatherForecast}>לקבלת תחזית מזג אוויר 🌦️</button>
            <br/>
            {/* a btn to navigate to edit apartment */}
           <button className="button" onClick={() => Nupdate(apartment)}>לעדכון פרטים✅</button>
           <br></br>
           {/* a btn to del - Ndelete */}
            <button  className="button" onClick={Ndelete}>למחיקה❎</button>
        </div>
   );
}