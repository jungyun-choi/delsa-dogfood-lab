export function slugify(text) {
  return String(text).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function createSlugCounter() {
  const seen = new Map();
  const used = new Set();
  return (text) => {
    const base = slugify(text);
    let count = seen.get(base) ?? 0;
    let result = count === 0 ? base : `${base}-${count}`;
    while (used.has(result)) {
      count += 1;
      result = `${base}-${count}`;
    }
    seen.set(base, count + 1);
    used.add(result);
    return result;
  };
}
