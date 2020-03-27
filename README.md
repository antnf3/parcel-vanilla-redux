# parcel-vanilla-redux

vanilla-redux with parcel

## 프로젝트 환경설정

1. github repository 생성 parcel-vanilla-redux
2. pc에 local 프로젝트 폴더 생성 parcel-vanilla-redux
3. local pc parcel-vanilla-redux 폴더에서 git init
4. git remote add origin git@github.com:antnf3/parcel-vanilla-redux.git
5. git pull origin master github소스 내려받기
6. yarn init
7. git add .
8. git.commit -m "first init"
9. git push origin push

## parcel 설치

```shell
> yarn global add parcel-bundler
```

## yarn global add 오류 수정

windows 에서 yarn global add 를 실행하면 설치한 해당패키지를 찾을 수 없다고 나옵니다.

- 문제해결방법

1. 아래 명령어를 사용하여 bin 폴더의 위치를 알아냅니다.

```shell
$ yarn global bin
C:\Users\antnf\AppData\Local\Yarn\bin
```

2. windows환경변수에 위의 bin 경로를 등록해줍니다.
3. 터미널을 재실행하면 정상적으로 패키지가 실행됩니다.

## redux 설치

```shell
$ yarn add redux
```
