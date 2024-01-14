import { isJuejin, isJuejinArticleDetail } from '@root/src/utile';

export function chanceJuejinStyle() {
  const panelEl: any = document.querySelector('.article-suspended-panel');
  const mainAreaEl: any = document.querySelector('.main-area');
  const mainContainerEl: any = document.querySelector('.main-container');
  console.log('panelEl', panelEl);
  if (panelEl) {
    panelEl.style.display = 'none';
  }
  const sidebarEl = document.getElementById('sidebar-container');
  if (sidebarEl) {
    sidebarEl.style.display = 'none';
  }
  if (mainAreaEl) {
    mainAreaEl.style.width = '100%';
  }
  if (mainContainerEl) {
    mainContainerEl.style.width = '100%';
  }
}

export function initJuejin() {
  if (!isJuejin() && !isJuejinArticleDetail()) return;
  chanceJuejinStyle();
}
