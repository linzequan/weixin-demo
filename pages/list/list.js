// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');
const util = require('../../utils/util.js');

Page({
    data: {
        title: '首页',
        canRefresh: true,
        loading: true,
        movies: [],
        isLoading: false,
        hasMore: false,
        hasRefesh: false,
        showToast: false,
        toastText: '',
        windowHeight: ''
    },
    onLoad(params) {
        this.data.windowHeight = app.globalData.windowHeight;
        this.data.title = params.title || this.data.title;
        this.refresh();
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 演示' })
    },
    loadMore: function(e) {
        let self = this;
        if(!this.data.hasMore) return;
        if(!!this.data.isLoading) return;
        self.setData({
            isLoading: true
        });
        mthunder.refreshHomePage(Date.parse(new Date()) / 1000)
            .then(d=> {
                for(var i in d.data.item_list) {
                    d.data.item_list[i]['duration_format'] = util.formatTime(d.data.item_list[i]['duration']);
                }
                this.setData({
                    movies: self.data.movies.concat(d.data.item_list),
                    isLoading: false,
                    hidden: true
                });
            })
            .catch(e=> {
                this.setData({
                    isLoading: false,
                    showToast: true,
                    toastText: '加载异常'
                });
            });
    },
    refresh: function(e) {
        if(!!this.data.isLoading) return;
        this.setData({
            isLoading: true,
            hasRefesh: true
        });
        mthunder.getHomePage(Date.parse(new Date()) / 1000)
            .then(d=> {
                for(var i in d.data.item_list) {
                    d.data.item_list[i]['duration_format'] = util.formatTime(d.data.item_list[i]['duration']);
                }
                this.setData({
                    movies: d.data.item_list,
                    loading: false,
                    hasRefesh: false,
                    isLoading: false,
                    hasMore: true,
                    showToast: (e==undefined ? false : true),
                    toastText: '刷新成功'
                });
            })
            .catch(e=> {
                this.setData({
                    movies: [],
                    loading: false,
                    hasRefesh: false,
                    isLoading: false,
                    hasMore: true,
                    showToast: true,
                    toastText: '刷新异常'
                })
            });
    },
    hideToast: function(e) {
        this.setData({
            showToast: false
        })
    }
})
