export const getAll = (url,headers) => {

    return fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }
    )
    .then(res => res.json())
    .then(json => json)
    .catch(console.log)
}

export const create = (url,headers, data) => {

    console.log(JSON.stringify(data))

    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }
    )
    .then(res => res)    
    .catch(console.log)
}