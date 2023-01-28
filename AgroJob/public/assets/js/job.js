let jobApply = document.querySelector(".applyForm");
const apply = async (jobId, userId) => {
  try {
    const res = await axios({
      method: "POST",
      url: `http://13.127.199.83:8000/api/v1/applies/${jobId}`,
      data: {
        jobId: jobId,
        userId: userId,
      },
    });
    if (res.status === 201) {
      alert("You applied successfully");
      window.setTimeout(() => {
        location.reload();
      }, 1000);
    } else if (res.status === 404) {
      alert("Murojat qilish uchun iltimos ro'yxatdan o'ting");
      window.setTimeout(() => {
        location.reload();
      }, 1000);
    }
  } catch (err) {
    alert("Murojat qilish uchun iltimos ro'yxatdan o'ting");
    window.setTimeout(() => {
      location.reload();
    }, 1000);
  }
};

jobApply.addEventListener("submit", (e) => {
  e.preventDefault();
  const jobId = document.querySelector(".jobApply").value;
  const userId = document.querySelector(".userApply").value;
  console.log(jobId, userId);
  apply(jobId, userId);
});
