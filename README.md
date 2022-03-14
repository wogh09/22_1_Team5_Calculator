# 응급코딩과 5팀
## 프로젝트 소개

### 환율계산기 구현하기

![1번_환율계산기](https://user-images.githubusercontent.com/91524565/151046847-c117e7fd-dd1c-4c95-8e59-1c3ec3269e8e.gif)
![2번_환율계산기](https://user-images.githubusercontent.com/91524565/151046858-dae665a1-7a9b-40ae-8363-1a7906216a1b.gif)
<br/><br/>
## 배포 링크
<a href="http://carculate05.s3-website.ap-northeast-2.amazonaws.com/">배포 링크</a> 


<br/><br/>
## 개발 인원 및 기간

### 개발기간: 2022/1/24~2021/1/26

### 개발 인원: 프론트 4명

김재호, 김태영, 원소연, 황주영
<br/><br/>

## 적용 기술 및 협업 툴 

### 적용 기술

- Front-End: React.js, Tailwind Css, React Router
- Common: AWS S3

### 소통 툴

- Git, Github, Slack, <a href="https://olive-trapezoid-dec.notion.site/Pre_OnBoarding-c66be59fd2e24852ac7b8dd033252f66">Notion</a> 

<br/><br/>
## 역할

- [`김재호`] &nbsp; Frontend • 1번 계산기
    - Tailwind css 이용하여 레이아웃 구현
    - State에 저장된 값을 불러와 대소 비교 및 &&연산자 쓰기
    - useState로 value 값 저장하기


- [`김태영`] &nbsp; Frontend • 1번 계산기
    - utils함수 priceToString 작성
    - 데이터 state 저장 함수 작성
    - toFixed() : 소수점 개수 제한 작성
    - Submit 버튼 온클릭 이벤트 작성
    - useRef를 사용하여 select의 value 저장


- [`원소연`] &nbsp; Frontend • 2번 계산기
    - Tailwind css 이용하여 레이아웃 구현
    - 입력된 값 최대값 1000 설정 , number 입력 기능
    - Api에서 timestamp를 날짜로 변환 후 환율 기준일 표기
    - 환율 기준일 날짜 포맷에 맞게 구현


- [`황주영`] &nbsp; Frontend • 2번 계산기
    - 초기세팅.
    - 셀렉트 박스 구성, 화폐에 맞게 option 값 부여.
    - useRef를 사용하여 value 값을 setSelectValue애 저장.
    - 나라별 탭 기능 추가.
    - 셀렉트박스에 선택에 의한 탭 이름 조건부렌더링 구현.
    - 하단 Tab바 선택된 국가의 통화 기준으로 레이아웃 변경.
    - 사용자 입력값, 환율에 따라 총 금액이 계산 구현

<br/><br/>
## 설치 및 시작하는 법
- 파일 클론 받기
- git clone https://github.com/dududweb/22_1_Team5_Calculator.git
- npm install
- .env 파일 추가하여 코드 작성
  - REACT_APP_DATA_KEY=API키
- npm start 
</br>
