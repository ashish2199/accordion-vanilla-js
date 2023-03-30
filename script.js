const ICON_OPEN = "▲";
const ICON_CLOSED = "▼";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded fired");
  init();
});

function init() {
  let accordianHeaders = document.querySelectorAll(".accordian-header");
  [...accordianHeaders].forEach((header, index) => {
    header.addEventListener(
      "click",
      accordianHeaderClickHandler.bind(this, index)
    );
  });

  hidePanels();
}

function hidePanels() {
  let accordians = document.querySelectorAll(".accordian-pane");
  let accordiansArr = [...accordians];
  accordiansArr.forEach((accordian, index) => {
    accordian.style.display = "none";
  });
}

function accordianHeaderClickHandler(id, evt) {
  const btn = evt.target;
  console.log("Clicked on ", id, btn);
  const { accordianPanel, button } = getAccordianById(id);
  toggleAccordianPanel(accordianPanel);
  toggleBtn(button);
}

function getAccordianById(id) {
  let accordianPanel = document.querySelector(
    `div.accordian-pane[data-accordian-id="${id}"]`
  );
  let accordian = accordianPanel.parentElement;
  let button = accordian.querySelector("button.accordian-control-btn");

  return {
    accordianPanel,
    button
  };
}

function toggleAccordianPanel(accordian) {
  const accordianState = accordian.dataset.visiblity;
  if (accordianState === "visible") {
    accordian.dataset.visiblity = "hidden";
    accordian.style.display = "none";
  } else if (accordianState === "hidden") {
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
