// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');
const util = require('../../utils/util.js');

Page({
    data: {
        title: '精选',
        loading: true,
        movies: [],
        scrollTop: 100
    },
    onLoad(params) {
        this.data.title = params.title || this.data.title;
        mthunder.getHomePage(Date.parse(new Date()) / 1000)
            .then(d=> {
                for(var i in d.data.item_list) {
                    d.data.item_list[i]['duration_format'] = util.formatTime(d.data.item_list[i]['duration']);
                }
                this.setData({
                    movies: d.data.item_list,
                    loading: false
                })
            })
            .catch(e=> {
                this.setData({
                    movies: [],
                    loading: false
                })
            });
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 手机迅雷' })
    }
})

