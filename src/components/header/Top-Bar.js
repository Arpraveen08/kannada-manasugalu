
import { FaFacebookF,FaTwitter, FaInstagram } from "react-icons/fa";

function TopBar(){

    return (
      <div className=" container border-box ">
        <section className=' relative  '>
          <div className="wrapper flex flex-wrap items-center  justify-center  sm:items-center sm:justify-between
           text-sm  pl-4 pr-4  after:border-b after:w-screen after:border-lightgrey-400  ">

          {/* support us */}
          <div className=" support-email flex-shrink-0  sm:border-l border-lightgrey-400 " >
            <p className=" text-lightgrey-400 text-sm 
             font-sans leading-[48px]" >
              <span className=" text-dark-grey font-sans "> Support Us : </span>
              kannadamanasugalu@gmail.com
            </p>
          </div>


          {/* social-icons */}
          <div className="icons ">
            <ul className="  flex list-none list-outside   ">
              <li className=" ">
                
                <a className=" bg-transparent inline-block border-l border-l-lightgrey-400 border-r
                 border-r-lightgrey-400 border-t border-t-lightgrey-400 sm:border-t-0 text-lightgrey-400 leading-[48px]  
                 pl-3  pr-3 text-center no-underline decoration-auto decoration-solid cursor-pointer transition-all duration-300 
                 ease-in  hover:bg-main-orange hover:text-neutral-white " 
                  href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i className=" inline-block text-sm font-normal list-none list-outside 
                list-image-none hover:invert" >
                  <FaFacebookF/> </i>
                </a>
                 </li>

                 <li className=" ">
                <a className=" inline-block bg-transparent border-l border-l-lightgrey-400 border-r
                 border-r-lightgrey-400 border-t border-t-lightgrey-400 sm:border-t-0 text-lightgrey-400 leading-[48px]  pl-3 pr-3 text-center no-underline 
                  decoration-auto decoration-solid cursor-pointer transition-all duration-300 ease-in 
                  hover:bg-main-orange hover:text-neutral-white " 
                  href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i className=" inline-block text-sm font-normal list-none list-outside 
                list-image-none hover:invert" >
                  <FaTwitter/> </i>
                </a>
                 </li>

                 <li className=" ">
                <a className=" bg-transparent inline-block border-l border-l-lightgrey-400 border-r
                 border-r-lightgrey-400 border-t border-t-lightgrey-400 sm:border-t-0 text-lightgrey-400 leading-[48px] pl-3 pr-3 text-center no-underline 
                  decoration-auto decoration-solid cursor-pointer transition-all duration-300 ease-in 
                  hover:bg-main-orange hover:text-neutral-white " 
                  href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i className=" inline-block text-sm font-normal list-none list-outside 
                list-image-none hover:invert" >
                  <FaInstagram/> </i>
                </a>
                 </li>

                 <li className=" ">
                <a className=" bg-transparent inline-block border-l border-l-lightgrey-400 border-r
                 border-r-lightgrey-400 border-t border-t-lightgrey-400 sm:border-t-0 text-lightgrey-400 leading-[48px]  pl-3 pr-3 text-center no-underline 
                  decoration-auto decoration-solid cursor-pointer transition-all duration-300 ease-in 
                 hover:bg-main-orange hover:text-neutral-white " 
                  href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i className=" inline-block text-sm font-normal list-none list-outside 
                list-image-none hover:invert" >
                  <FaFacebookF/> </i>
                </a>
                 </li>

            </ul>

          </div>

        </div>
        </section>

      </div>
    );
  }
    
  export default TopBar;
  
  


  
  

