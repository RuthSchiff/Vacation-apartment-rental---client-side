import {Route , Routes} from "react-router";
import {LogIn} from "./enter/logInAdvertiser";
import {Register} from "./enter/registerAdvertiser";
import {Allapartmens} from "./apartment/allApartments";
import {ShowCategory} from "./category/allCategory";
import {AllCityies} from "./city/allCity";
import {ChooseFilter} from "../componnents/apartment/choose_filter";
import {FilteredApartments} from "../componnents/apartment/getApartments_filter";
import {CreateApartment} from "../componnents/apartment/addApartment";
import {Edit} from "../componnents/apartment/updateApartment";
import {CreateCity} from "../componnents/city/addCity";
import {CreateCategory} from "../componnents/category/addCategory";

export const Routing = () => {
    return (
        
        <>

        <Routes>

            <Route path="logInAdvertiser" element = {<LogIn></LogIn>} ></Route>
            <Route path="registerAdvertiser" element = {<Register></Register>}></Route>
            <Route path="allApartments" element = {<Allapartmens></Allapartmens>}></Route>
            <Route path="allCategory" element = {<ShowCategory></ShowCategory>}></Route>
            <Route path="allCity" element = {<AllCityies></AllCityies>}></Route>
            <Route path="choose_filter" element = {<ChooseFilter></ChooseFilter>}></Route>
            <Route path="getApartments_filter" element = {<FilteredApartments></FilteredApartments>}></Route>
            <Route path="addApartment" element={<CreateApartment></CreateApartment>}></Route>
            <Route path="addCity" element={<CreateCity></CreateCity>}></Route>
            <Route path="addCategory" element={<CreateCategory></CreateCategory>}></Route>
            <Route path="Edit" element={<Edit></Edit>}></Route>
        </Routes>
        </>
    )
}