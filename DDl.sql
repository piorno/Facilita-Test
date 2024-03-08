create table "tb_clientes" (
	"id" SERIAL PRIMARY KEY,
	"nome" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL,
	"telefone" varchar(50) not null,
	"created_at" TIMESTAMP NOT NULL DEFAULT now(), 
	"updated_at" TIMESTAMP NOT NULL DEFAULT now()
)

ALTER TABLE "tb_clientes"
ADD "x" int,
ADD "y" int; 
