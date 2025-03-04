# Descripción

Este proyecto es un E-commerce inspirado en la tienda de Tesla, desarrollado como una aplicación web full-stack que ofrece una experiencia de compra similar a la tienda oficial de Tesla. El proyecto incluye una amplia gama de productos como ropa, gorras, poleras y otros accesorios de la marca.

## Correr en dev

1.Clonar el repositorio
2.Crear una copia del archivo `env.template` y renombrarlo a `.env` y asignarles el valor a las
variables de entorno
3.Instalar las dependencias con `npm install`
4.Levantar la base de datos `docker-compose up -d`
5.Ver la base de datos en la terminal

```bash
docker exec -it <id_container>
psql -U <db_user> -d <db_name> /bin/bash
```

6.Correr las migraciones de Prisma

```bash
npx prisma migrate dev
```

6.Ejecutar el seed

```bash
npm run seed
```

7.Correr el servidor con `npm run dev`

## Correr en prod
