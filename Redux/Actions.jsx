export const setCurrentAdvertiser = (advertiser) =>{
    return { type : 'SET_CURRENT_ADVERTISER',payload: advertiser}
}
export const setToken  = (t) => {
    return {type: 'SET_TOKEN' , payload: t}
} 
export const setApartments = (apartments) => {
    return {type: 'SET_APARTMENTS' , payload : apartments}
}
export const setCity= (cities) =>{
    return{type : 'SET_CITIES' , payload : cities}
}
export const setCategory= (categories) =>{
    return{type : 'SET_CATEGORIES' , payload : categories}
}
export const addApartment= (apartment) =>{
    return{type : 'ADD_APARTMENT' , payload : apartment}
}