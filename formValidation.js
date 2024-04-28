
function checkForm() {

    var firstName = document.getElementById('first').value;
    var lastName = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    if (firstName.trim() === '') {
        alert('Please enter your first name.');
        return false;
    }

    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your email address.');
        return false;
    }

    if (phone.trim() === '' || phone.length < 10 || phone.length > 10) {
        alert('Please enter your 10 digit phone number.');
        return false;
    }

    if (address.trim() === '') {
        alert('Please enter your current street address.');
        return false;
    }

    if (city.trim() === '') {
        alert('Please enter your current city of residence.');
        return false;
    }

    if (state.trim() === '' || state.length > 2 || state.length < 2) {
        alert('Please enter your current state of residence using a two character state abbreviation.');
        return false;
    }

    if (zip.trim() === '' || zip.length > 5 || zip.length < 5) {
        alert('Please enter your current five digit zip code');
        return false;
    }

    alert('Thank you for entering the raffle! Winners will be notified by email on June 1st!')
    return true;
}