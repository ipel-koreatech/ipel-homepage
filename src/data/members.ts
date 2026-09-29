export type Member = {
  name: string;
  nameKo?: string;
  role: "Post-Doc" | "Ph.D. Student" | "M.S. Student" | "Undergraduate" | "Alumni";
  email?: string;
  interests?: string[];
  photo?: string; // 예: /images/members/hong.jpg (public/images/members/ 에 저장)
  since?: string; // 예: 2026.03
};

// 구성원이 확정되면 아래 형식으로 추가하세요.
// {
//   name: "Gildong Hong",
//   nameKo: "홍길동",
//   role: "M.S. Student",
//   email: "gildong@koreatech.ac.kr",
//   interests: ["HVDC control", "Renewable integration"],
//   since: "2026.03",
// },
export const members: Member[] = [
  {
    name: "Jinho Yang",
    nameKo: "양진호",
    role: "Undergraduate",
    photo: "/images/members/jinho-yang.jpg",
    since: "2026.09.01",
  },
  {
    name: "Daewon Jang",
    nameKo: "장대원",
    role: "Undergraduate",
    since: "2026.10.01",
  },
];

export const alumni: Member[] = [];
