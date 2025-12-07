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

# ✔ 2) 성분 추천  
예시:  
지성 + 여드름 → 살리실산(Salicylic Acid), 나이아신아마이드(Niacinamide)

# ✔ 3) 화장품 추천  
추천된 성분이 포함된 제품 목록 반환

# 📡 API 명세  
▶ POST /recommend  

## 📥 Request(JSON)
```json
{
  "skinType": "oily",
  "concerns": ["acne"]
}
```

## 📤 Response 예시
```json
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
```

# 🧠 추천 알고리즘 설명
- 입력받은 skinType이 성분의 지원 유형에 포함되는지 검사  
- 입력받은 concerns와 성분이 해결하는 고민이 겹치는지 검사  
- 두 조건을 만족하는 성분을 추천  
- 추천 성분이 포함된 제품만 필터링하여 반환  

# 🧱 아키텍처 구조 (NestJS)
```
src
├── app.module.ts
├── recommend
│   ├── recommend.module.ts       → 모듈 선언
│   ├── recommend.controller.ts   → POST /recommend 처리
│   ├── recommend.service.ts      → 추천 로직 실행
│   └── recommend.dto.ts          → 입력 데이터 형식 정의
└── main.ts
```

# 🔐 에러 처리 방안
- JSON Body 누락 → 400 Bad Request  
- 예상치 못한 서버 오류 → 500 Internal Server Error  
- DTO로 타입 검증 가능  

# 🤖 AI 활용 내역
- 아이디어 도출 → ChatGPT  
- NestJS 코드 작성 → GitHub Copilot  
- 오류 해결 → ChatGPT  
- README 정리 → ChatGPT  

# 🧪 실행 방법
```
npm install
npm run start:dev
POST http://localhost:3000/recommend
```

# 📌 향후 개선 예정 기능
- 화장품 DB 확장  
- 프론트엔드 개발  
- AI 기반 추천 알고리즘 강화  

# ✨ 작성자  
박예희 / 2025 고급 웹프로그래밍
