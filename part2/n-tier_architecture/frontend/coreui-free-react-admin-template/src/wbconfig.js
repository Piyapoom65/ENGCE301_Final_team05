const wbconfig = {
    development: {
        hosturl  : 'https://172.18.97.86:4000/api',
        wsurl    : 'wss://172.18.97.86:4000',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://lab-parse-server.cpe-rmutl.net/team05/api',
        wsurl    : 'wss://lab-parse-server.cpe-rmutl.net/team05',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;
