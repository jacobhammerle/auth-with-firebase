import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyACg2iL-Mq00XUJsUjBeUAUJGwZRmHtk5Q',
		    authDomain: 'authentication-2da66.firebaseapp.com',
		    databaseURL: 'https://authentication-2da66.firebaseio.com',
		    projectId: 'authentication-2da66',
		    storageBucket: 'authentication-2da66.appspot.com',
		    messagingSenderId: '1071797343361'
  		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		)
	}
}

export default App;