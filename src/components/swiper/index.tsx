import { Swiper, SwiperSlide } from "swiper/react";
import { memo } from "react";
// Import Swiper styles
import "swiper/css";
import {
  QuizContainer,
  QuizSlide,
  SlideButton,
  SlideDescription,
  SlideTitle,
} from "./style";

export default memo(function QuizSwiper() {
  return (
    <QuizContainer spaceBetween={20} slidesPerView={4}>
      <SwiperSlide>
        <SlideTitle>Título Teste</SlideTitle>
        <SlideDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim eu
          vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
        </SlideDescription>
        <SlideButton>Play</SlideButton>
      </SwiperSlide>

      <SwiperSlide>
        <SlideTitle>Título Teste 2</SlideTitle>
        <SlideDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim eu
          vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
        </SlideDescription>
        <SlideButton>Play</SlideButton>
      </SwiperSlide>

      <SwiperSlide>
        <SlideTitle>Título Teste 3</SlideTitle>
        <SlideDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim eu
          vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
        </SlideDescription>
        <SlideButton>Play</SlideButton>
      </SwiperSlide>

      <SwiperSlide>
        <SlideTitle>Título Teste 4</SlideTitle>
        <SlideDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim eu
          vivamus in consequat. Tellus bibendum vel lectus lacus nulla in.
        </SlideDescription>
        <SlideButton>Play</SlideButton>
      </SwiperSlide>
    </QuizContainer>
  );
});
