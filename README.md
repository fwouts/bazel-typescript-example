# Building TypeScript with Bazel

This is an example of how Bazel can be used with TypeScript.

It is directly inspired from the documentation at https://github.com/bazelbuild/rules_typescript,
but uses `nodejs_binary` instead of `ts_devserver` to let you generate a JS bundle directly.

## How to run

```sh
yarn
bazel run //src:bin
```
