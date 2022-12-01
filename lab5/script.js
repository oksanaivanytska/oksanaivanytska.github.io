const nameRegex = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']+\s+[а-щА-ЩЮюЯяЇїІіЄєҐґ]\.[а-щА-ЩЮюЯяЇїІіЄєҐґ]\./;
const idCardRegex = /[А-ЩЮЯЇІЄҐ]{2}\s+№[0-9]{6}/;
const facultyRegex = /[а-щА-ЩЮюЯяЇїІіЄєҐґ]{4}/;
const dobRegex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
const addressRegex = /м\.\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']+/;


const form = document.getElementById("form");
form.addEventListener('submit', validateForm);


function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value;
    if (!nameRegex.test(name)) {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("invalid-name").innerHTML = "Невірно введено ПІБ";
        isValid = false;
    }

    const idCard = document.getElementById("id-card").value;
    if (!idCardRegex.test(idCard)) {
        document.getElementById("id-card").style.border = "1px solid red";
        document.getElementById("invalid-id-card").innerHTML = "Невірно введено ID-card";
        isValid = false;
    }

    const faculty = document.getElementById("faculty").value;
    if (!facultyRegex.test(faculty)) {
        document.getElementById("faculty").style.border = "1px solid red";
        document.getElementById("invalid-faculty").innerHTML = "Невірно введено факультет";
        isValid = false;
    }

    const dob = document.getElementById("dob").value;
    if (!dobRegex.test(dob)) {
        document.getElementById("dob").style.border = "1px solid red";
        document.getElementById("invalid-dob").innerHTML = "Невірно введено дату народження";
        isValid = false;
    }

    const address = document.getElementById("address").value;
    if (!addressRegex.test(address)) {
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("invalid-address").innerHTML = "Невірно введено адресу";
        isValid = false;
    }

    if (isValid) {
        //window.open(`lab5/results.html?name=${name}&idCard=${idCard}&faculty=${faculty}&dob=${dob}&address=${address}`);
        window.open(`https://oksanaivanytska.github.io/lab5/results.html?name=${name}&idCard=${idCard}&faculty=${faculty}&dob=${dob}&address=${address}`);
    }
}

/// 2

function createTable() {
    let table = document.getElementById("changing-table");
    table.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        var row = table.insertRow(i);
        for (let j = 0; j < 6; j++)
            row.insertCell(j);
    }
}

function printNumbers() {
    let rows = document.getElementById("changing-table").children[0].children;
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].children;
        for (let j = 0; j < cols.length; j++) {
            let cell = cols[j];
            cell.innerHTML = `${i * 6 + j + 1}`;
            if (cell.innerHTML == "4") {
                cell.addEventListener("click", changeColorByClick);
                cell.addEventListener("mouseover", changeColorByHover);
                cell.addEventListener("mouseout", changeColorByUnhover);
                cell.addEventListener("dblclick", changeColorByDbclick);
            }
        }
    }
}

function changeColorByClick(e) {
    this.style.background = document.getElementById("palit").value;
}

function changeColorByHover(e) {
    this.style.background = random_rgba();
}

function changeColorByUnhover(e) {
    if (this.style.background === lastRandomColor) {
        this.style.background = 'white';
    }
}

function changeColorByDbclick() {
    const values = ['6', '11', '16', '21', '26', '31'];
    const tds = document.querySelectorAll('td');
    tds.forEach((td) => {
        if (values.includes(td.innerHTML)) {
            td.style.background = document.getElementById("palit").value;
        }
    })
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    const color = 'rgb(' + o(r() * s) + ', ' + o(r() * s) + ', ' + o(r() * s) + ')';
    lastRandomColor = color;
    return color;
}

createTable();
printNumbers();


