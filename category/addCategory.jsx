import { addCategory } from '../../api';
import "../style/Form.css"

export const CreateCategory = () =>{



const CreateCategoryFunction = (e) => {
    e.preventDefault();

    const category = {
        nameC : e.target[0].value,
        aprtmentsArr: [],
    }
    addCategory(category)
   
    .then(success => {alert(`category ${category.nameC} added`)})
    .catch(error=>{alert(error)
    console.log(error);})
}

return <>
<form onSubmit={(e) =>CreateCategoryFunction(e)}>
<h1 className='header'>הוספת קטגוריה</h1>
         <label className='label'>יש להכניס שם קטגוריה</label>
        <br /><br></br>
             <input className='input-field' id="nameC" type="text" placeholder="קטגוריה"></input>
        <br />
        <input  className='submit-button' type="submit" value={"הוסף"}></input>    
</form>
</>
}