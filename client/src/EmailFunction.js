

export const PostEmail = async (id, name, pass, email) => {
    const h = { IdWorker: id, Name: name, Password: pass, Email: email }
    await PostUser()
    fetch('http://localhost:8080/api/Email', {
        method: 'POST', body: JSON.stringify(h)
        , mode: 'cors', headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        debugger
        return response.json()
    })
        .catch(h => console.log(h));
}