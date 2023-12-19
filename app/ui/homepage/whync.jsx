import Image from "next/image";
import Globe from '../../../public/globe.png'

function Arrow() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-box-arrow-up-right"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        {" "}
        <path
          fill-rule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
          id="mainIconPathAttribute"
          fill="#131e3a"
          stroke-width="0.8"
          stroke="#131e3a"
        ></path>{" "}
        <path
          fill-rule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
          id="mainIconPathAttribute"
          fill="#131e3a"
          stroke="#131e3a"
        ></path>{" "}
      </svg>
    );
  }


export default function whync() {
    return (
        <div className='
            w-screen
            h-screen
            text-[#FFFF] 
            bg-gradient-to-r
            from-ncblue
            to-ncdarkblue
            grid 
            lg:grid-cols-2
            grid-cols-1
            gap-4
            place-items-center
        '>    
            <div className="col-start-1 max-w-lg lg:ml-40 text-center sm:text-left">
                <h1 className="text-5xl font-bold">WHY SHOULD YOU CHOOSE</h1>
                <h1 className="text-5xl text-[#cddaff] text-opacity-1 mt-2">NORDIC CODE?</h1>
                <h3 className="text-2xl mt-2">Expertise Meets Innovation</h3>
                <p className="font-extralight m-5 sm:m-0">Our team combines the time-honored craft of coding with the latest technological advancements, delivering solutions that stand the test of time. Collaborative Creation: We believe in the power of collaboration. Your ideas, coupled with our expertise, result in digital and electronic masterpieces that exceed expectations. Tailored Excellence: Whether it's a website tailored to your brand or a custom electronic circuit addressing your unique needs, we tailor our solutions with precision and care.</p>

                <button className="block lg:hidden bg-light p-4 text-ncblue text-2xl font-bold sm:mt-10 mt-0 sm:m-0 m-auto  w-[280px] sm:w-[340px]">
                    <span className="">Preview Projects</span>
                    <span className="float-right relative left-[-10px] top-[6px]"><Arrow /></span>
                </button>
            </div>
            
            <div className="hidden lg:grid">
                <Image src={Globe} width={500} height={500}></Image>
                <button className="bg-light p-4 text-ncblue text-2xl font-bold m-10 mb-5 -mt-10 w-[340px]">
                    <span className="">Preview Projects</span>
                    <span className="float-right relative left-[-10px] top-[6px]"><Arrow /></span>
                </button>
            </div>
        </div>
    );
}