import test from 'node:test';
import assert from 'node:assert/strict';
import {slugify, createSlugCounter} from './slug-counter.mjs';

test('normalizes text', () => assert.equal(slugify('Hello World'), 'hello-world'));
test('literal suffixed inputs cannot collide with generated suffixes', () => {
  const next = createSlugCounter();
  assert.deepEqual([next('a'), next('a'), next('a-1')], ['a', 'a-1', 'a-1-1']);
});
test('generated suffixes skip names already issued literally', () => {
  const next = createSlugCounter();
  assert.deepEqual([next('a-1'), next('a'), next('a')], ['a-1', 'a', 'a-2']);
});
test('repeats of the same input receive suffixes', () => {
  const next = createSlugCounter();
  assert.deepEqual([next('a'), next('a'), next('a')], ['a', 'a-1', 'a-2']);
});
