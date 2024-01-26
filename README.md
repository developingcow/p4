Group Members: Hong

https://github.com/developingcow/p4


This repo is a simple docker compose app comprising of 2 containers which lets you click on a button and shows how many it has been clicked so far.

`/frontend` folder contains all the info for building the clicking part

`/backend` has a very simple js server 

For this project, we're building for 2 architecture (linux/amd64, linux/arm64)

These 2 images will be built and pushed to dockerhub when you run these in their respective folders:
```
docker run --privileged --rm tonistiigi/binfmt --install all
docker buildx create --use --name builder
docker buildx build --platform linux/amd64,linux/arm64 --push -t <repo> .
```

The steps above will push the image to DockerHub <repo> specified.

To deploy the app, simply do `docker compose up`, 
the images specified in the docker compose files are `hkow/clickfrontend` and `hkow/backend`, but you can change it to your own
