//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: H T T P   A N D   F O R M S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//
console.log('Encode "Yes?":', encodeURIComponent('Yes?'));
console.log('Decode "Yes%3F":', decodeURIComponent('Yes%3F'));

fetch('./example/data.txt').then((response) => {
    console.log(response.status);
    // header names are case insensitive
    console.log(response.headers.get('Content-Type'));
    console.log(response);
});

fetch('./example/data.txt')
    // getting the content of a response may take a while so it returns a response
    .then(response => response.text())
    .then(text => console.log('Response text:', text));

// 'fetch' makes a GET by default,
// to configure the request pass an object with the options as the second argument
fetch('./example/data.txt', { method: 'DELETE' })
    .then((response) => {
        console.log(response.status);
    });

// return only a part of a response(the first 20 characters)
fetch('./example/data.txt', { headers: { Range: 'bytes=0-19' } })
    .then(resp => resp.text())
    .then(text => console.log('First 20 characters:', text));

// currently focused elements
const input = document.getElementById('input');
input.focus();
console.log(document.activeElement.tagName);
// removes focus
input.blur();
console.log(document.activeElement.tagName);

const loginForm = document.getElementById('login-form');
console.log(loginForm.elements);
// Form.elements acts as an array-like object and a map,
// being able to access it's values through the 'name' property
console.log(loginForm.elements[1]);
console.log(loginForm.elements.name.type);
// each element of a form has a 'form' method which returns the containing form
console.log(loginForm.elements.password.form === loginForm);

const preventForm = document.getElementById('prevent-form');
preventForm.addEventListener('submit', (event) => {
    console.log('Saving value:', preventForm.elements.value.value);
    event.preventDefault();
});

const article = document.getElementById('article');
function replaceSelection(field, word) {
    const from = field.selectionStart;
    const to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word + field.value.slice(to);
    // put the cursor after the word
    field.selectionStart = from + word.length;
    field.selectionEnd = from + word.length;
}
article.addEventListener('keydown', (event) => {
    // if F2 is pressed, insert the name 'Khasekhemwy'
    if (event.keyCode === 113) {
        replaceSelection(article, 'Khasekhemwy');
        event.preventDefault();
    }
});

const countedArea = document.getElementById('counted-area');
const counter = document.getElementById('counter');
countedArea.addEventListener('input', () => {
    counter.innerText = countedArea.value.length;
});
