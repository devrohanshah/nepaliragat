<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet.markercluster/dist/leaflet.markercluster.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/api.js"></script>
    <script src="./js/jquery.js"></script>
<title>Donor Info</title>
</head>
<body>
    <div class="logo">
        <img src="logo.png" type="logo">
    </div>
    <!--marquee behavior="" direction="right" style="background-color: rgb(233, 89, 89); text-align: center; color: white; font-size: 20px; font-weight: 700;"> Save a life donate your Blood</marquee-->
    <form id="placeDetailsForm" method="POST">
             
              <div class="home-blood-group">
                <label for="bloodgroup">BLOODGROUP:</label>
                <select id="bloodgroup" name="bloodgroup">
                  <option value="A+">(A+) - A RhD positive</option>
                  <option value="A-">(A-) - A RhD negative</option>
                  <option value="B+">(B+) - B RhD positive</option>
                  <option value="B-">(B-) - B RhD negative</option>
                  <option value="O+">(O+) - O RhD positive</option>
                  <option value="O-">(O-) - O RhD negative</option>
                  <option value="AB+">(AB+) - AB RhD positive</option>
                  <option value="AB-">(AB-) - AB RhD negative</option>
                </select>
              </div>
  
              <div class="home-province">
                <label for="province">PROVINCE:</label>
                <select id="province" name="province">
                  <option value="Province No. 1">Province No. 1</option>
                  <option value="Province No. 2">Province No. 2</option>
                  <option value="Province No. 3">Province No. 3</option>
                  <option value="Gandaki">Gandaki</option>
                  <option value="Karnali">Karnali</option>
                  <option value="Province No. 5">Province No. 5</option>
                  <option value="SudurPaschim">SudurPaschim</option>
                </select>
              </div>
  
              <div class="home-district">
                <label for="district">DISTRICT:</label>
                <select id="district" name="district">
                  <option value="">Choose one</option>
                </select>
              </div>

              <div class="home-rural-municipality">
                <label for="ruralMunicipality">RURAL MUNICIPALITY:</label>                
                <select id="ruralMunicipality" name="ruralMunicipality">
                  <option value="">Choose one</option>
                </select>
              </div>
                <button type="submit" name="searchdata" id="submit" class="Submit" >Search for your donor</button>
            </form>
 <div class="main-container">
    <div class="tables-menu">
    <h1>Donor Information Table</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Contact no:</th>
            <th>Email</th>
        </tr>
    </thead>
     <tbody class="data" id="data">
     <!--   <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>New York</td>
            <td>123-456-7890</td>
            <td>john.doe@example.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Los Angeles</td>
            <td>987-654-3210</td>
            <td>jane.smith@example.com</td>
        </tr>-->
        
        <!-- Add more rows as needed -->
    </tbody>
</table>
</div>
<div class="static">
<h2>Nearby Hospitals</h2>
<div class="input-area">    
<label for="locationInput">Enter your location:</label>
    <input type="text" id="locationInput">
    <button onclick="findNearbyHospitals()">Search</button>
</div>
    <div id="map"></div>
</div>
</div>
    <script>
        function findNearbyHospitals() {
            const location = document.getElementById('locationInput').value;

            // Use geocoding service to convert location to latitude and longitude
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 0) {
                        throw new Error('Location not found');
                    }
                    const latitude = parseFloat(data[0].lat);
                    const longitude = parseFloat(data[0].lon);

                    const map = L.map('map').setView([latitude, longitude], 10);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    
//27.690979901708484, 85.32179030210696
                    // Manually add hospital data
                const hospitals = [
                    { name: "Bir Hospital", latitude: 27.700945, longitude: 85.320932, contactInfo: "Phone: +977-1-4254373" },
                    { name: "Patan Hospital", latitude: 27.679709, longitude: 85.325114, contactInfo: "Phone: +977-1-5522278" },
                    { name: "Tribhuvan University Teaching Hospital", latitude: 27.690985, longitude: 85.320894, contactInfo: "Phone: +977-1-4412404" },
                    { name: "Grande International Hospital", latitude: 27.693632, longitude: 85.346025, contactInfo: "Phone: +977-1-4482484" },
                    { name: "Medicare National Hospital", latitude: 27.684234, longitude: 85.331993, contactInfo: "Phone: +977-1-4423800" },
                    { name: "Nepal Medical College Teaching Hospital", latitude: 27.676854, longitude: 85.310393, contactInfo: "Phone: +977-1-5591172" },
                    { name: "Civil Service Hospital", latitude: 27.718075, longitude: 85.339026, contactInfo: "Phone: +977-1-4486006" },
                    { name: "Norvic International Hospital", latitude: 27.690979901708484, longitude: 85.32179030210696, contactInfo: "Phone: +977-1-4218230" },
                    { name: "B&B Hospital", latitude: 27.685510, longitude: 85.314895, contactInfo: "Phone: +977-1-5531661" },
                    { name: "Om Hospital & Research Centre", latitude: 27.696698, longitude: 85.323314, contactInfo: "Phone: +977-1-4482484" },
                    { name: "Gandaki Medical College Teaching Hospital", latitude: 28.255543, longitude: 83.985242, contactInfo: "Phone: +977-65-522500" },
                    { name: "Manipal Teaching Hospital", latitude: 27.687426, longitude: 85.338378, contactInfo: "Phone: +977-1-5526917" },
                    { name: "Western Regional Hospital", latitude: 28.234722, longitude: 83.994444, contactInfo: "Phone: +977-81-540307" },
                    { name: "Janakpur Zonal Hospital", latitude: 26.714662, longitude: 85.922235, contactInfo: "Phone: +977-41-522840" },
                    { name: "Birat Medical College Teaching Hospital", latitude: 26.481047, longitude: 87.249137, contactInfo: "Phone: +977-21-435805" },
                    { name: "Dhulikhel Hospital", latitude: 27.625137, longitude: 85.556055, contactInfo: "Phone: +977-11-490727" },
                    { name: "Lumbini Medical College Teaching Hospital", latitude: 27.643501, longitude: 83.448507, contactInfo: "Phone: +977-71-520149" },
                    { name: "Dang Medical College Teaching Hospital", latitude: 28.107754, longitude: 82.298695, contactInfo: "Phone: +977-82-561049" },
                    { name: "Koshi Hospital", latitude: 26.921566, longitude: 87.283476, contactInfo: "Phone: +977-21-523064" },
                    { name: "Mahakali Zonal Hospital", latitude: 29.243940, longitude: 80.854268, contactInfo: "Phone: +977-99-521270" },
                    { name: "Sewa Hospital", latitude: 27.703945, longitude: 85.290001, contactInfo: "Phone: +977-1-4262311" },
                    { name: "Shree Farsibagh Hospital", latitude: 28.196926, longitude: 83.990471, contactInfo: "Phone: +977-65-521650" },
                    { name: "Dhankuta Hospital", latitude: 26.984531, longitude: 87.347786, contactInfo: "Phone: +977-26-520290" },
                    { name: "Dhangadhi Hospital", latitude: 28.695188, longitude: 80.593404, contactInfo: "Phone: +977-91-521193" },
                    { name: "Chitwan Medical College Teaching Hospital", latitude: 27.526343, longitude: 84.532857, contactInfo: "Phone: +977-56-526540" },
                    { name: "Birgunj Public Health Office", latitude: 27.014243, longitude: 84.670060, contactInfo: "Phone: +977-51-521105" },
                    { name: "National Tuberculosis Centre", latitude: 27.710186, longitude: 85.303748, contactInfo: "Phone: +977-1-4243826" },
                    { name: "Birendra Army Hospital", latitude: 27.692947, longitude: 85.295593, contactInfo: "Phone: +977-1-4271422" },
                    { name: "Charak Hospital", latitude: 27.702866, longitude: 85.344393, contactInfo: "Phone: +977-1-4476150" },
                    { name: "Siddhi Poly Clinic", latitude: 27.688091, longitude: 85.351349, contactInfo: "Phone: +977-1-4476254" },
                    { name: "Indra Rajya Laxmi Devi Pratishthan", latitude: 27.675921, longitude: 85.324554, contactInfo: "Phone: +977-1-5524024" },
                    { name: "Chitwan Cancer Hospital", latitude: 27.542241, longitude: 84.491033, contactInfo: "Phone: +977-56-526647" },
                    { name: "Shree Hira Hospital", latitude: 27.681823, longitude: 85.314618, contactInfo: "Phone: +977-1-4424796" },
                    { name: "Shree Om Hospital", latitude: 27.680734, longitude: 85.318303, contactInfo: "Phone: +977-1-4431487" },
                    { name: "Model Hospital", latitude: 27.688157, longitude: 85.315203, contactInfo: "Phone: +977-1-4422993" },
                    { name: "Kist Medical College and Teaching Hospital", latitude: 27.679896, longitude: 85.319800, contactInfo: "Phone: +977-1-4426425" },
                    { name: "Shree Annapurna Neuro Hospital", latitude: 27.678748, longitude: 85.322234, contactInfo: "Phone: +977-1-4413965" },
                    { name: "Shree Bhaktapur Hospital", latitude: 27.673007, longitude: 85.420662, contactInfo: "Phone: +977-1-6610803" },
                    { name: "Shree Bhaktapur Red Cross Hospital", latitude: 27.673059, longitude: 85.418759, contactInfo: "Phone: +977-1-6612266" },
                    { name: "Shree Chhauni Hospital", latitude: 27.695862, longitude: 85.302503, contactInfo: "Phone: +977-1-4271987" },
                    { name: "Shree Dhading Hospital", latitude: 27.924271, longitude: 85.055664, contactInfo: "Phone: +977-10-520707" },
                    { name: "Shree Ganesh Hospital", latitude: 27.672509, longitude: 85.324176, contactInfo: "Phone: +977-1-6610212" },
                    { name: "Shree Kantipur Hospital", latitude: 27.674956, longitude: 85.311584, contactInfo: "Phone: +977-1-4423805" },
                    { name: "Shree Kathmandu Hospital", latitude: 27.674618, longitude: 85.324121, contactInfo: "Phone: +977-1-5521773" },
                    { name: "Shree Madhyapur Hospital", latitude: 27.679788, longitude: 85.325495, contactInfo: "Phone: +977-1-6632824" },
                    { name: "Shree Nepalganj Hospital", latitude: 28.059926, longitude: 81.615143, contactInfo: "Phone: +977-81-521226" },
                    { name: "Shree Nepalgunj Medical College", latitude: 28.087123, longitude: 81.631279, contactInfo: "Phone: +977-81-524144" },
                    { name: "Shree Rajbiraj Hospital", latitude: 26.533365, longitude: 86.744106, contactInfo: "Phone: +977-31-520465" },
                    { name: "Shree Siddhi Memorial Hospital", latitude: 27.678189, longitude: 85.305088, contactInfo: "Phone: +977-1-4271955" },
                    { name: "Shree Teaching Hospital", latitude: 27.680312, longitude: 85.316774, contactInfo: "Phone: +977-1-4413965" },
                    { name: "Shree Tokha Hospital", latitude: 27.765899, longitude: 85.383979, contactInfo: "Phone: +977-1-5150535" },
                    { name: "Siddhakali Hospital", latitude: 27.772160, longitude: 85.309311, contactInfo: "Phone: +977-1-5107068" },
                    { name: "Sir Rana Ambika Shah Hospital", latitude: 27.738797, longitude: 85.358996, contactInfo: "Phone: +977-1-5159226" },
                    { name: "Solu Hospital", latitude: 27.416798, longitude: 86.570855, contactInfo: "Phone: +977-38-520075" },
                    { name: "Standard Hospital", latitude: 27.703128, longitude: 85.319140, contactInfo: "Phone: +977-1-4419805" },
                    { name: "Sukraraj Tropical and Infectious Disease Hospital", latitude: 27.691509, longitude: 85.330206, contactInfo: "Phone: +977-1-4260211" },
                    { name: "Sushma Koirala Memorial Hospital", latitude: 27.681241, longitude: 85.334383, contactInfo: "Phone: +977-1-4280122" },
                    { name: "Sushma Gyane Hospital", latitude: 27.690742, longitude: 85.330593, contactInfo: "Phone: +977-1-4263148" },
                    { name: "Swyambhu Ganesha Ayurveda Hospital", latitude: 27.704372, longitude: 85.300722, contactInfo: "Phone: +977-1-4278444" },
                    { name: "Tara Hospital", latitude: 27.681983, longitude: 85.332768, contactInfo: "Phone: +977-1-4425702" },
                    { name: "Tribhuwan Army Hospital", latitude: 27.695836, longitude: 85.295554, contactInfo: "Phone: +977-1-4271293" },
                    { name: "United Mission Hospital", latitude: 27.702231, longitude: 85.328691, contactInfo: "Phone: +977-1-4426923" },
                    { name: "United Mission Hospital Tansen", latitude: 27.878524, longitude: 83.543830, contactInfo: "Phone: +977-75-522200" },
                    { name: "Vayodha Hospital", latitude: 27.691510, longitude: 85.334442, contactInfo: "Phone: +977-1-4286800" },
                    { name: "Vidhya Sagar Hospital", latitude: 27.717466, longitude: 85.336045, contactInfo: "Phone: +977-1-4262757" },
                    { name: "Vijaya Dashami Hospital", latitude: 27.718249, longitude: 85.317319, contactInfo: "Phone: +977-1-4262939" },
                    { name: "Vijaya Memorial Hospital", latitude: 27.682512, longitude: 85.306208, contactInfo: "Phone: +977-1-4419173" },
                    { name: "Vishwajyoti Hospital", latitude: 27.666283, longitude: 85.315021, contactInfo: "Phone: +977-1-6611424" },
                    { name: "Vrindavan Hospital", latitude: 27.682624, longitude: 85.308568, contactInfo: "Phone: +977-1-6635653" },
                    { name: "Waling Medical College Teaching Hospital", latitude: 27.974379, longitude: 83.657576, contactInfo: "Phone: +977-63-560025" },
                    { name: "White House Hospital", latitude: 27.696878, longitude: 85.326657, contactInfo: "Phone: +977-1-4431289" },
                    { name: "Yak and Yeti Hospital", latitude: 27.707145, longitude: 85.318768, contactInfo: "Phone: +977-1-4244055" },
                    { name: "Zonal Hospital", latitude: 27.679324, longitude: 83.432104, contactInfo: "Phone: +977-73-520100" }
                    // Add more hospitals as needed
                ];


                    const markers = L.markerClusterGroup();
                    hospitals.forEach(hospital => {
                        const marker = L.marker([hospital.latitude, hospital.longitude]).bindPopup(
                            `<b>${hospital.name}</b><br>${hospital.contactInfo}`
                        );
                        markers.addLayer(marker);
                    });
                    map.addLayer(markers);
                    map.fitBounds(markers.getBounds());
                })
                .catch(error => {
                    console.error('Error geocoding location:', error);
                });
        }
    </script>
    <script>
   document.getElementById('placeDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var bloodgroup = document.getElementById('bloodgroup').value;
    var province = document.getElementById('province').value;
    var district = document.getElementById('district').value;
    var ruralMunicipality = document.getElementById('ruralMunicipality').value;

    var data = {
        bloodgroup: bloodgroup,
        province: province,
        district: district,
        ruralMunicipality: ruralMunicipality
    };

    fetch('/fetch data/fetch/fetch.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        var tableBody = document.querySelector('.data');
        tableBody.innerHTML = '';

        data.forEach(row => {
            var tr = document.createElement('tr');

            var tdId = document.createElement('td');
            tdId.textContent = row.id;
            tr.appendChild(tdId);

            var tdName = document.createElement('td');
            tdName.textContent = row.first + ' ' + row.last;
            tr.appendChild(tdName);

            var tdLocation = document.createElement('td');
            tdLocation.textContent = row.district;
            tr.appendChild(tdLocation);

            var tdContact = document.createElement('td');
            tdContact.textContent = row.mobile;
            tr.appendChild(tdContact);

            var tdEmail = document.createElement('td');
            tdEmail.textContent = row.email;
            tr.appendChild(tdEmail);

            tableBody.appendChild(tr);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
    </script>
</body>
</html>
