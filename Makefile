info:
	@echo 'This is a codetest about LeetCode Solution with Javascript'

.PHONY: run count
run:
	@node Test/LeetCodetest.js

count:
	@wc -l `find . -name '*.js'`

upgrade:
	@sed 's/Progress-0%20%2F%20274%20%3D%200.00%25-green/' README.md
