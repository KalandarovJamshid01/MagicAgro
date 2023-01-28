const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/auth/signin",
      data: {
        email: email,
        password: password,
      },
    });
    if (res.status === 200) {
      alert("You logged successfully");
      window.setTimeout(() => {
        location.assign("/home");
      }, 1000);
    }
  } catch (err) {
    alert(
      "Bunday user topilmadi, Iltimos ma'lumotlarni to'g'ri kiriting, yoki ro'yxatdan o'ring"
    );
    window.setTimeout(() => {
      location.reload();
    }, 1000);
  }
};

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);
  login(email, password);
});
