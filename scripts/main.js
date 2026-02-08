// File upload functionality
const fileInput = document.getElementById('file-upload');
const fileNameDisplay = document.querySelector('.file-name');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameDisplay.textContent = `Selected: ${file.name}`;
    } else {
        fileNameDisplay.textContent = 'No file selected';
    }
});
