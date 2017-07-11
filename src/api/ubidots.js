var ubidots = { 
    getTemperature: function(cb) {
        fetch("http://localhost:5000/api/v1/temperature").then((response) => {
            return response.json();       
        }).then((response) => {
            return cb(response.data);
        })
    }
}

export default ubidots