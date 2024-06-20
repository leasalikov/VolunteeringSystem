import React from "react";
// import { useNavigate } from "react-router-dom";

// function FetchFile() {
    // const navigate = useNavigate();

    async function fetchPostReq(route, body) {
        console.log("fetchPostReq");
        console.log(body)
        let response;
        try {
            const response = await fetch(`http://localhost:8080/${route}`, {
                method: 'POST',
                body: JSON.stringify(body),
                //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
                headers: { "Content-type": "application/json; charset=UTF-8", },
            })
            console.log(body)
            const data = await response.json();
            // if (data.resualt == "userName duplicate") {
            //     alert('userName exist')
            // }
            // else {
                // navigate(`/users/${currentUser.idUser}/volunteer`)
            // }
        }
        catch (err) {
            console.log(err)
        }
        return response;
    }
// }
export { fetchPostReq }