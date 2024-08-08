document.addEventListener("DOMContentLoaded", () => {
    const materialList = document.getElementById("materialList");
    const uploadForm = document.getElementById("uploadForm");

    const initialMaterials = [
        "Matematika- Peluang",
        "Pedidikan Pancasila- Proses perumusan Pancasila",
        "Sejarah- Kedatangan bangsa Jepang",
        "Bahasa Indonesia- Teks Argumentasi",
        "Bahasa Jawa- Geguritan",
        "Pendidikan Agama- Berpikir kritis ",
    ];

    function loadMaterials() {
        initialMaterials.forEach(material => {
            const li = document.createElement("li");
            li.textContent = material;
            materialList.appendChild(li);
        });
    }

    function uploadMaterial(event) {
        event.preventDefault();

        const materialTitle = document.getElementById("materialTitle").value;
        const materialFile = document.getElementById("materialFile").files[0];

        if (materialTitle && materialFile) {
            const li = document.createElement("li");
            li.textContent = materialTitle;
            materialList.appendChild(li);

            // Reset form
            uploadForm.reset();
        }
    }

    uploadForm.addEventListener("submit", uploadMaterial);

    loadMaterials();
});
