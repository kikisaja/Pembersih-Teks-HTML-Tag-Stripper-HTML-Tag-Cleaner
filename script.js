// --- AMBIL ELEMEN DOM ---
const htmlInput = document.getElementById("html-input");
const plainOutput = document.getElementById("plain-output");
const btnClean = document.getElementById("btn-clean");
const btnCopy = document.getElementById("btn-copy");
const toast = document.getElementById("toast");

// --- FUNGSI MEMBERSIHKAN TAG HTML ---
function cleanHtmlTags() {
    const rawHtml = htmlInput.value;

    // Membuat elemen perantara DOM (DOMParser) untuk mengekstrak teks polos secara aman
    const doc = new DOMParser().parseFromString(rawHtml, "text/html");
    const plainText = doc.body.textContent || "";

    // Tampilkan hasil teks polos ke textarea output
    plainOutput.value = plainText;
}

// --- FITUR SALIN TEKS ---
btnCopy.addEventListener("click", () => {
    const textToCopy = plainOutput.value;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Teks bersih berhasil disalin! 🚀");
    });
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// --- EVENT LISTENERS ---
btnClean.addEventListener("click", cleanHtmlTags);
htmlInput.addEventListener("input", cleanHtmlTags);

// Inisialisasi awal
cleanHtmlTags();
