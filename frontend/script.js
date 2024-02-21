document.getElementById('clickButton').addEventListener('click', function () {
    fetch('backend/click', { method: 'POST' })
        .then(response => response.text())
        .then(data => {
            document.getElementById('clickCount').innerText = data;
        })
        .catch(error => console.error('Error:', error));
});

function fetchClickCount() {
    fetch('backend/count')
        .then(response => response.text())
        .then(data => {
            document.getElementById('clickCount').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

setInterval(fetchClickCount, 1000); // Fetch click count every 1000 milliseconds (1 second)