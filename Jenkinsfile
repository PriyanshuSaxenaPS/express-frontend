
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/PriyanshuSaxenaPS/express-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy Express') {
            steps {
                sh '''
                    sudo /usr/local/bin/deploy-express
                '''
            }
        }
    }

    post {
        success {
            echo 'Express deployment successful!'
        }

        failure {
            echo 'Express pipeline failed!'
        }
    }
}
