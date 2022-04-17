import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { flex } from "../../assets/styled/mixins";
import {
  dark_black,
  light_black,
  light_grey,
} from "./../../assets/styled/base";

export const QuizContainer = styled(Swiper)`
  margin-right: 10rem;
  margin-bottom: 3rem;

  .swiper-slide {
    ${flex};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    background-color: ${light_grey};
    border-radius: 11px;
    padding: 2rem 0;
  }
`;

export const SlideTitle = styled.h1`
  color: ${light_black};
  font-weight: 800;
  user-select: none;
  text-align: center;
`;

export const SlideDescription = styled.p`
  padding: 2rem;
  font-size: 0.8rem;
  user-select: none;
`;

export const SlideButton = styled.button`
  background: ${light_black};
  color: ${light_grey};
  border: none;
  font-size: 16px;
  border-radius: 10px;
  font-weight: 800;
  padding: 0.5rem;
  width: calc(100% - 4rem);
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const QuizTitle = styled.h1`
  color: ${light_grey};
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 1.5rem;
`;
