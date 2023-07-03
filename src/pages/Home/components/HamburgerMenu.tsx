import hamburguesa from '../../../assets/icons/asset 46.svg'

const HamburgerMenu = () => {
  return (
    <div className=' py-4 px-3 w-full flex items-center gap-[.9375rem] hover:bg-gray-300/50 rounded-lg mb-1.5'>
      <img src={hamburguesa} alt='' />
      <span className='text-base pt-1'>Más</span>
    </div>
  )
}
export default HamburgerMenu
