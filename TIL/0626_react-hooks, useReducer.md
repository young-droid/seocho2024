re-render는 언제 진행되는가? 
상태가 바뀌었을 때 

## 배운 내용 
- useState: 	
- useRef : 	DOM을 참조
- useMemo: 	재계산 되는 상황을 제약하는 것
- memo :	컴포넌트를 새로 그리는 것
- useLayout : 비동기. 이거 안끝나면 페인트를 못함. 여기서 과도한 연산 진행하면 버벅거림. 버벅거림을 잡기 위해 useEffect를 사용함
- useEffect :
###### hooks
- useContext
	- context : 구획
- useReducer
- dispatch


#### useLayoutEffect / useEffect 
###### 예시: 
상태에 따라 다른 색의 버튼을 구현할 때, useEffect에서 상태를 계산하면 버튼의 default 색이 보인 뒤 상태의 색이 보여짐. (버벅거림)  
useLayoutEffect에서 미리 계산해두고 useEffect에서 보여주기만 하면 바로 색이 변함. 

- defendency array 가 비어있으면 한번만 실행 됨. 


memo는 defendency array를 사용하지 않고, 


useState는 상태를 react 한테 등록 해주는 것. 
	-> '이런 상태가 있어~ 이게 달라지면 새로 그려줘~'




ref 속에는 .current 가 있다. 


변수 쉐도잉 (variable shadowing)



## hooks (hooks 폴더 속 뫄뫄-context.jsx 파일들) 
- hook 들은 관례상 앞에 use를 붙여서 사용. 
- 예시: 
  - useContext
  - useCount
 
- counter-context.jpx
- session-context.jpx

value는 항상 객체 포맷
```
value={{ count, plusCount}}
```




1. session



### Memo

### useReducer
- 리듀서를 사용하면 앞단에서 미리 조건을 달고, 사용할땐 간단해진다 
- 리듀서를 사용하면 각 세션에 useCallBack()을 달 필요가 없어진다. 
- 두번째 인자만 사용하기 때문에, 두번째 인자 부분에 객체형으로 입력
```
useReducer(acc, {x:1, y:2}) => {...}
```

### dispatch() 
- 관례상, 인자부분에 {type : y , payload: x} 으로 type 과 payload 를 사용한다 







