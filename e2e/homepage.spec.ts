import { test, expect } from '@playwright/test';

test.describe('KMD Decor Construction Landing Page', () => {
  test('renders homepage elements cleanly without horizontal overflow', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Page Title
    await expect(page).toHaveTitle(/.*KM Decor|Kimmex|KMD Decor.*/i);

    // 2. Verify Key Sections are present
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#company-overview')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // 3. Verify No Horizontal Overflow (overflow-x)
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });

  test('mobile drawer navigation opens and closes correctly', async ({ page, isMobile }) => {
    if (!isMobile) return;

    await page.goto('/');
    const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
    if (await menuButton.isVisible()) {
      await menuButton.click();
      const mobileNav = page.locator('#mobile-navigation-dialog');
      await expect(mobileNav).toBeVisible();

      const closeButton = page.getByRole('button', { name: /close menu/i });
      await closeButton.click();
      await expect(mobileNav).not.toBeVisible();
    }
  });

  test('contact CTA link scrolls to or opens inquiry section', async ({ page }) => {
    await page.goto('/');
    const ctaButton = page.locator('a[href="#contact"]').first();
    if (await ctaButton.isVisible()) {
      await ctaButton.click();
      await page.waitForTimeout(300);
      const inquirySection = page.locator('#contact');
      await expect(inquirySection).toBeVisible();
    }
  });
});
