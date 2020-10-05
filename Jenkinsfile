pipeline{
    agent any
    stages{
        stage("Build Docker image"){
            steps{
                echo "========Building Docker image========"
                echo "Build number ${BUILD_NUMBER}"
                
                sh ''' "docker build -t tkrikoriam/translation-microservice:v${BUILD_NUMBER} . \
                --build-arg value7000="987001e00cf5495aa064b9212cddf659" \
                --build-arg urltokenazure="https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken" \ 
                --build-arg azuretraductorurl="https://api.cognitive.microsofttranslator.com"  \
                --build-arg languageslist="https://api.cognitive.microsofttranslator.com/languages?api-version=3.0" \
                "
                '''
                

            }
            post{
                success{
                    echo "========Docker image Builded========"
                    echo "Docker image build successfully"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}