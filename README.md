# TED-Quiz
[紹介スライド](https://speakerdeck.com/exzrgs/ted-quiz)

## backend
必要なパッケージをインストール後
```
cd backend
run flask
```

## frontend
```
cd node18
docker compose up -d
docker compose -p node18 exec node18 bash
cd browser-extension-react-typescript-starter
yarn install
```

作業する前は
```
docker compose up -d
docker compose -p node18 exec node18 bash
```
を行うこと

コンテナ停止
```
docker compose -p node18 down 
```
