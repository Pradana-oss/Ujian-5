import React, { Component } from 'react'
import {Text} from 'react-native'
import auth from '@react-native-firebase/auth'
import { Btn } from '../utils'
class Home extends Component {

    state = {
        email :""

    }

    componentDidMount(){
        auth().onAuthStateChanged(user => {
            
            
        })
    }

    

    logout(){
        auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
            this.props.navigation.navigate();
        });
        

    }

    render(){
        return(
            <>
            <Text>Hello </Text>
            <Btn label= "Logout" onPress={() => this.logout()}/>
            </>
        );
    }
}

export default Home;