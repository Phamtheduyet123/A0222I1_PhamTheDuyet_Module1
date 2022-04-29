//Tao mang luu danh sach hoc vien.
let listStudents = [];
let edit1 = -1;
let boolean = false;
class Students {
    constructor(id, name, address, gender, phoneNumber, mediumScore) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.mediumScore = mediumScore;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(number) {
        this.phoneNumber = number;
    }

    getMediumScore() {
        return this.mediumScore;
    }

    setMediumScore(medium) {
        this.mediumScore = medium;
    }
}

function getDataByTable() {
    let id = document.getElementById("dedmo").value;
    let name = document.getElementById("dedmo1").value;
    let address = document.getElementById("dedmo2").value;
    let gender = document.getElementById("dedmo3").value;
    let phoneNumber = document.getElementById("dedmo4").value;
    let mediumScore = document.getElementById("dedmo5").value;
    let student = new Students(id, name, address, gender, phoneNumber, mediumScore);
    if (id == "" || name == "" || address == "" || gender == "" || phoneNumber == "" || mediumScore == "") {
        alert("Bạn cần phải nhập thông tin ");
    } else {
        //day du lieu vao mang:
        listStudents.push(student);
        setDataBYTalbe(listStudents);
    }
    nothing();
}

function setDataBYTalbe(liststudents) {
    let stringTable = '<table>';
    for (let i = 0; i < liststudents.length; i++) {
        if(boolean){ i =liststudents[i]; }
        stringTable += '<tr>';

        for (let j = 0; j < 1; j++) {
            stringTable += '<td style="width: 300px">' + listStudents[i].getId() + '</td>' +
                '<td style="width: 300px">' + listStudents[i].getName() + '</td>' +
                '<td style="width: 300px">' + listStudents[i].getAddress() + '</td>' +
                '<td style="width: 300px">' + listStudents[i].getGender() + '</td>' +
                '<td style="width: 300px">' + listStudents[i].getPhoneNumber() + '</td>' +
                '<td style="width: 300px">' + listStudents[i].getMediumScore() + '</td>' +
                '<td>' + '<input type="button" name="q" onclick="edit(' + i + ')" value="Edit" style="background-color: limegreen">' +
                '</td>' + '<td style="width: 40px">' + '</td>' +
                '<td>' + '<input type="button" name="q" onclick="delete1(' + i + ')" value="Delete" style="background-color: limegreen">' +
                '</td>';
        }
        stringTable += '</tr>'
    }
    stringTable += '</table>';
    document.getElementById("result").innerHTML = stringTable;
    boolean = false;
}

function edit(index) {
    edit1 = index;
    document.getElementById("dedmo").value = listStudents[index].getId();
    document.getElementById("dedmo1").value = listStudents[index].getName();
    document.getElementById("dedmo2").value = listStudents[index].getAddress();
    document.getElementById("dedmo3").value = listStudents[index].getGender();
    document.getElementById("dedmo4").value = listStudents[index].getPhoneNumber();
    document.getElementById("dedmo5").value = listStudents[index].getMediumScore();
    document.getElementById("save").style.display = "block";
}

function saveData() {
    let id = document.getElementById("dedmo").value;
    listStudents[edit1].setId(id);
    let name = document.getElementById("dedmo1").value;
    listStudents[edit1].setName(name);
    let address = document.getElementById("dedmo2").value;
    listStudents[edit1].setAddress(address);
    let gender = document.getElementById("dedmo3").value;
    listStudents[edit1].setGender(gender);
    let number = document.getElementById("dedmo4").value;
    listStudents[edit1].setPhoneNumber(number);
    let medium = document.getElementById("dedmo5").value;
    listStudents[edit1].setMediumScore(medium);
    // listStudents[edit1] = new Students(id, name, address, gender, number, medium);
    setDataBYTalbe(listStudents);
    document.getElementById("save").style.display = "none";
    nothing();
}

function delete1(val) {
    listStudents.splice(val, 1);
    setDataBYTalbe(listStudents);
}

function checkListStudents() {
    let value = document.getElementById("checkList").value;
    if (value == "") {
        setDataBYTalbe(listStudents);
    } else {
        //Tao 1 biến Cờ.
        let flg = false;
        //Tao mang tam.
        let arrCheckList = [];
        for (let i = 0; i < listStudents.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (listStudents[i].getId()[j] == value[j]) {
                    flg = true;
                } else {
                    flg = false;
                }
            }
            if (flg) {
                arrCheckList.push(i);
            }
        }
        boolean =true;
        setDataBYTalbe(arrCheckList);

    }
}

function nothing() {
    document.getElementById("dedmo").value = "";
    document.getElementById("dedmo1").value = "";
    document.getElementById("dedmo2").value = "";
    document.getElementById("dedmo3").value = "";
    document.getElementById("dedmo4").value = "";
    document.getElementById("dedmo5").value = "";
}