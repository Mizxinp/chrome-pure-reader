import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

console.log('background loaded');

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   console.log('tttt', tabs);
  
//   chrome.tabs.executeScript(tabs[0].id, {code: 'document.querySelector("mgr-right")'}, function(results) {
//     console.log('sssss', results[0]); // 这里的results[0]就是你想要获取的元素
//   });
// });
