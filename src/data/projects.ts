export type Project = {
  title: string;
  titleKo?: string; // 한글 과제명 (있으면 영문 제목 아래에 표시)
  sponsor: string;
  partner?: string; // 공동 수행 기관. 예: "Kwangwoon University"
  period: string;
  affiliation: "KOREATECH" | "Korea University";
};

export const projects: Project[] = [
  {
    title:
      "Establishment of grid-forming functional requirements and performance levels, and development of an AC emulation operation strategy for the Saemangeum–Seohwaseong HVDC",
    titleKo:
      "새만금-서화성 HVDC 적용을 위한 Grid Forming 요구기능 및 성능수준 정립과 AC Emulation 운전전략 개발",
    sponsor: "Hyosung Heavy Industries",
    partner: "Kwangwoon University",
    period: "Oct 2026 – Mar 2027",
    affiliation: "KOREATECH",
  },
  {
    title: "VSC HVDC control strategy development for renewable energy integration",
    sponsor: "KOREATECH",
    period: "Mar 2026 – Jan 2027",
    affiliation: "KOREATECH",
  },
  {
    title: "Development of renewable energy integration automation tool for future power system",
    sponsor: "KEPCO Research Institute",
    period: "May 2023 – Nov 2023",
    affiliation: "Korea University",
  },
  {
    title: "2050 Carbon neutral power system feasibility analysis for future power system planning",
    sponsor: "KEPCO",
    period: "Mar 2022 – Nov 2023",
    affiliation: "Korea University",
  },
  {
    title: "HVDC system (power conversion / cable) analysis for cable",
    sponsor: "LS C&S",
    period: "Apr 2020 – Dec 2022",
    affiliation: "Korea University",
  },
  {
    title: "Next generation power system designing technology development for 4th industrial revolution",
    sponsor: "KEPCO",
    period: "Mar 2020 – Feb 2023",
    affiliation: "Korea University",
  },
  {
    title: "Embedded HVDC operation strategy development with replica controller",
    sponsor: "KEPCO Research Institute",
    period: "Apr 2020 – Nov 2021",
    affiliation: "Korea University",
  },
  {
    title: "Next-generation power system design for renewable energy integration in Korean power grid",
    sponsor: "KEPCO Research Institute",
    period: "Mar 2020 – Dec 2022",
    affiliation: "Korea University",
  },
  {
    title: "Development of PSS/E UDM to secure HVDC system analysis technology",
    sponsor: "Hyosung Heavy Industries",
    period: "May 2019 – Feb 2020",
    affiliation: "Korea University",
  },
  {
    title: "MMC voltage type HVDC performance test technology development service",
    sponsor: "KEPCO Research Institute",
    period: "Apr 2018 – Oct 2021",
    affiliation: "Korea University",
  },
  {
    title: "VSC HVDC modeling & analysis for Korean power system",
    sponsor: "KEPCO Research Institute",
    period: "Mar 2017 – May 2019",
    affiliation: "Korea University",
  },
];
