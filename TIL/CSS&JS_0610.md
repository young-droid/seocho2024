# CSS(Bootstrap, TailWind), JS

> tailwind, bootstrap 사이트 들어가서 열심히 공부해보자
> JS 보다 TS 가 더 어렵다.
> TS 도 https://typescriptlang.org/ <- 여기 가서 열심히 공부하자

## Browser Rendering
1. Connect & Request to Server
  - HTML, CSS, JS, Image, Fonts, etc
2. HTML/CSS Parsing ⇒ Token/Lexer ⇒ Node
  - ⇒ DOM, CSSOM ⇒ Render(DOM/CSSOM) Tree
3. JS Parsing ⇒ AST(ByteCode)        cf. V8, JSCore, SpiderMonkey
  - ⇒ Run with Render Tree(DOM/CSSOM)     cf. display:none
4. Layout (Reflow ← 브라우저 크기 변경)       cf. display:absolute
  - Render Tree에 크기(w/h, scrollXY), 좌표(위치) 등 결정
5. Paint (RePaint ← Reflow)               cf. visibility
  - 텍스트, 색상, 굵기, 모서리(radius), 그림자 등
6. Composite                  
  - Layer 합성                   cf. transform, opacity is only Composit


> 실무에서 firstChild 보다는 firstElementChild 를 더 자주 쓴다

$로 시작하는 것들은 *관례상* element다 

## TypeScript

[Playground Link](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBBBccoCcCWYDmMC8MDkAhgEbB4DcAUBAHQA2ApplABaUUOwCeiYArgLZF6ySpxwwAjACYAzJVCQQDOiAwAKCABoYnAJRkgA)

- Union Type 을 번역할 때, 합집합 이라고 하지 않고 그대로 유니온 타입 이라고 한다
- initializer inference
    - 타입을 지정하지 않아도, 먼저 짐작 하는 것
  ```
  let a = 'abc'
  ```
  이렇게 작성하면, 타입스크립트의 추론 시스템이 알아서
  ```
  let a: string = 'abc'
  ```
  으로 전환해서, 'abc'의 타입은 string 이다 라고 알아주는 것

- Type Check System

1. .ts 파일로 타입스크립트 작성 한 뒤, 터미널에서 tsc **.ts 실행
2. 해당 디렉토리에 동일 파일명의 .js 파일 생성 확인
3. 코드 실행은 node **.js -> JS 파일로 실행

**주의**
타입스크립트는 한번 실행할 때 모든 js 파일을 한번에 읽어야 한다. 하나씩 읽으면 에러남. 
그래서 터미널에서 .ts 파일을 하나씩 tsc 할게 아니라, 그냥 tsc 하나만 써서 모든 파일들을 읽어줘야 한다. 

### .ts 파일 하나만 노드에서 실행하고 싶을 때: 
1. ts-node **.ts 입력 및 실행






