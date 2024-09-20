

import {useState , useEffect} from 'react';
// import data from '../data/pages.json'
// import details from '../data/fLyout.json'

const DropDown = () =>{

const[navbarItems , setNavbarItems] = useState([])
const[details , setDetails] = useState({ })
const[hoveredItem , setHoveredItem] = useState(null)

useEffect(()=>{
    Promise.all([
    fetch('../data/pages.json').then(response => {
        !response.ok ?  new Error('response not ok')  : response.json() 
    } ),
    fetch('../data/fLyout.json' ).then(response => {
        !response.ok ? new Error('response not ok ') : response.json()
    } )
]).then(([navbarData , detailsData]) => {
    console.log(navbarData)
    console.log(detailsData)

    setNavbarItems(navbarData)
    setDetails(detailsData)
}).catch(err => {
     console.error('Error fetching data:',err)
})
},[])

    return(
        <div className='dropdown   w-48 h-auto bg-lightgrey-700 '>
            {
                navbarItems.map(item=>(
                    <div key={item.id}  
                    className='navbar-item bg-lightgrey-500 gap-5 flex flex-wrap'
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onClick={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    >
                    {hoveredItem === item.id && details[item.id] && (
                        <div className='flyout-menu' > 
                        <h3 className='text-main-orange'>{details[item.id].header } </h3>

                        <div className="flyout-content">
                {details[item.id].items.map((detail, index) => (
                  <div key={index} className="flyout-item">

                    <h4 className='text-main-orange'>{details.header}</h4> 
                    <img src={detail.image} alt={detail.header} />
                    <p className='text-main-orange'>{detail.text}</p>
                  </div>
                ))}
              </div>
                         </div>
                    )}
                    </div>

                ))
            }

        </div>
    )
}

export default DropDown;