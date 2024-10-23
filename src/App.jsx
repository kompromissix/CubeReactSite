import './App.css'
import Header from './Header/Header'
import Collection from './Main/collection/collection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import TwoMilf from './Main/TwoMilf/TwoMilf'
import NewInStock from './Main/NewInStock/NewInStock'
import Mitchel from './Main/Mitchel/Mitchel'
import Bestsellers from './Main/Bestsellers/Bestsellers'
import Twomilfis from './Main/Twomilfis/Twomilfis'
import OurBrands from './Main/OurBrands/OurBrands'
import Whoarewe from './Main/Whoarewe/Whoarewe'
function App() {
  return (
    <>
      <Header/>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube]} spaceBetween={50} slidesPerView={1} navigation scrollbar = {{draggable:true}} direction='horizontal' pagination = {{clickable:true}} mousewheel = {{clickable:true}} effect='cube' grabCursor={true} cubeEffect={{shadow: true, slideShadows: true, shadowOffset: 0, shadowScale: 0,}}>
        <SwiperSlide>
          <Collection/>
        </SwiperSlide>
        <SwiperSlide>
          <TwoMilf/>
        </SwiperSlide>
        <SwiperSlide>
          <NewInStock/>
        </SwiperSlide>
        <SwiperSlide>
          <Mitchel/>
        </SwiperSlide>
        <SwiperSlide>
          <Bestsellers/>
        </SwiperSlide>
        <SwiperSlide>
          <Twomilfis/>
        </SwiperSlide>
        <SwiperSlide>
          <OurBrands/>
        </SwiperSlide>
        <SwiperSlide>
          <Whoarewe/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
