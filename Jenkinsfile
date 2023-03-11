pipeline{
    agent any 
    tools{
        nodejs "Node"
    }
    stages{
        stage("check into backend folder"){
            steps{
                dir('HumanResources'){
                   sh 'echo pwd'
                }
            }
        }
        stage("run docker build"){
            steps{
                dir('LeaveRequests'){
                    sh 'docker build -t munya141/leave-request:latest .'
                }
            }
        }
        stage("check into client folder"){
            steps{
                sh 'cd ../frontendclient'
            }
        }
    }
}