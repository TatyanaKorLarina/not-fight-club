
function saveName() {
    const userNameInput = document.getElementById('userNameInput');
    const userName = userNameInput.value;
    console.log('Сохраненное имя: ' + userName);
    localStorage.setItem('userName', userName);
}



