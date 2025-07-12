const checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
        const doneBtn = document.getElementById('doneBtn');
        const celebration = document.getElementById('celebration');

        function checkTasks() {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            doneBtn.disabled = !allChecked;
        }

        checkboxes.forEach(cb => cb.addEventListener('change', checkTasks));

        doneBtn.addEventListener('click', () => {
            celebration.style.display = 'block';
            doneBtn.style.display = 'none';
        });