function openModal(imgSrc, text) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');

    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalText.innerText = text;
}


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function openNewsModal(imageSrc, date, text) {
    var newsModalText = document.getElementById('newsModalText');
    var newsModal = document.getElementById('newsModal');
    newsModalText.innerHTML = '<strong>' + date + '</strong><br>' +
                              '<p>' + text + '</p>' +
                              '<img src="' + imageSrc + '" alt="News Image">';
    newsModal.style.display = 'block';
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
}
