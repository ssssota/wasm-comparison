interface Exports {
  add(a: number, b: number): number;
  tarai(x: number, y: number, z: number): number;
}
const add: Exports["add"] = (a, b) => a + b;
const tarai: Exports["tarai"] = (x, y, z) => {
  if (x <= y) return y;
  return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
};

const log = (...msg: unknown[]) => {
  document.body.insertAdjacentHTML("beforeend", `<pre>${msg.join(" ")}</pre>`);
  console.log(...msg);
};

const load = (name: string) => (buf: ArrayBuffer) => {
  // log(`${name} (file size): ${buf.byteLength}B`);
  return WebAssembly.instantiate(buf).then(
    ({ instance }) => instance.exports as unknown as Exports
  );
};

const test = (name: string) => (exp: Exports) => {
  // log(`${name} starting ...`);
  const { a, b, x, y, z } = { a: 40, b: 2, x: 12, y: 6, z: 0 };
  // log(`${a} + ${b} = ${exp.add(a, b)}`);
  performance.mark(name);
  for (const _ of Array(100)) {
    exp.tarai(x, y, z);
  }
  const measure = performance.measure(
    `Tarai(${x}, ${y}, ${z}) with ${name}`,
    name
  );
  log(`${measure.name}: ${measure.duration.toLocaleString()}ms`);
};

const run = (name: string, wasm: string) => () =>
  fetch(wasm)
    .then((res) => res.arrayBuffer())
    .then(load(name))
    .then(test(name));

const seq = (promises: (() => Promise<void>)[]) =>
  promises.reduce<Promise<void>>(
    (prev, cur) => prev.then(cur),
    Promise.resolve()
  );

seq([
  run("Zig", "./zig/zig-out/bin/zig.wasm"),
  run("Rust", "./rust/pkg/rust_bg.wasm"),
  run("AssemblyScript", "./assemblyscript/build/release.wasm"),
  async () => test("JavaScript")({ add, tarai }),
]);
