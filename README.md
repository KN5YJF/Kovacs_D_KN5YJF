# DevOps Beadandó – Kovács Dániel (KN5YJF)

Ez a projekt egy, *Hello DevOps world!* alkalmazás Node.js + Express technológiával,  
amelyen keresztül bemutatom az alap DevOps folyamatokat:

- Fejlesztés (HTTP app)
- Build
- Verziókezelés (trunk-based development)
- Docker konténerizálás
- 1 választható feladatrész - CI pipeline

Futtatás fejlesztői környezetben

#1. Alakalmazás

Az app egy egyszerű Express szerver, amely HTTP-n a következőt adja vissza: Hello DevOps world!

Elérhető lokálisan: http://localhost:3000

    ```bash
        npm install
        npm start

#2. Build
    Lényegében a projekt bulid és futtatás
    #2/1 Telepítési kritériumok
        - Node.js
        - npm
        - Docke dektop
    Ezek az alapvető kritériumok a bild -hez
    
    #2/2 Manuális bulid
        - npm instal #express alkalmazás, az #1 -es pontban részletezem
        - npm start #elindul a futás

<<<<<<< HEAD
    Eredmény: lokálisan elérhető http://localhost:3000

    #2/3 Bulidelés Dockerrel
        - docker build -t hello-devops:v1

    #2/4 Docker Hub-ra pusholás
        - docker login
        - szükséges tag beépítése
        - dcoker push

    #2/5 A választott feladatot, lásd 5 -ös pontban

#3. Verziókezelés
    A projekt Git alapon készült.
    main branch → a stabil kód alapja
    több egymásra épülő commit
    készült legalább egy feature branch:feature/change-message
    A feature branch módosítja a kezdő üzenetet, és merge request / pull request után került vissza a main ágba.

#4. Docker
    Az alkalmazásról Docker image készült.
    docker build -t hello-devops:v1 .

    Konténer futtatása
    A konténer belső portja: 3000
    A futtatás (külső port 8081 → belső port 3000):
    docker run -p 8081:3000 hello-devops:v1

    A konténerben futó app elérhető: http://localhost:8081

#5. Kötelezően választandó feladatrész - Választott opció: CI pipeline
    A CI pipeline automatikusan:
    lehúzza a repót
    lefuttatja az npm install és npm run build parancsokat
    Docker image-et épít
    feltölti a GitHub Container Registrybe
    
    A pipeline konfigurációja:.github/workflows/ci.yml
    name: CI Pipeline
    on:
    push:
        branches: [ "main" ]
    pull_request:
        branches: [ "main" ]

    jobs:
        build: runs-on: ubuntu-latest

        steps:
        - name: Checkout repository uses: actions/checkout@v3

        - name: Set up Node.js uses: actions/setup-node@v3
        with: node-version: "18"

        - name: Install dependencies run: npm install

        - name: Run build run: npm run build

        - name: Build Docker image
            run: docker build -t ghcr.io/kn5yjf/hello-devops:v1 .

        - name: Login to GitHub Container Registry uses: docker/login-action@v2
        with:
            registry: ghcr.io
            username: ${{ github.actor }}
            password: ${{ secrets.GITHUB_TOKEN }}

        - name: Push image
            run: docker push ghcr.io/kn5yjf/hello-devops:v1

A publikált image elérhető: https://github.com/KN5YJF/Kovacs_D_KN5YJF
<<<<<<< HEAD
Docker HUB láb: https://hub.docker.com/repository/docker/kn5yjf/hello-devops/general
=======

