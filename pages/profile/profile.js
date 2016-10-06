// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');

Page({
    data: {
        title: '我的',
        loading: true,
        wechat: '',
        nickName: '',
        avatarUrl: ''
    },
    onLoad(params) {
        wx.login({
            success(res) {
                if(res.code) {
                    console.log('登录成功' + res.code);
                } else {
                    console.error('获取登录态失败' + res.errMsg);
                }
            }
        })
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 演示' });
        this.getUserInfo();
    },
    getUserInfo: function() {
        const self = this;
        wx.getUserInfo({
            success(res) {
                self.setData({
                    userInfo: res.userInfo
                });
            },
            fail() {},
            complete() {}
        });
    }
})
