장바구니 
로그인로그인로그인로그인
-----

##### 들여다봐야할 것
- setCount
- useState
- flushSync
- useRef
- ref
- forwardRef
- useEffect


- V.DOM 에서 Real DOM 이 될 때, 2 단계가 있다:
  1. 레이아웃 
  2. 페인트  

#### 주요기능
- 버튼 동작
- 삭제
- 추가 버튼 누르면 인풋박스 보이게 하기
- 입력하고 선택하면 포커스 주기
- ref 로 가져오기
- edit, 수정, 추가, 삭제



### 컴포넌트 만들기 

Button 컴포넌트 만들기 

#### 컴포넌트를 설계할 때 고려사항: 
예시) button
- type 
- size 
- onClick = 
- className


##### id(#)로 사용하지 않고  class(.) 로 만드는 이유: 
- id 는 접근할 수 있는거에만 사용하기 때문 < ????????????????????????????




flushSync : dom 이 16ms 기다리지 않고 바로바로 새로 갱신시킨다


ref를 쏴주고, 쏴준 ref를 받을 때 
18에서는 forwardRef 를 써야한다. 
> 19에선 안써도 됨



-----
- editing() 


- 의존적이기 때문에 이름이 'dependency' 


미리 배우기: 
- useEffect (p.34)


- 정리함수


My.jsx 
129라인의 form 부분을 컴포넌트로 빼보기
