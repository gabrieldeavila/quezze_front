import React, { memo } from "react";
import { Avatar } from "./style";

export default memo(function ProfilePic() {
  return (
    <Avatar>
      <img src="https://thispersondoesnotexist.com/image" alt="profile" />
    </Avatar>
  );
});
