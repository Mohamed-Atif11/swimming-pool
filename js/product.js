// alert("قريبا ، نحن نعمل على تطوير الموقع");
var mood = document.querySelectorAll(".mood");
var $DarkMode = document.querySelector("#Dark-Mode");
var $lightMode = document.querySelector("#light-Mode");
var bgBody = document.querySelector(".bg-body");
// Dark Mode
$DarkMode.addEventListener("click", () => {
  mood.forEach((x) => {
    x.style.color = "white";
    x.style.background = "black";
  });
});
// light mode
$lightMode.addEventListener("click", () => {
  mood.forEach((x) => {
    x.style.color = "black";
    x.style.background = "white";
  });
});
// whats App
const phoneNumber = "+201022111175"; // رقمك بدون +

document.querySelectorAll(".whatsapp-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card"); // بنرجع لأقرب كارد
    const productName = card.querySelector("h5").innerText; // بنجيب اسم المنتج من ال h5

    const message = `مرحبًا، أريد الاستفسار عن المنتج: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  });
});
