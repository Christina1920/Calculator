function display(value) {
    document.getElementById("result").value += value;
    console.log(value);
}

function solve() {
    try {
        var x = document.getElementById("result").value
        var y = eval(x)
        document.getElementById("result").value = y
    } catch (err) {
        document.getElementById("result").value = 'Error'
    }
}

function backspace() {
    var val = document.getElementById("result").value;
    document.getElementById("result").value = val.substr(0, val.length - 1);
}

function clr() {
    document.getElementById("result").value = "";
}