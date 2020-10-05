kubectl apply -f backend-namespace.yml
kubectl apply -f backend-secret.yml
kubectl apply -f backend-configmap.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-external-service.yml
kubectl apply -f backend-ingress.yml

kubectl get all -n microservices



