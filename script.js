document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded fired");
  init();
});

function init() {
  let btns = document.querySelectorAll(".accordian-control-btn");
  let btnsArr = [...btns];
  btnsArr.forEach((btn, index) => {
    btn.addEventListener(
      "click",
      accordianButtonClickHandler.bind(this, index)
    );
  });

  let accordians = document.querySelectorAll(".accordian-pane");
  let accordiansArr = [...accordians];
  accordiansArr.forEach((accordian, index) => {
    accordian.style.display = "none";
  });
}

const ICON_OPEN = "▲";
const ICON_CLOSED = "▼";

function accordianButtonClickHandler(id, evt) {
  const btn = evt.target;
  toggleBtn(btn);
  toggleAccordian(id);
  console.log("Clicked:", id, btn.dataset.closed);
}

function toggleAccordian(id) {
  let accordian = document.querySelector(
    `div.accordian-pane[data-accordian-id="${id}"]`
  );
  const state = accordian.dataset.visiblity;

  if (state === "visible") {
    accordian.dataset.visiblity = "hidden";
    accordian.style.display = "none";
  } else if (state === "hidden") {
    accordian.dataset.visiblity = "visible";
    accordian.style.display = "block";
  }
}

function toggleBtn(btn) {
  const state = btn.dataset.closed;
  if (state === "closed") {
    btn.dataset.closed = "open";
    btn.innerText = ICON_OPEN;
  } else if (state === "open") {
    btn.dataset.closed = "closed";
    btn.innerText = ICON_CLOSED;
  }
}
