const inputBox=document.getElementById("input-box");
const date=document.getElementById("date");

const listContainer=document.getElementById("list-container");
function addTask()
{
    if(inputBox.value === '')
    {
        alert('Please enter a task');
    }
    else 
    {
        let li = document.createElement("li");
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        let task = document.createElement("span");
        task.innerHTML = inputBox.value;

        let dateTime = document.createElement("span");
        dateTime.innerHTML = date.value;
        dateTime.classList.add("date");

        // Append task and date to the taskContainer
        taskContainer.appendChild(task);
        taskContainer.appendChild(dateTime);

        // Append taskContainer to the list item
        li.appendChild(taskContainer);

        let span = document.createElement("span");
    span.classList.add("cross"); // Add the class "cross" here
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    }
    inputBox.value="";
    date.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    // if(e.target.tagName === "LI"){
    //     e.target.classList.toggle("checked");
    //     saveData();
    // }
    const listItem = e.target.closest("li");

    if (!listItem) {
        return;
    }

    // const isCheckbox = e.target.classList.contains("checkbox");
    // const isDate = e.target.classList.contains("date");
    // const isCross = e.target.classList.contains("cross");
    // const isTaskText = !isCheckbox && !isDate && !isCross;

    // if (isCheckbox) {
    //     // Toggle checked class for the entire list item when clicking on the checkbox
    //     listItem.classList.toggle("checked");
    //     saveData();
    // } else if (isDate) {
    //     // Handle click on date
    //     listItem.classList.toggle("checked");
    // } else if (isTaskText) {
    //     // Add your custom logic for handling the click on the task text here
    //     listItem.classList.toggle("checked");
    // } else if (isCross) {
    //     // Remove the entire list item when clicking on the cross mark
    //     listItem.remove();
    //     saveData();
    // }
    const isCross = e.target.classList.contains("cross");

    if (isCross) {
        // Remove the entire list item when clicking on the cross mark
        listContainer.removeChild(listItem);
        saveData();
    } else {
        // Toggle checked class for the entire list item when clicking anywhere else
        listItem.classList.toggle("checked");
        saveData();
    }

    // if (isCross) {
    //     // Remove the entire list item when clicking on the cross mark
    //     listItem.remove();
    //     saveData();
    // } else {
    //     // Toggle checked class for the entire list item when clicking anywhere else
    //     listItem.classList.toggle("checked");
    //     saveData();
    // }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
// localStorage.clear();