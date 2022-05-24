import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TextInput,
  Button
  } from 'react-native';
import Card from './Components/Card';

export default function App() {

  const products = [
    {
      name : "Product 1",
      id: "10",
      price : "10"
    },
    {
      name : "Product 2",
      id: "20",
      price : "20"
    },
    {
      name : "Product 3",
      id: "30",
      price : "30"
    },
    {
      name : "Product 4",
      id: "40",
      price : "40"
    },
    {
      name : "Product 5",
      id: "50",
      price : "50"
    },
    {
      name : "Product 6",
      id: "60",
      price : "60"
    }
  ];



  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={itemData => (
          <Card
            id={itemData.item.id} 
            name={itemData.item.name}
            price={itemData.item.price}
          />
        )}
      />
      <View>
        <Text>Summary</Text>
        <Text>item count: </Text>
        <Text>total: EGP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    margin: 5,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius:20,
    textAlign: 'center',
    padding: 10
  },
  inputemail: {
    width: '80%',
    borderColor: 'black',
    margin: 5,
    color: 'black',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginLeft: 33,
    borderRadius:20,
    textAlign: 'center',
    padding: 10
  },
  row: {
    flexDirection: "row"
  },
  mar: {
    margin: 20,
  },
  marup: {
    marginTop: 15,
  },
  listItem: {
    width:"90%",
    backgroundColor: "#D7F9FB",
    borderRadius: 20,
    marginTop: 10,
    flexDirection: "row",
    borderWidth: 1,
    justifyContent:'center',
    alignContent: 'center'
},
});
