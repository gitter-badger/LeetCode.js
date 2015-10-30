info:
	@echo 'This is a codetest about LeetCode Solution with Javascript'

Test_File = `ls ./Test/`

.PHONY: test count
test:
	@for f in $(Test_File);\
	do\
		echo ++ node Test/$$f;\
		node Test/$$f;\
	done

count:
	@wc -l `find . -name '*.js'`

upgrade:
	@sed 's/Progress-0%20%2F%20274%20%3D%200.00%25-green/' README.md
