DisplayTask();

let task_item = document.getElementById("task")
let addbutton = document.getElementById("add_Btn")

addbutton.addEventListener("click", function() {
    task_item_val = task_item.value;
    if (task_item_val.trim() != 0) {

        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(task_item_val)
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        task_item.value = "";
    }
    DisplayTask();
})

//Displaying the added tasks
function DisplayTask() {
    let webtask = localStorage.getItem("localtask")
    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
    }

    let html = ""
    let taskList = document.getElementById("taskList")
    taskObj.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>
        <td>${item}</td>
        <td><button type="button" class="text-primary" onclick="edittask(${index})"><i class="fa fa-edit"></i>Edit</button></td>
         <td><button type="button" class="text-danger" onclick="deletetask(${index})"><i class="fa fa-trash"></i>Delete</button></td>
        </tr>`;
    });

    taskList.innerHTML = html;
}

//editing task
function edittask(index) {
    let saveindex = document.getElementById("saveindex");
    let add = document.getElementById("add_Btn");
    let update = document.getElementById("update_Btn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    task_item.value = taskObj[index];
    add.style.display = "none";
    update.style.display = "block";

}

let update = document.getElementById("update_Btn");
update.addEventListener("click", function() {
    let add = document.getElementById("addbtn");
    let update = document.getElementById("update_Btn");
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = task_item.value;
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    task_item.value = "";
    add.style.display = "block";
    update.style.display = "none";
    DisplayTask();
});

//deleting
function deletetask(index) {
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    DisplayTask();
}