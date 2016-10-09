// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');

Page({
    data: {
        title: '我的',
        loading: true,
        showToast: false,
        toastText: '',
        userInfo: {
            nickName: '立即登录',
            avatarUrl: '/images/headpic_default.png'
        },
        //下端列表项
        listItems: [{
                icon: '/images/me_icon_member.png',
                title: '会员中心',
                action: 'tapItem'
            }, {
                icon: '/images/me_icon_task.png',
                title: '我的任务',
                action: 'tapItem'
            }, {
                icon: '/images/me_icon_helpfeedback.png',
                title: '帮助反馈',
                action: 'tapItem'
            }, {
                icon: '/images/me_icon_setting.png',
                title: '设置',
                action: 'tapItem'
            }
        ]
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 演示' })
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
    },
    login: function() {
        this.getUserInfo();
        this.setData({
            showToast: true,
            toastText: '登录成功'
        })
    },
    hideToast: function(e) {
        this.setData({
            showToast: false
        })
    },
    tapItem: function(e) {
        this.setData({
            showToast: true,
            toastText: '暂未处理'
        })
    },
})
