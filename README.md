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
- [ ] RacingGame: 게임 진행 테스트
- [ ] RacingGame: 우승자 판정 테스트

### 검증 테스트

- [ ] CarValidator: 이름 길이 검증
- [ ] CarValidator: 빈 이름 검증
- [ ] CarValidator: 중복 검증
- [ ] InputValidator: 형식 검증
- [ ] RoundValidator: 범위 검증

### 뷰 테스트

- [x] InputView: 이름 파싱 테스트
- [x] InputView: 횟수 변환 테스트
- [x] OutputView: 라운드 결과 출력 테스트
- [x] OutputView: 우승자 출력 테스트

### 통합 테스트

- [ ] ApplicationTest: 전체 플로우 테스트
- [ ] ApplicationTest: 예외 처리 테스트

---

## 📁 프로젝트 구조

```
src/
  ├── domain/
  │   ├── Car.js                    ✅ 완료
  │   └── validator/
  │       ├── CarValidator.js       🔲 예정
  │       └── RoundValidator.js     🔲 예정
  ├── service/
  │   └── RacingGame.js             🔲 예정
  ├── view/
  │   ├── InputView.js              ✅ 완료
  │   ├── OutputView.js             ✅ 완료
  │   └── validator/
  │       └── InputValidator.js     🔄 진행 중
  ├── App.js                        🔲 예정
  └── index.js

__test__/
  ├── domain/
  │   ├── Car.test.js               ✅ 완료
  │   └── RacingGame.test.js        🔲 예정
  ├── view/
  │   ├── InputView.test.js         ✅ 완료
  │   └── OutputView.test.js        ✅ 완료
  └── validator/
      ├── CarValidator.test.js      🔲 예정
      ├── InputValidator.test.js    🔲 예정
      └── RoundValidator.test.js    🔲 예정
```

---

## 🎯 구현 원칙

### 프로그래밍 요구사항

- [x] indent depth 3을 넘지 않기 (2까지만 허용)
- [x] 3항 연산자 사용하지 않기
- [x] 함수가 한 가지 일만 하도록 작게 만들기
- [x] private 필드 사용 (#)
- [ ] Jest 테스트 커버리지 확보

### 설계 원칙

- [x] 도메인과 뷰 계층 분리
- [x] 입력 검증과 도메인 검증 분리
- [x] 테스트 더블(Mock, Spy) 활용
- [x] 단일 책임 원칙 준수
- [ ] YAGNI 원칙 적용 (필요한 것만 구현)
