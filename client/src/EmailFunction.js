

export const PostEmail = async (id, name, pass, email) => {
    console.log("her")
    const h = { IdWorker: id, Name: name, Password: pass, Email: email }
    // await PostUser()
    fetch('http://localhost:8080/Email', {
        method: 'POST', body: JSON.stringify(h)
        , mode: 'cors', headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        return response.json()
    })
        .catch(h => console.log(h));
}