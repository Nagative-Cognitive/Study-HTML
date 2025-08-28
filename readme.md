# 피드백 목록

> 해당 Todo들을 찬찬히 확인해보고 아래에 정리해보세요

## `08. 28

### Todo

<ol>
    <li>i++과 ++i의 차이점 한 번 확인해볼것.</li>
    <li>textContent와 innerHTML, innerText 같은거의 차이점?</li>
</ol>

### 부연 설명

<code> 
    CSS >> 이 둘은 완전히 다름 - 띄어쓰기 주의. {선택자} <br>
    .hello.world // .hello와 .world 를 동시에 만족시키는 태그를 의미 <br>
    .hello .world // .hello 안의 .world 태그를 의미
</code>

#### Todo list 및 부연 설명에 대한 정리

> textContent와 innerHTML, innerText 같은거의 차이점

- innerHTML: html파일에 적힌 해당 되는 글을 가져옴
- textContent: 태그를 제외한 모든 텍스트를 가져옴
- innerText: document??화면에 보이는 텍스트만 가져옴 hidden 같이 기능이있는 텍스트는 못가져옴

> i++과 ++i의 차이점

- i++ 는 출력 후 증가.
  i = 0; 일때 i = 0 이고 다음 반복문 부턴 0,1,2,3 ...

- ++i 는 증가 후 출력
  i = 0; 일때 i = 1 이고 다음 반복문 부턴 1,2,3,4 ...

> CSS

- .hello.world 는 태그 안의 클래스가 hello world 이렇게 두개를 만족함

- .hello .world 는 hello라는 부모 클래스 안의 world 라는 클래스임
