import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {useState} from 'react'
import { NavLink } from "react-router-dom";
import navpages from  "../assets/data/pages.json"
// import DropDown from "./DropDown";




const Navbar=()=>{

    const[isOpen , setIsOpen]= useState(false)

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState)
        
           
    }


    return(
        <div className="flex w-full  relative items-center justify-center">

        {/*  mobile view - navbar */}
        <div className={` mobile-navbar w-full md:hidden h-20 flex items-center pl-4 pr-4 justify-between
         leading-5  bg-lightgrey-700 border-b-4 border-main-orange
         `}>             
             <div className=' mobile-nav-header  border-box block font-sans text-sm leading-5    ' > 
                
                <button onClick={toggleMenu} 
                                className={` mobile-nav-button w-10 h-10 bg-main-orange leading-6 bg-origin-padding inline-block   
                border-none outline-none text-lg  font-normal 
                   group relative `}>
                <i className=" mobile-nav-icon text-neutral-white leading-4 cursor-pointer inline-block 
                  ">  

                  <span className="  -translate-x-full  group-hover:absolute  group-hover:-bottom-2  group-hover:-left-1 group-hover:-right-1 group-hover:h-1 group-hover:origin-left group-hover:rounded-full 
                  group-hover:bg-neutral-white  group-hover:transition-transfrom  group-hover:duration-500 
                   group-hover:ease  group-hover:translate-x-0
                  "/>
                    < GiHamburgerMenu/>
                    </i>

                {/* flyout menu  */}
                    {
                    isOpen ?
                     <div className=" mobile-nav-items absolute w-64 h-56 overflow-y-scroll -left-4  top-3 bg-lightgrey-500 
                    text-neutral-white  text-start  mt-12 z-50 ">
               {         
               navpages.pages.slice(0 , navpages.pages.length).map((item,id) => (  
            <div  className={ ` space-y-3 mt-1 py-2.5  `} key={id} >
                {/* fix issue ->  when anywhere clicked in the item it should go to the 
                  corresponding page without toggling the menu */}
                <nav > 
                    <ul  className=" font-semibold text-neutral-white ">
                        <li className="items block p-3.5 text-base  hover:underline   border-b border-b-white 
                          " >
                            <NavLink to={item.link}>{item.name} </NavLink></li>
                    </ul>
                </nav> 
                </div> 
                ))
            }
         </div>  : ''
         } 
                </button>
                    </div>

        {/* search bar */}
        <div className=" mobile-nav-serach  relative  border-box h-5/6 w-3/4 bg-lightgrey-500  flex items-center  text-sm
        leading-5  ">
             <input
              type='text'
              name='search' 
              id='search' 
              placeholder="search..." 
              className=" py-2  pl-4  bg-transparent  "
              />
              <span className="absolute right-3">
              <i className='mobile-nav-serach-icon text-neutral-white contrast-125 '> <FaSearch/> </i>
             </span>
        </div>

        </div>


         {/*  Navbar  */}

        <div className=" nav-menubar   hidden md:flex items-center justify-evenly w-full h-20 bg-lightgrey-700 
        px-4 leading-5  border-b-4 border-main-orange  ">
        {
            navpages.pages.map((item,index)=> (
        <div className=" flex-shrink-1   ">
        <nav className=" relative group ">
            <ul className="nav-menu-list  ">
                <li className="nav-menu-list-items text-neutral-white hover:text-main-orange 
                   ">
                      <span className="  -translate-x-full  group-hover:absolute  group-hover:-bottom-2  group-hover:-left-1 group-hover:-right-1 group-hover:h-1 group-hover:origin-left group-hover:rounded-full 
                  group-hover:bg-neutral-white  group-hover:transition-transfrom  group-hover:duration-300 
                   group-hover:ease-in  group-hover:translate-x-0 
                  "/>
                    <NavLink className='group relative' to={item.link}  >{item.name} </NavLink> </li>
            </ul>
        </nav>  
        </div>  
            ))
        }
        {/* <div className=" absolute top-0 bottom-0 -right-2 group-hover:block bg-lightgrey-700  ">
        <DropDown/>
        </div> */}

<div className=" nav-serachBar  relative  border-box h-5/6 w-1/5 bg-lightgrey-500  flex items-center  text-sm
        leading-5  ">
             <input
              type='text'
              name='search' 
              id='search' 
              placeholder="search..." 
              className=" py-2  pl-4  bg-transparent  "
              />
              <span className="absolute right-3">
              <i className='mobile-nav-serach-icon text-neutral-white contrast-125 '> <FaSearch/> </i>
             </span>
        </div>

        </div>

        </div>
    )
}
export default Navbar;