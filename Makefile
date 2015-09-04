NOW := $(shell date +"%c" | tr ' :' '__')

edit:
	cd _harp/public; vim

install:
	cd _harp; npm install

server:
	cd _harp; gulp

compile:
	NODE_ENV=production harp compile _harp ./

deploy:
	git add -A
	git commit -a -m "$(NOW)"
	git push -u origin gh-pages

