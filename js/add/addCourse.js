const args = dialog.argument;

document.querySelector('#dialog-ok')

    .addEventListener('click', () => {
        const name = document.querySelector('#name-course').value;
        const descript = document.querySelector('#descript-course').value;
        const valid = document.querySelector('#valid-course').value;
        const total_time = document.querySelector('#total-course').value;
        
        dialog.exit({
            action: 'ok',
            name: name,
            descript: descript,
            valid: valid,
            total_time: total_time,
            args: args,
        });
    });
