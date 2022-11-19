# frontend

## :memo:

- relay の watch が上手く動かない
  - > thread 'main' panicked at 'Cannot run relay in watch mode if `watchman` is not available (or explicitly disabled).', crates/relay-bin/src/main.rs:284:9
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
  - `$ brew install watchman`
