import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { applications, applicationCategories } from '../src/data/applications.js';
import { skillGroups } from '../src/data/skills.js';
import { panels } from '../src/data/panels.js';
import { profile } from '../src/data/profile.js';

const publicFile = (url) =>
  new URL('../public/' + decodeURIComponent(url.replace(/^\//, '')), import.meta.url);

test('each project has a unique, stable ID and a real category', () => {
  assert.ok(applications.length > 0);
  assert.equal(new Set(applications.map(({ id }) => id)).size, applications.length);
  for (const project of applications) {
    assert.match(project.id, /^[a-z0-9-]+$/);
    assert.ok(project.title && project.description && project.caseStudy);
    assert.ok(project.stack.length > 0);
    assert.ok(applicationCategories.includes(project.category));
    if (project.href) assert.equal(new URL(project.href).protocol, 'https:');
  }
});

test('skill evidence points to project IDs instead of array positions', () => {
  for (const group of skillGroups) {
    if (group.projectId)
      assert.ok(
        applications.some(({ id }) => id === group.projectId),
        group.title,
      );
    assert.ok(group.skills.length > 0);
  }
});

test('project previews and every gallery screenshot exist in public', async () => {
  for (const project of applications) {
    for (const asset of [project.image, project.animation, ...(project.screenshots || [])].filter(
      Boolean,
    )) {
      await access(publicFile(asset));
    }
    if (project.image) {
      assert.ok(project.imageAlt);
      assert.ok(project.screenshots?.length);
    }
  }
});

test('the shared CV is a PDF that Vite can deploy', async () => {
  const resume = await readFile(publicFile(profile.resumeUrl));
  assert.equal(resume.subarray(0, 5).toString(), '%PDF-');
  await access(publicFile(profile.portraitUrl));
});

test('navigation IDs and archive aliases remain valid', () => {
  assert.equal(new Set(panels.map(({ id }) => id)).size, panels.length);
  for (const panel of panels) {
    if (panel.navigationId) assert.ok(panels.some(({ id }) => id === panel.navigationId));
  }
  assert.ok(panels.some(({ id }) => id === 'home'));
  assert.ok(panels.some(({ id }) => id === 'applications'));
});
