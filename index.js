const keyName = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
]

const keyLetterEng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
]

const keyLetterRu = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
]

const keyShiftRu = [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
]

const keyShiftEng = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']
]

const reSpecialBtn = /Backspace|ShiftLeft|ShiftRight|ControlLeft|ControlRight|MetaLeft|AltLeft|AltRight|CapsLock|Tab|Enter/;

function init() {
    let body = document.querySelector('body');
    body.innerHTML += '<textarea class="input-text" readonly></textarea>';
    body.innerHTML += '<div class="keyboard"></div>';
    let keyboard = document.querySelector('.keyboard');
    for (let i = 0; i < keyName.length; i++) {
        keyboard.innerHTML += '<div class="keyboard-row"></div>';
        let keyRow = document.querySelectorAll('.keyboard-row');
        keyRow = keyRow[keyRow.length - 1];
        for (let j = 0; j < keyName[i].length; j++) {
            keyRow.innerHTML += '<div class="keyboard-key" key-type="' + keyName[i][j] + '"></div>';
            let key = document.querySelectorAll('.keyboard-key');
            key = key[key.length - 1];
            let rusUp = !reSpecialBtn.test(keyName[i][j]) ? keyLetterRu[i][j].toUpperCase() : keyLetterRu[i][j];
            let engUp = !reSpecialBtn.test(keyName[i][j]) ? keyLetterEng[i][j].toUpperCase() : keyLetterEng[i][j];
            key.innerHTML += '<span class="rus"><span class="caseDown">' + keyLetterRu[i][j] + '</span><span class="caseUp">' + rusUp + '</span><span class="shift">' + keyShiftRu[i][j] + '</span></span><span class="eng"><span class="caseDown">' + keyLetterEng[i][j] + '</span><span class="caseUp">' + engUp + '</span><span class="shift">' + keyShiftEng[i][j] + '</span></span>';
        }
    }
    document.querySelectorAll('.eng').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.caseUp').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.shift').forEach(el => el.classList.add('hidden'));
}

init();

const buttons = document.querySelectorAll('.keyboard-key');
const textarea = document.querySelector('.input-text');

window.addEventListener('keydown', function (e) {
    let el = document.querySelector(
        `[key-type="${e.code}"]`
    );
    el.classList.add('active');
    keyAction(el);
})

window.addEventListener('keyup', function (e) {
    let el = document.querySelector(
        `[key-type="${e.code}"]`
    );
    el.classList.remove('active');
})

buttons.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
    }, 125);
    keyAction(btn);
}));

function showText(btn){
    let index = 0;
    if (btn.childNodes[0].classList.contains('hidden')) {
        index = 1;
    }
    for (child of btn.childNodes[index].childNodes) {
        if (!child.classList.contains('hidden')) {
            textarea.value += child.textContent;
        }
    }
}

function keyAction(btn){
    if(!reSpecialBtn.test(btn.getAttribute('key-type'))){
        showText(btn);
    }
    else{
        if(btn.getAttribute('key-type') === 'Backspace'){
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
        }
        else if(btn.getAttribute('key-type') === 'CapsLock'){
            changeCase();
        }
    }
}

function changeLang() {
    if (document.querySelector('.eng').classList.contains('hidden')) {
        document.querySelectorAll('.eng').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.rus').forEach(el => el.classList.add('hidden'));
    }
    else {
        document.querySelectorAll('.rus').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.eng').forEach(el => el.classList.add('hidden'));
    }
}

function changeCase() {
    if (document.querySelector('.caseUp').classList.contains('hidden')) {
        document.querySelectorAll('.caseUp').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.caseDown').forEach(el => el.classList.add('hidden'));
    }
    else {
        document.querySelectorAll('.caseDown').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.caseUp').forEach(el => el.classList.add('hidden'));
    }
}