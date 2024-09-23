
import { useLocation } from "react-router-dom";
import CtaBtn from "../../components/CustomButton";
import PageNames from "../../components/PageNames";
import volunteers from "../../data/volunteers.json"
// import { useState,useEffect } from "react";


const Volunteers = () =>{
        

        const location = useLocation() 

        const pathname = location.pathname.split('/').join('/')
        
        const page = pathname;

        const checkpage = (page === '/volunteer')

        // console.log(page)

        console.log(volunteers)

        // let imageData = [ ]
        //  imageData = fetch(volunteers.json)
        // .then(response => response.json())
        // .then(data => {
        //   const length = data.length;
        //   console.log(`Length of the JSON array:  ${length}`);
        // })
        // .catch(error => {
        //   console.error(`Error fetching JSON data:  ${error}`);
        // });


        
        //   const [currentSlide, setCurrentSlide] = useState(0);
        
        
        //   useEffect(() => {
        //     const intervalId = setInterval(() => {
        //       setCurrentSlide((prevSlide) => {
        //         const nextSlide = (prevSlide + 1) %imageData.length;
        //         // If the next slide is 0 (the first image), clone the last image and add it to the end
        //         if (nextSlide === 0) {
        //           const clonedLastImage = { ...imageData[ imageData.length - 1] };
        //            imageData.push(clonedLastImage);
        //         }
        //         return nextSlide;
        //       });
        //     }, 5000);
        
        //     return () => clearInterval(intervalId);
        //   }, []);





        return (
            <div className="container box-border w-full lg:w-10/12 mx-auto h-auto ">
                < div className="wrapper mt-8 "> 
                    {
                        checkpage ? <PageNames/> : ' '
                    }

            {/* volunteer section with optional view all button */}
            {
              !checkpage ?
            <div className="volunteer-viewAll  flex items-center justify-between mt-20  ">

            <div className="volunteer-header text-3xl  text-start  font-serif text-richblack-900 font-bold leading-9  ">
                <h1>Meet Our Volunteers </h1>
                 </div>
            {/* optional view all button */}
              <CtaBtn to='/volunteer' active  > view All </CtaBtn>
                </div> 
                : <div className="flex  items-center justify-center mt-16 ">
                    <h1 className="volunteer-header font-bold leading-10  text-center 
                    text-darkgrey-100 text-4xl  ml-10  uppercase " >
                        Volunteer</h1>
                </div>
               }


            
               {/* volunteers details */}
               {
                !checkpage 
                ? 
             <div className="slider-container  relative w-full flex flex-col  items-center lg:flex-row gap-4 mt-12 h-auto animate-slide  ">
                {
                  volunteers.volunteer.map((item,id)=>(
                <div className="slider-card flex w-[300%] lg:w-2/5 lg:max-w-[265px] h-auto flex-col flex-shrink-0 flex-grow gap-8 text-center mb-4  " key={id}>
                    <img src={item.src} alt='profile-image' className="  h-64" />  
                  
                    <p className="capitalize"> <span>{item.firstname} {item.lastname} </span> </p>
                       </div>
                  ))  
                }
                 </div> 
                 :
                
                //  volunteer full details 

                 <div className="container volunteer-details relative w-full flex flex-col items-center lg:flex-row gap-4 mt-12 h-auto flex-wrap  ">
                {
                  volunteers.volunteers.map((item,id)=>(
                      <div className="volunteer-card slider flex  lg:w-1/5 lg:max-w-xs h-auto  flex-col flex-shrink-0 flex-grow gap-8 text-center mb-4 " key={id}>
                    <img src={item.src} alt='profile-image' className=" volunteer-image h-64  md:h-80 md:max-w-md " />  
                    {/* volunteer name & designation */}
                    <div className=" flex flex-col gap-2"> 
                <p className=" volunteer-name capitalize font-bold text-start "> <span>{item.firstname} {item.lastname} </span> </p>
                    <p className=" volunteer-designation capitalize text-xs font-medium text-main-orange text-start border-b-[1px] border-lightgrey-600 pb-3   "> {item.designation}</p>
                    </div>
                       <p className="volunteer-description text-start text-lightgrey-200 -mt-3 break-words lg:break-words "> {item.desc} </p>
                      <div className=" flex items-start content-start -ml-7  text-lightgrey-500  !important ">
                       <CtaBtn className="text-lightgrey-500 !important " to='/volunteer' > View Profile</CtaBtn>
                      </div>
                       
                       </div>
                  ))  
                }
                 </div> 
                 }




                </div>
            </div>
        )
    }
    

    export default  Volunteers;