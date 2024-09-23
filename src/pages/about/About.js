
import PageNames from "../../components/PageNames"
import Mission from "./components/Mission"
import Volunteers from "../volunteers/Volunteers"

function About(){

    return(

        <div className=" container w-full h-full  ">
         <div className="wrapper w-full lg:w-10/12 h-auto  mx-auto pt-8  ">

        <PageNames/>
             
       
         <div className="intro  flex flex-col  items-center justify-center mt-20 gap-7 ">
            <h1 style={{textTransform:"capitalize"}}  className="intro-heading font-semibold leading-10 
          text-darkgrey-100 text-center  text-4xl lg:text-5xl  ml-10  -tracking-wide  ">
               <span >about </span>  kannada manasugalu  </h1>

               <p className=" text-left  pl-4 pr-3 font-medium lg:w-7/12 break-words lg:break-words text-base text-darkgrey-200 contrast-125 
               mb-4 "> 
               {/* In 2017, A group of passionate Kannada speakers from various parts of Karnataka came 
                together in Bengaluru with a central focus on Kannada and Karnataka.  */}
                "೨೦೧೭"ರಲ್ಲಿ, ಕರ್ನಾಟಕದ ವಿವಿಧ ಭಾಗಗಳಿಂದ ಬಂದ ಕನ್ನಡ ಭಾಷೆಯ ಉತ್ಸಾಹಿಗಳ ಗುಂಪೊಂದು ಬೆಂಗಳೂರುದಲ್ಲಿ ಕನ್ನಡ ಮತ್ತು ಕರ್ನಾಟಕದ ಮೇಲೆ ಕೇಂದ್ರಿತವಾಗಿರುವ ಉದ್ದೇಶದಿಂದ ಸೇರಿತು.
                </p>
                <p className="text-left  pl-4 pr-3 font-medium lg:w-7/12 break-words lg:break-words text-base text-darkgrey-200 contrast-125 mb-8 "> 
                They aimed to promote Kannada through various activities, These enthusiastic individuals, united by their love 
                for Kannada, formed a group named "Kannada Manasugalu" (Kannada Minds). 
                 <br/> They created a buzz by parading a long Kannada flag through the heart 
                 of Bengaluru.
                </p>
         </div>
        
         {/* MISSION  */}
         <div classname="w-full "> 
        <Mission/>
         </div>
        

        {/* volunteers */}
        <div className="w-full"> 
        <Volunteers/>
            </div> 
       
        


         </div>

        </div>
    )
}

export default About