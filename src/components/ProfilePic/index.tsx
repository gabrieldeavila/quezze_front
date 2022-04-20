import React, { memo } from "react";
import { Avatar } from "./style";
import { useMobile } from "./../../Hooks/useMobile";
import { AiOutlineUser } from "react-icons/ai";
import { light_black } from "./../../assets/styled/base";

const ProfilePic: React.FC<AvatarProps> = ({
  onClick,
  bigSize,
}: AvatarProps) => {
  const isMobile = useMobile();

  const user = {
    image: "https://thispersondoesnotexist.com/image",
    name: "Nome",
  };

  return (
    <Avatar onClick={onClick} bigSize={bigSize} mobile={isMobile}>
      {user.image ? (
        <img src={user.image || ""} alt={user.name} />
      ) : (
        <AiOutlineUser
          size={bigSize ? 100 : isMobile ? 20 : 30}
          color={light_black}
        />
      )}
    </Avatar>
  );
};

interface AvatarProps {
  bigSize?: boolean;
  onClick?: () => void;
}

export default memo(ProfilePic);
