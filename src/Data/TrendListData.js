import React, { useState } from "react";
import { TrendListM } from "../components/Method/Methods";

const TrendListData = () => {
  const [trendListItems,] = useState([
    {
      TrendLocation: "FaceBook",
      TrendAbout: "Facebook helps you connect",
      TrendImage: "https://source.unsplash.com/featured/299x201"
    },
    {
      TrendLocation: "FaceBook",
      TrendAbout: "Facebook helps you connect",
      TrendImage: "https://source.unsplash.com/featured/301x201"
    },
    {
      TrendLocation: "FaceBook",
      TrendAbout: "Facebook helps you connect",
      TrendImage: "https://source.unsplash.com/featured/298x201"
    },
    {
      TrendLocation: "FaceBook",
      TrendAbout: "Facebook helps you connect",
      TrendImage: "https://source.unsplash.com/featured/297x201"
    },
    {
      TrendLocation: "FaceBook",
      TrendAbout: "Facebook helps you connect",
      TrendImage: "https://source.unsplash.com/featured/300x201"
    },
  ]);

  return (
    <>
      {trendListItems.map((item, idx) => (
        <TrendListM
          key={idx}
          id={idx}
          TrendAbout={item.TrendAbout} 
          TrendLocation={item.TrendLocation}
          TrendImage={item.TrendImage}
        />
      ))}
    </>
  );
};

export default TrendListData;
