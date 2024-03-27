export type Application = {
  id: 1;
  existingType: string;
  appType: string;
  docToSubmit: string;
  appDateTime: string;
  approval: string;
  rejectionReason: string;
  approvalDateTime: string;
};

export const mockedData = [
  {
    id: 1,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인대기",
    rejectionReason: " ",
    approvalDateTime: " ",
  },
  {
    id: 2,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인거부",
    rejectionReason:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDateTime: "2023-01-10 09:00:00",
  },
  {
    id: 3,
    existingType: "소득적격",
    appType: "소득적격",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인완료",
    rejectionReason: " ",
    approvalDateTime: "2023-01-10 09:00:00",
  },
  {
    id: 4,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인대기",
    rejectionReason: " ",
    approvalDateTime: " ",
  },
  {
    id: 5,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인거부",
    rejectionReason:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDateTime: "2023-01-10 09:00:00",
  },
  {
    id: 6,
    existingType: "일반개인",
    appType: "소득적격",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인완료",
    rejectionReason: "",
    approvalDateTime: "2023-01-10 09:00:00",
  },
  {
    id: 7,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인대기",
    rejectionReason: " ",
    approvalDateTime: " ",
  },
  {
    id: 8,
    existingType: "소득적격",
    appType: "개인전문",
    docToSubmit: "보기",
    appDateTime: "2023-01-10 09:00:00",
    approval: "승인거부",
    rejectionReason:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDateTime: "2023-01-10 09:00:00",
  },
];
