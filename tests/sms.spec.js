// @ts-check

import { test, expect } from "@playwright/test";

test.describe("Hubtel SMS Tests", () => {
  test("Verify Hero Page Elements", async ({ page }) => {
    await page.goto("https://explore.hubtel.com/bulk-sms-ghana/");

    await expect(
      page.getByRole("heading", { name: "Reach customers fast with SMS" })
    ).toBeVisible();

    await expect(page.getByText("It’s the surest, most")).toBeVisible();

    await expect(
      page.getByRole("link", { name: "START MESSAGING" })
    ).toBeVisible();

    await expect(
      page
        .locator("section")
        .filter({ hasText: "Reach customers fast with SMS" })
        .getByRole("img")
    ).toBeVisible();
  });

  test("Verify SMS and Money video link", async ({ page }) => {
    await page.goto("https://explore.hubtel.com/bulk-sms-ghana/");
    await expect(
      page.getByRole("link", { name: "See how SMS & Money works" })
    ).toBeVisible();
  });
});
