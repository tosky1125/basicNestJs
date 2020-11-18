# 맘편한세상 백엔드 개발 과제 테스트 - 한승하


## 1. 과제 결과물 클론

- 터미널에서 아래 명령어를 입력하셔서 `Repo` 를 `Clone` 해주세요.

```
$ git clone https://github.com/tosky1125/momsitter-assignment
```

## 2. DB 생성

- 터미널에서 아래 명령어를  입력하셔서 DB를 생성 해주세요.

```sql
$ mysql -u 유저이름 -p
// 패스워드 입력 후 엔터
mysql> CREATE DATABASE 데이터베이스 이름;
```

## 3. 환경변수 설정

- `root` 폴더에 있는 `.env` 파일 내에 있는 `TOBECHANGED` 를 항목에 맞게 변경 해주세요.

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
DB_USER=2번에서 입력한 유저명
DB_PASSWORD=2번에서 입력한 패스워드
DB_USE=2번에서 생성한 데이터베이스
AUTH_SECRET=IWANTPASSTHEASSIGNMENT
SALT_ROUNT=10 
```

## 4. DB 마이그레이션 및 실행

- 터미널에서 아래 순서대로 명령어를 입력 해주세요.

```
$ cd momsitter-assignment
$ npm i
$ npm run build
$ npm run start
```

## 5. API 문서
포트번호는 3000번으로 설정 해두었습니다.
API문서를 확인하시고 호출 해주세요. 

[맘편한세상 과제 테스트 API 문서](https://tosky0514.gitbook.io/apis/)

## 6. 시간 내어 검토해주신 점 진심으로 감사드립니다.
