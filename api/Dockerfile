FROM ubuntu

RUN apt-get update

RUN apt-get -y install curl

RUN curl -sSf https://install.surrealdb.com | sh

WORKDIR /app

COPY . .

CMD [ "bash", "run.sh" ]