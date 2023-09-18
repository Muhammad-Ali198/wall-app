import React, { useState } from 'react'
import { RecentFollowingM } from '../components/Method/Methods';

const FollowingData = () => {
  const [followingPageItems,] = useState([
    {
      PageName: "Monkey_King",
      PageTag: "@MFMKFMKSD_mfs",
      PageImage: "https://i.pravatar.cc/301"
    },
    {
      PageName: "Jacked_Lugia",
      PageTag: "@MHYNKdcdSD_mfs",
      PageImage: "https://i.pravatar.cc/3012"
    },
    {
      PageName: "BigD_Jonny",
      PageTag: "@MFMdeMgtgt_mfs",
      PageImage: "https://i.pravatar.cc/3013"
    },
    {
      PageName: "Talha_Gandum",
      PageTag: "@rfrgMKFMKSD_mrf",
      PageImage: "https://i.pravatar.cc/3015"
    },
    {
      PageName: "Irfan_Luumb",
      PageTag: "@YTKFMKSD_cdc",
      PageImage: "https://i.pravatar.cc/3017"
    },
  ]);

  return (
    <>
      {followingPageItems.map((item, idx) => (
        <RecentFollowingM
          key={idx}
          id={idx}
          PageName={item.PageName}
          PageTag={item.PageTag}
          PageImage={item.PageImage}
        />
      ))}
    </>
  );
}

export default FollowingData;