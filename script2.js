var time = moment().format("HH");
// console.log(time)

var workingHours = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];


$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(document)
    for (let i=9; i < 18; i++) {
        var rowDiv =$(`<div id='${i}' class="row">`)
        var colDiv =$(`<div class="col-lg-12 textInput">`)
        var inputGroupDiv =$(`<div class="input-group">`)
        var inputGroupPrependDiv =$(`<div class="input-group-prepend">`)
        var inputGroupTextSpan =$(`<span class="input-group-text hour">`)
        var formControlTextArea =$(`<textarea class="form-control">`)
        var inputGroupAppendDiv =$(`<div id="button-addon4" class="input-group-append">`)
        var saveButton =$(`<button class="btn btn-success saveBtn">`)
        var saveIcon =$(`<i class="far fa-save">`)

        $(".container").append(rowDiv);
        rowDiv.append(colDiv);
        colDiv.append(inputGroupDiv);
        inputGroupDiv.append(inputGroupPrependDiv);
        inputGroupPrependDiv.append(inputGroupTextSpan);
        inputGroupDiv.append(formControlTextArea);
        inputGroupDiv.append(inputGroupAppendDiv);
        inputGroupAppendDiv.append(saveButton);
        saveButton.append(saveIcon);
        rowDiv.append(colDiv);
    }

for (var i = 0; i < workingHours.length; i++) {
    var rowDiv = document.createElement("div");
    document.getElementsByClassName("container")[0].appendChild(rowDiv);
    rowDiv.setAttribute("class", "row");
    var colDiv = document.createElement("div");
    document.getElementsByClassName("row")[i].appendChild(colDiv);
    colDiv.setAttribute("class", "col-lg-12 textInput");
    var inputGroupDiv = document.createElement("div");
    document.getElementsByClassName("col-lg-12")[i].appendChild(inputGroupDiv);
    inputGroupDiv.setAttribute("class", "input-group");
    var inputGroupPrependDiv = document.createElement("div");
    document.getElementsByClassName("input-group")[i].appendChild(inputGroupPrependDiv);
    inputGroupPrependDiv.setAttribute("class", "input-group-prepend");
    var inputGroupTextSpan = document.createElement("span");
    document.getElementsByClassName("input-group-prepend")[i].appendChild(inputGroupTextSpan);
    inputGroupTextSpan.setAttribute("class", "input-group-text hour");
    inputGroupTextSpan.innerText = workingHours[i]
    var formControlTextArea = document.createElement("textarea");
    document.getElementsByClassName("input-group")[i].appendChild(formControlTextArea);
    formControlTextArea.setAttribute("class", "form-control");
    var inputGroupAppendDiv = document.createElement("div");
    document.getElementsByClassName("input-group")[i].appendChild(inputGroupAppendDiv);
    inputGroupAppendDiv.setAttribute("class", "input-group-append button-addon4");
    var saveButton = document.createElement("button");
    document.getElementsByClassName("input-group-append")[i].appendChild(saveButton);
    saveButton.setAttribute("class", "btn btn-success saveBtn");
    var saveIcon = document.createElement("i");
    document.getElementsByClassName("saveBtn")[i].appendChild(saveIcon);
    saveIcon.setAttribute("class", "far fa-save");


//     var timeParsed = parseInt(time)
//     // console.log(timeParsed)
//     // console.log(workingHours[i])

//     if (workingHours[i] < timeParsed) {
//     document.getElementsByClassName("form-control")[i].setAttribute("class", "form-control past");
//     }
//     if (workingHours[i] === timeParsed) {
//     document.getElementsByClassName("form-control")[i].setAttribute("class", "form-control present");
//     }
//     if (workingHours[i] > timeParsed) {
//     document.getElementsByClassName("form-control")[i].setAttribute("class", "form-control future");
//     }

//     saveButton.addEventListener("click", function(event) {
//         event.preventDefault();
//         //var note = document.getElementsByClassName("form-control")[i].value;
//         console.log(document.getElementsByTagName("textarea"))
//         //localStorage.setItem("note", note);
//         //renderSavedNotes();
//     });
// };



// // function renderSavedNotes {
// //     var savedNote = localStorage.getItem("note");
// //     formControlTextArea.value = savedNote;
// //  };


// var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// document.getElementById("currentDay").innerText = currentTime;