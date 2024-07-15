![image](https://github.com/user-attachments/assets/e7c55fe6-2c23-4c5e-94dd-972fb56b781a)





CRUD 를 할 수 있다 


ctrl shift enter : 블록 지정한 구문만 실행 
ctrl enter : 커서가 가있는 구문만 실행 


```
select * from Book where owner = 1
```
select : 읽는다  
'*' : 모든 컬럼을  
from : ~ 데이터 테이블에서  
Book : Book 이라는 테이블  
where : ~ 유저에서   
owner = 1 : 1 유저 ( 연결된 다른 테이블의 유저 1) 

> --띄어쓰기 : 주석



놓침 : 테이블에서 바로 어플라이 하는 법 



insert into User (nickname, email) 
          values ('king','kim@gmail.com'); 


## select 
```
select nickname, email from User; 
```
= 읽는다 nickname, email을 User 테이블에서 

```
id between 2 and 9 
id > 1 and id < 10 
```
결과값은 같지만, between 은 한번에 읽기 때문에 더 유리하다 

asc / desc 
오름차순 / 내림차순 
* desc 안쓰면 기본으로 asc


## join
> join 하면 중급자임. 강사님이 그랬음
#### inner join / outer join
- inner join
  - 두 테이블에서 일치하는 데이터만
 
- outer join
  - 기준 테이블의 모든 데이터와 다른 데이터의 일치하는 데이터만 같이 주세요
 
a as b : a 를 b 로 표시해줘
** as 는 생략 가능 ** 


```
select * 
  from User u left outer join Book b on uu.id = b.owner; 
```
left : 왼쪽의 테이블을 기준으로 


** mySQL 에선 에러가 안나지만, 원래는 한 테이블에 두 이름이 있으면 안된다. **  
그러니 뒤에 오는 이름은 변경해주자 




## 테이블 지우기 or 테이블 데이터 지우기  
### drop 
> 테이블 자체를 삭제 
### truncate 
> 테이블 자체를 삭제하고 다시 생성 
### delete from [table] where id>0
> id 가 0 인 것 부터 모두 삭제



```
select CAST('2018-12-25 11:22:22.123' AS DATETIME);
```
> 형변환


concat_ws : 첫번째 인수의 문자로 두번째 인자부터의 문자들을 concat 

- ifnull : 만약 null 이면 ~ 
- if(a, b, c) : 만약 a 면 b, 아니면 c
- nullif : 만약 ~ 면 null 로 표시


복잡한 쿼리를 view 로 만들어두면 코드가 단순해짐 

## Store Function 
- 자바스크립트 처럼 함수를 저장해서 사용할 수 있도록 저장하는 것





---------------------
ORM / mysql





conn.release() 를 꼭 해줘야 한다.  
그래야 풀에서 꺼내 쓰고 다시 돌려놓는데, release를 안하면 풀에서 꺼내며 계속 새로 생성한다.  
그렇게 계속 새로 만들어 쓰기만 하면, 메모리 부족으로 뻑날거다.... 

----------
api/books/route.ts

lib/db.ts

test.http (rest client 확장자 파일. db에 넣고 빼고를 테스트) 


