# TED-Quiz
開発意義と機能説明スライド


https://docs.google.com/presentation/d/1UngsmB2HpiRu3f-NBDc8LkW4q_-3kbL1g29didYV5aM/edit#slide=id.p

## backend
```
cd backend
run flusk
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
