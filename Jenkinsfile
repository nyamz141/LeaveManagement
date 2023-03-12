pipeline{
    agent any 
    tools{
        nodejs "Node"
    }
    stages{
        stage("build docker image of client and push to docker hub"){
            steps{
                dir('frontendclient'){
                    sh 'npm install'
                    sh 'docker build -t munya141/client-leave-requests:latest .'
                    withCredentials([usernamePassword(credentialsId: 'DockerHubAuth', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	            sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                        sh 'docker push munya141/client-leave-requests:latest'
                    }
                }
            }
        }
    }
}