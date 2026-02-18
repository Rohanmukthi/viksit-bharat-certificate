function generateCertificate() {
    let name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("nameField").innerText = name;
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;

    let certificate = document.getElementById("certificate-container");

    html2canvas(certificate).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        let pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save("Viksit_Bharat_Certificate.pdf");
    });
}
