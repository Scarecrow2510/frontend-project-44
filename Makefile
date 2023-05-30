install: install-deps
	npm ci

brain-games:
	node bin/brainGames.js

brain-even:
	node bin/brainEven.js

brain-calc:
	node bin/brainCalc.js

brain-gcd:
	node bin/brainGcd.js

brain-progression:
	node bin/brainProgression.js

brain-prime:
	node bin/brainPrime.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
