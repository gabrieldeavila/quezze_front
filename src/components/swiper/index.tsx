import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useEffect, useMemo, useState } from "react";
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
import { SwiperInterface } from "./interface";
import { apiQuezze } from "../../axios";
import _ from "lodash";
import { ex } from "../../Pages/Create/data_example";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const QuizSwiper = ({ value }: SwiperInterface) => {
  const { width } = useWindowSize();
  const options = ex;
  const [quiz, setQuiz] = useState<any>([]);

  const { t } = useTranslation();

  useEffect(() => {
    apiQuezze
      .post("/get-quezze", { value })
      .then((res) => {
        setQuiz(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const category = useMemo(() => {
    return _.find(options, { value })?.label;
  }, []);

  return (
    <>
      {!_.isEmpty(quiz) && (
        <>
          <QuizTitle>{t(`create.types.${category}`)}</QuizTitle>
          <QuizContainer spaceBetween={40} slidesPerView={width / 310}>
            {quiz.map(({ create, _id }: any, index: number) => (
              <SwiperSlide>
                <>
                  <SlideTitle>{create.name}</SlideTitle>
                  <SlideDescription>{create.description}</SlideDescription>
                  <SlideButton to={`/play/${_id}`}>
                    {t("create.play")}
                  </SlideButton>
                </>
              </SwiperSlide>
            ))}
          </QuizContainer>
        </>
      )}
    </>
  );
};

export default memo(QuizSwiper);
