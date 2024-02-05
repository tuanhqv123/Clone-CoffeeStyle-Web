export default function Footer() {
  return (
    <div>
      <div className='mt-16 flex flex-col items-center justify-center gap-4 bg-gray-950 py-12  opacity-90'>
        <div className='flex flex-row items-center justify-center'>
          <div className='h-[1px] w-8 bg-gray-800 ' />
          <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-400'>
            SIGN UP AND GET FREE COFFEE BAGS
          </div>
          <div className='h-[1px] w-8 bg-gray-800' />

          <div />
        </div>
        <div className='text-4xl  capitalize text-white'>Coffee Updates</div>
        <div className='mt-4 flex flex-col gap-4 md:flex-row '>
          <input
            type='text'
            className='focus: w-[384px] border-[1px] border-[#2f303e] bg-transparent px-6 py-4 text-left text-white focus:outline-none'
            placeholder='tuanhocgioi978@gmail.com'
          />
          <button className='bg-white px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-gray-900 hover:bg-opacity-95 hover:shadow-sm'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
