pipeline{
    agent any 
    tools{
        nodejs "Node"
        dotnetsdk "dotnet_sdk"
    }
    stages{
        stage("check into backend folder"){
            steps{
                sh 'cd HumanResources'
            }
        }
        stage("run docker compose"){
            steps{
                sh 'docker-compose up --build'
            }
        }
        stage("check into client folder"){
            steps{
                sh 'cd ../frontendclient'
            }
        }
    }
}