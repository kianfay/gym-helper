import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import axios from "axios";

const ExersiseItem = ({ item: exersise }) => {
  let row = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    marginBottom: 5,
    backgroundColor: testDate(exersise.date, 2),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)"
  }

  return (
    
    <TouchableHighlight onLongPress={() => updateDate(exersise.id)} underlayColor="white">
      <View style={row} >
        <View style={styles.rowData}>
          <Text style={styles.rowDataText}>{exersise.exersise}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

/* Function which returns the right colour of the exersise item, using its date item,
// and comparing it to todays date.
//    Params:
//      lastSession - a date
//      session - number of days between sessions
//    Returns:
//      colour to style exersise item
*/
const testDate = (lastSession, session) => {
  let sessionLength = 86400000 * session; //milliseconds in a day * session length
  let today = new Date();
  let timeSinceLastSession = today.getTime() - lastSession;
  if(timeSinceLastSession <= sessionLength){
    return 'green';
  }else if(timeSinceLastSession <= sessionLength * 2){
    return 'orange';
  }else {
    return 'rgba(150,0,0,0.6)';
  }
}

/* This sends a post request to the backend server at port 3001, with an updated
// time for the exercise with the given ID.
//  Params:
//    id - the id of which object to change in the json
*/  
const updateDate = (id) => {
  let body = {
    id: id
  };

  axios
    .post("/exercises", body);
  
  alert("done");

}

const styles = StyleSheet.create({
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
    borderRadius: "50%",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)"
  },
  rowData: {
    flex: 1
  },
  rowDataText: {
    fontSize: 24,
    textTransform: "capitalize",
    color: "#333300"
  },
});

export default ExersiseItem;