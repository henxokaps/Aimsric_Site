document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const employeeId = params.get('id');

    fetch('data/employees.json')
        .then(response => response.json())
        .then(data => {
            const employee = data.find(emp => emp.id === employeeId);
            if (employee) {
                document.getElementById('employee-name').textContent = employee.name;
                document.getElementById('employee-position').textContent = employee.position;
                document.getElementById('employee-department').textContent = employee.department;
                document.getElementById('employee-bio').textContent = employee.bio;
            } else {
                document.getElementById('profile').innerHTML = '<p>Employee not found</p>';
            }
        })
        .catch(error => {
            console.error('Error loading employee data:', error);
        });
});
