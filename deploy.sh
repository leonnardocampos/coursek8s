docker build -t leoenes/nodeapp:latest -t leoenes/nodeapp:$SHA -f ./0.Apps/2.Docker-nodeAppRedis/Dockerfile ./0.Apps/2.Docker-nodeAppRedis
docker push leoenes/nodeapp:latest
docker push leoenes/nodeapp:$SHA
kubectl apply -f ./0.Apps/3.Kubernetes-Service_Pod/
kubectl set image deployments/client-deployment client=leoenes/nodeapp:$SHA -n coursek8s