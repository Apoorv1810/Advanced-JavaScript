let history = '';

function view(num) {
    document.getElementById("result").value += num
    console.log(num)
    addToHistory(num);
}

function compute() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y;
    console.log("result = " + y)
    addToHistory('\n result =' + y + '\n');

}

function clr() {
    document.getElementById("result").value = "";
    addToHistory(' ');
}


function addToHistory(num) {
    history += num;
    document.getElementById('history').innerText = history;
}

function del() {
    let dis = document.getElementById("result").value;
    document.getElementById("result").value = dis.substring(0, dis.length - 1);
    document.getElementById('history').innerText = dis.substring(0, dis.length - 1);
}