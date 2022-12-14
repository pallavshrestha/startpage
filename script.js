function gebi(a) {
    return document.getElementById(a);
}

function time() {
    let now = new Date();
    let options = { hour: '2-digit', minute: '2-digit'};
    gebi("time").innerHTML = now.toLocaleTimeString("en-US", options);
    setTimeout(time, 5000)
}

function main() {
    time();
}
