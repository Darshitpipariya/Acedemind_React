import { View, Text, StyleSheet, ScrollView ,Pressable } from 'react-native'
import React from 'react'

export default function GoalScrollViewItem(props) {
    return (
        <View style={styles.viewGoalContainer}>
            <ScrollView>
                <Text style={{ fontWeight: "bold", fontSize: 20, margin: 5, padding: 5 }}>List of goals</Text>
                {props.courseGoals.map((goal) => {
                    return <Pressable android_ripple={{color:"#1111dd"}} onPress={props.deleteGoalHangler.bind(this,goal.key)}><Text key={goal.key} style={styles.goalList}>{goal.val}</Text></Pressable>
                }
                )}
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    viewGoalContainer: {
        flex: 3,
        flexDirection: "column",
        marginTop: 10
    },
    goalList: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 10,
        marginLeft: 5,
        marginBottom: 8,
        fontStyle: "italic",
        fontWeight: "700",
        fontSize: 19,
        borderRadius: 10,
        backgroundColor: "#5ecccc",
        textAlign: "center"
    }
});