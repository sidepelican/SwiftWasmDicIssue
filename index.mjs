import { readFile } from 'node:fs/promises';
import { WASI } from 'wasi';

const wasi = new WASI({
  args: process.argv,
  env: process.env,
});

const wasm = await WebAssembly.compile(
  await readFile(new URL('./Lib.wasm', import.meta.url)),
);
const instance = await WebAssembly.instantiate(wasm, {
  wasi_snapshot_preview1: wasi.wasiImport
});
wasi.initialize(instance);
instance.exports.main();

console.log(instance.exports.get_value());
console.log(instance.exports.get_value());
console.log(instance.exports.get_value());
console.log(instance.exports.get_value());
