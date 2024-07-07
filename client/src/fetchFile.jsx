
async function fetchPostReq(route, body) {
    try {
        const response = await fetch(`http://localhost:8080/${route}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        const json = await response.json();
        const data = await json;
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

async function fetchGetByReq(route, idcategoryArray, usernamevolunteers) {
    try {
        const response = await fetch(`http://localhost:8080/${route}/${idcategoryArray}/${usernamevolunteers}`, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

async function fetchGetReq(route) {
    try {
        const response = await fetch(`http://localhost:8080/${route}`, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

async function fetchDeleteReq(route, params) {
    try {
        const response = await fetch(`http://localhost:8080/${route}/${params}`, {
            method: 'DELETE',
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        const json = await response.json();
        return json;
    }
    catch (err) {
        console.log(err)
    }
}

export { fetchPostReq, fetchGetReq, fetchDeleteReq, fetchGetByReq };