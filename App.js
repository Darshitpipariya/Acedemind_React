import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Goalinput from './components/Goalinput';
import GoalFlatList from './components/GoalFlatList';
import GoalScrollViewItem from './components/GoalScrollViewItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);



  

  function addGoalHandler(enteredGoal) {
    // when new state is depend on previous stare use function to upsate state insted of direclty changinf it
    setCourseGoals((currentGoal) => {
      return [...currentGoal, {
        val: enteredGoal,
        key: Math.random().toString()
      }];
    });
    console.log(courseGoals);
  }

  return (
    <View style={styles.container}>
      <Goalinput  addGoalHandler={addGoalHandler}/>
      {/* <GoalScrollViewItem courseGoals={courseGoals}/> */}
      <GoalFlatList courseGoals={courseGoals}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20

  },
  
  
  
});
