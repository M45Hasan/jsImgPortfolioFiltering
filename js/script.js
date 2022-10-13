filterSelection("all");
function filterSelection(c) {
  let x = document.querySelectorAll(".column");
  if (c == "all") c = "";
  let arr = Array.from(x);
  arr.map((item) => {
    removeClass(item, "show");
    if (item.className.indexOf(c) > -1) {
      addClass(item, "show");
    }
  });
}

function addClass(element, name) {
  let arr2 = element.className.split(" ");
  let arr3 = name.split(" ");

  for (let i = 0; i < arr3.length; i++) {
    if (arr2.indexOf(arr3[i] == -1)) {
      element.className += " " + arr3[i];
    }
  }
}

function removeClass(element, name) {
  let arr4 = element.className.split(" ");
  let arr5 = name.split(" ");
  for (let i = 0; i < arr5.length; i++) {
    while (arr4.indexOf(arr5[i]) > -1) {
      arr4.splice(arr4.indexOf(arr5), 1);
    }
  }
  element.className = arr4.join(" ");
}

let btnContainer = document.querySelector("#myBtnContainer");
let btns = btnContainer.querySelectorAll(".btn");
let arr6 = Array.from(btns);
arr6.map((item) => {
  item.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});
