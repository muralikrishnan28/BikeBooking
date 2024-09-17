// scripts.js

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your bike has been booked successfully!');
});

function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}
