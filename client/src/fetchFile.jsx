
async function fetchPostReq(route, body) {
    console.log("fetchPostReq");
    console.log(body)
    try {
        const response = await fetch(`http://localhost:8080/${route}`, {
            method: 'POST',
            body: JSON.stringify(body),
            //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        console.log("hgjghjjjjjjjjjjj ", body)
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
        if(route!="login"&&route!="register"){

            }
        const response = await fetch(`http://localhost:8080/${route}/${idcategoryArray}/${usernamevolunteers}`, {
            method: 'GET',
            // body: JSON.stringify(body),
            //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
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
    console.log("fetchDeleteReq");
    console.log(params)
    try {
        const response = await fetch(`http://localhost:8080/${route}/${params}`, {
            method: 'DELETE',
            // body: JSON.stringify(body),
            //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
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

// export { fetchPostReq, fetchGetReq, fetchGetByReq, fetchDeleteReq };
export { fetchPostReq, fetchGetReq, fetchDeleteReq, fetchGetByReq };
