get
axios.get(urlString, 
    {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        params: {
            param1: string,
            param2: string
        },
    }
)
.then(res => fn)
.catch(e => fn)

post

axios.post(urlString, 
    {
        data: data,
    },
    {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }
)
.then(res => fn)
.catch(e => fn)