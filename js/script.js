const html = String.raw;
window.addEventListener("load", () => {
  //create popup
  const popup = document.createElement("div");
  popup.innerHTML = html`
    <div id="wpv_gray_shadow"></div>
    <div id="wpv_popup">
      <div class="wpv_body">
        <div class="title">
          <h3>Heading</h3>
          <div class="times">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
              ></path>
            </svg>
          </div>
        </div>
        <hr />
      </div>
    </div>
  `;
  const targetElement = document.querySelector("body>div:not(#wpadminbar)");
  targetElement.parentNode.insertBefore(
    popup,
    targetElement.nextElementSibling
  );

  //close popup functionality
  function closePopup() {
    const grayShadow = document.querySelector("#wpv_gray_shadow");
    grayShadow.nextElementSibling.remove();
    grayShadow.remove();
  }
  document
    .querySelector("#wpv_gray_shadow")
    .addEventListener("click", closePopup);
  document
    .querySelector(".wpv_body .times")
    .addEventListener("click", closePopup);
});
