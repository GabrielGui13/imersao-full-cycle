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
Todo container docker roda a partir de uma imagem, esse comando procura no Docker Hub ("github do docker") uma imagem chamada 'hello-world', e compila, cada vez que o docker run é chamado, ele cria um novo container

```zsh
sudo docker ps [-a]
```
Vai listar todos os containers **em execução**, ao adicionar a flag *'-a'*, ele lista todos os containers em execução e que já encerraram, ou foram criados

