
{/*import {Typed} from "react-typed";*/}

const Content = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-teal-400 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='font-bold text-4xl  md:text-7xl'>Grow with data.</h1>
        <div className='flex justify-center items-center '>
            <p className='font-bold text-4xl  md:text-7xl'>Fast, flexible financing </p>
            {/*<Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-300'
            strings={["BTB" , "BTC" , "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            />*/}
        </div>
        <div>
            <p className='md:text-2xl text-xl font-bold md:pl-4 pl-2 text-gray-400 '>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className='bg-teal-500 mx-auto my-6 px-8 py-2 text-black rounded-lg hover:text-teal-700 hover:bg-white'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Content
