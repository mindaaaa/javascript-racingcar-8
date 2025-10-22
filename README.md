# 🏎️ 자동차 경주 게임

## 기능 요구사항

### 도메인 (Domain)

#### Car 클래스

- [x] 자동차 이름을 저장한다
- [x] 자동차의 위치를 관리한다 (초기값: 0)
- [x] 랜덤값을 받아 4 이상이면 전진한다
- [x] 이름을 반환하는 getter를 제공한다
- [x] 위치를 반환하는 getter를 제공한다

### 서비스 (Service)

#### RacingGame 클래스

- [x] 자동차 이름 배열을 받아 Car 인스턴스들을 생성한다
- [x] 한 라운드를 진행한다 (모든 자동차가 랜덤값으로 이동)
- [x] 현재 자동차 목록을 반환한다
- [x] 최고 위치를 찾는다
- [x] 우승자 목록을 반환한다 (공동 우승 가능)

### 검증 (Validator)

#### CarValidator (도메인 검증)

- [x] 자동차 이름이 빈 문자열이 아닌지 검증한다
- [x] 자동차 이름이 5자 이하인지 검증한다
- [x] 자동차 이름이 중복되지 않는지 검증한다
- [x] 모든 자동차 이름을 한 번에 검증한다

#### InputValidator (입력 형식 검증)

- [x] 입력값이 비어있지 않은지 검증한다
- [x] 입력값이 숫자로 변환 가능한지 검증한다
- [x] 배열이 비어있지 않은지 검증한다

#### RoundValidator (라운드 검증)

- [x] 시도 횟수가 1 이상인지 검증한다
- [x] 시도 횟수가 정수인지 검증한다

### 뷰 (View)

#### InputView 클래스

- [x] 자동차 이름을 입력받는다
- [x] 쉼표로 구분된 이름을 배열로 파싱한다
- [x] 각 이름의 앞뒤 공백을 제거한다
- [x] 시도 횟수를 입력받는다
- [x] 입력받은 횟수를 숫자로 변환한다

#### OutputView 클래스

- [x] 실행 결과 헤더를 출력한다
- [x] 한 라운드의 결과를 출력한다
- [x] 자동차 이름과 위치를 "이름 : ---" 형식으로 출력한다
- [x] 위치를 대시(-)로 표시한다
- [x] 각 라운드 후 빈 줄을 출력한다
- [x] 최종 우승자를 출력한다
- [x] 공동 우승자는 쉼표로 구분하여 출력한다

### 애플리케이션 (App)

#### App 클래스

- [ ] 자동차 이름을 입력받는다
- [ ] 자동차 이름을 검증한다
- [ ] 시도 횟수를 입력받는다
- [ ] 시도 횟수를 검증한다
- [ ] RacingGame을 생성한다
- [ ] 지정된 횟수만큼 게임을 진행한다
- [ ] 각 라운드마다 결과를 출력한다
- [ ] 최종 우승자를 출력한다
- [ ] 에러 발생 시 "[ERROR]"로 시작하는 메시지와 함께 종료한다

---

## 테스트 요구사항

### 도메인 테스트

- [x] Car: 전진/정지 로직 테스트
- [x] Car: 초기 상태 테스트
- [x] RacingGame: 게임 진행 테스트
- [x] RacingGame: 우승자 판정 테스트

### 검증 테스트

- [x] CarValidator: 이름 길이 검증
- [x] CarValidator: 빈 이름 검증
- [x] CarValidator: 중복 검증
- [x] InputValidator: 형식 검증
- [x] RoundValidator: 범위 검증

### 뷰 테스트

- [x] InputView: 이름 파싱 테스트
- [x] InputView: 횟수 변환 테스트
- [x] OutputView: 라운드 결과 출력 테스트
- [x] OutputView: 우승자 출력 테스트

---

## 📁 프로젝트 구조

```
src/
  ├── domain/
  │   ├── Car.js
  │   └── validator/
  │       └── CarValidator.js
  ├── service/
  │   ├── RacingGame.js
  │   └── validator/
  │       └── RoundValidator.js
  ├── view/
  │   ├── InputView.js
  │   ├── OutputView.js
  │   └── validator/
  │       └── InputValidator.js
  ├── App.js
  └── index.js

__test__/
  ├── domain/
  │   ├── Car.test.js
  │   └── validator/
  │       └── CarValidator.test.js
  ├── service/
  │   ├── RacingGame.test.js
  │   └── validator/
  │       └── RoundValidator.test.js
  ├── view/
  │   ├── InputView.test.js
  │   ├── OutputView.test.js
  │   └── validator/
  │       └── InputValidator.test.js
```

---

## 🎯 구현 원칙

### 프로그래밍 요구사항

- [x] indent depth 3을 넘지 않기 (2까지만 허용)
- [x] 3항 연산자 사용하지 않기
- [x] 함수가 한 가지 일만 하도록 작게 만들기
- [x] private 필드 사용 (#)
- [x] Jest 테스트 커버리지 확보

### 설계 원칙

- [x] 도메인과 뷰 계층 분리
- [x] 입력 검증과 도메인 검증 분리
- [x] 테스트 더블(Mock, Spy) 활용
- [x] 단일 책임 원칙 준수
- [x] YAGNI 원칙 적용 (필요한 것만 구현)

---

## 📋 작업 체크리스트

### 🏗️ 도메인 계층

- [x] `Car` - 자동차 모델
  - [x] 이름 및 위치 관리
  - [x] 랜덤값 기반 전진 로직 (4 이상)
  - [x] getter 제공 (name, position)
  - [x] 단위 테스트 작성

### 🎮 서비스 계층

- [x] `RacingGame` - 게임 진행
  - [x] Car 인스턴스 생성 및 관리
  - [x] 라운드 진행 (Random 사용)
  - [x] 우승자 판정 (공동 우승 지원)
  - [x] Random Mock 테스트 작성

### 🖥️ 뷰 계층

- [x] `InputView` - 입력 처리
  - [x] 자동차 이름 입력 (쉼표 분리)
  - [x] 시도 횟수 입력
  - [x] Mock 기반 테스트
- [x] `OutputView` - 출력 처리
  - [x] 라운드 결과 출력 (대시 표시)
  - [x] 우승자 출력 (단독/공동)
  - [x] Spy 기반 테스트

### ✅ 검증 계층

- [x] `CarValidator` - 도메인 규칙
  - [x] 이름 길이 (5자 이하)
  - [x] 중복 검증
  - [x] 단위 테스트
- [x] `InputValidator` - 입력 형식
  - [x] 빈 값, null, undefined 검증
  - [x] 숫자 변환 검증
  - [x] 단위 테스트
- [x] `RoundValidator` - 라운드 규칙
  - [x] 최소값 (1 이상)
  - [x] 정수 검증
  - [x] 단위 테스트

### 🎯 통합

- [x] `App` - 메인 플로우
  - [x] 입력 및 검증 파이프라인
  - [x] 게임 진행 및 출력
  - [x] 에러 처리
- [ ] `ApplicationTest` - 통합 테스트

### 📝 문서화

- [x] 기능 명세 작성
- [x] 프로젝트 구조 정리
- [x] 테스트 전략 문서화

### 🔧 코드 품질

- [x] indent depth 2 이하 준수
- [x] 3항 연산자 미사용
- [x] 함수 단일 책임 원칙
- [x] private 필드 활용 (#)
- [x] 테스트 더블 적용 (Mock, Spy)

---

## 📊 테스트 현황

| 계층        | 파일                   | 상태 |
| ----------- | ---------------------- | ---- |
| Domain      | Car.test.js            | ✅   |
| Service     | RacingGame.test.js     | ✅   |
| View        | InputView.test.js      | ✅   |
| View        | OutputView.test.js     | ✅   |
| Validator   | CarValidator.test.js   | ✅   |
| Validator   | InputValidator.test.js | ✅   |
| Validator   | RoundValidator.test.js | ✅   |
| Integration | ApplicationTest.js     | ⏳   |

---

## 🎯 설계 원칙 적용

- ✅ **SRP (단일 책임)**: 클래스별 명확한 역할 분리
- ✅ **캡슐화**: private 필드로 상태 보호
- ✅ **계층 분리**: Domain / Service / View / Validator
- ✅ **테스트 가능성**: Mock/Spy를 통한 격리 테스트
- ✅ **YAGNI**: 필요한 기능만 구현
