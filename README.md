# IPEL Homepage

Innovative Power & Energy Laboratory (차세대 전력계통연구실), KOREATECH 홈페이지.
Next.js 15 + Tailwind CSS 4로 만든 정적 사이트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 내용 수정하기

코드를 건드리지 않고 `src/data/` 폴더의 파일만 고치면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `src/data/site.ts` | 연구실 이름, 이메일, 전화, 주소, 모집 문구, 상단 메뉴 |
| `src/data/professor.ts` | 교수 프로필, 학력, 경력, 관심 분야, 외부 링크(Scholar 등) |
| `src/data/members.ts` | 구성원 목록 (주석의 예시 형식대로 추가) |
| `src/data/research.ts` | 연구 분야 3개와 세부 주제 |
| `src/data/projects.ts` | 연구 과제 목록 |
| `src/data/publications.ts` | 논문 목록 (`doi`를 넣으면 제목에 링크가 생김) |
| `src/data/news.ts` | 홈 화면 News 목록 (최신 항목을 맨 위에) |

사진은 `public/images/` 에 넣습니다.

- 교수 사진: `public/images/professor.jpg`
- 구성원 사진: `public/images/members/이름.jpg` 로 넣고 `members.ts` 의 `photo` 에 경로 지정
- 갤러리 사진: `public/images/gallery/` 에 넣고 `src/app/people/gallery/page.tsx` 의 `photos` 목록에 추가

## 배포 (Vercel)

1. 이 폴더를 GitHub 저장소에 push 합니다.
2. https://vercel.com 에서 GitHub 저장소를 Import 하면 자동으로 빌드·배포됩니다. 현재 주소: https://ipel-koreatech.vercel.app
3. 이후에는 GitHub에 push 할 때마다 자동으로 다시 배포됩니다.
