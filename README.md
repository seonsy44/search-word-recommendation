# search-word-recommendation
원티드 프리온보딩 과제: 검색창 및 질환 검색어 추천<br/>
[📎 배포링크 바로가기](https://search-word-recommendation.vercel.app/)

<br/>

# 데모 및 기능구현
<img src="https://user-images.githubusercontent.com/76088728/205950925-a717fc7c-2174-45d0-bd48-ce8f29d95529.gif" /><br/>
- [한국임상정보](https://clinicaltrialskorea.com/) 사이트의 검색 영역 구현
  - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
      - 예)
          - 사용자 입력: 담낭
          추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환, 달리 분류된 질환에서의 **담낭**, 담도 및 췌장의 장애
  - 검색어가 없을 시 “검색어 없음” 표출
- API 호출 최적화
    - API 호출별로 로컬 캐싱 구현 => ([캐싱 구현](https://github.com/seonsy44/search-word-recommendation/blob/main/src/context/CacheContext.ts))
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행 => ([debounce](https://github.com/seonsy44/search-word-recommendation/blob/main/src/utils/index.ts)함수 구현 후 [사용](https://github.com/seonsy44/search-word-recommendation/blob/main/src/hooks/useSearchBar.ts))
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현 => ([관련 커스텀훅 작성](https://github.com/seonsy44/search-word-recommendation/blob/main/src/hooks/useUpDownKey.ts))

<br/>

# 실행 방법
### 1. repository clone
```
$ git clone https://github.com/seonsy44/search-word-recommendation.git
```

### 2. `.env.local` 파일 작성
```
REACT_APP_CLINICAL_TRIALS_KOREA="https://clinicaltrialskorea.com"
REACT_APP_SERVER_URL="http://localhost:4000"
```

### 3. 의존성 설치 및 실행
```
npm install
npm start
```

<br/>

# 기술스택
- React
- TypeScript
- Styled-Components
- Axios

<br/>

# 폴더구조
```
📦src
 ┣ 📂context
 ┃ ┣ 📜CacheContext.ts
 ┃ ┗ 📜DiseaseSearchContext.ts
 ┣ 📂hooks
 ┃ ┣ 📜useFocus.ts
 ┃ ┣ 📜useSearchBar.ts
 ┃ ┗ 📜useUpDownKey.ts
 ┣ 📂http
 ┃ ┗ 📜axiosInstance.ts
 ┣ 📂pages
 ┃ ┗ 📂DiseaseSearch
 ┃ ┃ ┣ 📜RecommendBox.tsx
 ┃ ┃ ┣ 📜RecommendItem.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┣ 📜SearchRecommend.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂service
 ┃ ┗ 📜DiseaseSearchService.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜mixins.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜CacheType.ts
 ┃ ┣ 📜DiseaseSearchType.ts
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
 ```
