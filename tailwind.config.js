/** @type {import('tailwindcss').Config} */
module.exports = {
    important:true ,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        // create a tile cards to display 
        // when menu is hovered
        //eg spring health.com

        //main orange color
      'main-orange':'#F14B05',
       
      // text,icon color
      'lightgrey-100':'#B6B6B6',
    
      // light-grey
      'lightgrey-200':'#9C9C9C',
  
      //icon border-color
      'lightgrey-300':'#EAEAEA',
  
      //icon color
      'lightgrey-400':'#A4A4A4',

      //search bar background
      'lightgrey-500':'#2D373F',

      'lightgrey-600':'E6E6E6',

      //navbar - background
        'lightgrey-700':'#262f36',

      //button text - color
      'neutral-white':'#FFFCFF',
  
     //header-span-color
     'dark-grey':'#383838',
      
  
      //border -color
      'border-light':'#EEEEEE',
      
      // text-color
      'richblack-900':'#202A30',

      // try this bg color  light pinkish #F8F6F2

      'lightpink-100':'#F8F6F2',

      //about heading color
      'darkgrey-100':'150c06',

      // about page text color
        'darkgrey-200':'#504f4f'
  
       
  
      },
      fontFamily:{
              sans:['Poppins', 'Arial' , 'sans-serif'],
              serif:['Raleway', 'serif' , 'monospace'],
      },
    
      fontWeight:{
        thin:100,
        extralight:200,
        light:300,
        regular:400,
        medium:500,
        semibold:600,
        bold:700,
        extrabold:800,
        black:900
      },

      backgroundImage:{
        "custom-image":"url('../src/assets/images/KMBackground.png')"
      },

      boxShadow:{
        'custom-light':' 4px 4px 6px rgba(241, 75, 5 , 1)',
        'custom-dark':'8px 8px 12px  rgba(0, 0, 0, 1)'
      },
      // @keyframes slide :{
      //   from{
      //     transform: translateX(0);
      //   }
      //   to{
      //     transform: translateX(-100%);
      //   }
        
      // },
      
      // @layer base:{
      //   .animate-slide{
      //     animation: slide 15s linear infinite 
      //   }
      // },
      keyframes:{
        slide:{
         '0%':{transform:'translateX(0)' },
         '100%':{transform:'translateX(100%)'}
        },
      },
      animation:{
        slide: 'slide 8s  linear infinite'
      },

    },
  },
  plugins: [],
}



 

