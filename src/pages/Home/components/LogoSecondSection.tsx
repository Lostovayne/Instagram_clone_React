import notificaciones from '../../../assets/icons/asset 44.svg'
import crear from '../../../assets/icons/asset 45.svg'
import logoinstagram from '../../../assets/img/asset 9.png'

const LogoSecondSection = () => {
  return (
    <div className='flex lg:hidden py-2 px-4 justify-between'>
      <img src={logoinstagram} alt='' className='h-[1.875rem]' />
      <div className='flex gap-3'>
        <img src={crear} alt='' />
        <img src={notificaciones} alt='' />
      </div>
    </div>
  )
}
export default LogoSecondSection
