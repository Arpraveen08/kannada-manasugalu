
import Slider from "../../components/Slider";
import About from "../about/About"
function Home() {
  return (
    <div>
      {/* light orange color - #eb5310 */}
      {/* color for nav items  #435061 */}
      <div className="container w-screen h-screen bg-[#ffffff] contrast-125 ">
        <div className="box-border  m-0 p-0"></div>
      

        {/* image slider component*/}
        <div className="hero-section">
          <Slider />
        </div>
        
      </div>
      <div>
    <About/>
      </div>
    </div>
  );
}

export default Home;
