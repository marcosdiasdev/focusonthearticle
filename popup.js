let focusBtn = document.querySelector('#focus');
let clicked = false;
let script;

focusBtn.addEventListener('click', function() {
    clicked = !clicked;
    if(clicked) {
        focusBtn.innerHTML = 'Undo';
        script = 'focus.js';
    } else {
        focusBtn.innerHTML = 'Focus'
        script = 'undo.js';
    }
    chrome.tabs.executeScript(null, {file: script});
});