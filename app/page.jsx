import Image from 'next/image'
import Navbar from './ui/navbar'
import Whync from './ui/homepage/whync'


export default function Home() {
  return ( 
<>
    {/* <Navbar 
      text1="navbar1"
      text2="navbar2"
      text3="navbar3"  
      text4="navbar4"  
      text5="navbar5"  
    /> */}

<main className='overflow-x-hidden bg-gradient-to-r from-ncblue to-ncdarkblue'>
  <div className='
    w-screen
    h-[40vw]
    grid
    grid-cols-2
    place-items-center
  '>
    
   <div>
    <h1 className='text-6xl text-[#FFFF]'>We are</h1>
    <h1 className='text-6xl font-bold text-[#cddaff] text-opacity-1 uppercase'>Nordic Code.</h1>
   </div>
  </div>

    <Whync />

</main>
</>
  )
}
