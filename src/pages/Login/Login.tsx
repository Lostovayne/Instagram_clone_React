import { Link } from 'react-router-dom'
import Playstore from '../../assets/img/asset 6.png'
import Microsoft from '../../assets/img/asset 7.png'
import MovileBg from '../../assets/img/asset 8.png'
import InstagramLogo from '../../assets/img/asset 9.png'
import FaceLogo from '../../assets/img/logoFace.png'
import Carrousel from '../../components/Carrousel'

const Login = () => {
  return (
    <main className='min-h-screen flex items-center justify-center bg-white'>
      <picture className=' hidden lg:block   h-[36.3125rem] relative'>
        <img src={MovileBg} />
        <Carrousel />
      </picture>

      <section className='w-[21.75rem] h-[36.3125rem]'>
        <div className='border border-gray-300/80 p-9 pb-3'>
          <img src={InstagramLogo} alt='' className='mx-auto' />

          <form className='flex flex-col mt-8 gap-2'>
            <input
              type='text'
              className='p-2 text-sm border outline-none bg-white border-gray-300 bg-slate-100/60 text-gray-700 placeholder:text-gray-400 rounded-sm'
              placeholder='Teléfono, usuario o correo electrónico'
            />
            <input
              type='text'
              className='p-2 text-sm border outline-none bg-white border-gray-300 bg-slate-100/60 text-gray-700 placeholder:text-gray-400 rounded-sm'
              placeholder='Contraseña'
            />
            <Link
              to='/home'
              className='p-1.5 text-center m-1 text-base font-medium bg-[#4CB5F9] text-white rounded-xl'>
              Iniciar sesión
            </Link>

            <div className='flex justify-between gap-2'>
              <span className='text-gray-300'>_________________</span>
              <p className='translate-y-1/3 text-gray-500 '>o</p>
              <span className='text-gray-300'>_________________</span>
            </div>
          </form>

          <div className='mt-5 flex  items-center gap-2 justify-center'>
            <img src={FaceLogo} alt='Logo_Facebook' className='w-6 h-6' />
            <p className='text-sm font-medium text-gray-600'>Iniciar sesión con Facebook</p>
          </div>
          <p className='text-sm text-gray-600 text-center mt-4'>¿Olvidaste tu contraseña?</p>
        </div>
        <div className='border border-gray-300/80 px-9 py-5 mt-3 flex items-center gap-1 '>
          <p className='text-base text-gray-600'>¿No tienes una cuenta?</p>
          <p className='text-base text-[#0095f6] font-medium'>Regístrate</p>
        </div>
        <p className='text-base font-normal text-center text-gray-600 mt-4'>Descarga la app.</p>
        <picture className='mx-auto flex items-center justify-center gap-2 mt-3'>
          <img src={Playstore} alt='' className='w-[7.5rem] h-9 object-cover' />
          <img src={Microsoft} alt='' className='w-[7.5rem] h-9 object-cover' />
        </picture>
      </section>
    </main>
  )
}
export default Login
