const myForm = document.querySelector("footer > div > form");
const SelectedFile = document.querySelector("footer > div > form > input");
const result = document.querySelectorAll('footer > div')[1];


myForm.addEventListener('submit', e => {
    e.preventDefault();

    const endpoint = "./upload.php";
    const formData = new FormData();

    formData.append("SelectedFile", SelectedFile.files[0]);
    fetch(endpoint, {
        method: "post",
        body: formData,
        data: formData
    }).then(response => response.json()).then(response => result.innerHTML = "data: " + response.data);

});