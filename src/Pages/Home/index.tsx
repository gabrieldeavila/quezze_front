import { memo } from "react";
import QuizSwiper from "../../components/swiper";

export default memo(function Home() {
  const values = Array(13).fill(0);

  return (
    <>
      {values.map((_value, index) => (
        <QuizSwiper value={index} key={index} />
      ))}
    </>
  );
});
