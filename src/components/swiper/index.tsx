import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";
// Import Swiper styles
import "swiper/css";
import {
  QuizContainer,
  QuizTitle,
  SlideButton,
  SlideDescription,
  SlideTitle,
} from "./style";
import { useWindowSize } from "react-use";

export default memo(function QuizSwiper() {
  const { width } = useWindowSize();

  return (
    <>
      <QuizTitle>Category name</QuizTitle>
      <QuizContainer spaceBetween={40} slidesPerView={width / 310}>
        <SwiperSlide>
          <SlideTitle>Título Teste</SlideTitle>
          <SlideDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
            eu vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
          </SlideDescription>
          <SlideButton>Play</SlideButton>
        </SwiperSlide>

        <SwiperSlide>
          <SlideTitle>Título Teste 2</SlideTitle>
          <SlideDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
            eu vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
          </SlideDescription>
          <SlideButton>Play</SlideButton>
        </SwiperSlide>

        <SwiperSlide>
          <SlideTitle>Título Teste 3</SlideTitle>
          <SlideDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
            eu vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
          </SlideDescription>
          <SlideButton>Play</SlideButton>
        </SwiperSlide>

        <SwiperSlide>
          <SlideTitle>Título Teste 4</SlideTitle>
          <SlideDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
            eu vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
          </SlideDescription>
          <SlideButton>Play</SlideButton>
        </SwiperSlide>
      </QuizContainer>
    </>
  );
});
