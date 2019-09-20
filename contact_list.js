
let id = 1;

let contactListArr = []




let contactList = {
    
    //"name":"",
    "contacts" : [],

    addContact : function addContact(){
        let contact = {};
        var name = document.getElementById('name').value
   
        // set contact obj by user value
        contact.id = id;
        contact.name = substring();
        contact.mail = validateEmail();
        contact.phone = checkPhoneAvailability();
    
        // push contact to contacts array
        if(contact.name != false && contact.mail != false && contact.phone != false ){
            this.contacts.push(contact);
            console.log(contactList.contacts);
            drawTable(contactList.contacts)
            //console.log(contacts);
            id++;
        }
        else
        {
           // alert("enter a valid data ");
        }
        
    },
    removeContact : function removeContact( id ){},
    editContact : function editContact (id, updateObj){},
    getContact : function getContact (id){},
    getAllContacts : function getAllContacts (){
        console.log(this.contacts);
        return this.contacts
    },
}







var btn = document.getElementById('addBtn');
btn.onclick = function(){
    substring()
    //checkPhoneAvailability();
    contactList.addContact();
}



var getContact = document.getElementById('getContact');
// getContact.onclick = function(){
//     contactList.getAllContacts();
// }






function validateEmail() 
{
    var mail = document.getElementById('mail').value
    //var re = /\S+@\S+/;
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if ( re.test(mail) == true ) 
        return mail
    else 
        alert("contact mail is not valid");
        return false
}



function checkPhoneAvailability(){
    var phone2 = document.getElementById('phone')
    if (phone2.value.length != 11 ){
        alert("the phone number should be 11 number")
        return false
    }
    else 
        return phone2.value
    
}


function substring(){
    var name2 = document.getElementById('name').value
    let first = name2[0];
    
    var lastName = ""
    var fulName = ""

    if (name2 != "") {
        for (let index = 0; index < name2.length; index++) {
            if( name2[index] == " " ){
                lastName =name2.substr(index , name2.length);
                fulName = first+""+"."+lastName;
            }
            else
                return name2 ;
        }
        console.log("full name : " + fulName);
        
        return fulName;
    }else 
    {
        alert('name is required')
        return false
    }
        
    
}





function drawTable (arr){
 
    // DRAW HTML TABLE
    var perrow = 4, // 3 items per row
        count = 0, // Flag for current cell
        table = document.createElement("table");
        

        table.border = 1;
  
        var row = table.insertRow();
        var cell = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5= row.insertCell();
        var cell6 = row.insertCell();


    for (var i of arr) {
 
        cell.innerHTML = i.id;
        cell2.innerHTML = i.name;       
        cell3.innerHTML = i.mail;
        cell4.innerHTML = i.phone;
        cell5.innerHTML = "edit";
        cell6.innerHTML = "delete";
      
  
        // You can also attach a click listener if you want
        cell6.addEventListener("click", function(e){
        //row = e.target.parentNode
        table.deleteRow(row.id)
      });

      cell5.addEventListener("click", function(e){
        alert('I will develop edit option after delivering the final js project');
    });
/*
        // You can also attach a click listener if you want
        cell5.addEventListener("click", function(e){
        
            let selected = i.id;
            let selectedObj = i;
            console.log("selected id : "+selected);
            
            btnEdit.addEventListener('click' , function(e){
                let n = document.getElementById('name').value
                let p = document.getElementById('phone').value
                i.name = n;
                i.mail = mail;
                i.phone = p;
                alert('ffffffff')
                console.log(arr);
                
            })
            
            alert('dsdsdsdssdsd')
      });
  */
      // Break into next row
      count++;
      if (count%perrow==0) {
        row = table.insertRow();
      }
 
    }
  
    // ATTACH TABLE TO CONTAINER
    document.getElementById("container").appendChild(table);
  }


/*
function drawTable(arr) {
    // Get a reference to the table
    let tableRef = document.getElementById('myTable');
  
    for (let index = 0; index < arr.length; index++) {
        //const element = arr[index];
        // Insert a row at the end of the table
        let newRow = tableRef.insertRow(-1);
    
        // Insert a cell in the row at index 0
        //let newCell = newRow.insertCell(0).arr[index].id;
        let newCell = newRow.insertCell(1).arr[index].name;
        newCell = newRow.insertCell(2).arr[index].mail;
        newCell = newRow.insertCell(3).arr[index].phone;
        console.log(newCell);
        
        
    }
    
}
  
*/



/* 
function drawTable(arr){
    // LET'S SAY THAT WE HAVE A SIMPLE FLAT ARRAY
  
    // DRAW THE HTML TABLE
    var perrow = 4, // 4 items per row
        html = "<table><tr>";
  
    // Loop through array and add table cells
    for (var i=0; i<arr.length; i++) {
      html += "<td>" + arr[i].id + "</td>";
      html += "<td>" + arr[i].name + "</td>";
      html += "<td>" + arr[i].mail + "</td>";
      html += "<td>" + arr[i].phone + "</td>";
      // Break into next row
      var next = i+1;
      if (next%perrow==0 && next!=arr.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";
  
    // ATTACH HTML TO CONTAINER
    document.getElementById("container").innerHTML = html;
  }
*/


// by eng ziad
// function ContactList(contactName,contact ){
//     this.contact = contact;
//     this.contactName = contactName;
// }


// by eng ziad
// function Contact (name, mail , phone){
//     this.name = name;
//     this.mail = mail;
//     this.phone = phone;
//     this.id;
// }




// by eng ziad
// let myConctact = new Contact(name, mail, phone);
// myConctact.id = id;
// let myContactList = new ContactList(name, myConctact);
// contactListArr.push(myContactList);
// console.log(contactListArr);
// id++;