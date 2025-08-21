document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const pesan = document.getElementById("pesan").value;
  
      if (nama && email && pesan) {
        alert(`Terima kasih ${nama}, pesan kamu sudah terkirim!`);
        form.reset();
      } else {
        alert("Harap isi semua data sebelum mengirim!");
      }
    });
  });
  