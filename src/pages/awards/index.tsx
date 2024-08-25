import { Block } from "@/components/Block";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import {
  Award,
  charlesChangAwardees,
  midwesternStarAwardees,
  boaAwardees,
} from "@/data/awards";
import { BaseLayout } from "@/layouts/BaseLayout";
import { sortByDate } from "@/utils";

export default function () {
  const renderAwardsTable = (awardName: string, awards: Award[]) => {
    if (awards.length === 0) return null;
    return (
      <Block>
        <h5 class="title5 mb2">Previous {awardName} awards</h5>
        <table>
          <thead>
            <tr>
              <td>Recipient</td>
              <td>School</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody>
            {awards
              .sort((a, b) => sortByDate(a.date, b.date))
              .map((a, i) => (
                <tr key={i}>
                  <td>{a.recipient}</td>
                  <td>{a.school}</td>
                  <td>{new Date(a.date).getUTCFullYear()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Block>
    );
  };

  return (
    <BaseLayout title="Awards">
      <Container>
        <TextBlock title="Awards">
          <p>
            MAASU gives out three types of awards at the annual Spring
            Conference: the Charles Chang Leadership Award, the Midwestern Star
            Leadership Award, and the MAASU Board of Advisors Award. Winners for
            all awards are announced annually at the MAASU Spring Conference.
          </p>
          <ul>
            <li class="my2">
              <h5 class="title5">Charles Chang Leadership Award</h5>
              <p>
                The Charles Chang Leadership Award was created in 1993 in honor
                of the MAASU’s founder Charles Chang. Each academic year, the
                award is presented to a student who demonstrates leadership and
                dedication to the APIDA community, along with a $250 scholarship
                and plaque.
              </p>
              <p>Applications are closed.</p>
              {renderAwardsTable(
                "Charles Chang Leadership",
                charlesChangAwardees,
              )}
            </li>
            <li class="my2">
              <h5 class="title5">Midwestern Star Award</h5>
              <p>
                Students nominated for the Midwestern Stars can be anyone who
                has made a great impact on their surrounding APIDA community
                through contributions of advisement, programming, leadership, or
                other means that have uplifted a community higher than what has
                been done previously.
              </p>
              <p>Applications are closed.</p>
              {renderAwardsTable("Midwestern Star", midwesternStarAwardees)}
            </li>
            <li class="my2">
              <h5 class="title5">Board of Advisors Award</h5>
              <p>
                The BOA Award is an award that recognizes Asian Pacific Islander
                American student organizations that have accomplished greatness
                on their campus and in the Midwest community. The BOA Award and
                $100 prize is presented annually at the MAASU Spring Conference
                banquet to one organization or school.
              </p>
              <p>Applications are closed.</p>
              {renderAwardsTable("Board of Advisors (BOA)", boaAwardees)}
            </li>
          </ul>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
