function run() {
    if (!interval && iaValidate())
        interval = setInterval(counting, 1000);
}

function counting() {
    var val = document.getElementById("number").value;
    if (cnt <= Number(val)) {
        if (cnt % 3 === 0) {
            document.getElementById("fingers").style.backgroundColor = "rgb(162, 46, 50)";
        } else {
            document.getElementById("fingers").style.backgroundColor = "white";
        }
        if (cnt % 5 === 0) {
            document.getElementById("toes").style.backgroundColor = "rgb(92, 177, 168)";
        } else {
            document.getElementById("toes").style.backgroundColor = "white";
        }
        document.getElementById("counter").innerHTML = cnt.toString();
        cnt++;
    }
}

function reset() {
    cnt = 0;
    clearInterval(interval);
    interval = null;
    document.getElementById("number").value = "";
    document.getElementById("counter").innerHTML = "";
    document.getElementById("fingers").style.backgroundColor = "white";
    document.getElementById("toes").style.backgroundColor = "white";
}

function restart() {
    cnt = 0;
    if (!interval && iaValidate())
        interval = setInterval(counting, 1000);
}

function iaValidate() {
    var flag = true;
    var val = document.getElementById("number").value;
    if (val === "" || Number(val) < 0 || Math.floor(val) !== Number(val)) {
        flag = false;
    }
    return flag;
}