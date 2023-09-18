import React, { useState } from "react";
import { RecentlyActiveM } from "../components/Method/Methods";

const RecentlyActiveUserData = () => {
  const [recentActiveItems] = useState([
    {
      UserName: "Monkey_King",
      UserImage: "https://i.pravatar.cc/302",
    },
    {
      UserName: "Jacked_Lugia",
      UserImage: "https://i.pravatar.cc/3022",
    },
    {
      UserName: "BigD_Jonny",
      UserImage: "https://i.pravatar.cc/3023",
    },
    {
      UserName: "Talha_Gandum",
      UserImage: "https://i.pravatar.cc/3025",
    },
    {
      UserName: "Irfan_Luumb",
      UserImage: "https://i.pravatar.cc/3027",
    },
  ]);

  return (
    <>
      {recentActiveItems.map((item, idx) => (
        <RecentlyActiveM
          key={idx}
          id={idx}
          UserName={item.UserName}
          UserImage={item.UserImage}
        />
      ))}
    </>
  );
};

export default RecentlyActiveUserData;
