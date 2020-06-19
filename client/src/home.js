import React from "react";
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import ExersiseList from "./exercise-list"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getExercises();
  }
  
  state = {
    exercises: [],
    loading: true
  };
  
  async getExercises() {
    const res = await fetch("/exercises");
    const { results } = await res.json();
    this.setState({ exercises: [...results], loading: false });
  }

  render() {
    return (
      <ScrollView
        noSpacer={true}
        noScroll={true}
        style={styles.container}
        contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
      >
       {this.state.loading ? (
         <ActivityIndicator
         style={[styles.centering, styles.gray]}
         color="#ff8179"
         size="large"
       />) : (
         <ExersiseList exercises = {this.state.exercises} />
       )}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
});

export default Home;