  

// POST, PUST, DELETE 

import config from "../env/config"

const basemanager = {

    get: async (url) => {

        let responsedata;

        await fetch(config.apiurl + url)
            .then((res) => res.json())
            .then((data) => {
                responsedata = data;
            });

        return responsedata;

    },

    post: async (url, data) => {

        let resultdata;
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        await fetch(config.apiurl + url, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                resultdata = data;
            });

        return resultdata;

    }

}


export default basemanager