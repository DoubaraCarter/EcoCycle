function confirmChanges() {
    Swal.fire({
        title: 'Confirm Changes',
        text: 'Are you sure you want to save changes?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Add logic here to save changes, e.g., submit the form
            Swal.fire('Saved!', 'Your changes have been saved.', 'success');
        }
    });
}

function previewImage() {
    const imageInput = document.getElementById('imageInput');
    const profileImage = document.getElementById('profileImage');

    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}