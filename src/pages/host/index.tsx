import { A } from "@/components/Link";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { conferences } from "@/data/conferences";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  const exLSList = conferences
    .filter((c) => c.type === "LS" && c.bid.length > 0)
    .slice(0, 5);

  const exSCList = conferences
    .filter((c) => (c.type === "SC" || c.type === "FC") && c.bid.length > 0)
    .slice(0, 5);

  return (
    <BaseLayout title="Host a Conference">
      <Container>
        <TextBlock title="MAASU Conferences">
          <p>
            Every fall, MAASU hosts a Leadership Summit, catered to 150-200
            students, and every spring, MAASU hosts a Spring Conference,
            accommodating over 700 attendees. Each conference brings to light
            the history, challenges, and initiatives that the Asian Pacific
            Islander Desi American community faces. Each year, these conferences
            are hosted at different schools, allowing for the students around
            the Midwest to travel, explore, and gain a further understanding of
            the resources that their peers have. In addition, each host school
            showcases the talent of its students and local community through
            performances, workshops, and keynotes. Each conference closes with a
            banquet, and the Spring Conference also recognizes particular
            members in the community.
          </p>
        </TextBlock>
        <TextBlock title="Hosting a MAASU Conference">
          <p>
            Interested in bringing a MAASU conference to your school? Here are
            some guidelines on the bid process to host the next MAASU Leadership
            Summit or Spring Conference.
          </p>
          <ol>
            <li>
              <h5 class="title5">Bid Packet</h5>
              <p>
                All interested schools are required to create a bid packet. The
                purpose of this bid packet is to showcase why the school should
                host the conference and provide an overview of the planning
                logistics. Bid packets on average are around 20 pages long and
                need to include the sections outlined in the requirements:
              </p>
              <A href="https://firebasestorage.googleapis.com/v0/b/maasu-master.appspot.com/o/Pages%2FHost%2FbidRequirements.pdf?alt=media&token=58dd172b-a132-4e2c-9705-5767acf358df">
                MAASU Bid Packet Requirements
              </A>
            </li>
            <p>
              Below are some example bid packets from schools that have hosted
              conferences in previous years.
            </p>
            <div>
              <h3 class="title6">
                Example Bid Packets for a Leadership Summit
              </h3>
              <ul>
                {exLSList.map((c) => (
                  <li>
                    <A href={c.bid}>
                      {new Date(c.date).getFullYear()} - {c.title}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 class="title6">
                Example Bid Packets for a Spring or Fall Conference
              </h3>
              <ul>
                {exSCList.map((c) => (
                  <li>
                    <A href={c.bid}>
                      {new Date(c.date).getFullYear()} - {c.title}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
            <li>
              <h5 class="title5 mt3">Bid Presentation</h5>
              <p>
                Bid presentations for all Leadership Summits, Spring and Fall
                Conferences will occur during the next MAASU Spring Conference
                in front of the MAASU General Assembly. Up to two
                representatives can present on behalf of each school.
                Representatives need to prepare a 15 minute PowerPoint
                presentation and provide at least two physical copies of the bid
                packet. After all presentations, the MAASU General Assembly will
                vote and the winning schools will be announced later that
                evening during the Spring Conference banquet.
              </p>
              <p>
                In order to be considered, the application form must be filled
                out at least a week in advance before the Spring Conference when
                bid presentations will take place.
              </p>
              <span>
                To apply for the bidding process, please fill out the{" "}
                <A href="https://forms.gle/F6dKzQ8Vo1YgPLQU8">following form</A>
                .
              </span>
            </li>
          </ol>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
