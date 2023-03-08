📆 2022.06.27
# NextJs Introduction

</br>

<b> ✅ next Js 생성 </b> 


 ```javascript
    npx create-next-app 
 ```

<b> ✅ next Js +  typescript 생성 </b> 


 ```javascript
    npx create-next-app --typescript
 ```

</br>
</br>
</br>

## 라이브러리 vs 프레임워크
https://www.youtube.com/watch?v=t9ccIykXTCM

> 라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)입니다.
> 라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있습니다.
> 그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출합니다.

- 라이브러리

1. 사용자(개발자)가 파일 이름이나 구조 등을 정하고, 모든 결정을 내립니다.
2. 개발자가 어떤 프로그램을 가져다 씁니다 (Ex React: 렌더링할때 ReactDOM.render()를 불러와서 사용한다.)

</br>

- 프레임워크

1. 파일 이름이나 구조 등을 정해진(특정한) 규칙에 따라 만들고 따릅니다
2. 개발자의 코드를 프로그램이 불러오는 것 (Ex NextJS: 정해진 규칙에 따라 코드를 작성하면 렌더링된다. )

</br>
</br>
</br>

## Next.

</br>

> Next.js는 서버 사이트 렌더링, 정적 웹 페이지 생성 등 리액트 기반 웹 애플리케이션 기능들을 가능케 하는 Node.js 위에서 빌드된 오픈 소스 웹 개발 프레임워크이다. </br>
>
> 리액트 문서는 Next.js를 ‘권고하는 툴 체인들’ 중 하나로 언급하며 개발자들이 Node.js로 서버 렌더링되는 웹사이트를 빌드할 때의 해결책의 하나로 충고하고 있다. </br>
>
> [출처] 위키 백과 (https://ko.wikipedia.org/wiki/Next.js )

</br>

#### [ 장점 ]

1. 사전 렌더링 및 서버 사이드 렌더링 [앱에 있는 페이지들이 미리 렌더링]

2. Hot Code Reloading을 지원하는 개발 환경 [코드 변경 사항이 저장되면 응용 프로그램이 자동으로 다시 로드]

3. 설정이 따로 필요없는 환경 [기본적으로 웹팩(webpack)과 바벨(babel) 사용]

4. Typescript 내장

5. styled-jsx지원

6.  파일기반 내비게이션 기능 [pages 폴더 안에 있는 파일명에 따라 route가 결정]

- pages/about.js 생성  
  ⭐ localhost:3000/about (O)
  ❌ localhost:3000/about-us(X)

다만 예외사항으로, index.js의 경우에는 앱이 시작하는 파일이라고 보면 된다.
즉 localhost:3000 그 자체다 뒤에 /index 로 붙이면 안된다.

이 강의를 들을 때는 import react from "react"를 쓸 필요가 없다.
다만 useState,useEffect, lifecycle method 같은 애들을 써야 할 경우에는 꼭 import를 해줘야 한다.

</br>

#### [단점]

1. 프레임워크 공개빌드된 파일 폴더가 .next이기 때문에 next.js를 사용하는 프로젝트인것이 잘 나타난다.

2. 속도 SSR의 단점으로 서버가 느리면 웹사이트가 기하급수적으로 느려집니다.

3. 서버 부하가 CSR에 비해 많은 편입니다.

4. 페이지 이동할때마다 새로운 html 파일을 불러올 때 화면이 깜박거립니다. (UX적으로 좋지 못함)

