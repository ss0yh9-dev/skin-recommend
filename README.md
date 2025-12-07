# 🧴 프로젝트 소개  
이 프로젝트는 사용자가 자신의 피부 타입(지성/건성/복합성/민감성)과  
피부 고민(여드름/홍조/주름/미백 등)을 선택하면  
조건에 맞는 **추천 성분 + 화장품 리스트**를 반환하는 **NestJS 기반 백엔드 서비스**입니다.

회원가입 없이 즉시 사용할 수 있는 간단하고 직관적인 추천 기능을 목표로 합니다.

---

# 🚀 기술 스택  

| 영역 | 사용 기술 |
|------|-----------|
| 백엔드 프레임워크 | NestJS |
| 프로그래밍 언어 | TypeScript |
| 서버 실행 환경 | Node.js |
| API 테스트 | Thunder Client / Postman |
| AI 활용 | ChatGPT, GitHub Copilot |

---

# 📂 주요 기능  

## ✔ 1) 피부 타입 + 고민 입력  
사용자 입력(JSON):

```json
{
  "skinType": "oily",
  "concerns": ["acne"]
}
✔ 2) 성분 추천
예시:

지성 + 여드름 → 살리실산(Salicylic Acid), 나이아신아마이드(Niacinamide)

✔ 3) 화장품 추천
추천된 성분이 포함된 제품 목록 반환

📡 API 명세
▶ POST /recommend
📥 Request(JSON)
json
코드 복사
{
  "skinType": "oily",
  "concerns": ["acne"]
}
📤 Response 예시
json
코드 복사
{
  "skinType": "oily",
  "concerns": ["acne"],
  "recommendedIngredients": [
    "살리실산",
    "나이아신아마이드"
  ],
  "recommendedProducts": [
    {
      "name": "더랩바이블랑두 살리실산 토너",
      "brand": "The Lab",
      "ingredients": ["살리실산"]
    }
  ]
}
🧠 추천 알고리즘 설명
간단한 조건 기반 필터링 방식입니다.

입력받은 skinType(피부 타입)이 성분의 지원 유형에 포함되는지 검사

입력받은 concerns(고민)과 성분이 해결하는 고민이 겹치는지 검사

두 조건을 모두 만족하는 성분만 추천

추천 성분이 포함된 제품만 필터링하여 반환

→ NestJS의 서비스 계층에서 수행되는 순수 로직이므로 구조가 깔끔하고 확장성이 좋습니다.

🧱 아키텍처 구조 (NestJS)
cpp
코드 복사
src
├── app.module.ts
├── recommend
│   ├── recommend.module.ts       → 모듈 선언
│   ├── recommend.controller.ts   → POST /recommend 처리
│   ├── recommend.service.ts      → 추천 로직 실행
│   └── recommend.dto.ts          → 입력 데이터 형식 정의
└── main.ts
Service: 비즈니스 로직 수행

Controller: 요청/응답 처리

Module: 기능 단위 구조화

🔐 에러 처리 방안
JSON Body 누락 시 → 400 Bad Request

예상치 못한 오류 → 500 Internal Server Error

타입 검증 → DTO에서 수행 가능

🤖 AI 활용 내역
이 프로젝트는 개발 과정 전반에 AI를 적극적으로 사용했습니다.

프로젝트 아이디어 도출 → ChatGPT

NestJS 구조 생성 & 오류 해결 → ChatGPT 디버깅

TypeScript 코드 자동 생성 → GitHub Copilot

추천 로직 설계 → ChatGPT와 협업

README 및 발표 정리 → ChatGPT 활용

→ AI 도구 다양성, 프롬프트 엔지니어링, 문제 해결 과정 전부 포함됨.

🧪 실행 방법
1️⃣ 의존성 설치
nginx
코드 복사
npm install
2️⃣ 서버 실행
arduino
코드 복사
npm run start:dev
3️⃣ API 테스트
Thunder Client 또는 Postman에서 요청:

bash
코드 복사
POST http://localhost:3000/recommend
Body → JSON 입력 후 요청

📌 향후 개선 예정 기능
화장품 제품군 데이터 확장

DB 연동(SQLite, PostgreSQL 등)

프론트엔드 입력 화면 추가

더 정교한 추천 알고리즘 적용 (AI 기반)

✨ 작성자
박예희 — 2025 고급 웹프로그래밍

yaml
코드 복사
