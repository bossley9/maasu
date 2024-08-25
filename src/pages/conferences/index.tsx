import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { MONTHS } from "@/constants";
import { conferences } from "@/data/conferences";
import { getConferenceTypeName } from "@/utils";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Conferences">
      <Container>
        <TextBlock title="Past Conferences">
          <p class="tc">
            Below is a summary of all conferences that MAASU has aided in
            hosting or organizing.
          </p>
          <div>
            <table class="mxa mb4">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Theme</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {conferences.map((c) => {
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
                        <td>{getConferenceTypeName(c.type)}</td>
                        <td>{c.title}</td>
                        <td>{`${c.host}, ${c.state}`}</td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
