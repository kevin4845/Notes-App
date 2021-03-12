function start() {

}

function ShowModal(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).animate([
        { opacity: '0%' },
        { opacity: '100%' }
    ], {
        duration: 500,
        iterations: 1
    });
}

function HideModal(id) {
    document.getElementById(id).style.display = 'none';
}

function AddNote() {
    UploadFile();
}

async function UploadFile() {
    let formData = new FormData();           
    formData.append("file", file.files[0]);
    await fetch('/upload.php', {
      method: "POST", 
      body: formData
    });    
    alert('The file has been uploaded successfully.');
}

function AddFile() {

}