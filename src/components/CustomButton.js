
import { useNavigate } from "react-router-dom";

const CtaBtn = ({ to, children,color,  active }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      type="button"
      className={` ml-8  text-center text-xs px-9 py-4 rounded-full font-bold inline-block 
   ${active ?  
     `bg-main-orange contrast-125 text-${color} text-neutral-white border-transparent border-2 border-solid
       rounded-full hover:bg-[#ffffff] hover:text-main-orange hover:border-main-orange 
       hover:border-solid hover:border-2 ` 
      : ` bg-white text-${color} text-main-orange border-main-orange border-2   border-solid 
      hover:bg-main-orange  hover:border-transparent  hover:text-richwhite-500  ` }
    uppercase   `}
      onClick={handleClick}  
    >
      {children}
    </button>
  );
};

export default CtaBtn;



// className={` ml-8  text-center text-xs px-9 py-4 rounded-full font-bold inline-block 
//   ${active ?
//   `bg-main-orange contrast-125  text-neutral-white border-transparent border-2 border-solid
//        rounded-full hover:bg-[#ffffff] hover:text-main-orange hover:border-main-orange 
//        hover:border-solid hover:border-2  ` 
//       : ` bg-white text-main-orange border-main-orange border-2   border-solid 
//       hover:bg-main-orange  hover:border-transparent  hover:text-richwhite-500  ` }
//     uppercase `}






