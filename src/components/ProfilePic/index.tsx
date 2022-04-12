import React, { memo } from "react";
import { Avatar } from "./style";
import { useMobile } from "./../../Hooks/useMobile";
import { AiOutlineUser } from "react-icons/ai";
import { light_black } from "./../../assets/styled/base";

export default memo(function ProfilePic() {
  const isMobile = useMobile();

  const user = {
    image: "https://thispersondoesnotexist.com/image",
    name: "Nome",
  };

  return (
    <Avatar mobile={isMobile}>
      {user.image ? (
        <img src={user.image || ""} alt={user.name} />
      ) : (
        <AiOutlineUser size={isMobile ? 20 : 30} color={light_black} />
      )}
    </Avatar>
  );
});
