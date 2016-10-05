// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');

Page({
    data: {
        title: '',
        loading: true,
        videoInfo: '',
        showVideo: false
    },
    onLoad(params) {
        this.data.title = params.title || this.data.title;
        params.id = 567433;
        mthunder.getDetail(params.id)
            .then(d=> {
                this.setData({
                    videoInfo: d.data.video_info,
                    loading: false
                });
            })
            .catch(e=> {
                this.setData({
                    videoInfo: '',
                    loading: false
                });
            })
    },
    onReady() {
        wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 手机迅雷'});
    },
    doPlay() {
        this.setData({
            showVideo: true
        })
    }
})
