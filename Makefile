install:
	npm install

start-even:
	npx babel-node src/bin/brain-even.js

start-games:
	npx babel-node src/bin/brain-games.js

start-calc:
	npx babel-node src/bin/brain-calc.js

build:
	rm -rf dist
	npm run build

rm:
	rm -rf dist

publish:
	npm publish --dry-run

lint:
	npx eslint .