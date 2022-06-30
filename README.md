📆 2022.06.27
# NextJs Introduction

</br>

 ```javascript
    npx create-next-app 생성할 파일명
 ```

</br>

## 라이브러리 vs 프레임워크
https://www.youtube.com/watch?v=t9ccIykXTCM

> 라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)입니다.
> 라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있습니다.
> 그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출합니다.

- 라이브러리

1. 사용자(개발자)가 파일 이름이나 구조 등을 정하고, 모든 결정을 내립니다.
2. 개발자가 어떤 프로그램을 가져다 쓰는것 (Ex React: 렌더링할때 ReactDOM.render()를 불러와서 사용한다.)

- 프레임워크

1. 파일 이름이나 구조 등을 정해진(특정한) 규칙에 따라 만들고 따릅니다
2. 개발자의 코드를 프로그램이 불러오는 것 (Ex NextJS: 정해진 규칙에 따라 코드를 작성하면 렌더링된다. )

## Next.js

[ 장점 ]

1.  앱에 있는 페이지들이 미리 렌더링됩니다.

1.  pages 폴더
    pages 폴더 안에 있는 파일명에 따라 route가 결정된다.

- pages/about.js 생성  
  ⭐ localhost:3000/about (O)
  ❌ localhost:3000/about-us(X)

다만 예외사항으로, index.js의 경우에는 앱이 시작하는 파일이라고 보면 된다.
즉 localhost:3000 그 자체다 뒤에 /index 로 붙이면 안된다.

이 강의를 들을 때는 import react from "react"를 쓸 필요가 없다.
다만 useState,useEffect, lifecycle method 같은 애들을 써야 할 경우에는 꼭 import를 해줘야 한다.
