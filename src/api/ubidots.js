var ubidots = { 
    getTemperature: function(cb) {
       
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/temperature").then((response) => {
            return response.json();       
        }).then((response) => {
            return cb(response.data);
        })
    },

    getHumidity: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/humidity").then((response) => {
            return response.json();       
        }).then((response) => {
            return cb(response.data);
        })
    },

     getLight: function(cb) {
        
        var endpoint = location.href || 'http://localhost:5000/'
        fetch(endpoint + "api/v1/light").then((response) => {
            return response.json();       
        }).then((response) => {
            return cb(response.data);
        })
    }
}

export default ubidots