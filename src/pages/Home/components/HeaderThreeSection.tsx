import user from '../../../assets/users/user-3.webp'
const HeaderThreeSection = () => {
  return (
    <header className=' flex items-center justify-between mt-12 py-3 '>
      <div className='flex items-center gap-4'>
        <img
          src={user}
          alt=''
          className='h-[60px] w-[60px] ring-1 ring-black p-0.5 rounded-full  object-cover'
        />
        <div>
          <p className='text-sm text-gray-900/80 font-medium'>kathi.terine</p>
          <p className='text-sm text-gray-500 capitalize'>kathi.terine</p>
        </div>
      </div>
      <span className='text-sm text-[#0095f6] font-medium'>Cambiar</span>
    </header>
  )
}
export default HeaderThreeSection
