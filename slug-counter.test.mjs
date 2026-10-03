import test from 'node:test';
import assert from 'node:assert/strict';
import {slugify, createSlugCounter} from './slug-counter.mjs';

test('normalizes text', () => assert.equal(slugify('Hello World'), 'hello-world'));
test('repeats of the same input receive suffixes', () => {
  const next = createSlugCounter();
  assert.deepEqual([next('a'), next('a'), next('a')], ['a', 'a-1', 'a-2']);
});
