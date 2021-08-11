import React ,{Component} from 'react';
import { View,Text,StyleSheet,TextInput, Alert,TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import Animation from '../components/Animation';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            phoneNumber:'',
            password:'',
            isModalVisible:'false',
        }
    }

    showModal=()=>{
        return(
            <Modal 
            animationType="fade"
            transparent={true}
            visble={this.state.isModalVisible}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{width:'80%'}}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text styles={styles.modalTitle}>SIGNUP</Text>
                            <TextInput style={styles.formTextInput}
                            placeholder={"name"}
                            maxLength={15}
                            onChangeText={(text)=>{
                                this.setState({
                                    name:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"age"}
                            keyboardType={'numeric'}
                            maxLength={2}
                            onChangeText={(number)=>{
                                this.setState({
                                    age:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"bloodGroup"}
                            maxLength={3}
                            onChangeText={(text)=>{
                                this.setState({
                                    bloodGroup:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"address"}
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    address:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"contact"}
                            keyboardType={'numeric'}
                            maxLength={10}
                            onChangeText={(text)=>{
                                this.setState({
                                    contact:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}
                            />
                            <TextInput style={styles.formTextInput}
                            placeholder={"confirmPassword"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    confirmPassword:text
                                })
                            }}
                            />
                        
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    
    userSignUp=(phoneNumber,password)=>{
        firebase.auth().createUserWithPhoneNumberAndPassword(phoneNumber,password)
        .then((response)=>{
            return Alert.alert("added User")
        })
        .catch(function(error){
            var errorcode=error.code
            var errormessage=error.message
            return Alert.alert(errormessage)
        })
    }

    userLogin=(phoneNumber,password)=>{
        firebase.auth().signInWithPhoneNumberAndPassword(phoneNumber,password)
        .then((response)=>{
            return Alert.alert("logged in")
        })
        .catch(function(error){
            var errorcode=error.code
            var errormessage=error.message
            return Alert.alert(errormessage)
        })
    }
    render(){
        return(
            <View>
                <Animation/>
                <TextInput
                style={styles.loginBox}
                placeholder="phone-number"
                keyboardType='phone-number'
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}
                />
                <TextInput
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="enter password"
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}
                />
                <TouchableOpacity 
                style={[styles.button,{marginBottom:25,marginTop:25}]}
                onPress={()=>{this.userSignUp(this.state.phoneNumber,this.state.password)}}>
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.button,{marginBottom:25,marginTop:25}]}
                onPress={()=>{this.userLogin(this.state.phoneNumber,this.state.password)}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{ 
        width: 300,
        height: 40, 
        borderBottomWidth: 1.5, 
         borderColor : 'blue', 
         fontSize: 20, 
         margin:10, 
         paddingLeft:10,
         alignSelf:'center'
        },
        button:{ 
            width:300, 
            height:50, 
            justifyContent:'center', 
            alignItems:'center', 
            alignSelf:'center',
            borderRadius:25, 
            backgroundColor:"aqua", 
            shadowColor: "#000", 
        },
        buttonText:{ 
            color:'#ffff', 
            fontWeight:'200', 
            fontSize:20 
        },
        modalContainer:{
            width:250,
            height:50,
            justifyContent:'center',
            alignSelf:'center',
            alignItems:'center'
        },
        KeyboardAvoidingView:{
            
        },
        formTextInput:{
            width:200,
            height:50,
            justifyContent:'center',
            alignSelf:'center',
            alignItems:'center',
            backgroundColor:"aqua"
        },
        modalTitle:{
            color:'#ffff',
            fontWeight:'200',
            fontSize:20
        }
    })

