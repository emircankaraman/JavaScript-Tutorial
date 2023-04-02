const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        success(input)
    } else {
        error(input, `Hatalı Bir Email Adresi Girdiniz !!!`);
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });
}
function checkLength(input,min,max){
    if (input.value.length < min){
        error(input, `${input.id} En Az ${min} Karakter Olmalıdır !!!`)
    }
    else if (input.value.length > max){
        error(input, `${input.id} En Fazla ${max} Karakter Olmalıdır !!!`)
    }
    else {
        success(input);
    }
}
function checkPasswords(input1,input2){
    if (input1.value !== input2.value ){
        error(input2, 'Password Eşleşmiyor !!!');
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {

        error(input, 'Telefon Numarası 10 Haneli Ve Olmalıdır !!!');
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired(
        [username,
            email,
            password,
            repassword,
            phone
        ]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
    // if (username.value === '') {
    //     error(username, 'Usurname Gerekli');
    // } else {
    //     success(username);
    // }
    //
    // if (email.value === '') {
    //     error(email, 'Email Gerekli');
    // }
    // else if(!validateEmail(email.value)) {
    //         error(email, 'Email Adresiniz Lütfen Kurallara Uygun Bir Şekilde Giriniz.')
    // }
    // else {
    //     success(email);
    // }
    // if (password.value === '') {
    //     error(password, 'Password Gerekli');
    // } else {
    //     success(password);
    // }
    // if (repassword.value === '') {
    //     error(repassword, 'Repassword Uyuşmuyor !!!');
    // } else {
    //     success(repassword);
    // }
});
