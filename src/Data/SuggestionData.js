import React, { useState } from "react";
import {SuggestionM,} from "../components/Method/Methods";

const [suggestionItem, setSuggestionItem] = useState([
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/366",
    },
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/356",
    },
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/346",
    },
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/336",
    },
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/326",
    },
    {
      Name: "FaceBook",
      Parah: "Facebook helps you connect",
      Avatar: "https://i.pravatar.cc/316",
    },
  ]) 

const SuggestionData = () => {
  return (
    <>
    {suggestionItem.map((item, idx)=>(
        <SuggestionM key={idx} id={idx} avatar={item.Avatar} parah={item.Parah} heading={item.Name} />
    ))}
    </>
  )
};

export default SuggestionData;
