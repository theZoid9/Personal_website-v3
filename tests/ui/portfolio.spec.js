import { test, expect } from '@playwright/test';
import { applications } from '../../src/data/applications.js';

test('section links open the correct panel and the header stays fixed', async ({ page }) => {
  for (const id of ['home', 'about', 'applications', 'all-projects', 'skills', 'contact']) {
    await page.goto('/#' + id);
    const section = page.locator('#' + id);
    await expect
      .poll(() =>
        section.evaluate((element) => {
          const bounds = element.getBoundingClientRect();
          return window.innerWidth <= 680 ? Math.abs(bounds.top) : Math.abs(bounds.left);
        }),
      )
      .toBeLessThan(2);
  }
  const before = await page.locator('.site-chrome').boundingBox();
  await page.locator('.floating-nav a[href="#home"]').click();
  await expect(page.locator('.floating-nav [aria-current]')).toHaveAttribute('href', '#home');
  expect(await page.locator('.site-chrome').boundingBox()).toEqual(before);
  expect(
    await page
      .locator('.portfolio-track')
      .evaluate((element) => element.getBoundingClientRect().bottom),
  ).toBeLessThan((await page.locator('.floating-nav').boundingBox()).y);
});

test('all app galleries preserve image proportions and fill their width', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/#applications');
  for (let index = 0; index < applications.length; index += 1) {
    const gallery = page.locator('.app-showcase .preview-gallery');
    const images = gallery.locator('.preview-expand img:visible');
    for (const image of await images.all()) {
      await image.evaluate((element) => element.decode());
      const dimensions = await image.evaluate((element) => ({
        actual: element.clientWidth / element.clientHeight,
        natural: element.naturalWidth / element.naturalHeight,
      }));
      expect(Math.abs(dimensions.actual / dimensions.natural - 1)).toBeLessThan(0.02);
    }
    const thumbnails = gallery.locator('.screenshot-thumbnails');
    const row = await thumbnails.boundingBox();
    const first = await thumbnails.locator('button').first().boundingBox();
    const last = await thumbnails.locator('button').last().boundingBox();
    expect(Math.abs(first.x - row.x)).toBeLessThan(2);
    expect(Math.abs(last.x + last.width - row.x - row.width)).toBeLessThan(2);

    await gallery.locator('.preview-expand:visible').first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const initial = await dialog.locator('img').getAttribute('src');
    await page.keyboard.press('ArrowRight');
    await expect(dialog.locator('img')).not.toHaveAttribute('src', initial);
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect
      .poll(() =>
        gallery.evaluate(
          (element) =>
            element.contains(document.activeElement) &&
            document.activeElement.classList.contains('preview-expand'),
        ),
      )
      .toBe(true);
    await page.getByRole('button', { name: 'Next application', exact: true }).click();
    await expect
      .poll(() =>
        page
          .locator('#applications')
          .evaluate((element) =>
            window.innerWidth <= 680
              ? Math.abs(element.getBoundingClientRect().top)
              : element.scrollTop,
          ),
      )
      .toBeLessThan(2);
  }
  await expect(page.locator('.app-copy h2')).toHaveText(applications[0].title);
  expect(errors).toEqual([]);
});

test('archive filters and enlarged screenshots work on every layout', async ({ page }) => {
  await page.goto('/#applications');
  await page.getByRole('link', { name: 'View all projects' }).click();
  await expect(page.locator('#all-projects')).toBeVisible();
  await expect(page.locator('.collection-card')).toHaveCount(applications.length);
  const filters = page.getByRole('group', { name: 'Filter projects by category' });
  await filters.getByRole('button', { name: /^3D/ }).click();
  await expect(page.locator('.collection-card')).toHaveCount(1);
  await expect(page.locator('.collection-info h3')).toHaveText('Floating Library');
  await page.locator('.case-study summary').click();
  await page.locator('.case-study .preview-expand').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Close enlarged screenshot', exact: true }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('resizing preserves the selected section', async ({ page }) => {
  await page.goto('/#applications');
  for (const width of [390, 1440, 681, 320]) {
    await page.setViewportSize({ width, height: 850 });
    await expect
      .poll(() =>
        page.locator('#applications').evaluate((element) => {
          const bounds = element.getBoundingClientRect();
          return window.innerWidth <= 680 ? Math.abs(bounds.top) : Math.abs(bounds.left);
        }),
      )
      .toBeLessThan(2);
    await expect(page.locator('.floating-nav [aria-current]')).toHaveAttribute(
      'href',
      '#applications',
    );
  }
});
