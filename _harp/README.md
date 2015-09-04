# prototype-dnn

A ready-to-go Gulp and Harp project set up that does auto css injection via BrowserSync.

## Getting Started

```console
npm i -g harp
harp init -b agencyrevolution/prototype-dnn#gh-pages project-name
cd project-name
make install
make server
```

## Publishing
This has to happen from the root of your project so it can access your source in `_harp` and compile into the root directory (`./`).

```console
cd project-name
make compile
make deploy
```
## Contributing
This project is on the `gh-pages` branch, so you will need to clone that specifically before working on a pull request.

```console
git clone http://github.com/agencyrevolution/prototype-dnn.git -b gh-pages
```
