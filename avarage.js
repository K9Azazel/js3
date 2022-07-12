function avarage() {
    let x = document.getElementById("Physic").value;
    let y = document.getElementById("Chemistry").value;
    let z = document.getElementById("Bio").value;
a = parseFloat(x);
b = parseFloat(y);
c = parseFloat(z);
    let avarage = (a + b + c) / 3
    document.getElementById('avarage').innerText = avarage;
}

function sum() {
    let x = document.getElementById("Physic").value;
    let y = document.getElementById("Chemistry").value;
    let z = document.getElementById("Bio").value;
    a = parseFloat(x);
    b = parseFloat(y);
    c = parseFloat(z);
    let d = a + b + c
    document.getElementById('tong').innerText = d;
}
