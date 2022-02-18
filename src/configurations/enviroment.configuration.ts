export class ConfigurationService {

    private readonly envConfig: { [key: string]: any } = null;

    constructor() {
        this.envConfig = {
            PORT: process.env.PORT,
            DB_DRIVER: process.env.DB_DRIVER,
            DB_HOST: process.env.DB_HOST,
            DB_PORT: process.env.DB_PORT,
            DB_USER: process.env.DB_USER,
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_NAME: process.env.DB_NAME,
            DB_LOGGING: process.env.DB_LOGGING,
            NODE_ENV: process.env.NODE_ENV
        };
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}