import React from "react";


async function fetchPostReq(url, body){
    try {
        const response = await fetch('http://localhost:8080/volunteer', {
            method: 'POST',
            body: JSON.stringify(paramsToSend),
            //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
        const data = await response.json();
        if (data.resualt == "userName duplicate") {
            alert('userName exist')

        }
        else {
            navigate(`/users/${currentUser.idUser}/volunteer`)
        }
    }
    catch (err) {
        console.log(err)
    }
}
export {fetchPostReq}