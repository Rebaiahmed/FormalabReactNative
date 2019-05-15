import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,CameraRoll,WebView
} from 'react-native';
import { Avatar, Button, Icon, } from 'react-native-elements';

import { Constants, FileSystem, DocumentPicker, ImagePicker,WebBrowser,Permissions   } from 'expo';


const SCREEN_WIDTH = Dimensions.get('window').width;

const Files = [
  {
    name: 'File one',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },

  {
    name: 'File Two',
    url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },

  {
    name: 'File three',
    url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  
];


export default class FilesScreen extends React.Component {


    constructor(props) {
        super(props);
    
        this.state = {
          files :[], 
        };
    }


    


download = async (url)  =>{
console.log('url'+url);
  WebBrowser.openBrowserAsync(url);

}



showComment = () =>{
  this.props.navigation.navigate('Comments');
}



    renderCard(user, index) {
        const { name, avatar } = user;
    
        return (
          <View
            key={index}
            style={{
              height: 60,
              marginHorizontal: 10,
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 5,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
              
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  color: '#f30817',
                  fontWeight :'bold'
                }}
              >
                {name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: 10,
              }}
            >
          
              <View
                style={{
                  backgroundColor: 'rgba(222,222,222,1)',
                  width: 35,
                  height: 28,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity onPress={this.download}>
                <Icon name="ios-download" type="ionicon" color="gray" size={20} />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: 'rgba(222,222,222,1)',
                  width: 35,
                  height: 28,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity onPress={this.showComment}>
                <Icon name="comment" type="fontawesome" color="#f30817" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    
      renderListCards() {
        return _.map(Files, (user, index) => {
          return this.renderCard(user, index);
        });
    }


  render() {
    return (
      <View style={styles.container}>
      <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
      <SafeAreaView
          style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}
        >
       
         
          <ScrollView style={{ flex: 1, marginBottom: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 5,
                alignItems: 'center',
                marginHorizontal: 10,
                height: 250,
                marginBottom: 10,
              }}
            >
              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    width={145}
                    height={145}
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                    }}
                    activeOpacity={0.7}
                    avatarStyle={{ borderRadius: 145 / 2 }}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      marginTop: 10,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#f30817',
                        marginLeft: -15,
                      }}
                    >
                      Nom Prenom
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300,
                  borderWidth: 0.5,
                  borderColor: 'rgba(222, 223, 226, 1)',
                  marginHorizontal: 20,
                  height: 1,
                  marginVertical: 10,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Button
                    title="Add File"
                    buttonStyle={{
                      height: 33,
                      width: 120,
                      color :'#f30817',
                      backgroundColor: '#ffffff',
                      borderRadius: 5,
                    }}
                    titleStyle={{
                      fontSize: 13,
                      color: '#f30817',
                    }}
                    onPress={this._pickDocument}
                    underlayColor="transparent"
                  />
                  <Icon name="ios-cloud-upload" type="ionicon" color="gray" size={20} />
                </View>
              
              </View>
            </View>
            {this.renderListCards()}
          </ScrollView>
</SafeAreaView>
      </ScrollView>
</View>


    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },


});
