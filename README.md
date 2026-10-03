# Delsa dogfood lab

A small, deliberately synthetic public JavaScript example for evaluating GitHub change understanding. No code or data from other projects is included.

Run `node --test` (or `npm test`) to exercise the slug counter. The first version intentionally lacks literal/generated suffix collision coverage; the next commit adds regression tests and a fix. For example, `a`, `a`, `a-1` now produces `a`, `a-1`, `a-1-1` within one counter instance. A separate counter instance has independent state. This documentation-only follow-up also adds package metadata; it does not change the counter implementation. This is evaluation material, not a production package.
