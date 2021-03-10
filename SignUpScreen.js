import * as React from 'react';
import {Text,View, TextInput, ScrollView, KeyboardAvoidingView, Model, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {Header} from 'react-native-elements'
import AppTabNavigator from '../Components/AppTabNavigator'

export default class SignUpScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            First_Name : '',
            Last_Name : '',
            Email_Id : '',
            PassWord : '',
            Confirm_Password : '',
            IsModalVisible : 'false'
        }
    }

    userSignUp = (PassWord, Email_Id, Confirm_Password) =>{
         if(PassWord !== Confirm_Password){
             alert("Password does not match")
         }
         else {
             firebase.auth().createUserWithEmailAndPassword(Email_Id, PassWord)
             .then((response)=>{
                 db.collection('users').add({
                     First_Name : this.First_Name,
                     Last_Name : this.Last_Name,
                     PassWord : this.PassWord,
                     Email_Id : this.Email_Id,
                     Confirm_Password : this.Confirm_Password
                 })
                 alert("Your account has been created")
                 '',
                 [
                     {text : OK, onPress:()=> this.setState({'IsModalVisible' : false})}
                 ]
             })
             .catch((error)=>{
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 alert("there has been an error")
             })
         }

    }

    userLogin = (PassWord, Email_Id) =>{
        firebase.auth().createUserWithEmailAndPassword(Email_Id, PassWord)
        .then(()=>{
         this.props.navigate.navigation(writeReviews)
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("there has been an error")
        })
    }

    ShowModal = ()=>{
        return(
          <Model animationType = "true"
          transparent = {true}
          visible = {this.state.isModalVisible}>
          <ScrollView style = {{width : '100%'}}>
          <KeyboardAvoidingView>
            <Text>Sign Up Form</Text>

            <TextInput style = {styles.textInput}
            placeHolder = "first name"
            onChangeText = {(text)=>{
                this.setState({
                    First_Name : text
                })
            }}/>

            <TextInput style = {styles.textInput}
            placeHolder = "last name"
            onChangeText = {(text)=>{
                this.setState({
                    Last_Name : text
                })
            }}/>

            <TextInput style = {styles.textInput}
            placeHolder = "Email Id"
            onChangeText = {(text)=>{
                this.setState({
                    Email_Id : text
                })
            }}/>

            <TextInput style = {styles.textInput}
            placeHolder = "password"
            onChangeText = {(text)=>{
                this.setState({
                    PassWord : text
                })
            }}/>

             </KeyboardAvoidingView>
             </ScrollView>
             </Model>
        )
    }



    
    render(){
        return(
            <View>
             <View style = {{justifyContent : 'center', alignItems : 'center'}}>
            {this.ShowModal()} 
             </View>

             <Header backgroundColor = "yellow"
             centerComponent = {{text: 'Movie Reviews',
             style : {fontSize : 28, fontWeight : 'bold', color : 'black'}
             }}/>


                <TextInput style = {styles.textInput}
                   placeHolder = 'first name'
                   onChangeText = {(text)=>{
                       this.setState({
                       First_Name : text
                    })
                   }}/>

                   <TextInput style = {styles.textInput}
                   placeholder = "last name"
                   onChangeText = {(text)=>{
                       this.setState({
                       Last_Name : text
                    })
                   }}/>

                   <TextInput style = {styles.textInput}
                   placeholder = 'email id'
                   keyboardType = 'email-address'
                   onChangeText = {(text)=>{
                       this.setState({
                       Email_Id : text
                    })
                   }}/>

                   <TextInput style = {styles.textInput}
                   placeholder = 'password'
                   secureTextEntry = 'true'
                   onChangeText = {(text)=>{
                       this.setState({
                       PassWord : text
                    })
                   }}/>

                   <TextInput style = {styles.textInput}
                   placeholder = 'confirm password'
                   secureTextEntry = 'true'
                   onChangeText = {(text)=>{
                       this.setState({
                       Confirm_Password : text
                    })
                   }}/>

                   <TouchableOpacity style = {styles.signUp}
                   onPress = {()=>{
                       this.userSignUp(this.state.PassWord, this.state.Email_Id)
                        
                   }}/>
                   <Text style = {styles.text}>Sign Up</Text>

                   <TouchableOpacity style = {styles.login}
                   onPress = {()=>{
                       this.userLogin(this.state.Password, this.state.Email_Id)
                   }}/>

                   <Text style = {styles.text}>Login</Text>
                   
           </View>
        )
    }
}


const styles = StyleSheet.create({
    textInput : {
        width : 200,
        height : 20,
        border : 'solid',
        color : 'black'
    },
    text : {
     color : 'black',
     fontSize : 20
    },
    signUp : {
        border : 'solid',
        width : 150,
        height : 20
    },
    login : {
        border : 'solid',
        width : 150,
        height : 20
    }
})
