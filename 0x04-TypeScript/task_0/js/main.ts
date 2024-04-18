export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'John',
    lastName: 'Ampong',
    age: 25,
    location: 'Ghana'
}

let student2: Student = {
    firstName: 'Jane',
    lastName: 'Sam',
    age: 35,
    location: 'Nigeria'
}

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);
let tableHead = document.createElement('thead');
table.appendChild(tableHead);
let tableRow = document.createElement('tr');
tableHead.appendChild(tableRow);
let tableHeader1 = document.createElement('th');
tableHeader1.innerHTML = 'First Name';
tableRow.appendChild(tableHeader1);
let tableHeader2 = document.createElement('th');
tableHeader2.innerHTML = 'Location';
tableRow.appendChild(tableHeader2);
let tableBody = document.createElement('tbody');
table.appendChild(tableBody);

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let firstName = document.createElement('td');
    firstName.innerHTML = student.firstName;
    let location = document.createElement('td');
    location.innerHTML = student.location;
    row.appendChild(firstName);
    row.appendChild(location);
    tableBody.appendChild(row);
}
);
