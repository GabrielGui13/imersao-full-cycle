## Instalação do Docker
* [Guia de Instalação e Configuração do Docker + WSL2](https://github.com/codeedu/wsl2-docker-quickstart#1---instalar-o-docker-com-docker-engine-docker-nativo)
### Instalação dos pré-requisitos:
```zsh
sudo apt update && sudo apt upgrade
sudo apt remove docker docker-engine docker.io containerd runc
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
### Adicionar o repositório do Docker na lista de sources do Ubuntu:
```zsh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Instalação do Docker Engine:
```zsh
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### Permissão para rodar o Docker ao usuário corrente:
```zsh
sudo usermod -aG docker $USER
```

### Instalação do Docker Compose:
```zsh
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### Iniciar serviço do Docker (necessário sempre que o WSL for inicializado/reinicializado):
```zsh
sudo service docker start
```


## Comandos Importantes Docker
_importante lembrar que os comandos docker no wsl necessitam do 'sudo'_
```zsh
sudo docker run hello-world 
```
[IMAGE] Todo container docker roda a partir de uma imagem, esse comando procura no Docker Hub ("github do docker") uma imagem chamada 'hello-world', e compila, cada vez que o docker run é chamado, ele cria um novo container

```zsh
sudo docker ps [-a]
```
Vai listar todos os containers **em execução**, ao adicionar a flag *'-a'*, ele lista todos os containers em execução e que já encerraram, ou foram criados

```zsh
docker run [-it] ubuntu bash
```
[IMAGE] Vai rodar a imagem ubuntu de forma interativa (*'-it'*), e após isso vai rodar o bash, que vai poder rodar os nossos comandos, após isso ao dar o 'sudo docker ps', vai aparecer como container ativo, pois o bash faz ficar rodando

```zsh
docker run scratch
```
[IMAGE] Como dito antes, todo container roda a partir de uma imagem, o scratch é uma imagem vazia, "FROM scratch"

```zsh
docker rm
docker rm $(docker ps -aq) -f
```
Comando para [remoção](https://docs.docker.com/engine/reference/commandline/rm/) de containers. O segundo comando apaga todos os containers já executados (talvez o Ctrl + C não tenha apagado, e sim só dado stop nele) o '$(docker ps -aq)' é como um subcomando para mostrar todos, e o '-aq' é para mostrar apenas o id de todos, o '-f' do 'docker rm' é para forçar.

```zsh
docker run nginx
```
[IMAGE] Cria um container com o motor 'nginx' de base, ele roda apenas dentro do container, ao acessar o localhost:80 no nosso computador, não funciona, já dentro do container com o 'bash', se executarmos 'curl localhost', ele encontra

```zsh
docker run -p 8000:80 nginx
```
a flag [*'-p'*] 'publica' a porta do container no nosso computador, o '8000:80' significa que sempre que acessarmos a porta 8000 no nosso computador, ele acessa a porta 80 (padrão do nginx) do container (bind/relacionamento de portas)

```zsh
docker run -p 8000:80 -v $(pwd)/docker/html:/usr/share/nginx/html nginx
```
a flag [*'-v'*] tem basicamente o mesmo comportamento do *'-p'*, mas em vez de mapear a porta, ela mapeia o volume, nesse caso, as pastas do nosso sistema

```zsh
# docker exec -it lucid_einstein bash
docker exec -it <container_name> bash
```
'docker exec' significa executar um comando em um container que já está rodando, [*'-it'*] é para rodar de forma interativa, o '<container_name>' é o nome do container para executar o comando, e o 'bash' é o comando a se executar, o que quer rodar no container

Dentro do nginx (container escolhido), rodamos 'cd usr/share/nginx/html/' para acessar o index.html (visto com 'ls'), depois 'apt update', para atualizar o instalador de pacotes, depois 'apt install vim' para baixar o editor de código no terminal, e 'vim index.html' ou 'nano index.html' para editar (vai se fuder), caso não tenha o arquivo index.html, podemos criá-lo com 'touch index.html'

```zsh
# docker build -t <container_name> <directory>
# docker run <container_name>
docker build -t gabrielgui13/teste-nginx-docker docker/
docker run gabrielgui13/teste-nginx-docker
```
Nós podemos criar um arquivo chamado Dockerfile, e criar a imagem do container de forma declarativa, essa imagem roda o 'nginx' e copia o diretório do html com o do nginx, 'docker build' serve para buildar a imagem dentro de um container que através da flag [*'-t'*] de *tag*, poderemos dar um nome logo em seguida, e por último, vamos colocar o diretório relativo ao caminho do nosso terminal, nesse caso o Dockerfile está dentro de uma pasta chamada 'docker' na raiz do projeto, após o build do container, podemos executar com 'docker run' e o nome do container que nós damos em '-t'

```zsh
docker push <container_name>
docker push gabrielgui13/teste-nginx-docker
```
Para publicar uma imagem no Docker Hub (necessita de configuração)

```zsh
docker-compose up
```
Ferramenta que usa o docker para conseguir criar diversos containers ao mesmo tempo, através do 'docker-compose.yaml', pode criar um arquivo e definir dentro dele serviços, imagens, containers, etc. Ao entrar na pasta raiz do arquivo do docker compose, podemos rodá-lo com 'docker-compose up', e automaticamente ele dá run em todos os containers