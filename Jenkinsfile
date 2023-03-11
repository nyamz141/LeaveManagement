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
                    sh 'docker-compose up --build'
                }
            }
        }
    }
}