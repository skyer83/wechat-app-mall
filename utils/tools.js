const WXAPI = require('apifm-wxapi')

// 显示购物车tabBar的Badge
function showTabBarBadge(){
  const token = wx.getStorageSync('token')
  if (!token) {
    return
  }
  WXAPI.shippingCarInfo(token).then(res => {
    if (res.code == 700) {
      wx.removeTabBarBadge({
        index: 3
      });
    }
    if (res.code == 0) {
      if (res.data.number == 0) {
        wx.removeTabBarBadge({
          index: 3
        });
      } else {
        wx.setTabBarBadge({
          index: 3,
          text: `${res.data.number}`
        });
      }
    }
  })
}

module.exports = {
  showTabBarBadge: showTabBarBadge
}