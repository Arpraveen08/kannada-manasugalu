// import school from '../../assets/images/KMLogo1.png';
import { FaHands, FaSchool } from "react-icons/fa";

const Mission = () => {
  return (
    //         missions
    // SARKARI SHALE ULISI ABHIYANA
    // PLANTATION
    // KANNADA KADDAYA JAGRUTHI ABHIYANA
    // MENSTRUAL AWARENESS
    // CLEANING
    // VOLUNTEERING
    // COVID WORKS

    <div className="container box-border w-full ">
      <div className="Mission">
        <div
          className="mission-header text-center font-serif  text-3xl leading-9 
                  font-bold mb-20"
        >
          <h2> Our Mission</h2>
        </div>

        {/*          missions 
 SARKARI SHALE ULISI ABHIYANA
 PLANTATION
 KANNADA KADDAYA JAGRUTHI ABHIYANA
 MENSTRUAL AWARENESS
 CLEANING
 VOLUNTEERING
 COVID WORKS */}


        {/* mission - items */}
        <div className="mission-items w-full    flex flex-col lg:flex-row gap-14 flex-wrap flex-shrink-0  ">
          
          {/* mission 1 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-16 group  ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
              transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                Sarkari shale ulisi{" "}
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
                {" "}
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...{" "}
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>

          {/* mission 2 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-20  group  ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20 lg:  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
                transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                tree plantation 
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
                {" "}
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...{" "}
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>

          {/* mission 3 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-20 group ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20 lg:  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
                transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                Kannada kaddaya 
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
              
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>

          {/*  mission 4 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-20 group ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20 lg:  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
                transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                
                Cleaning Nature
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
              
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>

          {/* mission 5 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-20 group ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20 lg:  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
                transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                volunteering causes{" "}
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
                {" "}
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...{" "}
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>

          {/* mission 6 */}
          <div className="flex flex-col  items-center justify-center lg:flex-row gap-8 mb-20 group ">
            {/* Icon */}
            <div className="icon-box text-sm leading-5  mb-4 lg:-mt-20 lg:  ">
              <div
                className="inner-box flex items-center justify-center  h-16 w-16  bg-main-orange group-hover:bg-neutral-white
                  border-2 border-main-orange leading-[63px]    relative  
                transition-transform duration-300 ease-linear cursor-pointer  "
              >
                <FaHands
                  className="h-14 w-14 p-2 relative fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "18px" }}
                />
                <FaSchool
                  className="absolute top-2 w-5 h-5 fill-none stroke-current  text-white  group-hover:stroke-main-orange  "
                  style={{ strokeWidth: "28px" }}
                />
                {/* <img src= {school} alt='Sarkari shale ulisi' /> */}
              </div>
            </div>

            {/* content */}
            <div className="content flex flex-col items-center justify-center gap-4 ">
              <p
                className=" text-3xl -ml-8 leading-6 mb-1  text-richblack-900 "
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                pandemic works{" "}
              </p>
              <p className=" text-sm font-normal font-sans text-lightgrey-200  ">
                {" "}
                In One of our volunteers village, <br />
                govt school was in scattered situation <br /> so then we decided
                to restore it...{" "}
              </p>
              <span className="text-base font-sans text-main-orange mr-44 font-semibold ">
                <a href="/">Read More</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
