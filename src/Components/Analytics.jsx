
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center p-1'>
            <p className='text-lg md:text-2xl text-teal-400 font-medium p-1'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='p-1 font-bold text-3xl md:text-4xl'>Manage Data Analytics Centrally</h1>
            <p className='p-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus a rerum ratione sed maxime nihil temporibus suscipit! Delectus sint eligendi, aliquid, suscipit commodi eveniet iusto quam provident, repudiandae animi laudantium. Dolorum illo necessitatibus sint cum libero veniam eveniet facere deserunt.</p>
            <button className='w-[200px] text-teal-300 mx-auto my-6 py-2 bg-black rounded-lg
            hover:bg-teal-300 hover:text-black'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
