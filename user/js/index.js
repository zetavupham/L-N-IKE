const urlUserApi = "https://61cb5054194ffe0017788ce8.mockapi.io/ZETA/user"

async function getDataUserApi(urlUserApi){
    return await fetch(urlUserApi).then(res=>res.json())
}

async function getUser(id, urlUserApi){
    let users = await getDataUserApi(urlUserApi)
    for (const user of users) {
        if (user.id === id){
            return user
        }
    }
}

async function renderUser(userID, urlUserApi){
    let user = await getUser(userID, urlUserApi)
    
    document.getElementById('v-user__icon').innerHTML = `<i class="ri-user-line"></i>`
    document.querySelector('.willNone').style.display = 'none'
    document.getElementById('v-user__name').innerHTML = 'Hi, ' + user.profile.lastName;
}

function checkIdUser() {
    let userID = localStorage.getItem('userOfLNIKE')
    if (userID === null){
        return false
    }
    return userID
}

window.onload = () => {
    let userID = checkIdUser()
    try {
        if (!userID){
            throw 'null'
        }
        renderUser(userID, urlUserApi)
    } catch (err) {
        console.log('fail')
    }
}

function changeUrl(){
    let userID = checkIdUser()
    if (!userID){
        document.getElementById('v-user__name').href = './page/sisu.html'
    }
}
