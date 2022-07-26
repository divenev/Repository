async function request(url, options) {
    try {
        let response = await fetch(url, options)
        if (response.ok == false) {
            const err = await response.json()
            throw new Error(err.message)
        }
        let responseData = await response.json()
        return responseData
    } catch (err) { alert(await err.message) }
}

export async function getRequest(url) {
    let result = await request(url)
    return result
}

export async function postRequest(url, data) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    if (sessionStorage.getItem('userData') != 'undefined' && sessionStorage.getItem('userData')) {
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        options.headers['X-Authorization'] = userData.accessToken;
    }
    let result = await request(url, options)
    return result
}