// app.js
App({
    onLaunch: function() {
        // 应用程序启动时触发一次
        console.log('App Launch')
    },
    onShow: function() {
        // 当应用程序进入前台显示状态时触发
        console.log('App Show')
    },
    onHide: function() {
        // 当应用程序进入后台状态时触发
        console.log('App Hide')
    }
});
