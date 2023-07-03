import instagram from '../../assets/img/asset 9.png'
import HamburgerMenu from './components/HamburgerMenu'
import HeaderSecondSection from './components/HeaderSecondSection'
import HeaderThreeSection from './components/HeaderThreeSection'
import LogoSecondSection from './components/LogoSecondSection'
import MenuDesplegable from './components/MenuDesplegable'

const Home = () => {
  return (
    <main className='min-h-screen grid bg-[#FEFEFF] grid-cols-1  lg:grid-cols-6 gap-4'>
      <section className='col-span-1 w-full  hidden lg:flex flex-col gap-y-1 flex-grow  border-r border-gray-300/80 p-3 '>
        <picture>
          <img src={instagram} alt='' className='object-contain h-8 mt-7 mb-7 mx-3 ' />
        </picture>
        <MenuDesplegable />
        <HamburgerMenu />
      </section>
      <section className=' col-span-3 overflow-hidden w-full  mx-auto lg:max-w-[41rem] lg:mx-auto  lg:pl-12 '>
        <LogoSecondSection />
        <div className='bg-gray-200/50 border-y-2 border-gray-300/60 lg:border-none lg:bg-white pl-3'>
          <HeaderSecondSection />
        </div>
      </section>
      <section className=' col-span-2  hidden lg:block lg:mr-[8.1875rem]'>
        <HeaderThreeSection />
      </section>
    </main>
  )
}
export default Home
