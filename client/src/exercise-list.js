import React from "react";
import { FlatList } from "react-native";
import ExersiseItem from "./exersise-item";

const ExersiseList = ({ exercises }) => {
  return (
    <FlatList
      data={exercises}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={ExersiseItem}
    />
  );
};

export default ExersiseList;  