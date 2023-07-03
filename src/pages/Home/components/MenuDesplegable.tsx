//imports
import asset1 from '../../../assets/icons/asset 41.svg'
import asset2 from '../../../assets/icons/asset 42.svg'
import asset3 from '../../../assets/icons/asset 43.svg'
import asset4 from '../../../assets/icons/asset 44.svg'
import asset5 from '../../../assets/icons/asset 45.svg'
import asset7 from '../../../assets/icons/asset 47.svg'
import asset9 from '../../../assets/icons/asset 49.svg'
import PerfilUser from '../../../assets/img/perfil.webp'

const MenuDesplegable = () => {
  return (
    <aside className=' flex-grow'>
      <ul className='flex flex-col gap-1 '>
        <li className='flex-grow'>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem] group   h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 '>
            <img src={asset1} alt='' className='h-6 group-hover:scale-105 transition-all' />
            <span className='text-base text-gray-900 font-medium pt-0.5'>Inicio</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <img src={asset7} alt='' className='h-6  group-hover:scale-105 transition-all' />
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Buscar</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className='  py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <img src={asset9} alt='' className='h-6  group-hover:scale-105 transition-all' />
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Explorar</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem] group  h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <img src={asset2} alt='' className='h-6  group-hover:scale-105 transition-all' />
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Reels</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <div className='relative'>
              <img src={asset3} alt='' className='h-6  group-hover:scale-105 transition-all' />
              <div className='w-[1.125rem] h-[1.125rem] rounded-full ring-1 ring-white absolute -top-1.5 -right-1.5 bg-[#FF3141] text-xs text-gray-900 flex items-center justify-center   text-wh text-gray-900ite'>
                <span className='text-white'>2</span>
              </div>
            </div>
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Mensajes</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <div className='relative'>
              <img src={asset4} alt='' className='h-6  group-hover:scale-105 transition-all' />
              <div className='w-2 h-2 rounded-full ring-2 ring-white absolute top-0 -right-0.5 bg-[#FF3141] '></div>
            </div>
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Notificaciones</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <img src={asset5} alt='' className='h-6  group-hover:scale-105 transition-all' />
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Crear</span>
          </a>
        </li>
        <li className=''>
          <a
            href='#'
            className=' py-[.9375rem] px-[.75rem]  group h-full rounded-lg hover:cursor-pointer hover:bg-gray-300/50 flex gap-4 items-center'>
            <img src={PerfilUser} alt='' className='h-6 w-6 rounded-full object-cover' />
            <span className='text-sm text-gray-900 tracking-wider font-normal'>Perfil</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}
export default MenuDesplegable
