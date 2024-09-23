import Slider from "./components/Slider";
import UpcomingEvents from "../events/components/UpcomingEvents";
import Mission from "../about/components/Mission";
import Volunteers from "../volunteers/Volunteers"


function Home() {
  return (
    <div className="container   bg-[#ffffff] contrast-125 ">

      {/* light orange color - #eb5310 */}
      {/* color for nav items  #435061 */}

        {/* <div className="box-border  m-0 p-0"></div> */}
        <div className="wrapper  lg:w-10/12   mx-auto pt-8  ">

        {/* image slider component*/}
        <div className="hero-section">
          <Slider />
        </div>

    <div className="flex flex-col gap-10 w-full "> 
    
      <div className="w-full p-4 ">
    <UpcomingEvents/>
      </div>
      
      <div className="w-full p-4 ">
    <Mission/>
      </div>
      
      <div className="w-full p-4  ">
    <Volunteers/>
      </div>
    </div>


    </div>
      </div>

   
  );
}

export default Home;
