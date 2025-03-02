import { useDispatch } from "react-redux";
import { setCurrentAdvertiser , setToken } from "../Redux/Actions";
import  { register} from '../../api';
import '../style/Form.css'

export const Register = () =>{

    const dispatch = useDispatch()
     
    const RegisterFunction = (e) => {
    
        e.preventDefault();

        const advertiser = {
            email: e.target[0].value,
            password: e.target[1].value,
            phone: e.target[2].value,
            anotherPhone: e.target[3].value,
            aprtmentsArr: [],
        }
        register(advertiser)
        .then(x=>{
            dispatch(setCurrentAdvertiser(x.data.advertiser))
            dispatch(setToken(x.data.token))
            alert("register sucssess!!!!! 😉😉😉😉😉😉")
        })
        .catch(x=>alert(x))
    }
    return <>
        <h1 className="header">הרשמה</h1>
        <form onSubmit={(e) => RegisterFunction(e)}>
            <label className="label">:יש להכניס כתובת מייל</label>
            <br />
            <br></br>
            <input className="input-field" id="email" type="email" placeholder="מייל" ></input>
            <br />
            <label className="label">:יש להכניס סיסמא</label>
            <br />
            <br></br>
            <input className="input-field" id="password" type="text" placeholder="סיסמא" ></input>
            <br />
            <br></br>
            <label className="label"> :יש להכניס טלפון</label>
            <br />
            <br></br>
            <input className="input-field" id="phone" type="password" placeholder="טלפון" ></input>
            <br /> 
            <br></br>
            <label className="label"> : יש להכניס טלפון נוסף -  אם יש</label>
            <br />
            <br></br>
            <input className="input-field" id="phone" type="text" placeholder="טלפון נוסף" ></input>
            <br />
            <br></br>
           
            <input className="submit-button" type="submit" value="שליחה"></input>
        </form>
    </>
}