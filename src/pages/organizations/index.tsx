import { A } from "@/components/Link";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { organizations } from "@/data/resources";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Organizations">
      <Container className="tc">
        <TextBlock title="APIDA Organization Resources">
          <p>
            Here is a list of resources to get involved in other organizations
            and communities near you.
          </p>
          <div>
            <ul class="my0 mxa dib tl">
              {organizations
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((r) => (
                  <li>
                    <A href={r.url}>
                      <span>{r.title}</span>
                      {r.titleAbv && <span> ({r.titleAbv})</span>}
                    </A>
                  </li>
                ))}
            </ul>
          </div>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
