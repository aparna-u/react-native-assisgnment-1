import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
export default function ListItems(props) {
return (
<View>
<FlatList
data={props.listItems}
renderItem={({ item }) => (
<View>
<TouchableOpacity
style={{
padding: 15,
backgroundColor: '#f8f8f8',
borderBottomWidth: 1,
borderColor: '#eee',
width: 180,
marginTop: 5,
justifyContent: 'space-between',
flexDirection: 'row',
display: 'flex',
}}
>
<Text> {item.task}</Text>
<Button
title="Delete"
onPress={() => {
props.deleteItem(item.id);
}}
></Button>
</TouchableOpacity>
</View>
)}
></FlatList>
</View>
);
}