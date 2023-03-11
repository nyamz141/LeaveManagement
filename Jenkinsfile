pipeline{
    agent any 
    tools{
        nodejs "Node"
        dotnetsdk "dotnet_sdk"
    }
    stages{
        stage("check into backend folder"){
            steps{
                sh 'cd ./HumanResources'
                sh 'cd ./LeaveRequests'
            }
        }
        stage("run docker build"){
            steps{
                sh 'docker build -t munya141/leave-requests-backend:latest'
            }
        }
        stage("check into client folder"){
            steps{
                sh 'cd ../frontendclient'
            }
        }
    }
}