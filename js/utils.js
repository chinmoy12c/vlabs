runExperiment1 = () => {
    let inp1 = parseFloat(document.getElementById("inp1").value);
    let inp2 = parseFloat(document.getElementById("inp2").value);
    let inp3 = parseFloat(document.getElementById("inp3").value);
    let answer = document.getElementById("answer");

    if (inp1 == inp2) {
        answer.innerHTML = inp3;
    }
    else {
        answer.innerHTML = Math.abs(inp1 - inp2);
    }
}