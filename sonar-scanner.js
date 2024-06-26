const sonarqubeScanner = require ('sonarqube-scanner');

sonarqubeScanner({
    serverUrl : 'http://192.168.33.10:9002/',
    options : {
        'sonar.projectDescription': 'Node JS Backend APP',
        'sonar.projectName':'nodejs-backend',
        'sonar.projectKey':'nodejs-backend',
        'sonar.login':'squ_195a13223aa83b0fb4386528c115a7ba1dbfe38a',
        'sonar.projectVersion':'1.0',
        'sonar.language':'js',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources':'.',
    }
},()=>{});