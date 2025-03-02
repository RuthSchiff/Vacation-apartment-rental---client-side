import "../style/Form.css"
export const CityCard = ({ city }) => {
    return <>
    <p className='input-field' >  🏙️ שם עיר: {city.cityName} </p>
    </>
}