
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-40 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-4'>
        <div className='w-full  items-center justify-between text-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto -mt-12 bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold py-8'>Single User</h2>
            <p className='text-4xl font-bold'>$149</p>
            <div className='font-medium py-3'>
                <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
                <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
            </div>
            <button className='w-[200px] font-medium bg-teal-500 ml-4 my-6 px-8 py-2 text-black rounded-lg hover:text-teal-300 hover:bg-black'>Start Trial</button>
        </div>


        <div className='w-full bg-gray-100 items-center justify-between text-center shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto -mt-12 bg-transparent' src={Double} alt="/" />
            <h2 className='text-2xl font-bold py-8'>Double Users</h2>
            <p className='text-4xl font-bold'>$249</p>
            <div className='font-medium py-3'>
                <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b border-gray-400 mx-8'>2 Granted Users</p>
                <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
            </div>
            <button className='w-[200px] font-medium bg-teal-500 ml-4 my-6 px-8 py-2 text-black rounded-lg hover:text-teal-300 hover:bg-black'>Start Trial</button>
        </div>


        <div className='w-full  items-center justify-between text-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto -mt-12 bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold py-8'>Triple Users</h2>
            <p className='text-4xl font-bold'>$349</p>
            <div className='font-medium py-3'>
                <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b border-gray-400 mx-8'>3 Granted Users</p>
                <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
            </div>
            <button className='w-[200px] font-medium bg-teal-500 ml-4 my-6 px-8 py-2 text-black rounded-lg hover:text-teal-300 hover:bg-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
