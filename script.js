document.addEventListener('DOMContentLoaded', () => {
    // Hypothetical student data (replace with a real API call if available)
    const studentData = [
        { country: 'USA', count: 150 },
        { country: 'Canada', count: 80 },
        { country: 'UK', count: 120 },
        { country: 'Australia', count: 90 },
    ];

    const tableBody = document.getElementById('studentTableBody');

    if (tableBody) {
        studentData.forEach(item => {
            const row = document.createElement('tr');
            const countryCell = document.createElement('td');
            const countCell = document.createElement('td');

            countryCell.textContent = item.country;
            countCell.textContent = item.count;

            row.appendChild(countryCell);
            row.appendChild(countCell);
            tableBody.appendChild(row);
        });
    } else {
        console.error("Table body element not found!");
    }
});
