async function fetchData() {
    try {
        // Show loading
        document.getElementById('loading').style.display = 'block';

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const users = await response.json();
        renderData(users);

    } catch (error) {
        console.error('Fetch Error:', error);
        alert('Error fetching user data!');
    } finally {
        // Hide loading
        document.getElementById('loading').style.display = 'none';
    }
}

function renderData(data) {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = '';

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        dataBody.appendChild(row);
    });
}

// Auto load data on page load
fetchData();
