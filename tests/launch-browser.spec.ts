import { test } from "@playwright/test";
import { ENV } from "../envs/ENV";

test('Launch browser with baseURL from .env', async ({ page }) => {
    await page.goto(ENV.BASE_URL);
    await page.waitForTimeout(5000); // Just to observe the launched page
})