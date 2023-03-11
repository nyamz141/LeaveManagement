pipeline{
    agent any 
    tools{
        nodejs "Node"
    }
    stages{
        stage("check into backend folder and builder docker"){
            steps{
                dir('HumanResources'){
                    dir('LeaveRequests'){
                        sh 'docker build -t munya141/leave-request:latest .'
                    }
                }
            }
        }
    }
}