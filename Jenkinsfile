pipeline {
    agent any
    environment{
    DOCKERHUB_USERNAME = "ipactconsult"  
    }
    stages {
        stage('Get Started') {
            steps {
                // Start Building Pipeline
                echo "Start Building Pipeline"
            }
        }
        
        stage('GIT Checkout') {
            steps {
                // Authorize Github Hand Shaking ...
                git branch: 'master',
                url: 'https://github.com/ipactconsult/nodejs-backend'
            }
        }
        
        stage('Clean') {
            steps {
                // Authorize Jenkins To Clean Build ...
                echo 'Authorize Jenkins To Clean Build ...'
                echo "Cleaning Cache"
                nodejs('nodeJSInstallationName') {
                sh 'npm cache clean --force'
                }
                echo "Delete node modules"
                sh 'rm -rf node_modules'
            }
        }
        
        stage('Install') {
            steps {
                // Authorize Jenkins To Install Dependencies ...
                 echo 'Authorize Jenkins To Install Dependencies ...'
                 nodejs('nodeJSInstallationName') {
	               sh 'npm install --legacy-peer-deps'
                }

            }
        }
        
         stage('Unit Test') {
             steps {
                 // Authorize Jenkins To Execute Unit Testing ...
                 echo "Unit Test Waiting"
                 nodejs('nodeJSInstallationName') {
                     sh 'npm run test'
                   }
             }
         }
        
         stage('Static Test') {
             steps {
                 // Authorize Jenkins To Execute Static Test using Sonarqube ...
                   nodejs('nodeJSInstallationName') {
                     sh 'npm run sonar'
                   }
             }
        }       
        stage('Docker Image') {
            steps {
                // Authorize Jenkins To Execute Build Docker Image By Executing Dockerfile ...
                sh 'sudo docker build -t ipactconsult/nodejs-app:v1.0.3 .'
            }
        }    
        stage('Docker Login') {
            steps {
                // Authorize Jenkins To Establish Connection With DockerHub ...
                withCredentials([usernamePassword(credentialsId: 'jendoc', usernameVariable: 'DOCKERHUB_USERNAME', 
                passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh "docker login -u \$DOCKERHUB_USERNAME -p \$DOCKERHUB_PASSWORD"
                }
            }
        }    
        stage('Docker Push') {
            steps {
                // Authorize Jenkins To Push Dockerfile Image  ...
                script {
                withCredentials([usernamePassword(credentialsId: 'jendoc', usernameVariable: 'DOCKERHUB_USERNAME', 
                passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker push ipactconsult/nodejs-app:v1.0.3"
                    }
                }
            }
        }  

         stage('Run Container') {
            steps {
                // Authorize Jenkins To Execute Build Docker Image By Executing Dockerfile ...
                sh 'sudo docker-compose up -d'
            }
        }    


        stage('END OF PIPELINE') {
            steps {
                // Close Building Pipeline
                echo "Pipeline Closed"
            }
        }      
    }
}
