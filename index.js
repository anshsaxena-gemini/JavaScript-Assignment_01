(function(){

var div = document.createElement('div');
div.className = 'container';
document.body.appendChild(div);
var head = document.createElement('h1');
head.id = 'heading';

head.innerHTML = "<h1>Table</h1>";
div.appendChild(head);


let table = document.createElement('table');
table.id="table";
table.setAttribute("cellpadding","13px")
table.setAttribute("cellspacing","3px")
// table.setAttribute("border","2")
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
div.appendChild(table);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Age";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Dob";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Email";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);




var data = [["Anshika",20,2001,"abc@gmail.com","Wipro"],
["Ansh",20,2001,"abc@gmail.com","Gemini Solutions"],
["Aman",20,2002,"abc@gmail.com","Myanatomy"],
["Ayush",20,2000,"abc@gmail.com","3Pillar"],
["Nashra",22,1998,"abc@gmail.com","Accenture"],

]

for(let i=0;i<5;i++){
    let row = document.createElement('tr');
    for(let j=0;j<5;j++){
        
        let cell = document.createElement('td');
      let cont = document.createTextNode(data[i][j]);
      cell.appendChild(cont);
      row.appendChild(cell);
      tbody.appendChild(row);

    }
    
}



})();