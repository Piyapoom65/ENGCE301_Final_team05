module.exports = {
    development: {
      apiConfig: {
        serverKey:
          "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
        jwtKey:
          "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
      },
      sqlConfig: {
        server: '192.168.56.105',
        database:'team5_engce301_db',
        user:'team5',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.56.105'  // SQL Server instance name
        },
      },
      parseConfig: {
        
        apiURL: "https://localhost:5005/api",
        appId: "wallboardapi",
        masterKey: "wallboardapi",
        javascriptKey: "wallboardapi",
      },
    },
    production: {
      apiConfig: {
        jwtKey:
          "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
        serverKey:
          "1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h",
      },
      sqlConfig: {
        server: '10.21.47.33', //CE Lab Server
        database:'team5_engce301_db',
        user:'team5',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '10.21.47.33'  // SQL Server instance name
        },
      },
      parseConfig: {
        apiURL: "https://lab-parse-server.cpe-rmutl.net/team05/api",
        appId: "wallboardapi",
        masterKey: "wallboardapi",
        javascriptKey: "wallboardapi",
      },
    },
  }[process.env.NODE_ENV === "production" ? "production" : "development"];