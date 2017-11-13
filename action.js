$(document).ready(function () {
    var error = "<span class='error' id='error'>Please enter a valid number</span>";
    var error_int = "<span class='error' id='error_int'>Input must be an integer</span>";
    var error_pos = "<span class='error' id='error_pos'>Input must be positive</span>";

    $("#number").focusin(function () {
        $("#error").remove();
        $("#error_int").remove();
        $("#error_pos").remove();
    }).focusout(function () {
        var val = this.value;
        if (val === "") {
            $("#number").after(error);
        } else if (Math.floor(val) !== Number(val)) {
            $("#number").after(error_int);
        } else if (Number(val) < 0){
            $("#number").after(error_pos);
        }
    });
});

function run() {
    if (!interval && isValidate())
        interval = setInterval(counting, 1000);
}

function counting() {
    var val = document.getElementById("number").value;
    if (cnt <= Number(val)) {
        if (cnt % 3 === 0) {
            document.getElementById("fingers").style.backgroundColor = "green";
        } else {
            document.getElementById("fingers").style.backgroundColor = "white";
        }
        if (cnt % 5 === 0) {
            document.getElementById("toes").style.backgroundColor = "orange";
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
    if (!interval && isValidate())
        interval = setInterval(counting, 1000);
}

function isValidate() {
    var flag = true;
    var val = document.getElementById("number").value;
    if (val === "" || Number(val) < 0 || Math.floor(val) !== Number(val)) {
        flag = false;
    }
    return flag;
}