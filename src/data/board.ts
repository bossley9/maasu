export type BoardMember = {
  id: string
  name: string
  pronouns: 'she/her' | 'she/him' | 'he/him' | 'she/they' | 'they/them'
  type: 'ED' | 'ECC' | 'DC' | 'BOA'
  title?: string
  email: string
  image: string
  desc?: string
  school?: string
  cityState?: string
}

export const board: BoardMember[] = [
  {
    id: 'jlee',
    name: 'Jessica Lee',
    pronouns: 'she/her',
    type: 'ED',
    title: 'Executive Director',
    email: 'execdirector@maasu.org',
    image: '/assets/photos/board/jlee.jpg',
    desc: 'The executive director serves as the liaison between the ECC, Directors Council, and the Board of Advisors. They build relationships and organizational partnerships with national and regional APIA organizations, and manage the MAASU financial budgets and accounts, including filing proper fiscal paperwork necessary for nonprofit status.',
  },
  {
    id: 'szhong',
    name: 'Sherrye Zhong',
    pronouns: 'she/her',
    school: 'Michigan State University',
    cityState: 'East Lansing, MI',
    type: 'ECC',
    title: 'Public Relations',
    email: 'pr@maasu.org',
    image: '/assets/photos/board/szhong.jpg',
  },
  {
    id: 'aandersen',
    name: 'Anna Andersen',
    pronouns: 'she/her',
    school: 'Illinois State University',
    cityState: 'Normal, IL',
    type: 'ECC',
    title: 'Public Relations',
    email: 'pr@maasu.org',
    desc: 'The role of the public relations chair produces press releases, press packets, and marketing packages for all MAASU-sponsored events and provide these materials to member schools. They create regular newsletters and multimedia content to be distributed on all forms of media. They design medium to highlight members in the member school community.',
    image: '/assets/photos/board/aandersen.jpg',
  },
  {
    id: 'alas',
    name: 'Andrew de las Alas',
    pronouns: 'he/him',
    school: 'Washington University',
    cityState: 'St. Louis, MO',
    type: 'ECC',
    title: 'Advocacy',
    email: 'advocacy@maasu.org',
    desc: 'The role of the advocacy chair is to keep abreast of issues and organize mobilization on advocacy and education. They regularly update members of current issues that may affect students across the regions, as well as search for opportunities to develop coalitions with other marginalized communities and organizations.',
    image: '/assets/photos/board/aalas.jpg',
  },
  {
    id: 'nly',
    name: 'Nicole Ly',
    pronouns: 'she/her',
    school: 'Ferris State University',
    cityState: 'Big Rapids, MI',
    type: 'ECC',
    title: 'Membership Outreach',
    email: 'memoutreach@maasu.org',
    desc: 'The membership outreach chair established relations with new schools, communicating MAASU’s mission and the benefits of becoming a member school. They research history of involvement of member and potential schools.',
    image: '/assets/photos/board/nly.jpg',
  },
  {
    id: 'sshr',
    name: 'Sam Shr',
    pronouns: 'they/them',
    type: 'ECC',
    title: 'Programming',
    email: 'programming@maasu.org',
    image: '/assets/photos/board/sshr.jpg',
  },
  {
    id: 'ssrinatha',
    name: 'Sushil Srinatha',
    pronouns: 'he/him',
    school: 'Michigan State University',
    cityState: 'East Lansing, MI',
    type: 'ECC',
    title: 'Technical Networking',
    email: 'technet@maasu.org',
    desc: 'The role of the technical networking chair is to update website content regularly and maintain archives of files. They aid host schools in hosting their conference website if necessary or aid in forwarding capabilities.',
    image: '/assets/photos/board/ssrinatha.png',
  },
  {
    id: 'kshr',
    name: 'Katherine Shr',
    pronouns: 'she/they',
    type: 'DC',
    title: 'Director of Community Action and Planning',
    email: 'community.action@maasu.org',
    image: '/assets/photos/board/kshr.jpg',
  },
  {
    id: 'kwang',
    name: 'Kevin Wang',
    pronouns: 'he/him',
    cityState: 'Austin, TX',
    type: 'DC',
    title: 'Director of Finance and Partnerships',
    email: 'finance.partnerships@maasu.org',
    desc: 'The director of finance and partnerships oversees all finances pertaining to conferences. They are in charge of helping students properly do their paperwork, review sponsorships, and assist with fundraising efforts. They develop annual financial plans and projections, and establish and manage external affairs and partnerships.',
    image: '/assets/photos/board/kwang.jpg',
  },
  {
    id: 'sbossley',
    name: 'Sam Bossley',
    pronouns: 'he/him',
    cityState: 'Columbus, OH',
    type: 'DC',
    title: 'Director of Technical Networking',
    email: 'tech.director@maasu.org',
    image: '/assets/photos/board/sbossley.jpg',
  },
  {
    id: 'bhill',
    name: 'Elizabeth M Hill',
    pronouns: 'she/him',
    type: 'DC',
    title: 'Director of Programming',
    email: 'programming.director@maasu.org',
    image: '/assets/photos/board/bhill.jpg',
  },
  {
    id: 'rmiao',
    name: 'Ranen Miao',
    pronouns: 'he/him',
    type: 'DC',
    title: 'Director of Alumni Relations',
    email: 'alumni.relations@maasu.org',
    desc: 'The director of alumni relations focuses on building and connecting with alumni and manages the MAASU Alumni Association. They oversee the MAASU Alumni Association and its mission to continue building and sustaining lifelong relationships between MAASU and it alumni. They additionally provide alumni opportunities to reconnect with MAASU through programming, conferences, and other avenues for engagement.',
    image: '/assets/photos/board/rmiao.jpg',
  },
  {
    id: 'jpeyton',
    name: 'Jordan Peyton',
    pronouns: 'she/they',
    school: 'University of Michigan',
    cityState: 'Ann Arbor, MI',
    type: 'BOA',
    email: 'assessment.evaluation@maasu.org',
    image: '/assets/photos/board/jpeyton.jpg',
  },
  {
    id: 'vyu',
    name: 'Victoria Yu',
    pronouns: 'she/her',
    type: 'BOA',
    email: 'boa@maasu.org',
    image: '/assets/photos/board/vyu.jpg',
  },
  {
    id: 'jsun',
    name: 'Jonathon Sun',
    pronouns: 'he/him',
    type: 'BOA',
    email: 'boa@maasu.org',
    image: '/assets/photos/board/jsun.jpg',
  },
]
