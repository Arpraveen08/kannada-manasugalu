
import UpcomingEvents from "./components/UpcomingEvents";
import PageNames from "../../components/PageNames";

const Events =() =>{

    return(
        <div className=" w-full h-screen ">
            <div className="w-10/12 mx-auto mt-4 flex flex-col gap-8">
            <PageNames/>
        <UpcomingEvents/>
            </div>

            
        </div>
    )
}

export default Events;