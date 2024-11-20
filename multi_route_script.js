// JavaScript for dynamically adding more flight fields
document.getElementById('add-flight').addEventListener('click', () => {
  // Create a new row for an additional flight
  const flightContainer = document.getElementById('flight-container');
  
  const newFlightRow = document.createElement('div');
  newFlightRow.className = 'row flight-row mb-3';
  newFlightRow.innerHTML = `
    <div class="col-md-3">
      <label for="from">From</label>
      <input type="text" class="form-control" placeholder="City or Airport">
    </div>
    <div class="col-md-3">
      <label for="to">To</label>
      <input type="text" class="form-control" placeholder="City or Airport">
    </div>
    <div class="col-md-3">
      <label for="depart">Depart</label>
      <input type="date" class="form-control">
    </div>
  `;
  
  // Append the new flight row to the container
  flightContainer.appendChild(newFlightRow);
});
