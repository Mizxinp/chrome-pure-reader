export function isJuejin() {
  return window.location.host === 'juejin.cn';
}

/** 是否掘金详情页 */
export function isJuejinArticleDetail() {
  const regex = /^\/post/;
  return regex.test(window.location.pathname);
}
