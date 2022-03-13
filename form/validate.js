let f_name_node = document.getElementById("fname");
let l_name_node = document.getElementById("lname");
let text_node = document.getElementById("tarea");
let mail_node = document.getElementById("email");

let border1 = "1px solid red";
let border2 = "1px solid black";

function validate1() {
    let fname = f_name_node.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    if (fname === '') {
        alert("Enter a name");
        f_name_node.style.border = border1;
        return false;
    } else if (regExp.test(fname) == false) {
        alert("Name should only contain letters.");
        return false;
    } else {
        mail_node.style.border = border2;
        return true;
    }
}

function validate2() {
    let l_name = l_name_node.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    if (l_name === '') {
        alert("Enter last name");
        l_name_node.style.border = border1;
        return false;
    } else if (regExp.test(l_name) == false) {
        alert("Name should only contain letters.");
        return false;
    } else {
        mail_node.style.border = border2;
        return true;
    }
}

function validate3() {
    let text = text_node.value;
    let len = text.length;
    if (text === '') {
        text_node.style.border = border1;
        alert("Enter your reason to join.");
        return false;
    } else if (len > 300) {
        text_node.style.border = border1;
        alert("Length can not exceed 300 characters.");
        return false;
    } else {
        text_node.style.border = border2;
        return true;
    }
}

function validate4() {
    let radio = document.getElementsByName("education");
    let i = 0;
    let validity = false;

    while (!validity && i < radio.length) {
        if (radio[i].checked) {
            validity = true;
        }
        i++;
    }

    if (!validity) {
        alert("You must select a qualification.");
    }
    return validity;
}

function validate5() {
    let email = mail_node.value;
    let ss = email.substring(email.indexOf('@') + 1);
    console.log(ss);
    if (email == '') {
        alert("Enter an email.");
        mail_node.style.border = border1;
        return false;
    } else if (!email.includes("@") || ss == '') {
        alert("Enter a valid email.");
        return false;
    } else {
        mail_node.style.border = border2;
        return true;
    }
}

function form_validate() {
    let t1 = validate1();
    let t2 = validate2();
    let t3 = validate3();
    let t4 = validate4();
    let t5 = validate5();

    return t1 && t2 && t3 && t4 && t5;
}