import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import { chanceJuejinStyle, initJuejin } from './js/juejin';

async function toggleTheme() {
  console.log('initial theme', await exampleThemeStorage.get());
  await exampleThemeStorage.toggle();
  console.log('toggled theme1', await exampleThemeStorage.get());

  // document.body.style.border = "2px solid red";
}

async function listenEvent() {
  chrome.runtime.onConnect.addListener(res => {
    console.log('content中的事件', res);
    if (res.name === 'change-juejin-detail-style') {
      chanceJuejinStyle();
      // res.onMessage.addListener(mess => {
      //   console.log('aaaa', mess);
      //   res.postMessage('hello，我是content')
      // })
    }
  });
}

async function init() {
  // const tabId = getCurrentTabId()
  // chrome.tabs.highlight({ tabs: tabId })
  window.addEventListener('load', () => {
    initJuejin();
  });
}

void init();
void listenEvent();

// void juejinStyle();
void toggleTheme();
