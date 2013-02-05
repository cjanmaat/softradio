//main.js

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html',
    {'frame': "none",
    'width': 435,
    'height': 240,
    'left': 100,
    'top': 40});
});