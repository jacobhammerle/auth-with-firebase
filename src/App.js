import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyACg2iL-Mq00XUJsUjBeUAUJGwZRmHtk5Q',
		    authDomain: 'authentication-2da66.firebaseapp.com',
		    databaseURL: 'https://authentication-2da66.firebaseio.com',
		    projectId: 'authentication-2da66',
		    storageBucket: 'authentication-2da66.appspot.com',
		    messagingSenderId: '1071797343361'
  		});

  		firebase.auth().onAuthStateChanged((user) => {
  			if(user) {
  				this.setState({ loggedIn: true });
  			} else {
  				this.setState({ loggedIn: false });
  			}
  		})
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				)
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		)
	}
}

export default App;