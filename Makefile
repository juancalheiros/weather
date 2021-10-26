

test:

run:
	@docker-compose up

images: 
	@docker images -a -q
clear-all-docker-images:
	@docker rmi $(docker images -a -q) -f
