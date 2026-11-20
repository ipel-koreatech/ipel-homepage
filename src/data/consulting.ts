export type Consulting = {
  title: string; // 자문 내용
  client: string; // 의뢰 기관
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
export const consulting: Consulting[] = [];
