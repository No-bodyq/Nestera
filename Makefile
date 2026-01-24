default: build

all: test

test: build
	cargo test

build:
	cargo build --target wasm32-unknown-unknown --release --manifest-path contracts/Cargo.toml
	@ls -l target/wasm32-unknown-unknown/release/*.wasm

fmt:
	cargo fmt --all

clean:
	cargo clean
