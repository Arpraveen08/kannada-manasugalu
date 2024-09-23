
import{useState, useEffect} from 'react'
import bg from '../../../assets/images/KMBackground1.jpg'
import bg1 from '../../../assets/images/KMBackground.png'
import bg2 from '../../../assets/images/Event/Activities/TreePlantation.png'
// import bg3 from '../assets/images/Event/Activities/HealthAwareness.png'
import bg4 from '../../../assets/images/Event/Activities/PromotionalProgram.png'



const images = [
bg, bg1 , bg2,  bg4 ]


const Slider = ()=>{

    const[currentIndex , setCurrentIndex]=useState(0)
    
useEffect( ()=>{
    const intervalId = setInterval(()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % images.length )
    },5000)

    return () => { clearInterval(intervalId)
    } 
},[])

return(
    <div className='hero-container mb-10'>
          {/* webpage background image */}
          <div className='hero-image relative flex transition-transform duration-500 ease-linear ' >
            {/* 
        // min-w-[360px] bg-contain lg:w-full h-screen lg:bg-cover bg-center bg-no-repeat 
        -mt-48 lg:mt-0 
         */}
        <img className=' min-w-[360px] relative lg:w-full h-auto object-contain lg:object-cover   '
                src ={images[currentIndex]}
                alt='Hero-images'
                />
            </div>
    </div>
    
)

}

export default Slider;