import React from "react";
import { H1Light, PDark, PLight } from "../../assets/styled/base";
import ProfilePic from "../../components/ProfilePic";
import Swiper from "../../components/swiper";
import { ProfileImage, ProfileWrapper } from "./style";

export default function Profile() {
  return (
    <ProfileWrapper>
      <ProfilePic bigSize />
      <H1Light>John Doe</H1Light>
      <PDark>@john_doe</PDark>
      <PLight mt="2" mb="4" width="250px">
        Hi, folks! I'm John Doe! And I'm very happy boys.
      </PLight>
      {/* <Swiper /> */}
    </ProfileWrapper>
  );
}
