
import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,ToastAndroid,
    AsyncStorage,KeyboardAvoidingView,Image, StatusBar,WebView,ImageBackground } from 'react-native';
const parseString = require('react-native-xml2js').parseString;
export default class LoginScreen extends React.Component {




    constructor(props) {
        super(props);


        this.state = {   
        num_immatricule :'',
        password :'',
        submitted : false  ,
        errors: new Map(),
        showLoading: false, };
    
    }

    componentWillMount(){
   
        let err = new Map();
        err.set('num_immatricule','');
        err.set('password','');

        this.setState({errors: err});
    }




    verifyEmail = ( num_immatricule ) => {
        let errors = this.state.errors ;
        let submitted = this.state.submitted ;
    
      
        
        if(submitted==true)
        {
        
          if(num_immatricule=='')
          {
           
            errors.set('num_immatricule','Please put  num_immatricule !')
            this.setState({errors:errors})
          }
        else {
            errors.set('num_immatricule','')
            this.setState({errors:errors})
          }
        
        //*********set the value of email *******//
        
        }
        
        this.setState({ num_immatricule : num_immatricule})
        }
    
//******************VALIDATE THE PASSWORD
verifyPassword = (password ) => {
    let {errors, submitted} = this.state ;
    if(submitted==true)
    {
  
      
    
      if(password == "")
      {
      
      
        errors.set('password','Please put a password !.')
        this.setState({errors:errors})
      }
    else {
      console.log('we are here ehey')
    
        errors.set('password','')
        this.setState({errors:errors})
      }
    
    //*********set the value of email *******//
    
    }
    
    this.setState({password :password})
  }



  handleSubmit = () =>{

    console.log('SUBMITTED');


 

  let {num_immatricule,password, errors} = this.state ;
    //************data was submitted **************//
  this.setState({submitted :true})

  if(num_immatricule =='')
{
 
  errors.set('num_immatricule','Please put your num_immatricule')

}


if(password == "")
{
  errors.set('password','Please put a password !.')

}


this.setState({errors:errors})



//__________________________//
if(errors.get('num_immatricule') == '' && errors.get('password')=='')
{
 
  //let user ={email :email,password:password}
 
  //____here signn in --------------//

  //  showLoading
this.setState({showLoading:true})


if(num_immatricule=="admin" && password=="admin")
{

this.props.navigation.navigate('Documents');





 

}
}


      
  }




//********FUNCTION TO DISPLAY ERROR MESSAGE ******************//

renderErrorMsg(data) {

    return (data  ? <Text style={styles.errorMsg}>
      {data }
    </Text> : null);
  
  }




  render() {
    const { num_immatricule, password, showLoading,errors } = this.state;

  

    return (

<ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>

        <KeyboardAvoidingView behavior="padding" style={styles.container}>


<View style={styles.loginContainer}>

                  
</View>





<View style={styles.containerform}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Mobile Num' 
                            value={ num_immatricule}
                            placeholderTextColor='#f30817'  
                            onChangeText={(num_immatricule) => this.verifyEmail(num_immatricule)}/>


                  { this.renderErrorMsg(errors.get('num_immatricule')) }


                <TextInput style = {styles.input}   
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           placeholder='Password' 
                           placeholderTextColor='#f30817' 
                           secureTextEntry 
                           value={password}
                           onChangeText={(password) => this.verifyPassword(password)}/>
                   { this.renderErrorMsg(errors.get('password')) }
              <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit}  >
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
</View>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        //backgroundColor: '#ffffff',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
},

    containerform: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#f30817'
    },
    buttonContainer:{
        backgroundColor: '#f30817',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2980b6',
       color: '#fff'
    },
    errorMsg :{
      fontSize:16,
      color : 'red',
      fontWeight :'bold'
    }
   
});
