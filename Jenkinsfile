pipeline{
    agent any 
    tools{
        nodejs "Node"
        dotnetsdk "dotnet_sdk"
    }
    stages{
        stage("check into backend folder"){
            steps{
                dir('HumanResources'){
                   echo sh 'pwd'
                }
            }
        }
        stage("run docker build"){
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