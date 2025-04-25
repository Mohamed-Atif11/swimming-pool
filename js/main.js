// alert("Welcome , نحن نعمل على تطوير الموقع");
const music = document.getElementById("bgMusic");

document.getElementById("showAlert").addEventListener("click", () => {
  Swal.fire({
    title: "مرحبًا بك!",
    text: "هل ترغب في سماع موسيقى كلاسيكية؟",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "شغّل الموسيقى 🎶",
    cancelButtonText: "لأ شكراً",
  }).then((result) => {
    if (result.isConfirmed) {
      music.play();
    }
  });
});
