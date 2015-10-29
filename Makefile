info:
	@echo 'This is a codetest about LeetCode Solution with Javascript'

Test = Test/

.PHONY: test count
test: $(Test)
	@for f in $(Test);\
	do\
		echo $f;\
		node $f;\
	done

count:
	@wc -l `find . -name '*.js'`
