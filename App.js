import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,createAppContainer
} from 'react-navigation';


//__________import necessaries screens________//
import LoginScreen from './screens/LoginScreen';
import DocumentScreen from './screens/DocumentsScreen';
import CommentsScreen from './screens/CommentsScreen';
import FilesScreen from './screens/FilesScreen';


const AppNavigator =  createAppContainer(
  createStackNavigator(
  {
    Login: LoginScreen,
    Documents: DocumentScreen,
    Comments:CommentsScreen,
    Files :FilesScreen
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
  }
));



export default class App extends React.Component {


  render() {
    return (
      <AppNavigator />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

styletexte :{
  fontWeight :'bold',
  fontSize : 20

}

});
