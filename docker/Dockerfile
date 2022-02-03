# escolhe a imagem base (nginx) ma última versão (:latest)
FROM nginx:latest 

# copia o conteúdo do nosso index para o index do html, não é necesário o '-v' para copiar o volume 
COPY html/index.html /usr/share/nginx/html 

# para rodar: docker build -t <container_name> <directory>
# para rodar: docker build -t gabriel/teste-nginx-docker docker/