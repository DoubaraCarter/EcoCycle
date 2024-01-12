// Function to open the confirmation modal
document.getElementById('openConfirmationModal').addEventListener('click', function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get selected details
    var selectedDetails = getSelectedDetails();

    // Display selected details in the modal
    document.getElementById('confirmationDetails').innerHTML = selectedDetails;

    // Open the modal
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
});

// Function to gather selected details
function getSelectedDetails() {
    // You can customize this part based on your form structure
    var selectedDetails = "";
    selectedDetails += "Type: " + getSelectedType() + "<br>";
    selectedDetails += "Trash Types: " + getSelectedTrashTypes() + "<br>";
    selectedDetails += "Date and Time: " + document.getElementById('datetimePicker').value + "<br>";
    selectedDetails += "House Address: " + document.getElementById('houseAddress').value + "<br>";
    return selectedDetails;
}

// Function to get selected type
function getSelectedType() {
    var recycleRadio = document.getElementById('recycleRadio');
    var disposalRadio = document.getElementById('disposalRadio');
    return recycleRadio.checked ? "Recycle" : (disposalRadio.checked ? "Waste Disposal" : "");
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
    var confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
    confirmationModal.hide();

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