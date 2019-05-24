// const mysql = require('../db/db.js');
// const $ = require('jquery');

const args = dialog.argument;

document.querySelector("#id-questions").value = args.questionById[0].id;
document.querySelector("#category-questions").placeholder = args.questionById[0].category;
document.querySelector("#content-questions").placeholder = args.questionById[0].content;
document.querySelector("#courseId-questions").placeholder = args.questionById[0].courseId;


function getListCorrectId() {
    const correctId = args.questionById[0].correctId;
    const listCorrectId = correctId.split(",");
    return listCorrectId;
}

// Load checkbox with CorrectId is checked
for (i = 0; i < args.arrAnswerByQId.length; i++) {
    var d1 = document.getElementById('input');
    const listCorrectId = getListCorrectId();
    d1.insertAdjacentHTML('beforeend', `<input id=${i} type="checkbox" name="vehicle1" value="${i}">${args.arrAnswerByQId[i].content}</input></br>`);

    for (j = 0; j < listCorrectId.length; j++) {
        if (listCorrectId[j] == (i + 1)) {
            document.getElementById(`${i}`).checked = true;
        } 
    }
}

// Click ok in Dialog 
document.querySelector('#dialog-ok')

    .addEventListener('click', () => {

        const id = args.questionById[0].id;
        const category = document.querySelector('#category-questions').value;
        const type = document.querySelector('#type-questions').value;
        const content = document.querySelector('#content-questions').value;
        
        let correctId = "";
        for (i = 0; i < args.arrAnswerByQId.length; i++) {
            if (document.getElementById(`${i}`).checked) {
                correctId += `${i+1},`;
            }
        }
        newCorrectId = correctId.substring(0, correctId.length-1);
        const courseId = args.questionById[0].courseId

        dialog.exit({
            action: 'ok',
            id: id,
            category: category,
            type: type,
            content: content,
            newCorrectId: newCorrectId,
            courseId: courseId,
            args: args
        });
    });
    

