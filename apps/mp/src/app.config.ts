export default defineAppConfig({
    pages: ['pages/index/index', 'pages/about/index', 'pages/home/index'],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
    tabBar: {
        custom: true,
        color: '#000000',
        selectedColor: '#DC143C',
        backgroundColor: '#ffffff',
        list: [
            {
                pagePath: 'pages/index/index',
                text: 'index',
            },
            {
                pagePath: 'pages/home/index',
                text: 'home',
            },
            {
                pagePath: 'pages/about/index',
                text: 'about',
            },
        ],
    },
});
