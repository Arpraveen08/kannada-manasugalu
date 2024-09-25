
import PageNames from "../../components/PageNames";
import donate from '../../assets/images/Donate.png'
import border from '../../assets/images/border.jpg'

const Donate = ()=>{
    return(
        <div className="container box-border w-full lg:w-10/12 mx-auto h-auto">
        <div className="wrapper mt-8">

        <PageNames/>
       
         <div className="flex  items-center justify-center mt-16  ">
                <div className="donate-header relative">
                <h1 className="headeing font-bold leading-10  text-center 
                text-darkgrey-100 text-4xl  ml-10  uppercase  " >
                    Donate</h1>
                    <img src={border} alt="header-img" className='h-2 w-12  absolute left-10'/>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 lg:mb-8  mb-24 ">
            <img src={donate} alt="donate-page" className="lg:h-3/4  w-3/4"  />
        </div>

    </div>
    )
}

export default Donate;