 function addEvent() {
        var time = document.getElementById('eventTime').value;
        var event = document.getElementById('eventName').value;

        if (time && event) {
            var tableBody = document.getElementById('timetable-body');
            var newRow = tableBody.insertRow(tableBody.rows.length);

            var timeCell = newRow.insertCell(0);
            var eventCell = newRow.insertCell(1);
            var actionCell = newRow.insertCell(2);

            timeCell.innerHTML = time;
            eventCell.innerHTML = event;

            var removeBtn = document.createElement('button');
            removeBtn.innerHTML = 'Remove';
            removeBtn.className = 'remove-btn';
            removeBtn.onclick = function () {
                tableBody.deleteRow(newRow.rowIndex);
            };

            actionCell.appendChild(removeBtn);

            // Clear the form fields
            document.getElementById('eventTime').value = '';
            document.getElementById('eventName').value = '';
        } else {
            alert('Please enter both time and event name.');
        }
    }
