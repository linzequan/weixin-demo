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
        modalHidden: true,
        systemInfo: {
            location: {},
            networkType: {},
            systemInfo: {}
        },
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
                icon: '/images/me_icon_helpfeedback.png',
                title: '帮助反馈',
                action: 'tapItem'
            }, {
                icon: '/images/me_icon_task.png',
                title: '清空缓存',
                action: 'clearCache'
            }, {
                icon: '/images/me_icon_setting.png',
                title: '系统信息',
                action: 'gotoSetting'
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
        });
        let self = this;
        // 获取地理位置信息
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                self.data.systemInfo.location = {
                    latitude: res.latitude,
                    longitude: res.longitude,
                    speed: res.speed,
                    accuracy: res.accuracy
                };
            }
        });
        // 获取网络类型
        wx.getNetworkType({
            success: function(res) {
                self.data.systemInfo.networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
            }
        });
        // 获取系统信息
        wx.getSystemInfo({
            success: function(res) {
                self.data.systemInfo.systemInfo = {
                    model: res.model,
                    pixelRatio: res.pixelRatio,
                    windowWidth: res.windowWidth,
                    windowHeight: res.windowHeight,
                    language: res.language,
                    version: res.version
                };
            }
        });
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
    showMap: function() {
        wx.getLocation({
            type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
            success: function(res) {
                let latitude = res.latitude,
                    longitude = res.longitude;
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28
                })
            }
        });
    },
    gotoSetting: function() {
        this.setData({
            modalHidden: false
        })
    },
    hideModal: function() {
        this.setData({
            modalHidden: true
        })
    },
    clearCache: function() {
        wx.clearStorage();
        this.setData({
            showToast: true,
            toastText: '清理成功'
        })
    }
})
