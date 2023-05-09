const { test, expect } = require("@playwright/test");

test("new test sima-lend", async ({ page }) => {
  await page.goto("https://www.sima-land.ru/");
  await page.locator(".c6dxE OFiDo").click();
  await page.locator("#email").fill("qa_test@test.ru");
  await page.locator("#password").fill("qa_test");
  await page.locator(".Xqv8JY huJTmi FGtHop NkchRg RgDBpc").click();

  await expect(page.locator(".c6dxE OFiDo")).toBeVisible();
});