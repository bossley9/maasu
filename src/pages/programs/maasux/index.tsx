import { EA } from "@/components/EmailAnchor";
import { TextBlock } from "@/components/TextBlock";
import { MONTHS } from "@/constants";
import { conferences } from "@/data/conferences";
import { Container } from "@/components/Container";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="MAASUx">
      <Container>
        <div>
          <TextBlock title="MAASUx">
            <p>
              MAASUx is a regional event, coordinated in collaboration with a
              campus host organization, designed to create additional
              opportunities to engage the midwest APIDA student community.
              MAASUx is a free event designed to attract college students from
              surrounding campuses to participate in educational workshops and
              fun activities. Through the more intimate setting of MAASUx
              programs, students can engage in creating high-quality connections
              with their peers and have the opportunity to reflect on their
              intersecting identities and experiences. These events are normally
              attended by 50-100 students.
            </p>
            <p>
              MAASUx was initially launched in 2010 as MAASU Mixers before
              changing its name in summer 2016. Each MAASUx event began having a
              programming theme in 2017.
            </p>
            <p>
              If your school is interested in hosting a MAASUx, please contact
              our MAASU Programming Chairs at <EA>programming@maasu.org</EA>.
            </p>
          </TextBlock>
          <TextBlock title="Previous MAASUx Hosts">
            <table class="w-100 mb4">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Theme</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {conferences
                  .filter((c) => c.type === "MX")
                  .map((c) => {
                    const d = new Date(c.date);
                    const ye = d.getFullYear();
                    const mo = MONTHS[d.getMonth()];

                    const date = c.isApproxDate
                      ? `${mo}, ${ye}`
                      : `${mo} ${d.getDate()}, ${ye}`;

                    return (
                      c.id && (
                        <tr>
                          <td>{date}</td>
                          <td>{c.title}</td>
                          <td>{`${c.host}, ${c.state}`}</td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </TextBlock>
        </div>
      </Container>
    </BaseLayout>
  );
}
