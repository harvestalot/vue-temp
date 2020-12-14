
/**
 * 判断是否为移动端
 */
export function isMobile() {
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  return document.body.clientWidth <= 700;
}