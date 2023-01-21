# wasm-comparison

Benchmark machine: **MacBook Air M1 (2020)** mem16GB

_`Node.js v18.13.0`_

```
Tarai(12, 6, 0) with Zig: 2,718.029ms
Tarai(12, 6, 0) with Rust: 2,547.887ms
Tarai(12, 6, 0) with AssemblyScript: 3,267.407ms
Tarai(12, 6, 0) with JavaScript: 4,335.788ms
```

_`deno 1.29.4`_

```
Tarai(12, 6, 0) with Zig: 1,619.202ms
Tarai(12, 6, 0) with Rust: 1,718.182ms
Tarai(12, 6, 0) with AssemblyScript: 2,137.043ms
Tarai(12, 6, 0) with JavaScript: 4,345.719ms
```

_`Google Chrome 109.0.5414.87（Official Build） （arm64）`_

```
Tarai(12, 6, 0) with Zig: 2,514ms
Tarai(12, 6, 0) with Rust: 1,803.8ms
Tarai(12, 6, 0) with AssemblyScript: 2,072.7ms
Tarai(12, 6, 0) with JavaScript: 4,440.1ms
```

_`Safari バージョン16.2 (18614.3.7.1.5)`_

```
Tarai(12, 6, 0) with Zig: 1,961ms
Tarai(12, 6, 0) with Rust: 1,795ms
Tarai(12, 6, 0) with AssemblyScript: 2,295ms
Tarai(12, 6, 0) with JavaScript: 18,548ms
```

_`Firefox 109.0 (64 ビット)`_

```
Tarai(12, 6, 0) with Zig: 1,688ms
Tarai(12, 6, 0) with Rust: 1,514ms
Tarai(12, 6, 0) with AssemblyScript: 2,073ms
Tarai(12, 6, 0) with JavaScript: 4,502ms
```
