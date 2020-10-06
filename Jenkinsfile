pipeline {
    agent any
    stages {
        stage("ESLint JS Code"){
            steps{
             checkout(scm)
             sh "npm install"
             sh "sudo eslint index.js"                
            }
        }
        // stage("Build Docker image"){
        //     steps{
        //         echo "========Building Docker image============"
        //         echo "Build number id ${BUILD_NUMBER}"
                
        //         sh ''' docker build -t 321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-microservice:v${BUILD_NUMBER} . \
        //         --build-arg value7000="987001e00cf5495aa064b9212cddf659" \
        //         --build-arg urltokenazure="https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken"  \
        //         --build-arg azuretraductorurl="https://api.cognitive.microsofttranslator.com"  \
        //         --build-arg languageslist="https://api.cognitive.microsofttranslator.com/languages?api-version=3.0" \
        //         '''
        //     }
        //     post{
        //         success{
        //             echo "========Docker image Builded========"
        //             echo "Docker image build successfully"
        //         }
        //         failure{
        //             echo "========A execution failed========"
        //         }
        //     }
        // }
        // stage("Upload Image to ECR"){
        //     steps{
        //         echo "========Uploading Docker image========"
        //         sh ''' 
        //             aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 321304165861.dkr.ecr.us-west-2.amazonaws.com
        //         '''
        //         sh '''
        //             docker push 321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-microservice:v${BUILD_NUMBER}
                    
        //         '''                
        //     }
        //     post{
        //         success{
        //             echo "====++++only when successful++++===="
        //         }
        //         failure{
        //             echo "======++++only when failed++++===="
        //         }
        //     }
        // }
        //  stage("Deploy to AWS EKS"){
        //     steps{
        //      withAWS(region:'us-west-2',credentials:'AWS_EKS'){
        //         sh ''' 
        //             aws sts get-caller-identity
        //         '''
        //         sh ''' 
        //            aws eks --region us-west-2 update-kubeconfig --name EKSUdacityCapstone
        //         '''
        //         sh '''
        //             kubectl set image deployment.apps/translation-microservice translation-microservice=321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-microservice:v${BUILD_NUMBER} -n microservices 
                    
        //          '''

        //          sh 'kubectl get all -n microservices'
        //      }
        //     }
        // }
    }
}