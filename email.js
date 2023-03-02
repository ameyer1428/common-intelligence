 // Get the form element
    const form = document.getElementById('myForm');

    // Add an event listener to the form when it is submitted
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form data
        const formData = new FormData(form);

        // Send the form data using AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/your-server-endpoint');
        xhr.send(formData);

        // Do something when the response is received
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Request sent successfully!');
            } else {
                alert('There was an error sending your request. Please try again later.');
            }
        {"}"};
    });
function isValidEmail(str) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,24})$/;
    if (reg.test(str) == false) {
        return false;
    } else {
        return true;
    }
} 
/*
function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(str);
}
function form_validation_submit_review() {
    var error = 0;
    var error_msg = '';
    var user_name = $('#user_name').val();
    var user_email = $('#user_email').val();
    var review_title = $('#review_title').val();
    var review_text = $('#review_text').val();
    var recaptcha = $('#g-recaptcha-response').val();
    if (user_name.length < 2) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid name that is at least 2 characters in length.<br />';
        $('#user_name').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#user_name').next('.invalid-feedback').attr('display', 'block');
    }
    if (!isValidEmail(user_email)) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid email address.<br />';
        $('#user_email').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#user_email').next('.invalid-feedback').attr('display', 'block');
    }
    if (review_title.length < 3) {
        error = 1;
        error_msg = error_msg + 'Please enter a title for your review.<br />';
        $('#review_title').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#review_title').next('.invalid-feedback').attr('display', 'block');
    }
    if (review_text.length < 3) {
        error = 1;
        error_msg = error_msg + 'Please enter a your review in the field provided.<br />';
        $('#review_text').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#review_text').next('.invalid-feedback').attr('display', 'block');
    }
    if (error) {
        $('#error_container').removeClass('d-none');
        $('#error_msg').html(error_msg);
        return false;
    }
    return true;
}
function form_validation_contact_us() {
    var error = 0;
    var error_msg = '';
    var contact_first_name = $('#contact_first_name').val();
    var contact_last_name = $('#contact_last_name').val();
    var contact_email = $('#contact_email').val();
    var contact_website = $('#contact_website').val();
    var contact_message = $('#contact_message').val();
    var recaptcha = $('#g-recaptcha-response').val();
    if (contact_first_name.length < 1) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid first name.<br />';
        $('#contact_first_name').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#contact_first_name').next('.invalid-feedback').attr('display', 'block');
    }
    if (contact_last_name.length < 1) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid last name.<br />';
        $('#contact_last_name').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#contact_last_name').next('.invalid-feedback').attr('display', 'block');
    }
    if (!isValidEmail(contact_email)) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid email address.<br />';
        $('#contact_email').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#contact_email').next('.invalid-feedback').attr('display', 'block');
    }
    if (!isValidURL(contact_website)) {
        error = 1;
        error_msg = error_msg + 'Please enter a valid website url.<br />';
        $('#contact_website').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#contact_website').next('.invalid-feedback').attr('display', 'block');
    }
    if (contact_message.length < 3) {
        error = 1;
        error_msg = error_msg + 'Please enter a your message in the field provided.<br />';
        $('#contact_message').removeClass('is-valid').addClass('was-validated is-invalid').focus();
        $('#contact_message').next('.invalid-feedback').attr('display', 'block');
    }
    if (error) {
        $('#error_container').removeClass('d-none');
        $('#error_msg').html(error_msg);
        return false;
    }
    return true;
}
*/
