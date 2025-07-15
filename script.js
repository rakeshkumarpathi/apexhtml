// Access elements
var checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
var doneBtn = document.getElementById('doneBtn');
var celebration = document.getElementById('celebration');

// Function to check if all tasks are done
function checkTasks() {
    var allChecked = true;
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }
    doneBtn.disabled = !allChecked;
}

// Add event to each checkbox
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', checkTasks);
}

// When Done button is clicked
doneBtn.addEventListener('click', function() {
    celebration.style.display = 'block';
    doneBtn.style.display = 'none';
});



// const checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
//         const doneBtn = document.getElementById('doneBtn');
//         const celebration = document.getElementById('celebration');

//         function checkTasks() {
//             const allChecked = Array.from(checkboxes).every(cb => cb.checked);
//             doneBtn.disabled = !allChecked;
//         }

//         checkboxes.forEach(cb => cb.addEventListener('change', checkTasks));

//         doneBtn.addEventListener('click', () => {
//             celebration.style.display = 'block';
//             doneBtn.style.display = 'none';
//         });