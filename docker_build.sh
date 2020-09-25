#Execute docker build 
sudo docker build -t tkrikoriam/translation-microservice:v9 . --build-arg value7000="987001e00cf5495aa064b9212cddf659"

#Docker run
docker run -d -p3500:80 --name translation-microservice tkrikoriam/translation-microservice:v9