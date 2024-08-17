export type Award = {
  // make required and date to year
  recipient: string;
  school?: string;
  date: string;
};

export const charlesChangAwardees: Award[] = [
  { recipient: "Tony Feng", school: "Purdue University", date: "2021" },
  { recipient: "Jordan Cao", school: "Wichita State University", date: "2020" },
  {
    recipient: "Michael Daehyun Jobson",
    school: "University of Missouri",
    date: "2019",
  },
  { recipient: "Kelilah Liu", school: "University of Missouri", date: "2017" },
  {
    recipient: "Maikoau Vang",
    school: "University of Wisconsin - Madison",
    date: "2016",
  },
  { recipient: "Sharon Chung", school: "Purdue University", date: "2015" },
  {
    recipient: "Stephanie Wang",
    school: "Northwestern University",
    date: "2014",
  },
  {
    recipient: "Christina Adams",
    school: "Missouri State University",
    date: "2013",
  },
  {
    recipient: "Kim Navoa",
    school: "University of Illinois - Chicago",
    date: "2012",
  },
  {
    recipient: "Alison Kung",
    school: "University of Illinois - Chicago",
    date: "2011",
  },
];

export const midwesternStarAwardees: Award[] = [];

export const boaAwardees: Award[] = [
  {
    recipient: "Pilipino Student Association",
    school: "The Ohio State University",
    date: "2022",
  },
  {
    recipient: "Asian American Student Union",
    school: "University of Iowa",
    date: "2020",
  },
  {
    recipient: "Chinese Student Coalition",
    school: "Michigan State University",
    date: "2019",
  },
  {
    recipient: "Asian American Association",
    school: "University of Minnesota - Duluth",
    date: "2017",
  },
  {
    recipient: "Asian American Association",
    school: "Saint Louis University",
    date: "2016",
  },
  {
    recipient: "Asian American Association",
    school: "University of Missouri",
    date: "2015",
  },
  {
    recipient: "Asian Pacific American Coalition",
    school: "Northwestern University",
    date: "2014",
  },
  {
    recipient: "Project Voice",
    school: "Loyola University Chicago",
    date: "2013",
  },
  {
    recipient: "Asian American Student Association",
    school: "Oklahoma State University",
    date: "2012",
  },
  {
    recipient: "Asian American Association",
    school: "University of Missouri",
    date: "2011",
  },
  {
    recipient: "Asian American Student Union",
    school: "University of Minnesota - Twin Cities",
    date: "2010",
  },
  {
    recipient: "Asian American Association",
    school: "University of Missouri",
    date: "2008",
  },
];
