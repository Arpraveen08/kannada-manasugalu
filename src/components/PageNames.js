
import { useLocation } from "react-router-dom"

const PageNames = ()=>{

    const location = useLocation()

    const path = location.pathname.split('/').filter(Boolean).join('/')

    

    return(
        <div style={{textTransform : 'capitalize'}} className="flex items-center  justify-start ml-10 gap-2 
        text-xs font-serif font-semibold text-center tracking-wide"> 
        <a href='/' > Home </a>
        <div className="  font-semibold leading-7  -rotate-[12deg]"> /</div>
            <p  className="text-xs font-serif font-semibold  text-center text-lightgrey-400
          tracking-wide  "> 
                 {path} </p> 
        </div>
    )
    
}

export default PageNames;