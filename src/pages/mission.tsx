import { Container } from "../components/Container";
import { TextBlock } from "../components/TextBlock";
import { A } from "../components/Link";
import { BaseLayout } from "../layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Our Mission">
      <Container>
        <TextBlock title="Our Purpose">
          <p>
            The Midwest Asian Pacific Islander Desi American Students Union
            (MAASU) is a 501(c)(3) nonprofit organization that began in response
            to a need for political unity among Asian Pacific Islander American
            students in the Midwest. By 1990, there were more than 20
            universities in the Midwest that had formed Asian Pacific Islander
            American (APIA) organizations. Some had been around for years, while
            others were still in their infancy.
          </p>
          <p>
            Students felt a need for an organization that would support the
            growth of their groups and organize Midwestern Asian Pacific
            Islander American students for political activism. MAASU works to
            recognize the needs of the Asian Pacific Islander American community
            by assisting schools with the establishment of Asian Pacific
            Islander American student organizations, promoting leadership among
            students, addressing educational needs and rights of the Asian
            Pacific Islander American community, and developing a channel of
            communication among Asian Pacific Islander American student
            organizations across the Midwest.
          </p>
          <img
            class="w-100 mxa"
            src="/assets/photos/first-meeting.jpg"
            alt="The first MAASU meeting"
          />
          <div class="fsi w-100 w-90-ns mxa tc">
            The first MAASU meeting. Front row (from left to right): Tom Lo
            (Purdue), Charles Chang (Ohio State), Nancy Kim (Michigan State),
            name unknown (Miami University), Yeeleng Hang (Michigan State),
            Jessica Kimura (Michigan State). Second Row: name unknown (Miami
            Univ.), name unknown (Miami Univ.), John Kim (Miami Univ.), unknown,
            Wen Hsu (Michigan State), Emily (Oberlin College). Third Row: Allan
            Lo (Ohio State), Mary Kim (Ohio State), Nimesh M. Patel (Michigan
            State), Mr. Tong (Univ. of Michigan), Joanna Su (Univ of Michigan),
            Linus Huang (Oberlin College), name unknown (Univ. of Michigan).
            Photographer was Erika Seo (Ohio State).
          </div>
        </TextBlock>
        <TextBlock title="Our Mission">
          <p>
            MAASU strives to recognize the needs of the Asian Pacific Islander
            Desi American (APIDA) community by
          </p>
          <ul>
            <li>
              Promoting leadership among APIDA students through programs
              including, but not limited to, the Leadership Retreat, Spring
              Conference, and other various programming
            </li>
            <li>
              Assisting schools with the establishment of APIDA student
              organizations, an APIDA cultural center and an Asian Pacific
              Islander American Studies program
            </li>
            <li>
              Supporting and encouraging all APIDA students to work toward
              social change by providing a forum for social consciousness
            </li>
            <li>
              Developing and maintaining a channel of communication for APIDA
              student organizations in the Midwest through emails, newsletters
              and networking
            </li>
            <li>
              Uniting and strengthening the APIDA community stance against all
              forms of oppression
            </li>
          </ul>
        </TextBlock>
        <TextBlock title="Who We Serve">
          <p>
            Our primary outreach is to undergraduate college students located in
            the Midwest region. We are broadening our scope to include high
            school students and graduate students.
          </p>
          <p>
            On average, around 20 colleges and universities are engaged with
            MAASU annually spanning the following states: Colorado, Illinois,
            Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska,
            Tennessee, Oklahoma, Ohio, and Wisconsin.
          </p>
        </TextBlock>
        <TextBlock title="Strategic Plan">
          <p>
            <span>
              MAASU strives to recognize the needs of its community by
              developing a strategic plan for the next few years. See our
              strategic plan for 2020-2024
            </span>{" "}
            <A href="/assets/2020-2024-strategic-plan.pdf">here</A>.
          </p>
          <A href="/assets/2020-2024-strategic-plan.pdf">
            <img
              class="db w-80 mxa"
              src="/assets/photos/2020-strategic-plan.jpg"
              alt="A preview of the strategic plan."
            />
          </A>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
