export type ResearchArea = {
  slug: string;
  title: string;
  titleKo: string;
  summary: string;
  summaryKo: string;
  topics: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "stability",
    title: "Power System Analysis & Modeling for Stability Assessment",
    titleKo: "계통 안정도 평가를 위한 전력계통 해석 및 모델링",
    summary:
      "We analyze bulk power systems with regard to efficiency and stability, and develop modeling and planning methods for the future Korean power grid.",
    summaryKo:
      "효율성과 안정성 관점에서 대규모 전력계통을 해석하고, 미래 전력계통을 위한 모델링 및 계획 기법을 연구합니다.",
    topics: [
      "Transmission system analysis & planning",
      "Frequency & voltage stability assessment",
      "Probabilistic power flow & hosting capacity",
      "Carbon-neutral power system feasibility",
    ],
  },
  {
    slug: "hvdc",
    title: "HVDC & FACTS Modeling",
    titleKo: "HVDC 및 FACTS 모델링",
    summary:
      "We develop control strategies and simulation models for VSC / MMC HVDC and FACTS devices, including fast frequency response and fault ride-through.",
    summaryKo:
      "VSC / MMC HVDC 및 FACTS 설비의 제어 전략과 시뮬레이션 모델을 개발하며, 고속 주파수 응답과 FRT 기법을 연구합니다.",
    topics: [
      "VSC / MMC HVDC control strategy",
      "Fast frequency response (FFR) of HVDC",
      "Embedded & multi-terminal DC (MTDC) operation",
      "PSS/E, PSCAD user-defined models",
    ],
  },
  {
    slug: "renewable",
    title: "Renewable Energy Integration",
    titleKo: "신재생에너지 계통 연계",
    summary:
      "We study large-scale integration of renewable energy into the bulk power system, from offshore wind farm interconnection to system-wide planning tools.",
    summaryKo:
      "해상풍력 연계부터 계통 차원의 계획 도구까지, 대규모 신재생에너지의 전력계통 통합을 연구합니다.",
    topics: [
      "Offshore wind farm interconnection via HVDC",
      "Wind farm modeling & control",
      "BESS coordinated control for frequency support",
      "Renewable integration automation tools",
    ],
  },
];
