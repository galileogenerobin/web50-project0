$(document).ready(function() {
    $('#search-query').keyup(function() {
        // If the user typed something into the input box
        if ($('#search-query').val() != '') {
            // We show the clear button
            $('#clear-button').css('visibility', 'visible');
        } else {
            // Else if input box is empty, keep button hidden
            $('#clear-button').css('visibility', 'hidden');
        }
    });

    // Clicking the clear button
    $('#clear-button').click(function() {
        // Clear input box
        $('#search-query').val('');
        // Hide the clear button
        $('#clear-button').css('visibility', 'hidden');
    });
});