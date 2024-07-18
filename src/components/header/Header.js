
import { FaFacebookF } from "react-icons/fa";

function Header(){

    return(
        
    <div className=" container w-screen   ">   
    <div className=" wrapper h-8  w-11/12 flex items-center  justify-between  ">  
              {/* email  */}
        <div className=" ml-20  ">
            <p className="text-[#b6b6b6]  "> 
                 <span className="text-[#383838]">Support Us: </span>  
                        kannadamanasugalu@gmail.com </p>
        </div>

{/*  tailwind docs ->    reusing styles page  */}
        {/* icons */}
        <div className="icons "> 
            <ul className=" social-icons flex flex-row  gap-6   cursor-pointer  items-center justify-center">

                 <li className="  text-[#A4A4A4]  border-x-[1px] border-[#b6b6b6] " >
                <a  href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i ><FaFacebookF /></i>
                    </a>
               </li>
               
               <li className=" ">
                <a className="  " href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i><FaFacebookF /></i>
                    </a>
               </li><li>
                <a className=" " href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i><FaFacebookF /></i>
                    </a>
               </li><li>
                <a className=" " href="https://www.facebook.com/kannadamanasugalu1956?mibextid=ZbWKwL">
                <i><FaFacebookF /></i>
                    </a>
               </li>
            </ul>
        </div>
       
        </div>
        <hr className=" w-screen border-t-[1px]-[#b6b6b6]" />


    </div>
            )
}

export default Header;