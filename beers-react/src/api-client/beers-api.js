let beersApi

(function(){

    function call(path){
        return fetch(`${url.baseUrl}/${path}`)
        .then(res => res.json())
        .catch(err => err.message)
    }

    const url = {
        baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

        search: query => call(`search/all?q=${query}`),

        retrieve: id => call(`beer/${id}`)
    }

    beersApi = url
})()

module.exports = beersApi