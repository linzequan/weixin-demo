// 获取全局应用程序实例
const app = getApp();
// 手雷数据API
const mthunder = require('../../libraries/mthunder.js');

Page({
    data: {
        list: [{
            image: '../../images/guide1.png'
        }, {
            image: '../../images/guide2.png'
        }, {
            image: '../../images/guide3.png'
        }],
        loading: true
    },
    onLoad() {
        this.setData({ guideData: this.data.list, loading: false });
    },
    start() {
        wx.redirectTo({ url: '../list/list' });
    }
});
