import React from 'react';
import LottieView from 'react-native-web-lottie';

export default class Animation extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/donar.json')}
            style={{width:"15%",alignSelf:'center'}}
            autoPlay loop
            />
        )
    }
}