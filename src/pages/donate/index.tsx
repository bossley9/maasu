import { EA } from "../../components/EmailAnchor";
import { A } from "../../components/Link";
import { Container } from "../../components/Container";
import { TextBlock } from "../../components/TextBlock";
import { BaseLayout } from "../../layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="donate">
      <Container>
        <TextBlock title="Donate">
          <p>
            MAASU is a 501(c)(3) nonprofit student run organization. We rely on
            community support to continue to aide, educate and connect students
            across midwest campuses in leadership development and Asian Pacific
            Islander American advocacy. It is with your financial support that
            we are able to provide students with resources and events that
            connect our shared identity.
          </p>
          <p>
            MAASU believes in empowering students and cultivating strong leaders
            within our local communities. Your donation would ensure the
            continuation of these programs, such as the Leadership Summit and
            Spring/Fall Conferences, and other programs. Please join us in
            supporting young Asian Pacific Islander American student leaders by
            making a tax deductible deduction today. Engagement of the younger
            generation is more important than ever, and we hope you join us in
            cultivating the next generation of leaders.
          </p>
          <p>
            If you have any questions, please reach out to the{" "}
            <EA>directorscouncil@maasu.org</EA>.
          </p>
          <p class="fs1 fw700">
            donate{" "}
            <A href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2GPHWP7AYXHCQ&source=url">
              here
            </A>
            .
          </p>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}

export function DonateCompleteContainer() {
  return (
    <BaseLayout title="Thank You">
      <Container>
        <div class="mxa my9 tc">
          <h3 class="title3 mt6">Thank you for donating.</h3>
          <h4 class="title4">Your donation means the world to us.</h4>
        </div>
      </Container>
    </BaseLayout>
  );
}
