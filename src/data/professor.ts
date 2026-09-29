export const professor = {
  name: "Junghun Lee",
  nameKo: "이정훈",
  title: "Assistant Professor",
  department: "Dept. of Electrical, Electronics and Communication Engineering",
  university: "KOREATECH",
  email: "ejh1015@koreatech.ac.kr",
  tel: "+82-41-560-1613",
  photo: "/images/professor.jpg",
  // 링크가 준비되면 채워 넣으세요. 예: { label: "Google Scholar", href: "https://scholar.google.com/..." }
  links: [] as { label: string; href: string }[],
  interests: [
    "Power System Analysis & Control",
    "HVDC & FACTS Modelling",
    "Renewable Energy Integration to Bulk Power System",
  ],
  education: [
    {
      period: "2022",
      degree: "Ph.D., School of Electrical Engineering (Emphasis on Power Systems)",
      org: "Korea University, Seoul, Korea",
    },
    {
      period: "2017",
      degree: "M.S., School of Electrical Engineering (Emphasis on Power Electronics)",
      org: "Korea University, Seoul, Korea",
    },
    {
      period: "2015",
      degree: "B.S., School of Electrical Engineering",
      org: "Korea University, Seoul, Korea",
    },
  ],
  experience: [
    {
      period: "2026 – present",
      role: "Assistant Professor",
      org: "Dept. of Electrical, Electronics and Communication Engineering, KOREATECH, Cheonan, Korea",
    },
    {
      period: "2024 – 2026",
      role: "Senior Project Engineer, Power System Modelling Team (TSTM)",
      org: "PGGI, Hitachi Energy, Västerås, Sweden",
    },
    {
      period: "2023 – 2024",
      role: "Senior Researcher, Power System Planning Department",
      org: "Korea Electric Power Corporation (KEPCO), Naju, Korea",
    },
    {
      period: "2022 – 2023",
      role: "Research Professor, School of Electrical Engineering",
      org: "Korea University, Seoul, Korea",
    },
  ],
};
