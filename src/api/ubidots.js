var ubidots = { 
    getTemperature: function(cb) {
       
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/temperature").then((response) => {
            debugger
            return response.json();       
        }).then((response) => {
            debugger
            return cb(response.data);
        })
    },

    getHumidity: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/humidity").then((response) => {
            debugger
            return response.json();       
        }).then((response) => {
            debugger
            return cb(response.data);
        })
    },

    getLight: function(cb) { 
         
        var endpoint = location.href || 'http://localhost:5000/' 
        fetch(endpoint + "api/v1/light").then((response) => { 
            debugger 
            return response.json();        
        }).then((response) => { 
            debugger 
            return cb(response.data); 
        }) 
    }, 

    getDust: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/dust").then((response) => {
            debugger
            return response.json();       
        }).then((response) => {
            debugger
            return cb(response.data);
        })
    },

    getRain: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/rain").then((response) => {
            debugger
            return response.json();       
        }).then((response) => {
            debugger
            return cb(response.data);
        })
    },

    getPressure: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/pressure").then((response) => {
            debugger
            return response.json();       
        }).then((response) => {
            debugger
            return cb(response.data);
        })
    }
}

export default ubidots