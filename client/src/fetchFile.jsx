import React from "react";

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
        console.log(body)
        const json = await response.json();
        const data = await json;
        return data;
    }
    catch (err) {
        console.log(err)
    }

}

async function fetchGetReq(route, body) {
    console.log("fetchPostReq");
    console.log(body)
    try {
        const response = await fetch(`http://localhost:8080/${route}`, {
            method: 'GET',
            body: JSON.stringify(body),
            //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        console.log(body)
        const json = await response.json();
        const data = await json;
        return data;
    }
    catch (err) {
        console.log(err)
    }

}
export { fetchPostReq, fetchGetReq }