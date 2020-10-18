import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image,FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [people , setPeople] = useState([

    {name:'Pizza',quantity:'20 items' ,images: require('./assets/pizza.jpg') ,key:'1'},
    {name:'Salad',quantity:'10 items' ,images: require('./assets/salad.jpg') ,key:'2'},
    {name:'Desserts',quantity:'40 items' ,images: require('./assets/dessert.jpg') ,key:'3'},
    {name:'Pasta',quantity:'13 items' ,images: require('./assets/pasta.jpg') ,key:'4'},
    {name:'Beverage',quantity:'20 items' ,images: require('./assets/beverages.jpg') ,key:'5'},
  ]);

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <MaterialIcons name='menu' size={30} style={styles.line} color="white" />
    <FontAwesome5 name="shopping-basket" size={17} color="lightgrey" style={styles.basket} />
    
    <View>
    <Text style={styles.headerText}></Text>
      </View>
    </View>
      <FlatList 
        data={people}
        renderItem ={({item}) => (
          <TouchableOpacity>
          <View style= {styles.myStyle}>
             <View style={styles.food}>
            
              <Image source = {item.images} style={styles.image} />
              <Text style={styles.input}>{item.name}</Text>
              <View style={styles.items}>
              <Text style={styles.quantities}>{item.quantity}</Text>
             <MaterialCommunityIcons name="greater-than" size={20} color="black" style={styles.arrow} />
              </View>
              </View>
              </View>

               </TouchableOpacity>
               
           )}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E91E63',
      paddingTop:15,
      paddingHorizontal:10,
      borderRadius:20,
      
     },
     header: {
       flexDirection:'row',
       justifyContent: "space-between",
     },
     line:{
       paddingBottom:10,
       
     },
     basket: {
       paddingTop:10,
       marginLeft: 300,
     },
     food: {
       marginTop:10,
       padding:5,
       fontSize:24,
       flexDirection: "row",
       justifyContent: 'space-between',
     }, 
     image: {
       width: 120,
       height: 100,
       borderRadius:50,
       
     },
     myStyle:{
      backgroundColor : 'white',
      borderWidth:0.5,
     },
     input: {
       fontSize: 28,
       fontWeight: 'bold',
       
     },
     items: {
      textAlign:"center",
      
     },
     quantities: {
     marginTop:15,
     color: "#333",
     textAlign: "center",

      },
    arrow: {
      paddingTop: 15,
      paddingLeft:50,
      color:'lightgrey'
    }


  });
