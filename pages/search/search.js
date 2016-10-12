// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');
const util = require('../../utils/util.js');

Page({
    data: {
        title: '搜索',
        canRefresh: false,
        showToast: false,
        toastText: '',
        subtitle: '请输入搜索内容',
        movies: [],
        loading: false,
        windowHeight: ''
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 演示' })
    },
    onLoad() {
        this.data.windowHeight = app.globalData.windowHeight;
    },
    search(e) {
        if(!e.detail.value) return;
        this.setData({
            subtitle: '加载中...',
            loading: true
        });
        mthunder.search(e.detail.value)
            .then(d=> {
                this.setData({
                    movies: d.data.videos,
                    loading: false,
                    showToast: true,
                    toastText: (d.data.videos.length > 0) ? '搜索成功' : '没有找到资源'
                });
            })
            .catch(e=> {
                this.setData({
                    loading: false,
                    showToast: true,
                    toastText: '搜索异常'
                });
            })
    },
    tapItem: function(e) {
        this.setData({
            showToast: true,
            toastText: '暂未处理'
        })
    },
    hideToast: function(e) {
        this.setData({
            showToast: false
        })
    }
});
