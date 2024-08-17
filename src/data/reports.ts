export type AnnualReport = {
  id: string;
  startDate: string;
  endDate: string;
  url: string;
  title?: string;
};

export const annualReports: AnnualReport[] = [
  {
    id: "19-20",
    startDate: "08/01/2019",
    endDate: "05/01/2020",
    url: "https://firebasestorage.googleapis.com/v0/b/maasu-master.appspot.com/o/Reports%2F19-20.pdf?alt=media&token=418910ba-5c70-442c-be9e-b17c6e1e3707",
  },
];
