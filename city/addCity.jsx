import { addCity } from '../../api';
import '../style/Form.css'

export const CreateCity = () =>{


const CreateCityFunction = (e) => {
    e.preventDefault();
debugger
    const newCity = {
        cityName : e.target[0].value,
        aprtmentsArr: [],
    }
    addCity(newCity)
    .then(success => {alert(`create ${newCity.cityName} added`)})
    .catch(error=>{alert(error)
    console.log(error);})
}

return <>
<form onSubmit={(e) => CreateCityFunction(e)}>
<h1 className='header'>הוספת עיר</h1>
         <label className='lable'>יש להכניס שם עיר</label>
        <br />
             <input className='input-field' id="cityName" type="text" placeholder="עיר"></input>
        <br />
        <input className='submit-button' type="submit" value={"הוסף"}></input>    
</form>
</>
}