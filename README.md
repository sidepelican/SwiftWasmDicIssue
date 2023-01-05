# DicIssue

Unexpected behavior representation of Swift dictionary on Wasm.

## Build swift library

```sh
swiftc -target wasm32-unknown-wasi -o Lib.wasm -Xlinker --export=get_value Lib.swift
```

## Use from node

```sh
node --experimental-wasi-unstable-preview1 index.mjs
```

```
$ node --experimental-wasi-unstable-preview1 index.mjs                                         
-1 // ← !?!?
42
-1 // ← !?!?
42
```

# Versions

```
$ swift --version                                                                     
SwiftWasm Swift version 5.7.1 (swiftlang-5.7.1)
Target: x86_64-apple-darwin21.6.0
$ node --version                                      
v18.12.1
```
