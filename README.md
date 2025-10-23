# 🏎️ 자동차 경주 게임

자동차 이름과 시도 횟수를 입력받아 **랜덤값 기반 자동차 경주**를 진행하는 게임입니다.<br>
각 자동차는 4 이상의 랜덤값을 받으면 전진하며, 최종 우승자(공동 우승 가능)를 판정합니다.

## 플로우 차트

<img src="https://i.imgur.com/c75Yuj1.jpeg" alt="자동차 경주 게임 플로우차트" width="500">

---

## 🚀 실행 방법

```bash
npm start
```

```bash
npm test
```

---

## 기능 요구사항

### 입력

- **자동차 이름**: 쉼표(`,`)로 구분된 이름들 (최대 5자, 중복 불가)
- **시도 횟수**: 1 이상의 정수

### 출력

- **라운드별 결과**: `자동차명 : ---` 형식 (대시로 위치 표시)
- **최종 우승자**: `최종 우승자 : pobi, jun` (공동 우승 시 쉼표 구분)

### 실행 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni : --
jun : -

pobi : --
woni : ---
jun : --

pobi : ---
woni : ----
jun : ---

pobi : ----
woni : -----
jun : ----

pobi : -----
woni : -----
jun : -----

최종 우승자 : pobi, woni, jun
```

---

## 설계 및 구현 목록

### **도메인 계층 (Domain)**

#### Car 클래스

- [x] 자동차 이름과 위치 관리 (private 필드)
- [x] 랜덤값 기반 전진 로직 (4 이상 시 전진)
- [x] getter를 통한 상태 접근 (name, position)

#### CarValidator 클래스

- [x] 이름 길이 검증 (5자 이하)
- [x] 중복 이름 검증
- [x] 도메인 규칙 위반 시 Error 발생

#### RoundValidator 클래스

- [x] 시도 횟수 최소값 검증 (1 이상)
- [x] 정수 검증

### **서비스 계층 (Service)**

#### RacingGame 클래스

- [x] Car 인스턴스 생성 및 관리
- [x] 라운드 진행 (MissionUtils.Random 활용)
- [x] 우승자 판정 (공동 우승 지원)
- [x] 최대 위치 계산

### **뷰 계층 (View)**

#### InputView 클래스

- [x] 자동차 이름 입력 (쉼표 분리, 공백 제거)
- [x] 시도 횟수 입력 (숫자 변환)
- [x] MissionUtils.Console.readLineAsync 활용

#### OutputView 클래스

- [x] 라운드 결과 출력 (대시 표시)
- [x] 우승자 출력 (단독/공동)
- [x] MissionUtils.Console.print 활용

#### InputValidator 클래스

- [x] 입력값 비어있음 검증
- [x] 숫자 변환 가능성 검증
- [x] 배열 비어있음 검증

### **애플리케이션 계층 (App)**

#### App 클래스

- [x] 입력 및 검증 파이프라인
- [x] 게임 진행 및 출력 조율
- [x] 에러 처리 (try-catch)

---

## 테스트 더블 전략

### **Mock vs Spy 구분**

| 테스트 더블 | 사용 대상                               | 목적           | 구현 방식                         |
| ----------- | --------------------------------------- | -------------- | --------------------------------- |
| **Mock**    | `MissionUtils.Console.readLineAsync`    | 입력값 제어    | `jest.fn().mockResolvedValue()`   |
| **Spy**     | `MissionUtils.Console.print`            | 출력 호출 확인 | `jest.spyOn().mockClear()`        |
| **Mock**    | `MissionUtils.Random.pickNumberInRange` | 랜덤값 제어    | `jest.fn().mockReturnValueOnce()` |

### **테스트 격리 (Test Isolation)**

- `beforeEach()`로 각 테스트마다 Mock 상태 초기화
- 테스트 간 의존성 제거로 안정적인 테스트 보장

---

## 📁 디렉토리 구조 비교

### **Week01 (문자열 계산기)**

```
src/
├── domain/
│   ├── AdditionCalculator.js
│   ├── Separator.js
│   └── Validator.js          # 모든 검증을 하나의 클래스에
├── App.js
└── index.js
```

### **Week02 (자동차 경주) - 개선된 구조**

```
src/
├── domain/
│   ├── Car.js
│   └── policy/
│       ├── CarValidator.js   # 도메인 규칙
│       └── RoundValidator.js # 비즈니스 규칙
├── service/
│   └── RacingGame.js
├── view/
│   ├── InputView.js
│   ├── OutputView.js
│   └── validator/
│       └── InputValidator.js # 기술적 검증
├── App.js
└── index.js
```

### **개선 포인트**

- **검증 책임 분리**: 도메인/입력/라운드 검증을 각각 분리
- **계층별 명확한 역할**: Domain/Service/View 계층 구분
- **테스트 용이성**: 각 클래스별 독립적인 테스트 가능

---

## 벨리데이터 분리 전략

### **입력 검증 vs 정책 검증**

| 검증 유형       | 담당 클래스      | 검증 내용                  | 예시                     |
| --------------- | ---------------- | -------------------------- | ------------------------ |
| **기술적 검증** | `InputValidator` | null, undefined, 빈 문자열 | `validateNotEmpty()`     |
| **도메인 검증** | `CarValidator`   | 비즈니스 규칙              | 이름 5자 이하, 중복 불가 |
| **라운드 검증** | `RoundValidator` | 게임 규칙                  | 1 이상, 정수             |

### **검증 순서**

1. **입력 형식 검증** → 2. **도메인 규칙 검증** → 3. **비즈니스 규칙 검증**

---

## 테스트 현황

| 계층    | 파일                   | 테스트 더블 | 상태 |
| ------- | ---------------------- | ----------- | ---- |
| Domain  | Car.test.js            | -           | ✅   |
| Domain  | CarValidator.test.js   | -           | ✅   |
| Domain  | RoundValidator.test.js | -           | ✅   |
| Service | RacingGame.test.js     | Mock        | ✅   |
| View    | InputView.test.js      | Mock        | ✅   |
| View    | OutputView.test.js     | Spy         | ✅   |
| View    | InputValidator.test.js | -           | ✅   |

---

## 설계 원칙 적용

### **단일 책임 원칙 (SRP)**

- `Car`: 자동차 상태와 행동만
- `RacingGame`: 게임 진행만
- `Validator`: 각각의 검증 책임만

### **테스트 가능성**

- Mock/Spy를 통한 외부 의존성 격리
- 각 클래스별 독립적인 단위 테스트

### **YAGNI (You Aren't Gonna Need It)**

- 필요한 기능만 구현
- 과도한 추상화 지양

---

## 클래스 다이어그램

<img src="https://i.imgur.com/t8UJeCl.jpeg" alt="자동차 경주 게임 클래스 다이어그램" width="500">

---

## 테스트 커버리지

<img src="https://i.imgur.com/D704jJe.png" alt="자동차 경주 게임 테스트 커버리지" width="500">

---

## Dev-log

> [!IMPORTANT]
> 이번 미션은 **테스트 더블**과 **벨리데이터 분리**에 집중했습니다.<br>
> Week01과 달리 검증 책임을 명확히 분리하여 각 클래스의 단일 책임을 보장했습니다.<br>
> Mock/Spy를 활용한 격리 테스트로 안정적인 테스트 환경을 구축했습니다.

### **주요 고민사항**

- **디렉토리 분리**: 파일 수 증가 vs 명확한 책임 분리
- **검증 분리**: 기술적 검증 vs 도메인 검증 vs 비즈니스 검증
- **테스트 더블**: Mock vs Spy 선택 기준
- **벨리데이터 위치**: `validator/` vs `policy/` 디렉토리 선택

### **결과**

- 명확한 계층 분리로 유지보수성 향상
- 테스트 더블을 통한 격리 테스트 구현
- 각 검증의 명확한 책임 분리
- `domain/policy/`로 도메인 규칙 검증 집중화

---

### 👨‍💻 개발자

[mindaaaa](https://github.com/mindaaaa)

---

## 참고 자료

| 주제               | 링크                                                             | 요약                         |
| ------------------ | ---------------------------------------------------------------- | ---------------------------- |
| 테스트 더블 가이드 | [Jest Mock/Spy 공식 문서](https://jestjs.io/docs/mock-functions) | Mock과 Spy의 차이점과 사용법 |
