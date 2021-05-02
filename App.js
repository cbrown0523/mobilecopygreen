import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';


export default function Green() {
return (
  <SafeAreaView style = {styles.container}>
  <View style = {styles.contentBorder}>
      <View style = {styles.contentBorder3}>
        <View style = {styles.headerbg}>
        <Text style = {styles.header}>Green Creative</Text>
        <Text style = {styles.header2}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
        </View>
        
        <View style={styles.navContainer} >
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
 <Text style={styles.navBtnTxt}>Home</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
 <Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Portfolio</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>Prices</Text>
</TouchableHighlight>
</View>
<View style={styles.navButton}>

<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
<Text style={styles.navBtnTxt}>About</Text>
</TouchableHighlight>
</View>
</View>

<ScrollView style={styles.scroll}>
<View style= {styles.text}>
  <View  style= {styles.sec1}>
<Text style= {styles.heading}>Template Usage</Text>
<Text>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy smile</Text>
</View>
<View>
<Text style= {styles.sec4}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
  <Text style={ styles.readmore}>
    (read more)
  </Text>
</TouchableHighlight>
</View>
<View  style= {styles.sec2}>
<Text style= {styles.heading}>Another Title Goes Here!</Text>
<Text>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
<TouchableHighlight activeOpacity={0.6}
  underlayColor="#45ba7b" onPress={() => Linking.openURL('http://google.com')}>
  <Text style={ styles.readmore}>
  (read more)
  </Text>
</TouchableHighlight>
</View>
<View style= {styles.sec3}>
<Text style= {styles.heading}>Yet Another?</Text>
<Text  >Each title is an H1 tag, so choose them carefully smile</Text>
</View>
</View>
        </ScrollView>
      </View>
  </View>
  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection : "column",
    height:"100%",

  },
  text : {
    padding: 20,
  },
  contentBorder : {
    backgroundColor: "#679159",
    height : "100",
    padding:20,
    flex: 1,
    flexDirection:"column",
    height:100
  },

  contentBorder3 :{
    backgroundColor:'#f3f2f3',
    borderRadius:30,
    flex: 1,
    flexDirection:"column",
    height:100,
  },
  scroll:{
    flex:1
  },
  navContainer2: {
    flex: .05,
    
    },
    header : {
      fontSize:34,
      fontWeight:"800",
      paddingTop:15,
      color:"#252f33",
   },
  headerbg :{
    backgroundColor : "#ddbb45",
    padding:15,
    borderTopLeftRadius: 20,
    borderTopRightRadius : 20,
    paddingTop:1
  },
    header : {
      fontSize:24,
      fontWeight:"800",
      paddingTop:15,
      color : "#283823"
   },
   readmore : {
    padding:15
   },
   navBtnTxt : {
     color: "white",
     fontWeight : "600",
     fontSize : 14
   },
   header2: {
     fontSize:20,
     fontWeight: "600",
    color: "#679159",
    paddingBottom: 20
   },
      navContainer: {
        flexDirection: "row",
        flex: .02,
        backgroundColor:"#8c721b",
        paddingBottom: 35,
        },
        navButton: {
          flex: 1,      
          alignItems: "center",
          paddingTop: 7,
          width:100,
          color: "#fff",

          }, 
          navBtnTxt: {
            color:"#252f33",
            fontSize:14,
            fontWeight:"600"
          },
    
      sec1 :{
        backgroundColor: "#ebebec",
        borderRadius : 30,
        flex:1,
        paddingBottom:25
      },
      sec2 :{
        backgroundColor: "#ebebec",
        borderRadius : 30,
    
        paddingTop: 20,
        paddingBottom: 25
      },
      sec3 :{
        backgroundColor: "#ebebec",
        borderRadius : 30,
      flex:1,   
        paddingTop:20
      },
      sec4 :{
        paddingTop:10
      },
      heading : {
        fontSize : 20,
        fontWeight :"600",
      },
      button : {
        backgroundColor : "green"
      }
  
});