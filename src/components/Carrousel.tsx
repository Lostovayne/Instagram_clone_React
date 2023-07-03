import { Carousel } from '@material-tailwind/react'
import asset2 from '../../src/assets/img/asset 2.png'
import asset3 from '../../src/assets/img/asset 3.png'
import asset4 from '../../src/assets/img/asset 4.png'
import asset5 from '../../src/assets/img/asset 5.png'

export default function Carrousel() {
  return (
    <Carousel
      prevArrow={false}
      nextArrow={false}
      autoplay={true}
      loop={true}
      autoplayDelay={3000}
      className='rounded-xl h-[38rem]  absolute top-7 left-[9.8125rem] w-64 outline-none '>
      <img src={asset2} alt='image 1' className='' />
      <img src={asset3} alt='image 2' className='' />
      <img src={asset4} alt='image 3' className='' />
      <img src={asset5} alt='image 4' className='' />
    </Carousel>
  )
}
