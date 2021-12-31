document.querySelector('.img-btn').addEventListener('click', function()
    {
        document.querySelector('.cont').classList.toggle('s-signup')
    }
);

////////////////////////    

const urlUserApi = "https://61cb5054194ffe0017788ce8.mockapi.io/ZETA/user"

async function getDataUserApi(urlUserApi){
    return await fetch(urlUserApi).then(res=>res.json())
}

async function checkAcc(urlApi, username, password){
    let data = await getDataUserApi(urlApi)
    for (const datum of data) {
        if (datum.account.user === username && datum.account.password === password){
            return datum.id
        }
    }
    return false
}

function displayUserError() {
    document.querySelector('.user-header').style.color = 'red'
    document.querySelector('.user-header').innerHTML = '* User'
    document.querySelector('.password-header').style.color = 'red'
    document.querySelector('.password-header').innerHTML = '* Password'
}

function undoUserError() {
    document.querySelector('.user-header').style.color = 'black'
    document.querySelector('.user-header').innerHTML = 'User'
    document.querySelector('.password-header').style.color = 'black'
    document.querySelector('.password-header').innerHTML = 'Password'
}

async function login(urlApi){
    let username = document.getElementById('v-user').value
    let password = document.getElementById('v-password').value

    let userID = await checkAcc(urlApi, username, password)

    if (userID){
        localStorage.setItem('userOfLNIKE', userID)
        window.location.assign('../index.html')
        return
    }
    displayUserError()
}