apply_individual:
	kubectl apply -f 1.namespace.yml
	kubectl apply -f 2.nodePod.yml
	kubectl apply -f 2.servicePod.yml

apply:
	kubectl apply -f .

unapply:
	kubectl delete -f .

get:
	kubectl get pod -n coursek8s
	kubectl get service -n coursek8s
	kubectl get deployments -n coursek8s

describe:
## kubectl describe pod client-pod -n coursek8s 
	kubectl describe service client-service -n coursek8s 
	kubectl describe deployment client-deployment -n coursek8s 

log:
	kubectl logs client-pod -n coursek8s 

delete:
	kubectl delete pod client-pod -n coursek8s

storage-class:
	kubectl get storageclass
	kubectl describe storageclass

secret-redis:
	kubectl create secret generic redispass --from-literal REDISPASS=12345abcde -n coursek8s
	kubectl create secret generic redispassfake --from-literal REDISPASS=12345abcdef -n coursek8s

# https://kubernetes.github.io/ingress-nginx/deploy/https://kubernetes.github.io/ingress-nginx/deploy/
ingress:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml

port-forward:
	kubectl port-forward -n coursek8s service/client-service 8081:8081

# curl https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml > kubernetes-dashboard.yaml
# kubectl apply -f kubernetes-dashboard.yaml
proxy-port-forward:
	kubectl apply 
#http://localhost:8001/api/v1/namespaces/coursek8s/services/client-service:/proxy/

