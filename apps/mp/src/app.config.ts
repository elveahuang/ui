export default defineAppConfig({
    pages: [
        'pages/home/index',
        'pages/me/index',
        'pages/index/index',
        'pages/login/index',
        'pages/register/index',
        'pages/password/index',
        'pages/about/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true,
    },
    tabBar: {
        custom: true,
        color: '#000',
        selectedColor: '#56abe4',
        backgroundColor: '#fff',
        borderStyle: 'black',
        list: [
            {
                pagePath: 'pages/index/index',
                selectedIconPath: './images/tabbar_home_on.png',
                iconPath: './images/tabbar_home.png',
                text: 'index',
            },
            {
                pagePath: 'pages/home/index',
                selectedIconPath: './images/tabbar_cart_on.png',
                iconPath: './images/tabbar_cart.png',
                text: 'home',
            },
            {
                pagePath: 'pages/me/index',
                selectedIconPath: './images/tabbar_my_on.png',
                iconPath: './images/tabbar_my.png',
                text: 'ME',
            },
        ],
    },
    usingComponents: {},
});
