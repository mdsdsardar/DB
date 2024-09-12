document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    fetch('/api/value', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key, value })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadValues();
    })
    .catch(error => console.error('Error:', error));
});

function loadValues() {
    fetch('/api/values')
        .then(response => response.json())
        .then(data => {
            const valuesList = document.getElementById('valuesList');
            valuesList.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `Key: ${item.key}, Value: ${item.value}`;
                valuesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

loadValues();

