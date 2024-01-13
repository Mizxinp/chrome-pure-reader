import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';

async function toggleTheme() {
  console.log('initial theme', await exampleThemeStorage.get());
  await exampleThemeStorage.toggle();
  console.log('toggled theme1', await exampleThemeStorage.get());

  // document.body.style.border = "2px solid red";

}

async function juejinStyle() {
  window.addEventListener("load", function(event) {
    console.log("页面中的所有资源都已加载完毕");
    const panelEl: any = document.querySelector('.article-suspended-panel')
    const mainAreaEl: any = document.querySelector('.main-area')
    console.log('panelEl', panelEl);
    if (panelEl) {
      panelEl.style.display = 'none'
    }
    const sidebarEl = document.getElementById('sidebar-container')
    if (sidebarEl) {
      sidebarEl.style.display = 'none'
    }
    if (mainAreaEl) {
      mainAreaEl.style.width = '100%'
    }
    
    // const rootEl = document.getElementById('root');
    // rootEl.style.backgroundColor = '#f00';
  });
}

async function listenEvent() {
  chrome.runtime.onConnect.addListener((res) => {
    console.log('content中的事件', res);
    if (res.name === 'myConnect') {
      chanceJuejinStyle()
      res.onMessage.addListener(mess => {
        console.log('aaaa', mess);
        res.postMessage('hello，我是content')
        
      })
    }
  })
}

function chanceJuejinStyle() {
  const panelEl: any = document.querySelector('.article-suspended-panel')
  const mainAreaEl: any = document.querySelector('.main-area')
  console.log('panelEl', panelEl);
  if (panelEl) {
    panelEl.style.display = 'none'
  }
  const sidebarEl = document.getElementById('sidebar-container')
  if (sidebarEl) {
    sidebarEl.style.display = 'none'
  }
  if (mainAreaEl) {
    mainAreaEl.style.width = '100%'
  }
}

function getCurrentTabId() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs.length && tabs[0]?.id)
    })
  })
}

async function init() {
  const tabId = getCurrentTabId()
  chrome.tabs.highlight({ tabs: tabId })
}

// void init()
void listenEvent()

// void juejinStyle();
void toggleTheme();
