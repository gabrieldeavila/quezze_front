import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { flex } from "../../assets/styled/mixins";
import {
  dark_black,
  light_black,
  light_grey,
} from "./../../assets/styled/base";

export const QuizSlide = styled(SwiperSlide)`
  background: red;
`;

export const QuizContainer = styled(Swiper)`
  margin-right: 10rem;

  .swiper-slide {
    ${flex};
    flex-direction: column;
    background-color: ${light_grey};
    border-radius: 4.17px;
    padding: 2rem 0;
  }
`;

export const SlideTitle = styled.h1`
  color: ${light_black};
  font-weight: 800;
  text-align: center;
`;

export const SlideDescription = styled.p`
  padding: 2rem;
`;

export const SlideButton = styled.button`
  background: ${light_black};
  color: ${light_grey};
  border: none;
  font-size: 16px;
  border-radius: 30px;
  font-weight: 800;
  padding: 1rem;
  width: calc(100% - 2rem);
`;
