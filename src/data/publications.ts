export type Publication = {
  authors: string[];
  title: string;
  venue: string;
  year: number;
  type: "journal" | "conference";
  doi?: string; // 예: 10.1109/ACCESS.2024.xxxxxxx
  // 심사 중인 논문에만 적습니다. 게재가 확정되면 이 두 줄을 지우면 일반 목록으로 옮겨집니다.
  status?: "under review";
  submitted?: string; // 투고 시기. 예: "Aug 2026"
};

/**
 * 저자 이름 앞에 * 를 붙이면 굵게 표시됩니다 (연구실 소속 표시).
 * 예: "*J Lee" → J Lee (굵게). 같은 이니셜의 다른 저자는 * 없이 "J Lee" 로 둡니다.
 */
export const LAB_AUTHOR_MARK = "*";

export const publications: Publication[] = [
  {
    authors: ["*J Lee", "J Jang", "M Yoon"],
    title:
      "Energy-Efficient Triangular Frequency Support of Coordinated Wind Turbines and E-STATCOMs: A Closed-Form Approach",
    venue: "IEEE Transactions on Power Systems",
    year: 2026,
    type: "journal",
    status: "under review",
    submitted: "Aug 2026",
  },
  {
    authors: ["*J Lee", "M Yoon", "G Jang"],
    title: "Analytical Approach for Novel Temporary Frequency Support Control of VSC HVDC",
    venue: "IEEE Access",
    year: 2024,
    type: "journal",
  },
  {
    authors: ["*J Lee", "Y Jung", "J Lee", "J Shin", "S Cha", "S Song", "S Min", "J Moon", "K Hur", "J Choi", "G Jang"],
    title: "AI Applications in South Korean Power System Operation and Renewable Integration",
    venue: "IEEE Power & Energy Society Magazine",
    year: 2024,
    type: "journal",
  },
  {
    authors: ["*J Lee", "D Lee", "M Yoon", "G Jang"],
    title: "Probabilistic Power Flow Based Renewable Energy Line Flow Sensitivity Analysis",
    venue: "Journal of Electrical Engineering & Technology",
    year: 2023,
    type: "journal",
  },
  {
    authors: ["*J Lee", "D Lee", "J Lee", "M Yoon", "G Jang"],
    title: "Offshore MTDC Transmission Expansion for Renewable Energy Scale-Up in Korean Power System: DC Highway",
    venue: "Journal of Electrical Engineering & Technology",
    year: 2023,
    type: "journal",
  },
  {
    authors: ["D Lee", "H Kim", "*J Lee", "C Han", "G Jang"],
    title: "Autonomous frequency smoothing control of offshore wind-linked HVDC for low-inertia system",
    venue: "Electric Power Systems Research",
    year: 2023,
    type: "journal",
  },
  {
    authors: ["D Lee", "S Kang", "*J Lee", "G Jang"],
    title: "Impact of frequency control from wind turbine generator linked to HVDC system on sub-synchronous oscillation",
    venue: "Energy Reports",
    year: 2023,
    type: "journal",
  },
  {
    authors: ["D Lee", "*J Lee", "G Jang"],
    title: "Stochastic Approach to Hosting Limit of Transmission System and Improving Method Utilizing HVDC",
    venue: "Applied Sciences",
    year: 2022,
    type: "journal",
  },
  {
    authors: ["*J Lee", "S Jeong", "H Kim", "Y Yoo", "S Jung", "M Yoon", "G Jang"],
    title: "Analytical Approach for Fast Frequency Response Control of VSC HVDC",
    venue: "IEEE Access",
    year: 2021,
    type: "journal",
  },
  {
    authors: ["H Kim", "*J Lee", "J Lee", "G Jang"],
    title: "Novel Coordinated Control Strategy of BESS and PMSG-WTG for Fast Frequency Response",
    venue: "Applied Sciences",
    year: 2021,
    type: "journal",
  },
  {
    authors: ["Z Zhang", "*J Lee", "G Jang"],
    title: "Improved Control Strategy of MMC-HVDC to Improve Frequency Support of AC System",
    venue: "Applied Sciences",
    year: 2020,
    type: "journal",
  },
  {
    authors: ["S Jung", "*J Lee", "M Yoon", "G Jang"],
    title: "Energy Storage System Event-Driven Frequency Control Using Neural Networks to Comply with Frequency Grid Code",
    venue: "Energies",
    year: 2020,
    type: "journal",
  },
  {
    authors: ["*J Lee", "Y Yoo", "M Yoon", "G Jang"],
    title: "Advanced Fault Ride-Through Strategy by an MMC HVDC Transmission for Off-Shore Wind Farm Interconnection",
    venue: "Applied Sciences",
    year: 2019,
    type: "journal",
  },
  {
    authors: ["S Song", "J Kim", "*J Lee", "G Jang"],
    title: "AC Transmission Emulation Control Strategies for the BTB HVDC System in Metropolitan Area of Seoul",
    venue: "Energies",
    year: 2017,
    type: "journal",
  },
];
