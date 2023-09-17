import React, { useState } from "react";
import { SuggestionM } from "../components/Method/Methods";

const SuggestionData = () => {
  const [suggestionItem, ] = useState([
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/366",
    },
    {
      Name: "MicroSoft",
      Parah: "Collaborate for free with online versions of Microsoft Word",
      Avatar: "https://i.pravatar.cc/356",
    },
    {
      Name: "Reddit",
      Parah: "Where people can dive into their interests, hobbies and passions.",
      Avatar: "https://i.pravatar.cc/346",
    },
    {
      Name: "Quora",
      Parah: "Quora is a place to gain and share knowledge.",
      Avatar: "https://i.pravatar.cc/336",
    },
    {
      Name: "Dior",
      Parah: "Discover Christian Dior fashion, fragrances and accessories for Women and Men.",
      Avatar: "https://i.pravatar.cc/326",
    },
    {
      Name: "Publix",
      Parah: "We are the largest and fastest-growing employee-owned supermarket ",
      Avatar: "https://i.pravatar.cc/316",
    },
  ]);
  return (
    <>
      {suggestionItem.map((item, idx) => (
        <SuggestionM
          key={idx}
          id={idx}
          avatar={item.Avatar}
          parah={item.Parah}
          heading={item.Name}
        />
      ))}
    </>
  );
};

export default SuggestionData;
