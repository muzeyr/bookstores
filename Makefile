# Makefile içeriği

include .env
export

.PHONY: run stop remove

run:
	docker run --name postgres-db -e POSTGRES_USER=${POSTGRES_USER} -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_DB=${POSTGRES_DB} -p 5432:5432 -d postgres

stop:
	docker stop postgres-db

remove: stop
	docker rm postgres-db

logs:
	docker logs postgres-db
