const inputName = document.getElementById('name');
const inputPassword = document.getElementById('pass');
const enviar = document.getElementById('enviar');

const takeUsers = () => {
    const user = {
        name: inputName.value,
        password: inputPassword.value
    }
    // console.log(user)

}
const restPhoneApi = axios.create({
    baseURL: 'https://desolate-reef-58953.herokuapp.com/'
});




const getAllPhone = () => {
    restPhoneApi
        .get('api/persons')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
            document.write(JSON.stringify(responseFromApi.data))
        })
        .catch(err => console.log('error ', err));
}

const hacerUnPost = () => {
    const user = {
        user: inputName.value,
        password: inputPassword.value
    }
    console.log(user);
    restPhoneApi
        .post('login', user)
        .then(res => console.log('login succsesful'))
        .catch(err => console.log(err));
    
}

const hacerUnLogout = () => {
    restPhoneApi
        .get('logout')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
        })
        .catch(err => console.log('error ', err));
}


document.getElementById('logout').onclick = hacerUnLogout;
enviar.addEventListener('click', hacerUnPost);
document.getElementById('theButton').onclick = getAllPhone;