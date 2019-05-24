// let $ = require('jquery');
const args = dialog.argument;

document.querySelector("#id-course").value = args[0].id
document.querySelector("#name-course").placeholder  = args[0].name
document.querySelector("#descript-course").placeholder  = args[0].descript
document.querySelector("#valid-course").placeholder  = args[0].valid
document.querySelector("#total-course").placeholder  = args[0].total_time

document.querySelector('#dialog-ok')

    .addEventListener('click', () => {
        const id = document.querySelector('#id-course').value;
        const name = document.querySelector('#name-course').value;
        const descript = document.querySelector('#descript-course').value;
        const valid = document.querySelector('#valid-course').value;
        const total_time = document.querySelector('#total-course').value;

        dialog.exit({
            action: 'ok',
            id: id,
            name: name,
            descript: descript,
            valid: valid,
            total_time: total_time,
            args: args,
        });
    });
