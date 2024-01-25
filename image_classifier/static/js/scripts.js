// script.js

function submitImage() {
    // Add logic for submitting image (if needed)
    alert('Submit image logic goes here');
}

function clearImage() {
    // Clear the displayed image and predicted output
    document.getElementById('dropZone').innerHTML = '<input type="file" id="fileInput" accept="image/*"><p>Drop an image here</p>';
    document.getElementById('predictedOutput').textContent = '---';
}

function predictImage() {
    // Add logic for predicting image (if needed)
    alert('Predict image logic goes here');
}

function takeScreenshot() {
    // Take a screenshot of the drop zone and display the image in a new window
    html2canvas(document.getElementById('dropZone')).then(function(canvas) {
        var screenshotImage = new Image();
        screenshotImage.src = canvas.toDataURL('image/png');

        var screenshotWindow = window.open();
        screenshotWindow.document.write('<img src="' + screenshotImage.src + '" alt="Screenshot">');
    });
}

document.getElementById('dropZone').addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('drag-over');
});

document.getElementById('dropZone').addEventListener('dragleave', function () {
    this.classList.remove('drag-over');
});

document.getElementById('dropZone').addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    // Handle dropped files
    const files = e.dataTransfer.files;

    if (files.length > 0) {
        handleFile(files[0]);
    }
});

document.getElementById('dropZone').addEventListener('click', function () {
    // Trigger file input click when drop zone is clicked
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
    // Handle file when selected from file input
    const files = this.files;

    if (files.length > 0) {
        handleFile(files[0]);
    }
});

function handleFile(file) {
    // Display the dropped/selected file in the drop zone
    const dropZone = document.getElementById('dropZone');
    dropZone.innerHTML = `<input type="file" id="fileInput" accept="image/*"><p>File: ${file.name}</p>`;
    
    // You can further process or upload the file here
}
