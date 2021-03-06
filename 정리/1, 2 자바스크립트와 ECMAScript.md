
`동적?`
- 서버에 있는 데이터베이스에서 우리가 원하는 데이터를 가져와 가공해서 우리가 원하는 ui를 표현한다.   
	=> 프론트엔드와의 차이점

`프로그래밍?`  
- 수행되기 원하는 명령을 컴퓨터에 전달하는 일종의 `커뮤니케이션`

## 어플리케이션과 웹어플리케이션
`어플리케이션` - 별도의 설치가 필요하다.

`웹 어플리케이션` - 브라우저 위에서 동작, 브라우저가 우리의 소스코드를 어떻게 동작시키는지를 이해해야 한다.

`사용자` - 우리가 만들어놓은 프로그램에 접근하는 사람 or 프로그램

`클라이언트` 
- `사용자와의 커뮤니케이션이 중요`(디자이너, 타인이 될 수 있음)
- `ui` : 사용자가 action할 수 있는 모든 것, 항상 상태를 가진다.(사용자가 만든 상태 데이터 -> 서버로 보냄)  
  `interface` - (ex. 버튼, 리모콘, cli)  
  `ux` : 사용자의 경험, ui를 오래 겪으면 ux로 굳어진다.


## 속성
`html` - attribute
`css` - property
`js` - attribute, property


## 초심자가 경험하는 3가지 어려움
1. 책이나 수업의 내용이 무슨 말인지 하나도 모르겠다. 주변 개발자의 말을 알아 들을 수 없다.
    - 배경지식 : 기본적 cs 지식 + 개념(용어)에 대한 이해
2. 어떻게 만들어야 할 지 감조차 오지 않는다.
    - 문제 해결 능력 : 문제(해결과제)가 무엇인지 알아채는 능력 + computational thinking + 알고리즘 / 자료구조 + 경험
    * 문제 해결 능력 = 해결 과제(문제 / 요구사항)의 명확한 이해 -> 복잡함을 단순하게 분해 -> 자료를 정리하고 구분(modeling) -> 순서에 맞게 행위 배열
3. 어떻게 만들어야 할 지는 알겠는데 막상 코딩하니까 한줄도 못짜겠다.
    - 구현능력 : 문법에 대한 정확한 이해 + 연습

시행착오는 "무엇을 알고 무엇을 모르는지"를 알게 하는 개발자의 벗이자 선생님이다.  
무엇을 모르는지 알았다면 몰랐던 것을 알기 위해 "시도하고 실패하는 의식적인 연습을 반복"한다.   
구체적인 목표를 수립하고 학습하고 작은 성취를 반복하자.


`프로그래밍` : 해야 할 일들의 목록  
`프로그래밍 언어` : 프로그래머가 수행하기를 원하는 명령들의 집합을 수행하도록 작성한 문서, 인공어  
- html, css는 `선언형 프로그래밍 언어`   
    => html,css도 프로그래밍 언어라고 할 수 있다.  

- 가독성이 높은 코드를 만들어야 한다. (사람이 이해할 수 있도록)  
    => 위에서 밑으로 코딩을 해야 한다.


`자바스크립트 엔진` - 자바스크립트 코드를 해석하고 실행할 수 있는 프로그램  
`번역가` - 한번에 해석 : `컴파일러`  
`통역가` - 한줄한줄 해석  : `인터프리터 언어(compile 파일을 만들지 않음)`   
=> 자바스크립트 (내부적으로는 자바스크립트도 컴파일을 한다.)

`기계어` - 0과 1로 되어 있음  
`자연어` - 사람이 하는 언어

ecma script
- 자바스크립트 엔진이 실행


## AJAX (asynchronous javascript and xml)

비동기적 자바스크립트와 xml
렌더링이란?
- html과 css로 표현된 데이터를 해석해 시각적으로 브라우저에 표현하는 것

- ajax engine(자바스크립트 오브젝트, 사용자를 대신하여 서버와 통신)이라는 인터페이스를 통해서 데이터를 주고받는다 
- ajax엔진이 리퀘스트를 하고 데이터를 받을 때 브라우저에 데이터를 직접 주는 것이 아니라 xml형식의 데이터를 준다, 그 데이터를 바탕으로 html 문서를 생성해서 정보를 업데이트 한다, 페이지에서 부분 부분을 업데이트가 가능, Ajax 엔진에서 데이터를 받을 때 xml, json(데이터 스트럭쳐, 데이터 형태)포맷으로 데이터를 받는데 `데이터가 필요할 때 리퀘스트를 해놓고 다른 업무 처리가 가능`하다.
- Google Suggest와 Google Maps는 Ajax를 호출한 웹 애플리케이션에 대한 새로운 접근 방식의 두 가지 예이다.
- 빠르고 동적인 웹 페이지를 만들기 위한 기술로, 백그라운드에서 서버와 소량의 데이터를 교환하여 웹 페이지를 비동기적으로 업데이트 할 수 있게 한다. Ajax를 사용하지 않는 고전적인 웹 페이지는 내용이 변경되면 전체 페이지를 렌더링 한다. (리퀘스트가 되면 사용자 상호작용이 중단되고 이로 인해 웹 페이지가 느려진다, 순간적인 화면 깜빡임 발생)

## jquery의 장점
- 내부에서 크로스 브라우징의 이슈를 해결해준다.
- css만 되면 DOM의 객체를 자유롭게 불러올 수 있다.
- 단순한 것을 만들 때는 vue나 react를 사용할 필요가 없다.

**google maps의 javascript와 xml 엔진을 통해 javascript의 가능성 발견 -> 웹 어플리케이션 구축 시도 => 보다 빠른 엔진의 필요성 대두 -> v8엔진**

## v8 
- 자바스크립트를 브라우저에서 작동하게 하는 엔진
- 웹 브라우저 내부에서 자바스크립트의 속도를 개선하기 위해 고안
- 함수가 호출된 곳의 코드 위치에 호출된 함수의 내용으로 바꾸는 과정을 함 => `인라이닝`
=> v8 엔진을 통해 javascript가 웹 어플리케이션 개발 언어로 자리잡음, server - side 어플리케이션 개발에서도 가능하게 되었다.

mozilla firefox의 spidermonkey, microsoft edge의 charkra

## javascript 엔진의 비교 특징
- 수행 능력의 차이
    - 같은 사람이라도 운동신경이 다른 것처럼 javascript를 처리하는 속도에서 차이가 날 수 있다.

- 지원되는 ecma script
- 같은 영어를 사용할 줄 알더라도 내가 모르는 단어를 상대방이 아는 것과 같음, ecma script를 얼마나 잘 지원하는가에 대한 것
node js
- node js(자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행환경)자바스크립트가 웹 브라우저를 벗어나 어디서든 사용할 수 있는 범용언어가 되었다.
- 인터프리터 언어라 다른 언어들보다는 속도가 느리다.

## javascript
1. 웹 api 
- ecma script에서 지원하는 것이 아니라 브라우저에서 지원
- `w3c에서 관리 `
- javascript 코드를 사용하여 접근할 수 있다
- http protocol만을 지원한다.
- 웹 어플리케이션 개발에서 다른 서비스에 요청을 보내고 응답을 받기 위한 것

2. 실행할 수 있는 환경 2가지 
사용 목적으로 구분  

`브라우저 환경`
- `ecma script + web APIs(브라우저에 종속되어 있음, 브라우저에서 처리) `
- javascript를 사용할 수 있는 방법 : 개발자 도구, html에서 script 태그를 사용해 불러오기
- client - side에서 많이 사용

`node js 환경`
- `ecma script (server - side 프로그래밍을 할 때 많이 사용) + node js APIs`
- server - side이기 때문에 `web api를 가지고 있을 필요가 없다.` -> 여기서 제공하는 api가 따로 있음, node js api 
- 내가 사용하는 함수가 es에 포함인지, web api에 포함인지, node js api에 포함인지 구분
- es가 둘 다 사용할 수 있기 때문에 `core javascript`



## 자바스크립트의 특징
- 인터프리터 언어이다. (컴파일 파일을 만들지 않고 한줄씩 실행된다.)
- html, css(선언형 언어)와 프로그래밍 방식이 다르다.
- 명령형, 절차형 : 하나의 파일에 쓰는 것
- 함수형 : 함수 단위로 쪼개는 것
- 객체 지향 프로그래밍 : class 단위로 쪼개고 객체가 서로 상호작용하면서 프로그래밍하는 방식(ex. class)

## ES6 브라우저 지원 현황
`angular나 react는 es6 기반`  
- babel(transpiler) : es6를 es5로 내려주는 것 (대부분의 브라우저들이 es5까지는 지원함)   
http://kangax.github.io/compat-table/es5/  
`transpiler란?` 어떤 버전의 코드를 다른 버전으로 바꾸는 것  

`import(하나의 javascript 모듈에서 다른 javascript 모듈을 사용할 수 있게 하는 것)도 대부분의 브라우저가 지원하지 않음`
- webpack(module bundler : 여러 개의 파일을 하나의 파일로 묶어주는 라이브러리)을 사용하면 지원할 수 있음  
- `bundler` : 필요한 의존성에 대해 정확하게 추적하여 해당하는 의존성들을 그룹핑해주는 도구  
-> 각각의 모듈들에 대해 의존성 관계를 파악하여 그룹핑해주는 것  
- single page application : 서버로부터 페이지 전체를 렌더링하지 않고 현재의 페이지를 동적으로 다시 작성  

## WEB API vs REST API
`API란 무엇인가?`
- 응용 프로그램(운영체제에서 실행되는 모든 소프트웨어 ex. 워드 프로세서)에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 `인터페이스`  
- 프로그래밍을 할 때 필요한 `인터페이스 (서로 다른 두 시스템 사이에서 정보나 신호를 주고받는 경우의 접점, 경계면 / 사용자가 기기를 쉽게 동작시키는데 도움을 주는 시스템)`  
ex. 파일 제어, 창 제어, 문자 제어

`WEB API`

`REST API` (REpresentatial State Transfer API)
- http 프로토콜로 제공하는 API
