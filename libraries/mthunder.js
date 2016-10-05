// const HOME_PAGE_URL = 'http://home.m.sjzhushou.com/homepage/refreshpage';
// const REFRESH_HOME_URL = 'http://home.m.sjzhushou.com/homepage/nextpage';
// const DETAIL_URL = 'http://interface.m.sjzhushou.com/hotresource/info';

const HOME_PAGE_URL = 'https://wxpma.kakaday.com/index.php/welcome/getHomePage';
const REFRESH_HOME_URL = 'http://home.m.sjzhushou.com/homepage/nextpage';
const DETAIL_URL = 'https://wxpma.kakaday.com/index.php/welcome/getDetail';

function fetchApi(url, params) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: Object.assign({}, params),
            header: { 'Content-Type': 'application/json' },
            success: resolve,
            fail: reject
        })
    })
}

module.exports = {
    getHomePage(ts) {
        let url = HOME_PAGE_URL + '?ts=' + ts;
        return fetchApi(url, { ts: ts })
            .then(res => res);
    },
    refreshHomePage(ts) {
        return fetchApi(REFRESH_HOME_URL, { ts: ts })
            .then(res => res);
    },
    getDetail(movieid) {
        return fetchApi(DETAIL_URL, { movieid: movieid })
            .then(res => res);
    }
}
