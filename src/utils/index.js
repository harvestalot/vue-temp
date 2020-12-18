
/**
 * 判断是否为移动端
 */
export function isMobile() {
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  return document.body.clientWidth <= 700;
}

/**
 * 
 * @param {*} routerRoles 路由的roles
 * @param {*} userRoles 当前用户拥有的roles
 */
export function isRouterPermission(routerRoles, userRoles){
  let flag = false;
  userRoles.forEach(item => {
    if(routerRoles.includes(item)) flag = true;
  });
  return flag;

}