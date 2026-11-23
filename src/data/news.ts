export type NewsItem = {
  date: string; // YYYY.MM.DD
  title: string;
  body?: string;
};

// 최신 항목을 맨 위에 추가하세요.
export const news: NewsItem[] = [
  {
    date: "2026.11.04",
    title: "이정훈 교수, BIXPO 2026 CIGRE HVDC 기술세미나 발표",
    body: "광주 김대중컨벤션센터에서 열린 2026년도 CIGRE HVDC 기술세미나(주제: 미래 전력망의 핵심, HVDC)에서 '계통 유연성 강화를 위한 MTDC 필요성 및 핵심 과제'를 발표했습니다.",
  },
  {
    date: "2026.10.22",
    title: "2026 대한전기학회 전력기술부문회 추계학술대회 구두 발표",
    body: "쉐라톤 제주 호텔에서 열린 추계학술대회에서 '주파수 보조를 위한 풍력발전기와 E-STATCOM의 협조제어 기법에 관한 연구'(이정훈, 장정수, 윤민한)를 발표했습니다.",
  },
  {
    date: "2026.10.01",
    title: "장대원 학부연구생이 IPEL에 합류했습니다. 환영합니다!",
    body: "학부연구생 장대원 학생이 연구실에 합류했습니다. Welcome!",
  },
  {
    date: "2026.09.01",
    title: "양진호 학부연구생이 IPEL에 합류했습니다. 환영합니다!",
    body: "학부연구생 양진호 학생이 연구실에 합류했습니다. Welcome!",
  },
  {
    date: "2026.03.01",
    title: "IPEL opens at KOREATECH",
    body: "Innovative Power & Energy Lab. is established in the Dept. of Electrical, Electronics and Communication Engineering.",
  },
  {
    date: "2026.03.01",
    title: "Project kick-off: VSC HVDC control strategy development",
    body: "Sponsored by KOREATECH (Mar 2026 – Jan 2027).",
  },
  {
    date: "2026.03.01",
    title: "We are recruiting M.S. / Ph.D. students",
    body: "석사 및 박사과정 연구실원을 모집 중입니다. Post-Doc & Ph.D. applicants from abroad are also welcome.",
  },
];
