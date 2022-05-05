function powerbtn() {
    document.getElementById('out').innerHTML = "0";

    function Offbtn() {
        document.getElementById("out").innerHTML = "";
    }

    let screen = document.getElementById('out');
    let buttons = document.querySelectorAll('button')
    let screenvalue = "";
    for (item of buttons) {
        item.addEventListener('click', (e) => {
            btnText = e.target.innerText;

            if (btnText == "X") {
                btnText = "*";
                screenvalue += btnText;
                document.getElementById('out').innerHTML = screenvalue;
            }
            else if (btnText == "On") {
                document.getElementById('out').innerHTML = 0;

            }
            else if (btnText == "backspace") {
                screenvalue = screenvalue.slice(0, -1);
                document.getElementById('out').innerHTML = screenvalue;

            }
            else if (btnText == "C") {
                document.getElementById("out").innerHTML = "0";
                screenvalue = "";
            }
            else if (btnText == "=") {
                document.getElementById('out').innerHTML = eval(screenvalue);
            }
            else {
                screenvalue += btnText;
                document.getElementById('out').innerHTML = screenvalue;
            }
        })
    }
}
