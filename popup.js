let container = document.getElementById("container");
let searchBtn = document.getElementById("searchBtn");
let clearBtn = document.getElementById("clearBtn");
let searchText = document.getElementById("searchText");

var imgURL = chrome.runtime.getURL("images/background.png");
container.style.background = "url(" + encodeURI(imgURL) + ")";

searchText.addEventListener("keyup", async (e) => {
  if (e.key === 'Enter') {
    if (searchText?.value) {
      search(searchText.value);
    }
  }
})

clearBtn.addEventListener("click", async () => {
  searchText.value = "";
})

searchBtn.addEventListener("click", async () => {
  search(searchText.value);
});

search = (text) => {
  let newURL = "https://www.google.com/search?q=" + text + " site%3Astackoverflow.com";
  chrome.tabs.create({ url: newURL })
}

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// chrome.scripting.executeScript({
//   target: { tabId: tab.id },
//   function: setPageBackgroundColor,
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// // The body of this function will be execuetd as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }