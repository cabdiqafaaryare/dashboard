// script.js

// Mock data
const users = [
    { name: "Alice", email: "alice@example.com", role: "Worker" },
    { name: "Bob", email: "bob@example.com", role: "Client" },
    { name: "Charlie", email: "charlie@example.com", role: "Admin" },
];

const jobs = [
    { title: "Logo Design", price: 200 },
    { title: "Web Development", price: 1000 },
];

const revenue = jobs.reduce((acc, job) => acc + job.price, 0);

// Load statistics
document.getElementById("total-users").textContent = users.length;
document.getElementById("total-jobs").textContent = jobs.length;
document.getElementById("total-revenue").textContent = `$${revenue}`;

// Load users into table
const usersTable = document.querySelector("#users-table tbody");

users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
            <button onclick="alert('Edit user: ${user.name}')">Edit</button>
            <button onclick="alert('Delete user: ${user.name}')">Delete</button>
        </td>
    `;
    usersTable.appendChild(row);
});