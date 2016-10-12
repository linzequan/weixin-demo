// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');

Page({
    data: {
        guideData: [{
            image: '../../images/guide1.png'
        }, {
            image: '../../images/guide2.png'
        }, {
            image: '../../images/guide3.png'
        }],
        loading: true,
        windowHeight: '0px'
    },
    onLoad: function() {
        this.data.windowHeight = app.globalData.windowHeight;
        if(wx.getStorageSync('firstStart')) {
            this.start();
        }
        wx.setStorageSync('firstStart', true);
        this.setData({ loading: false });
    },
    start: function() {
        wx.redirectTo({ url: '../list/list' });
        // wx.navigateTo({ url: '../list/list' });
    }
})
