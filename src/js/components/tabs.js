export default function Tabs() {
  var tab = document.getElementsByClassName("tab__elem");
  var form = document.getElementsByClassName("form");

  var tabs = document.querySelector(".tabs");
  hideForm(1);
  hideTab(1);
  createTabs(tabs);

  function createTabs(tabElem) {
    tabElem.addEventListener("click", function(event) {
      var target = event.target;
      if (
        target.className == "tab__elem tab__pickup" ||
        "tab__elem tab__delivery"
      ) {
        for (var i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            showTabsContent(i);
            switchClass(i);
            break;
          }
        }
      }
    });
  }

  function hideForm(el) {
    for (var i = el; i < form.length; i++) {
      form[i].classList.remove("show");
      form[i].classList.add("hide");
    }
  }
  function showTabsContent(text) {
    if (form[text].classList.contains("hide")) {
      hideForm(0);
      form[text].classList.remove("hide");
      form[text].classList.add("show");
    }
  }

  function hideTab(list) {
    for (var i = list; i < tab.length; i++) {
      tab[i].classList.add("inactive");
    }
  }

  function switchClass(check) {
    if (tab[check].classList.contains("inactive")) {
      hideTab(0);
      tab[check].classList.remove("inactive");
    }
  }
}
