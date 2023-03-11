pipeline{
    agent any 
    tools{
        nodejs "Node"
        dotnet "dotnet_sdk"
    }
    stages{
        stage("check into backend folder"){
            step{
                sh 'cd HumanResources'
            }
        }
        stage("run docker compose"){
            step{
                sh 'docker-compose up --build'
            }
        }
        stage("check into client folder"){
            step{
                sh 'cd ../frontendclient'
            }
        }
    }
}