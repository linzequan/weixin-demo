// app.js
App({
    globalData: {
        windowHeight: ''
    },
    onLaunch: function() {
        // 应用程序启动时触发一次
        console.log('App Launch');
        let self = this;
        wx.getSystemInfo({
            success: function(res) {
                console.log(res);
                self.globalData.windowHeight = res.windowHeight + 'px';
            }
        });
    },
    onShow: function() {
        // 当应用程序进入前台显示状态时触发
        console.log('App Show');
    },
    onHide: function() {
        // 当应用程序进入后台状态时触发
        console.log('App Hide');
    },
    onUnlaunch: function() {
        console.log('App onUnlaunch');
    }
});
