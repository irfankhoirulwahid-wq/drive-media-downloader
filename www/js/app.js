// Google Drive Media Downloader

const folderLink = document.getElementById("folderLink");
const checkLink = document.getElementById("checkLink");
const folderStatus = document.getElementById("folderStatus");

checkLink.addEventListener("click", function () {

    const link = folderLink.value.trim();

    if (!link) {
        folderStatus.textContent =
            "Silakan masukkan link Google Drive terlebih dahulu.";
        return;
    }

    const match = link.match(/\/folders\/([a-zA-Z0-9_-]+)/);

    if (!match) {
        folderStatus.textContent =
            "Link folder Google Drive tidak valid.";
        return;
    }

    folderStatus.textContent =
        "ID folder berhasil ditemukan: " + match[1];

});
