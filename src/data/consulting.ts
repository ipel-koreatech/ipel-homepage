export type Consulting = {
  title: string; // 자문 내용
  titleKo?: string; // 한글 자문명 (있으면 영문 제목 아래에 표시)
  client: string; // 의뢰 기관
  clientKo?: string; // 의뢰 기관 한글명·부서. 예: "한국전력공사 계통기획처"
  period: string; // 예: "Oct 2026" 또는 "Sep 2026 – Dec 2026"
  role?: string; // 예: "Technical Advisor" (없으면 생략)
};

// 자문 실적. 최신 항목을 맨 위에 추가하세요. 항목이 하나라도 있으면
// Projects 페이지에 "Consulting & Advisory" 란이 자동으로 나타납니다.
// {
//   title: "Technical advisory on HVDC system studies",
//   client: "KEPCO",
//   period: "Oct 2026 – Dec 2026",
//   role: "Technical Advisor",
// },
export const consulting: Consulting[] = [
  {
    title:
      "Advisory on establishing evaluation criteria for power system oscillations and optimal distributed placement of stabilizing equipment",
    titleKo: "계통진동 평가기준 수립 및 안정화설비 최적 분산배치 자문",
    client: "KEPCO",
    clientKo: "한국전력공사 계통기획처",
    period: "Oct 2026 – Jan 2027",
  },
  {
    title: "Advisory on validation of the PSS/E dynamic model for the East Coast EP1 HVDC",
    titleKo: "동해안 EP1 HVDC PSS/E 동적모델 적합성 검증 자문",
    client: "KEPCO",
    clientKo: "한국전력공사 계통기획처",
    period: "Oct 12 – Dec 18, 2026",
  },
];
