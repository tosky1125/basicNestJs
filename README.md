## 1. Create Database

- 터미널에서 아래 명령어를  입력하셔서 DB를 생성 해주세요.

```sql
$ mysql -u 유저이름 -p
// 패스워드 입력 후 엔터
mysql> CREATE DATABASE 데이터베이스 이름;
```

## 2. ENV Configuration

- `root` 폴더에 있는 `.env` 파일 내에 있는 `TOBECHANGED` 를 항목에 맞게 변경 해주세요.

```
DB_PORT=TOBECHANGED
DB_HOST=TOBECHANGED
DB_USER=TOBECHANGED
DB_PASSWORD=TOBECHANGED
DB_USE=TOBECHANGED
AUTH_SECRET=TEST
SALT_ROUNT=10 
```

```
e.g.
DB_PORT=3306 
DB_HOST=localhost 
DB_USER=2번에서 입력한 유저명
DB_PASSWORD=2번에서 입력한 패스워드
DB_USE=2번에서 생성한 데이터베이스
AUTH_SECRET=TEST
SALT_ROUNT=10 
```

## 3. DB 마이그레이션 및 실행

- 터미널에서 아래 순서대로 명령어를 입력 해주세요.

```
$ cd momsitter-assignment
$ npm i
$ npm run build
$ npm run start
```

