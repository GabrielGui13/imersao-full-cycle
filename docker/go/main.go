package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

// esse codigo vai acessar o container do mysql, com o build de go do container
// o (mysql:3306) eh o acesso ao container, 'mysql' eh o nome do service que nos demos no docker-compose.yaml

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(mysql:3306)/fullcycle")

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	db.Query("Insert into exemplo values (1, 'Full Cycle')");
}

// DENTRO DO CONTAINER MYSQL (BASH)
// mysql -uroot -p fullcycle => entrar na database
// password: root => senha definida n0 environment variables do docker-compose
// create table exemplo (id int, nome varchar(50), PRIMARY KEY (id));
// show tables;
// DEPOIS DOS COMANDOS DO GO PARA EXECUTAR A QUERY:
// select * from exemplo;

// DENTRO DO CONTAINER GOLANG (BASH)
// go mod init github.com/codeedu/go-esquenta-docker => para criar o go.mod
// go mod tidy => para rodar o go.mod
// go run main.go => rodar o main.go