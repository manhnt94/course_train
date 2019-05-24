const args = dialog.argument;

window.onload = function () {
    
    for(i = 0; i < args.length; i++) {
        var option = document.createElement('option');
        option.text = args[i].name;
        option.value = args[i].id;
        document.getElementById("courseId-questions").add(option, 0);  
    }
};

document.querySelector('#dialog-ok')

    .addEventListener('click', () => {

        const category = document.querySelector('#category-questions').value;
        const type = document.querySelector('#type-questions').value;
        const content = document.querySelector('#content-questions').value;
        const courseId = document.querySelector('#courseId-questions').value;
        
        const length =  [...document.querySelectorAll(".selected-answer")].length
        const data = [...document.querySelectorAll(".selected-answer")][1].value;
        
        let correctId = "";
        let arrAnswer = [];
        for (i = 0; i < [...document.querySelectorAll(".selected-answer")].length; i++) {
            const checked = [...document.querySelectorAll(".selected-answer")][i].checked;
            if (checked) {
                correctId += `${i+1},`;
                const answer = document.querySelector(`#answer-${i+1}`).value;
                arrAnswer.push(answer)
            }
            
        }
        newCorrectId = correctId.substring(0, correctId.length-1);

        dialog.exit({
            action: 'ok',
            category: category,
            type: type,
            content: content,
            newCorrectId: newCorrectId,
            courseId: courseId,
            arrAnswer: arrAnswer,
            // data: data,
            // data1: data1,
            // length: length,
            args: args
        });
    });