document.getElementById('homeButton').addEventListener('click', function() {
    showSection('homeSection');
});

document.getElementById('loginButton').addEventListener('click', function() {
    showSection('loginSection');
});

document.getElementById('registerButton').addEventListener('click', function() {
    showSection('registerSection');
});

function showSection(sectionId) {
    document.getElementById('homeSection').classList.add('hidden');
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('registerSection').classList.add('hidden');
    
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login Succesfull !');
    // Add login logic here 
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Here you can add actual login logic (e.g., API call, validation)
    // For demonstration, just check if username and password are filled
    if (username && password) {
        // Redirect to another page after successful login
        window.location.href = 'dashboard.html'; // Replace with your actual page URL
    } else {
        alert('Please enter username and password.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (document.getElementById('regPassword').value !== document.getElementById('confirmPassword').value) {
        alert('Passwords do not match!');
    } else {
        alert('Registration Succesfull');
        
        // Add registration logic here
    }
});

// Handle grievance form submission
document.getElementById('grievanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Process form data (e.g., send to server, store locally)
    // Show success message or redirect to a status page
    alert('Grievance submitted successfully. You can check the status.');
    // Redirect to status page after submission
    window.location.href = 'status.html';
});

// Simulated data for grievance status (replace with actual data handling)
let grievanceData = [
    {
        fullname: 'John Doe',
        address: '123 Main St, City, Country',
        filedTime: '2024-07-16 10:30 AM',
        problem: 'Low water pressure',
        status: 'Pending'
    },
    {
        fullname: 'Jane Smith',
        address: '456 Elm St, Town, Country',
        filedTime: '2024-07-15 2:00 PM',
        problem: 'Water discoloration',
        status: 'Resolved'
    }
];

// Function to populate the status table
function populateStatusTable() {
    let tableBody = document.querySelector('#statusTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    grievanceData.forEach(function(grievance) {
        let row = `
            <tr>
                <td>${grievance.username}</td>
                <td>${grievance.address}</td>
                <td>${grievance.filedTime}</td>
                <td>${grievance.problem}</td>
                <td>${grievance.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateStatusTable();
});


// scripts.js
function showMap() {
    // Show the map container
    document.getElementById('map').style.display = 'block';

    // Initialize the map
    var map = L.map('map').setView([16.8302, 75.7100], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample water location details
    var waterLocations = [
        {
            photo:'image copy.png',
            owner: 'Sanket Yalwar',
            address: 'BLDEACET, Boys Hostel, Ashram Road, Vijayapur',
            phone:'9591556007',
            type: 'Pumping Station',
            latlng: [16.848413, 75.717253] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipNy3uQ98UpElf2bH6_Yxzoe_GBhFl2bkfMHqPwZ=w408-h306-k-no',
            owner: 'Omkar Cholli',
            address:'Aishwarya Nagar, Neela Nagar, Vijayapura',
            phone:'6362316300',
            type: 'Pumping Station',
            latlng: [16.850690, 75.722203] // Latitude and Longitude
        },
        {
            photo:'',
            owner: 'Sankalp H',
            address:'KC Nagar, Adarsh Nagar, Vijayapura',
            phone:'9901464092',
            type: 'Pumping Station',
            latlng: [16.857729, 75.709043] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipPzcbyZeFoDdgyFzWR5xu5iaUWQw1W5gKSqiRHI=w408-h306-k-no',
            owner: 'Savidhare Minerals(Savi Water)',
            address:'Solapur Rd, opp. GOVT ITI COLLEGE, Chalukya Nagar, Karnataka Housing Board Colony, Vijayapura',
            phone:'9845820401',
            type: 'Pumping Station',
            latlng: [16.843497, 75.709072] // Latitude and Longitude
        },
        {
            photo: 'https://www.google.com/maps/place/Water+Tank/@16.8061478,75.7206726,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNkDjk8OOqvoYYBsUfZ1ieA-NqUQ3DbnFFuJLwd!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNkDjk8OOqvoYYBsUfZ1ieA-NqUQ3DbnFFuJLwd%3Dw191-h86-k-no!7i4000!8i1800!4m11!1m2!2m1!1swater+supply+pipelines+in+bijapur+district!3m7!1s0x3bc6555c30369cbb:0x11503ab915f1129a!8m2!3d16.8061651!4d75.7205073!10e5!15sCip3YXRlciBzdXBwbHkgcGlwZWxpbmVzIGluIGJpamFwdXIgZGlzdHJpY3RaLCIqd2F0ZXIgc3VwcGx5IHBpcGVsaW5lcyBpbiBiaWphcHVyIGRpc3RyaWN0kgETaGlzdG9yaWNhbF9sYW5kbWFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOVk5UVllkVzluUlJBQuABAA!16s%2Fg%2F11c2nyr6q1?entry=ttu#',
            owner: 'Water Tank',
            address:'RP4C+F66, Jala Nagar, Vijayapura, Karnataka 586109, India',
            phone:'6362316300',
            type: 'Water Supply Pipelines',
            latlng: [16.8054798,75.7170889] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipPTPyXCrHBdQSVUoRn1rWu6ko07OEyYr4cONIyV=w408-h612-k-no',
            owner: 'Runwal Machinery & Auto Store',
            address:'185 a /b, Mahaveer Rd, near jio cc bank, Sholapur, Vijayapura',
            phone:'8549085338',
            type: 'Pumping Station',
            latlng: [16.832099, 75.715105] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipOkcBqi2rFUcwquDfa4f23BFSoenuLKqRRGmzHr=w408-h306-k-no',
            owner: 'Karnataka Urban Water Supply And Drainage Board',
            address:'RPGG+J8V, Badi Kaman Rd, Vijayapura',
            phone:'8863589103',
            type: 'Urban Water Supply and Drainage',
            latlng: [16.826639, 75.725538] // Latitude and Longitude
        },
        {
            photo:'',
            owner: 'STP- Sewage Treatment Plant',
            address:'QPMP+7WH, Vijayapura, Karnataka 586102, India',
            phone:'9148682703',
            type: 'Urban Water Supply and Drainage',
            latlng: [16.782946, 75.737137] // Latitude and Longitude
        },
        
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipMA0HE8_a36f4Xee5gZpUkvR3vc7gc90eSk29np=w408-h544-k-no',
            owner: 'Begam Talab Water Supply Pipe',
            address:'QPR2+44Q, Vijayapura, Karnataka 586102, India',
            phone:'798657657',
            type: 'Pipeline',
            latlng: [16.8368072,75.636286] // Latitude and Longitude
        },
        {
            photo: 'https://lh5.googleusercontent.com/p/AF1QipPXRgD9hoT9Lrb1-L5l3QM8Vm8r4af9VeNyA2eB=w426-h240-k-no',
            owner: 'MAHAGURU DISTRIBUTORS',
            address:'Shahapeti Road, near Indian Bank, Vijayapura, Karnataka 586101, India',
            phone:'6587980675',
            type: 'plumbing Supply Store',
            latlng: [16.8258325,75.6953346] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipOBRjEcxYE4Xhb0bhihmKP0D4b5Fo9jRhc6BN-x=w426-h240-k-no',
            owner: 'Lake Water Supply Pipe',
            address:'VPM7+8M3, Vijayapura, Karnataka 586103, India',
            phone:'6759479898',
            type: 'Urban Water Supply and Drainage',
            latlng: [16.8832597,75.5718429] // Latitude and Longitude
        },
        {
            photo:'https://lh5.googleusercontent.com/p/AF1QipOijRWPOvdVGB0YwoUnOTSQPA5H-ovmUffxc73F=w408-h306-k-no',
            owner: 'SHREE RAMAKRISHNA ENTERPRISES',
            address:'Jyoti Pipe Factory, Front Road, beside Water Recycling Plant, near Appaji Hospital, Vijayapura, Karnataka 586103, India',
            phone:'7869587685',
            type: 'Pipe Factory Manufacturer',
            latlng: [16.8367743,75.6362858] // Latitude and Longitude
        },
        
        

    ];

    // Loop through each water location
    waterLocations.forEach(function(location) {
        // Add a marker with popup
        var marker = L.marker(location.latlng).addTo(map)
            .bindPopup(
                '<img src="' + location.photo + '" alt="Water Location Photo" style="width:100px;height:100px;"/>' + '<br>' +
                '<b>Owner:</b> ' + location.owner + '<br>' +
                '<b>Address:</b> ' + location.address + '<br>'+
                '<b>Phone:</b> ' + location.phone + '<br>' + 
                '<b>Type:</b> ' + location.type 
                )
            .openPopup();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data for the water supply and display it on the map
    fetch('http://127.0.0.1:8000/api/water-supply/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display data on your map
            data.forEach(item => {
                // Example: Adding markers to a Leaflet map
                L.marker([item.latitude, item.longitude]).addTo(map)
                    .bindPopup(`<b>${item.location}</b><br>${item.pipeline_info}`);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    // Handle grievance form submission
    document.getElementById('grievanceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let formData = new FormData(this);
        
        fetch('http://127.0.0.1:8000/api/grievances/', {
            method: 'POST',
            body: JSON.stringify({
                user: formData.get('user'), // Adjust according to your form fields
                description: formData.get('description'),
                status: 'Pending'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show a success message or update the UI)
            alert('Grievance submitted successfully!');
        })
        .catch(error => console.error('Error:', error));
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data for water supply
    fetch('http://127.0.0.1:8000/api/water-supply/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display data on your map
            data.forEach(item => {
                // Example: Adding markers to a Leaflet map
                L.marker([item.latitude, item.longitude]).addTo(map)
                    .bindPopup(`<b>${item.location}</b><br>${item.pipeline_info}`);
            });
        })
        .catch(error => console.error('Error:', error));

    // Handle grievance form submission
    document.getElementById('grievanceForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch('http://127.0.0.1:8000/api/grievances/', {
            method: 'POST',
            body: JSON.stringify({
                user: formData.get('user'), // Adjust according to your form fields
                description: formData.get('description'),
                status: 'Pending'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show a success message or update the UI)
            alert('Grievance submitted successfully!');
        })
        .catch(error => console.error('Error:', error));
    });
});

// Simulated alerts data (replace with actual data fetching logic if needed)
const alertsData = [
    { id: 1, type: "Leakage", location: "Pumping Station A", timestamp: "2024-07-18T10:30:00Z" },
    { id: 2, type: "Low Pressure", location: "Water Supplier B", timestamp: "2024-07-18T11:15:00Z" },
    { id: 3, type: "High Consumption", location: "Urban Area C", timestamp: "2024-07-18T12:00:00Z" }
];

// Function to display alerts
function displayAlerts() {
    const alertsList = document.getElementById('alertsList');
    alertsList.innerHTML = ''; // Clear previous alerts

    alertsData.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.classList.add('alert-item');
        alertItem.innerHTML = `
            <h3>${alert.type}</h3>
            <p><strong>Location:</strong> ${alert.location}</p>
            <p><strong>Timestamp:</strong> ${new Date(alert.timestamp).toLocaleString()}</p>
        `;
        alertsList.appendChild(alertItem);
    });
}

// Execute function to display alerts on page load
window.onload = function() {
    displayAlerts();
};

// Optional: Add event listeners for navigation buttons (replace with actual functionality)
document.getElementById("homeButton").addEventListener("click", function() {
    // Handle click event for home button
});

document.getElementById("mapButton").addEventListener("click", function() {
    // Handle click event for map button
});

document.getElementById("grievanceButton").addEventListener("click", function() {
    // Handle click event for grievances button
});

document.getElementById("statusButton").addEventListener("click", function() {
    // Handle click event for status button
});

document.getElementById("logoutButton").addEventListener("click", function() {
    // Handle click event for logout button
});





