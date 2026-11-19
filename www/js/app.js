// Google Drive Media Downloader

const folderLink = document.getElementById("folderLink");
const checkLink = document.getElementById("checkLink");
const folderStatus = document.getElementById("folderStatus");
const folderName = document.getElementById("folderName");
const folderDetails = document.getElementById("folderDetails");
const themeToggle = document.getElementById("themeToggle");

// MEMERIKSA LINK GOOGLE DRIVE

checkLink.addEventListener("click", function () {

    const link = folderLink.value.trim();

    if (!link) {
        folderStatus.textContent =
            "Silakan masukkan link Google Drive terlebih dahulu.";
        return;
    }

    const match = link.match(
        /drive\.google\.com\/drive\/(?:u\/\d+\/)?folders\/([a-zA-Z0-9_-]+)/
    );

    if (!match) {
        folderStatus.textContent =
            "Link folder Google Drive tidak valid.";
        return;
    }

    const folderId = match[1];

    folderStatus.textContent =
        "ID folder berhasil ditemukan: " + folderId;

    folderName.textContent = "Folder berhasil dikenali";

    folderDetails.textContent =
        "ID Folder: " + folderId;

});

// MENGGANTI MODE TERANG DAN GELAP

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }

});
