import { ConnectionOptions, JoinColumn } from "typeorm";
import { join } from "path";
export class Configuration {
    public static Web = {
        Port: 3224 || process.env.PORT,
        ImageDirectory: join(__dirname, "../images/")
    };
    public static Database: ConnectionOptions = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        database: "nyhet",
        synchronize: true,
        username: "oliver",
        password: "123456789",
        logging: false
    };
}
