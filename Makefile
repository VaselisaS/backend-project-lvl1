install:
	npm install

start:
	npx babel-node src/bin/brain-even.js

build:
	rm -rf dist
	npm run build

rm:
	rm -rf dist

publish:
	npm publish --dry-run

lint:
	npx eslint .