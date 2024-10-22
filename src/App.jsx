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

function App() {
  return (
    <>
      <Header/>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, EffectCube]} spaceBetween={50} slidesPerView={1} navigation scrollbar = {{draggable:true}} direction='horizontal' pagination = {{clickable:true}} mousewheel = {{clickable:true}} effect='cube' grabCursor={true} cubeEffect={{shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94,}}>
        <SwiperSlide>
          <Collection/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
