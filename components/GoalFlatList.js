import { View, Text, StyleSheet, FlatList ,Pressable} from 'react-native'
import React from 'react'

export default function GoalFlatList(props) {
    return (
        <View style={styles.viewGoalContainer} >
            <FlatList
                data={props.courseGoals}
                renderItem={(itemData) => {
                    return (
                    <Pressable onPress={props.deleteGoalHangler.bind(this,itemData.item.key)}>
                        <Text style={styles.goalList}> {itemData.item.val} </Text>
                    </Pressable>);
                }}
                keyExtractor={(item, index) => {
                    return item.key;
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
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