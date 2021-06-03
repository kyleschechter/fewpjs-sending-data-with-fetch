// Add your code here
    const testOneUrl = 'http://localhost:3000/users'
   
    function submitData(name, email) {
        return fetch(testOneUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(resp => resp.json())
        .then(data => document.body.append(data.id)
        )
        .catch(error => document.body.append(error.message)
        )
    }