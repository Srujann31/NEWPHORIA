const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const destination = document.getElementById('destination').value;
  const days = document.getElementById('days').value;

  if (destination === 'GOA' && (days === '1' || days === '2' || days === '3')) {
    window.location.href = `goa_day${days}.html`;
  } else if (destination === 'GOKARNA' && (days === '1' || days === '2' || days === '3')) {
    window.location.href = `day_${days}_gok_flight.html`;
  } else {
    alert('Invalid input. Please enter a valid destination and number of days.');
  }
});