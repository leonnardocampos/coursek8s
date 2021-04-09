TAG   ?= 1
IMAGE_NAME=nodeapp
FULLTAG = $(shell date +secure-%Y%m%d-v)$(TAG)
DOCKER_HUB ?= leoenes

# To build application's image 
docker-build:
	docker build -t ${IMAGE_NAME}:${FULLTAG} .

# Genatera tag 
tag-app: docker-build
	docker tag $(IMAGE_NAME):$(FULLTAG) $(DOCKER_HUB)/$(IMAGE_NAME):$(FULLTAG)

# Push image to DOCKERHUB
push-app: tag-app
	docker push $(DOCKER_HUB)/$(IMAGE_NAME):$(FULLTAG)
