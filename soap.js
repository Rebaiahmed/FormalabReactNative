 var soap = require('soap');
  var url = 'http://192.168.1.62/Airlineh.nsf/cad425c1545d021fc12583ef00133dae/450aa14fa1cbb054c12583fa00723170?OpenDocument';
  var args = {name: 'value'};
  soap.createClientAsync(url).then((client) => {


    console.log('client'+ JSON.stringify(client));
    //return client.MyFunctionAsync(args);
  }).then((result) => {
    console.log(result);
  });
