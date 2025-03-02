// import React from "react";
import { useDispatch } from "react-redux";
import {logIn} from '../../api'
import { setCurrentAdvertiser, setToken } from "../Redux/Actions";
import '../style/Form.css'


export const LogIn = () => {  
    //שימוש ב dispatch לשיגור
    const dispatch = useDispatch()
    //יצירת הפונקציה של הכניסה
    const logInFunction = (e) => {
        //עיכוב
        e.preventDefault();
        //אוביקא advertiser
        const advertiser = {
            //מה שהכניסו במקום הראשון - למייל
            email: e.target[0].value,
            password: e.target[1].value
        }
            logIn(advertiser)
            .then(x => {
                //עידכון CurrentAdvertiser
                dispatch(setCurrentAdvertiser(x.data.advertiser))
                dispatch(setToken(x.data.token))
                alert("success 😉")
            })
            .catch(x => alert(x))
    }
    
    return <>
        <h1 className="header">התחברות</h1>
        <form className="register-form" onSubmit={(e) => logInFunction(e)}>
            <label className="label">:יש להכניס כתובת מייל</label>
            <br />
            <br></br>
            <input className="input-field" id="email" type="email" placeholder="email" ></input>
            <br />
            <br></br>
            <label className="label" >:יש להכניס סיסמא</label>
            <br /> <br></br>
            <input className="input-field" id="password" type="text" placeholder="password" ></input>
            <br />
            <br></br>
            <input className="submit-button" type="submit" value="send"></input>
        </form>
    </>
}
