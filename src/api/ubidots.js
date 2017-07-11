var ubidots = { 
    getTemperature: function() {
        
        fetch("http://localhost:5000/api/v1/temperature").then(function(response) {
            debugger
            return response;       
        })

    }
}

export default ubidots