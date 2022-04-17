import { memo } from "react";
import QuizSwiper from "../../components/swiper";

export default memo(function Home() {
  return (
    <>
      <QuizSwiper />
      <QuizSwiper />
      <QuizSwiper />
    </>
  );
});
