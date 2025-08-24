function saveName() {
    const userNameInput = document.getElementById('userNameInput');
    const userName = userNameInput.value;
    console.log('Сохраненное имя: ' + userName);
    localStorage.setItem('userName', userName);
}

let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    screen1.classList.remove('visible');
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
    screen2.classList.add('visible');
});




