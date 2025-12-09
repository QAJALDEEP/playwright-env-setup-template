import { FullConfig } from "@playwright/test";
import path from "path";
import dotenv from "dotenv";

async function globalSetup(config: FullConfig) {

    try {
        const envName = process.env.test_env || "dev";
        const envFilepath = path.resolve(process.cwd(),'envs', `.env.${envName}`);

        dotenv.config({
            path: envFilepath
        });

        console.log(`✅ Environment: ${envName}, loaded from ${envFilepath}`);
    } catch (error) {
        console.error("❌ Error during global setup:", error);
        throw error;
    }
}
export default globalSetup;
