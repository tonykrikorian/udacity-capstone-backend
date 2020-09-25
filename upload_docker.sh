#Loguearse en docker
docker login

#Renombrar la imagen
docker tag translation-microservice:v1 tkrikoriam/translation-microservice:v1

#Subir la imagen
docker push tkrikoriam/translation-microservice:v1