const parseString = require('react-native-xml2js').parseString;

export const API_URL ='https://c799a6d6.ngrok.io'




//----------------------Function Login-------------------//

export function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email':email, 'password':password })
    };
    

    return fetch(`${API_URL}/users/login`, requestOptions)

         
       
        //.then(handleResponse)
        
}



export function getMyDocs(userId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${API_URL }/mydocs/`+userId, requestOptions).then(user => user.json());
}


export function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email':email, 'password':password })
    };
    

    return fetch(`${API_URL}/users/login`, requestOptions)
       
        //.then(handleResponse)
        
}


//_____________EXAMPLE XML 

fetch('https://www.w3schools.com/xml/simple.xml')
.then(response => response.text())
.then((response) => {
    parseString(response, function (err, result) {



      result = JSON.stringify(result);
     
       console.log(result)
    });
}).catch((err) => {
    console.log('fetch', err)
})


