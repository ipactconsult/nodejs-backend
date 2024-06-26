const sonarqubeScanner = require ('sonarqube-scanner');
const SONAR = require("./sonar-secret.js")

sonarqubeScanner({
    serverUrl : 'http://192.168.33.10:9002/',
    options : {
        'sonar.projectDescription': 'Node JS Backend APP',
        'sonar.projectName':'nodejs-backend',
        'sonar.projectKey':'nodejs-backend',
        'sonar.login': SONAR,
        'sonar.projectVersion':'1.0',
        'sonar.language':'js',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources':'.',
    }
},()=>{});