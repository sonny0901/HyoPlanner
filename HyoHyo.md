# HyoPlanner - 일정 관리 PWA 애플리케이션

## 프로젝트 개요
HyoPlanner는 웹 기반의 일정 관리 애플리케이션으로, PWA(Progressive Web App)로 배포됩니다. 사용자는 캘린더를 통해 일정을 관리하고, 로그인 후 일정 등록 기능을 사용할 수 있습니다.

## 주요 기능
- 캘린더 UI 기반의 일정 관리
- 날짜 클릭 시 일정 등록 레이어 표시
- 사용자 인증 시스템 (로그인 필요)
- PWA 지원 (오프라인 사용 가능)

## 기술 스택
- Frontend: Next.js
- Backend: Node.js
- Database: MongoDB
- Deployment: Vercel

## 기능 상세
1. 메인 페이지
   - 캘린더 UI가 기본으로 표시
   - 로그인하지 않은 사용자는 일정 등록 불가

2. 일정 관리
   - 날짜 클릭 시 일정 등록 레이어 표시
   - 로그인한 사용자만 일정 등록 가능
   - 일정 수정 및 삭제 기능

3. 사용자 인증
   - 로그인/회원가입 기능
   - 인증된 사용자만 일정 관리 기능 사용 가능

## 데이터베이스 스키마
- Users
  - id
  - email
  - password (hashed)
  - name
  - created_at

- Events
  - id
  - user_id
  - title
  - description
  - start_date
  - end_date
  - created_at
  - updated_at

## 배포 환경
- Vercel을 통한 프론트엔드 배포
- MongoDB Atlas를 통한 데이터베이스 호스팅

## 개발 환경 설정
1. Node.js 설치
2. MongoDB 설치 및 설정
3. 프로젝트 의존성 설치
4. 환경 변수 설정
5. 개발 서버 실행

## 향후 개선 사항
- 일정 공유 기능
- 일정 카테고리 분류
- 알림 기능
- 다크 모드 지원 
