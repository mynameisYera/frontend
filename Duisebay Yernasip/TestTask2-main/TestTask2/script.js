// Использовать Fetch для отправки запроса к REST API и получения списка пользователей. 
// Затем обработать полученные данные и динамически создать элементы для каждого пользователя, отображая их на странице.

//Example 

// Name: Leanne Graham
// Email: Sincere@april.biz
// Phone: 1-770-736-8031 x56442

//Дополнительно можете реализовать функции, такие как сортировка пользователей, добавление новых пользователей, поиск пользователей и обработку ошибок при загрузке данных.

// Для получение данных =>
// https://jsonplaceholder.typicode.com/users

const list = document.getElementById('user-list');
const get = document.getElementById('load-users');
const izde = document.getElementById('izdeu')
let USERS = []

izde.addEventListener('input', () => {
    const value = event.target.value.toLowerCase()
    const filtered = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)
    })
    getN(filtered) 
})


get.onclick = function(){
    izde.style.display = 'block'
    start();
}

async function start() {
    list.innerHTML = '<p style=" font-size:20px">loading.....</p>'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setTimeout(()=>{
            USERS = data
            getN(data)
        }, 1000)
    } catch (error) {
        list.innerHTML = `<p style=" font-size:20px; color: red">QAteee bar,  ${error}</p>`
    }
}

function getN(users = []) {
    const html = users.map(shygaru).join('');
    list.innerHTML = html; 
}

function shygaru(user) {
    return `
    <li class="listok">
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    </li>
    `;
}







