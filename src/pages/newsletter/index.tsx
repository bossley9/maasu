import { A } from "@/components/Link";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { MONTHS } from "@/constants";
import { newsletters } from "@/data/newsletters";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Newsletter">
      <Container className="tc">
        <TextBlock title="Newsletter">
          <p>
            The MAASU newsletter is a quick way to stay up to date on MAASU news
            and current issues within the community.
          </p>
          <div>
            <table class="mxa">
              <thead>
                <tr>
                  <th>volume</th>
                  <th>issue</th>
                  <th>newsletter</th>
                </tr>
              </thead>
              <tbody>
                {newsletters.map((n, i) => {
                  const d = new Date(n.date);
                  return (
                    <tr key={i}>
                      <td>{n.vol}</td>
                      <td>{n.issue}</td>
                      <td class="tr">
                        <A href={n.url}>
                          {n.title && <span>{n.title} -</span>}
                          <span>
                            {MONTHS[d.getMonth()]} {d.getFullYear()}
                          </span>
                        </A>
                      </td>
                    </tr>
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
