

const Newsletter = () => {
  return (
    <div className='w-full py-14 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-2.5' >
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p className='p-1'>Sign up to our newsletter and stay up to date.</p>
            </div>
        
            <div className='my-4'>
                <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 flex rounded-lg m-4 w-full text-black placeholder:text-gray-500' type="email" placeholder='Enter your email' />
                    <button className='w-[200px] bg-teal-500 ml-4 my-6 px-8 py-2 text-black rounded-lg'>Notify me</button>
                </div>
                <p className='p-1'>We care about the protection of your data. Read our {' '}
                <span className='text-teal-500 cursor-pointer underline underline-offset-1'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
