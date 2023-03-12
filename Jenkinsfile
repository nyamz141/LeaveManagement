pipeline{
    agent any 
    tools{
        nodejs "Node"
    }
    stages{
        stage("check into frontend folder"){
            steps{
                dir('frontendclient'){
                    sh 'npm install'
                    sh 'docker build -t munya141/leave-requests:latest .'
                }
            }
        }
    }
}