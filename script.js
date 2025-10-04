 const loginBtn = document.querySelector(".login-btn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.querySelector(".close-btn");

    loginBtn.addEventListener("click", () => {
      loginPopup.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      loginPopup.classList.remove("active");
    });