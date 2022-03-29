import { ConnectionOptions } from "typeorm";
export class Configuration {
    public static Web = {
        Port: 3224 || process.env.PORT
    };
    public static Database: ConnectionOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        database: "nyhet",
        synchronize: true,
        username: "oliver",
        password: "123456789"
    };
}
