import { createConnection } from "typeorm";

import { Configuration } from "../Config";
import { join } from "path";

export function connect() {
    return createConnection({
        entities: [join(__dirname, "/Entities/*.js")],
        ...Configuration.Database
    });
}
