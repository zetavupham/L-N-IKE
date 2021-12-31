const urlUserApi = "https://61cb5054194ffe0017788ce8.mockapi.io/ZETA/user"

async function getDataUserApi(urlUserApi){
    return await fetch(urlUserApi).then(res=>res.json())
}
