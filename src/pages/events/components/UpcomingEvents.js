
import border from '../../../assets/images/border.jpg'
import  eventImg from '../../../assets/images/Event/Current/CurrentEvent.png'
import featuredImg from '../../../assets/images/FB_IMG_1563194084271 (1).jpg'
import CustomButton from '../../../components/CustomButton'

const UpcomingEvents = ()=>{

    return(
        <div className="container w-full   mt-8">
        <div className="Upcoming-event w-10/12 mx-auto flex flex-col md:flex-col sm:flex-col lg:flex-row gap-8  
        items-center justify-center  "> 

        <div className="event-card w-4/5 flex flex-col sm:flex-col md:flex-col  items-start pl-5 gap-4 lg:gap-8">
        <div className="event-header relative  mb-2  ">
        <h2 className="uppercase  text-xl font-semibold text-richblack-900   "> Upcoming Event</h2>
        <img src={border} alt="header-img" className='h-2 w-12  absolute  '/>
         </div>

        <div className='event-card-details flex  flex-col sm:flex-col lg:flex-row gap-4 '> 
        <div className='event-img'>
            <img src={eventImg}  alt="Event-img" className=' w-96  h-80' />
        </div>
        <div className='event-details flex flex-col w-full gap-5 '>
            <h2 className='capitalize  text-xl font-semibold mt-2 text-richblack-900 '>Sarkari Shale Ulisi </h2>
        <p className=' event-brief text-main-orange  text-base '>  Sarkari shale ulisi 50th campiagn in the kempapura village of karnataka. </p>

        <p className='event-description text-lightgrey-200' > Kempapura GOVT primary & higher school ,this school is very special for the 
        villagers nearby because this is the only school for 4 villages  which eduactes arround 50-80 students of different clases from 1st to 10th std. </p>
        
        <CustomButton  active to='/donate' > 
            Donate Now
        </CustomButton>
        
        </div>
        </div>
             
       


        </div>

        {/* causes */}

        <div className="event-card w-4/5 flex flex-col sm:flex-col md:flex-col items-start pl-5 gap-4 lg:gap-8 ">

<div className="event-header relative  mb-2  ">
<h2 className="uppercase  text-xl font-semibold text-richblack-900   "> Featured causes</h2>
<img src={border} alt="header-img" className='h-2 w-12  absolute  '/>
 </div>

<div className='event-card-details flex flex-col sm:flex-col lg:flex-row gap-4 '> 
<div className='event-img mt-4'>
    <img src={featuredImg}  alt="Event-img" className=' w-96 h-80' />
</div>
<div className='event-details flex flex-col w-full gap-5 '>
    <h2 className='capitalize  text-xl font-semibold mt-2 text-richblack-900 '>Kannada Kadaya </h2>
<p className=' event-brief text-main-orange  text-base '>  Kannada kadaya campaign at K.R.circle,  Bangalore. </p>

<p className='event-description text-lightgrey-200' > Kannada Kadaya campaign is oraganised by 
by a kannada -mansuaglu group in Co-operation with the volunteers to spread awareness regarding usage of Kannada & its importance . </p>

<CustomButton  active to='/donate' > 
    Donate Now
</CustomButton>

</div>

</div>


</div>

        {/* causes end */}

         </div>
            
        </div>
    )
}

export default UpcomingEvents;