FROM golang:1.17
WORKDIR /go/src
# comando gambiarra para manter o container rodando
# o run eh pra rodar um comando, tipo apt get, o cmd eh o comando final que vai ser executado depois que o container rodar
RUN apt update && apt install vim -y 
CMD ["tail", "-f", "/dev/null"]

# preferencial a usar pois eh uma imagem com customizacao, com adicoes
# ja o mysql do docker-compose nao precisou, nesse caso a melhor opcao nao era buildar a imagem