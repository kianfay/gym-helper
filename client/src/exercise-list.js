import React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import ExersiseItem from "./exersise-item";

const ExersiseList = ({ exercises }) => {
  
  return (
    <SectionList
      sections={organizeExs(exercises)}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderSectionHeader={({ section: { title } }) => (
        <Text style = {styles.sectionHeader}>{title}</Text>
      )}
      renderItem={ExersiseItem}
      style = {styles.list}
    />
  );
};

const organizeExs = (exercises) => {
  let res = {};
  for(let i of exercises){
      if(!res[i.group]){
          res[i.group] = [];
      }
      res[i.group].push(i);
  }
  let res2 = [];
  for(let j in res){
      res2.push({title: j, data: res[j] })
  }
  return res2;
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft : 10,
    paddingBottom: 5,
    paddingRight: 10,
    fontSize: 27,
    fontWeight: 'bold'
  },
  list: {
    backgroundColor: '#cedede'
  }
});

export default ExersiseList;  