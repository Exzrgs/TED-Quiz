# TED-Quiz
紹介スライド

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTF1o_Bko4Y0gO_4D_Kap3ajTQjRpjoD0aaq9UKV5QGkrqZHHRHF2_CBuXj7N_cnuQ69mKQCNdMa-8Y/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

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
