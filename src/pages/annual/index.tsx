import { A } from "@/components/Link";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { annualReports } from "@/data/reports";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Annual Report">
      <Container className="tc">
        <TextBlock title="Annual Report">
          <p>
            The annual report is a compilation of all of MAASU's achievements,
            distinctions, and news for the given year. Below are the previous
            reports.
          </p>
          <div>
            <ul class="lstn pl0">
              {annualReports.map((r) => {
                const sy = new Date(r.startDate).getFullYear();
                const ey = new Date(r.endDate).getFullYear();
                return (
                  <li>
                    <A href={r.url}>
                      {sy}-{ey}
                    </A>
                  </li>
                );
              })}
            </ul>
          </div>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
