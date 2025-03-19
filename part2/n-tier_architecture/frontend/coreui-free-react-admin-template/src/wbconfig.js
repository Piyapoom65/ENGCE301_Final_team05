const wbconfig = {
    development: {
      hosturl: 'https://localhost:5005/api',
      wsurl: 'wss://localhost:5005',
      masterKey: 'wallboardapi',
      clientKey: 'wallboardapi',
      javascriptKey: 'wallboardapi',
      appId: 'wallboardapi',
    },
    production: {
      hosturl: 'https://lab-parse-server.cpe-rmutl.net/team05/api',
      wsurl: 'wss://lab-parse-server.cpe-rmutl.net/team05',
      masterKey: 'wallboardapi',
      clientKey: 'wallboardapi',
      javascriptKey: 'wallboardapi',
      appId: 'wallboardapi',
    },
  }
  export default wbconfig[import.meta.env.PROD ? 'production' : 'development']