# 맘편한세상 백엔드 개발 과제 테스트

---

## 1. 과제 결과물 클론

```
$ git clone https://github.com/tosky1125/momsitter-assignment
```

## 2. DB 생성

```sql
$ mysql -u 유저이름 -p
// 패스워드 입력 후 엔터
mysql> CREATE DATABASE 데이터베이스 이름;
```

## 3. 환경변수 설정

- `root` 폴더에 있는 `.env` 파일 내에 있는 `TOBECHANGED` 를 항목에 맞게 변경합니다.

```
DB_PORT=TOBECHANGED
DB_HOST=TOBECHANGED
DB_USER=TOBECHANGED
DB_PASSWORD=TOBECHANGED
DB_USE=TOBECHANGED
AUTH_SECRET=IWANTPASSTHEASSIGNMENT
SALT_ROUNT=10 
```

```
DB_PORT=3306 
DB_HOST=localhost 
DB_USER=root 
DB_PASSWORD=password 
DB_USE=2번에서 생성한 데이터베이스
AUTH_SECRET=IWANTPASSTHEASSIGNMENT
SALT_ROUNT=10 
```

## 4. DB 마이그레이션 및 실행

!! 폴더 내에서 입력하셔야 합니다 !!

```
$ npm i
$ npm run build
$ npm run start
```

## 5. API 문서

API문서에 맞게 이용하시면 됩니다.

[맘편한세상 과제 테스트 API 문서](https://tosky0514.gitbook.io/apis/)