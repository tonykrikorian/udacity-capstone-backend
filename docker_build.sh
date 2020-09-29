#Execute docker build 
sudo docker build -t tkrikoriam/translation-microservice:v11 . \
   --build-arg value7000="987001e00cf5495aa064b9212cddf659" \
   --build-arg urltokenazure="https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken" \
   --build-arg azuretraductorurl="https://api.cognitive.microsofttranslator.com" \
   --build-arg languageslist="https://api.cognitive.microsofttranslator.com/languages?api-version=3.0" \

#Docker run
docker run -d -p3500:80 --name translation-microservice tkrikoriam/translation-microservice:v11