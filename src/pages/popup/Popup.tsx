import React, { useEffect } from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

function getCurrentTabId() {
  return new Promise(resolve => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      resolve(tabs.length && tabs[0]?.id);
    });
  });
}

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  const handleChangeStyle = async () => {
    console.log('connenct1', chrome);
    const tabId = await getCurrentTabId();
    console.log('connenct2', tabId);
    const connect = chrome.tabs.connect(tabId, { name: 'change-juejin-detail-style' });
    console.log('connenct', connect);
    connect.postMessage('内容');
    connect.onMessage.addListener(mes => {
      console.log('接收的数据', mes);
    });
  };

  return <div className="app">沉浸阅读</div>;
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
