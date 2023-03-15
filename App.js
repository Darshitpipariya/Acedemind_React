import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Goalinput from './components/Goalinput';
import GoalFlatList from './components/GoalFlatList';
import GoalScrollViewItem from './components/GoalScrollViewItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [overlayView,setOverlayView]=useState(false);
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

  function deleteGoalHangler(key) {
    console.log("Delete");
    setCourseGoals((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal)=> goal.key!==key);
    });
  }

  function openOverlay() {
    setOverlayView(true);
  }
  function closeOverlay(){
    setOverlayView(false);
  }
  return (
    <View style={styles.container}>
      <Button title='add new Goal' onPress={openOverlay}/>
      <Goalinput visible={overlayView} addGoalHandler={addGoalHandler} closeOverlayView={closeOverlay}/>
      {/* <GoalScrollViewItem courseGoals={courseGoals} deleteGoalHangler={deleteGoalHangler}/> */}
      <GoalFlatList courseGoals={courseGoals} deleteGoalHangler={deleteGoalHangler}/>
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
