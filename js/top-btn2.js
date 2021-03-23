$(function () {
  const topBtn = $("#js-top-btn");

  topBtn.on("click", () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
