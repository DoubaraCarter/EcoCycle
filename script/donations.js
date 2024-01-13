// Function to open the confirmation modal
document.getElementById('openConfirmationDonationModal').addEventListener('click', function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get selected details
    var donationDetails = getDonationDetails();

    // Display selected details in the modal
    document.getElementById('donationConfirmationDetails').innerHTML = donationDetails;

    // Open the modal
    var confirmationDonationModal = new bootstrap.Modal(document.getElementById('confirmationDonationModal'));
    confirmationDonationModal.show();
});

// Function to gather selected details
function getDonationDetails() {
    // You can customize this part based on your form structure
    var donationDetails = "";
    donationDetails += "Donation Types: " + getSelectedTrashTypes() + "<br>";
    donationDetails += "Date and Time: " + document.getElementById('datetimeSelect').value + "<br>";
    donationDetails += "House Address: " + document.getElementById('homeAddress').value + "<br>";
    return donationDetails;
}

// Function to get selected trash types
function getSelectedTrashTypes() {
    var selectedTrashTypes = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        selectedTrashTypes.push(checkbox.nextElementSibling.textContent.trim());
    });
    return selectedTrashTypes.join(", ");
}

// sweet alert
// Confirm order button click event
document.getElementById('confirmOrderBtn').addEventListener('click', function () {
    // Close the modal
    var confirmationDonationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationDonationModal'));
    confirmationDonationModal.hide();

    // Show SweetAlert success message
    Swal.fire({
        icon: 'success',
        title: 'Order Confirmed!',
        text: 'Your order has been confirmed successfully.',
    }).then((result) => {
        // Check if the user clicked "OK"
        if (result.isConfirmed) {
            // Redirect to the dashboard (change the URL accordingly)
            window.location.href = "./dashboard.html";
        }
    });
});