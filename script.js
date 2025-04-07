//we start by calling our ids we have the input-box and the list-container 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//add the click function to add the task
function addTask(){
if(inputBox.value === ''){
  alert("you must write something !");
}
else{
  //we have to add also the detect in our page
  let li = document.createElement("li");
  li.innerHTML= inputBox.value;
  //this is gonna help us so that when we add the task is gonna be added under
  listContainer.appendChild(li);
  let span = document.createElement("span")
  //this is the close icon
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  }
  inputBox.value = "";
  //so we have to add the savedata over here
  saveData();
}

// add the checked class if it doesnt exist
//remove the checked if it already exist
listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    //so that when the data we had is deleted we have to add the new data;
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    //This save data is gonna help us to be able to save the information needed so that whenever we even make the refresh our information are going to stay in our server.
    saveData();
  }
}, false);
function saveData(){
  //whenever we add any changes we have to call the save data function
  //we have to store our list data in our browser
  localStorage.setItem("data", listContainer.innerHTML);
}
//the below function is for helping us to save the data whenever the web is opened again
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
