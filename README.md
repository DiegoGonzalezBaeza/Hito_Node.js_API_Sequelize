# Hito_Node.js_API_Sequelize

Proyecto educativo básico "Creación de un servidor" con node, express y sequelize

API de Review y Rating de peliculas (IMDb y Rotten Tomatoes) 

ESTA ES LA CONTINUACIÓN DEL REPOSITORIO: https://github.com/DiegoGonzalezBaeza/Hito-2-Backend_Node_y_Express



RECORDAR: que la aplicación de docker debe estar abierta.

### Comandos Docker

```bash
docker compose up -d # Inicia los contenedores en segundo plano
docker compose stop # Detiene los contenedores
docker compose down # Detiene y elimina los contenedores
dokcer compose logs db # Muestra los logs del contenedor db
```

# 1.- Instalar sequelize y pg-hstore:

```bash
npm install --save-dev @types/node @types/validator
npm install sequelize reflect-metadata sequelize-typescript

npm install --save pg pg-hstore
```

# 2.- Modificar tsconfig.json o crear uno nuevo:

```json
{
  "compilerOptions": {
    "target": "es6", // or a more recent ecmascript version
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
para crear un nuevo tsconfig.json:

```bash
npx tsc --init
```

pero se deben activar "experimentalDecorators": true,  y "emitDecoratorMetadata": true

# 3.- Nuevo Modelo.ts

```ts
import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

interface UserAttributes {
  uid?: string;
  email: string;
  password:string;
}

@Table({
  tableName: "users",
})
export class User extends Model<UserAttributes> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare uid: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  declare email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare password: string;
}
```

# 3.- funciones de sequelize para el service.ts

```ts
findByPk()// READ -- POR ATRIBUTO PRIMARY KEY
findOne() // READ -- POR ATRIBUTO ESPECIFICO
create()  // CREATE
save()    // UPDATE
destroy() // DELETE
```