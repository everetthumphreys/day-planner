function retrieveNote(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    for (let i = 9; i < 18; i++) {
        const colDiv = $(`<div class="col-lg-12 textInput">`);
        const inputGroupDiv = $(`<div class="input-group">`);
        const inputGroupPrependDiv = $(`<div class="input-group-prepend">`);
        const inputGroupTextSpan = $(`<span class="input-group-text hour">`);
        const inputGroupAppendDiv = $(`<div id="button-addon4" class="input-group-append">`);
        let rowDiv = $(`<div id='${i}' data-time='${i}' class="row">`);
        let formControlTextArea = $(`<textarea id='text${i}' class="form-control past">`);
        let saveButton = $(`<button id='${i}' class="btn btn-success saveBtn">`);
        let saveIcon = $(`<i div id='${i}' class="far fa-save">`);
        let hourIndex = formatAMPM(i);
        let time = parseInt((moment().format("HH")));

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
        inputGroupTextSpan.text(hourIndex);
        retrieveNote(i);

        function formatAMPM(hourIndex) {
            var ampm = hourIndex >= 12 ? 'pm' : 'am';
            hourIndex = hourIndex % 12;
            hourIndex = hourIndex ? hourIndex : 12;
            return hourIndex + ampm;
        }

        console.log(i, time);

        function updateColors() {
            if (i == time) {
                $(`#text${i}`).attr("class", "form-control present");
            } else if (i < time) {
                $(`#text${i}`).attr("class", "form-control future");
            }
        }
        updateColors();
    }
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function() {
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings('.form-control').val();
        localStorage.setItem(eventId, eventText);
    });
});