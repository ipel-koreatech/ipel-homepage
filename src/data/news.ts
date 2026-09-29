export type NewsItem = {
  date: string; // YYYY.MM.DD
  title: string;
  body?: string;
};

// 최신 항목을 맨 위에 추가하세요.
export const news: NewsItem[] = [
  {
    date: "2026.10.01",
    title: "Daewon Jang (장대원) joins IPEL as an undergraduate researcher",
    body: "학부연구생 장대원 학생이 연구실에 합류했습니다. Welcome!",
  },
  {
    date: "2026.09.01",
    title: "Jinho Yang (양진호) joins IPEL as an undergraduate researcher",
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
