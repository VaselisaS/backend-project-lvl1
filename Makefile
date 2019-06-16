install:
	npm install

start-even:
	npx babel-node src/bin/brain-even.js

start-games:
	npx babel-node src/bin/brain-games.js

start-calc:
	npx babel-node src/bin/brain-calc.js

start-gcd:
	npx babel-node src/bin/brain-gcd.js

start-progression:
	npx babel-node src/bin/brain-progression.js

build:
	rm -rf dist
	npm run build

rm:
	rm -rf dist

publish:
	npm publish --dry-run

lint:
	npx eslint .

link:
	sudo npm link

unlink:
	sudo npm unlink