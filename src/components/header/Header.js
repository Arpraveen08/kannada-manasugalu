import TopBar from "./Top-Bar";
import logo from '../../assets/images/KMLogo2.png'
import { IoIosCall } from "react-icons/io";
import CtaBtn from '../CustomButton'
import { GoMail } from "react-icons/go";
import Navbar from "../Navbar";


function Header(){

    return(
        
        <div className="  box-border  text-[#9C9C9C]  font-sans  w-screen  "> 
        {/* top bar compo with email & icons  */}
    <div className=" w-full relative sm:w-10/12 mx-auto    ">


        <TopBar />
    
        {/* header */}
        <div className="contact-section  flex flex-col  lg:flex-row   items-center justify-between p-8 "> 


        {/* logo */}
        <div className="logo w-48 h-auto" >
            <img  src={logo} alt='logo' className="Ngo-Logo" />
        </div>
        

        {/* contact-details */}
        <div className="contact-details gap-5 flex items-center justify-center 
          ">
        
        {/* E-mail */}
        <div className="email-container flex flex-col lg:flex-row items-center 
         justify-center w-2/5 lg:w-auto  ">
        <div className=" email-icon  text-[#91a1b4] text-3xl uppercase  ">
          <i className="inline-block font-medium leading-7 mt-2  "> 
            < GoMail /> </i>           
            </div>
            
        <div className=" email  flex flex-col  box-border lg:ml-32 sm:ml-0  text-[#9C9C9C]  ">
                <span className=" -mb-3 font-semibold uppercase text-black ">Email </span>
              <p className="  text-[#B6B6B6] block font-sans text-sm leading-[48px]    ">
                kannadamanasugalu@gmail.com
              </p>
            </div>
        </div>

         {/* {ngo ph-No} */}
         <div className="contact-us flex w-2/5 lg:w-auto flex-col lg:flex-row items-center justify-center
          ">
            <span className=" contactUs-Icon  box-border text-[#91a1b4] text-3xl leading-10 pr-3 
            uppercase  ">

          <i className="inline-block font-medium leading-7 origin-top-left rotate-[20deg]  -mr-4  "> 
            <IoIosCall/> </i>           
            </span>
              
            <div className="contact-info   "> 
                 <h6 className=" uppercase text-[#91a1b4] block text-xs leading-3 ml-1 "> 
                        call  now 
                            </h6>
                <h4 className="box-border text-[#435061] uppercase  text-[18px] font-semibold leading-6 " > 
                    (+91)9035947803
                         </h4>
                 </div>
         </div>


        </div>
         <div>
            <CtaBtn active to={"/volunteer"} >
            Donate Now
                </CtaBtn>
        </div>

        </div>

      {/* Navbar */}
      <div className="w-full">
      <Navbar/>
      </div>
        
    </div>
        </div>
        
    )
        
}

export default Header;