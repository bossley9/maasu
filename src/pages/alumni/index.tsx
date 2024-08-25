import { A } from "@/components/Link";
import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Alumni">
      <Container>
        <TextBlock title="The MAASU Alumni Association">
          <p>
            The MAASU Alumni Association (MAA) is a group for all MAASU alumni.
            MAA’s purpose is to continue building and sustaining lifelong
            relationships between MAASU and its alumni through the following
            ways:
          </p>
          <ul>
            <li>
              Providing social and career networking for alumni through a MAASU
              Alumni Directory
            </li>
            <li>Engaging students as future alumni</li>
            <li>Providing alumni opportunities to reconnect with MAASU</li>
            <li>Recognize alumni for various accomplishments and service</li>
            <li>
              Providing student travel stipends to attend MAASU Conferences
            </li>
          </ul>
        </TextBlock>
        <TextBlock title="MAA Membership">
          <p>
            To become a MAA member, there is a one-time membership fee of $30
            USD. MAA members will then be mailed a complementary MAASU Alumni
            Association wine glass. If you are interested in becoming a member
            of the MAASU Alumni Association, please follow these steps:
          </p>
          <ol>
            <li>
              <A href="https://docs.google.com/forms/d/e/1FAIpQLScepfU3sMqFNlCWTBBnV9ig2vTk6Z_E9Ar9MxmK8DnHKU30Gw/viewform?c=0&w=1">
                Fill out the MAASU Alumni Directory Form
              </A>
            </li>
            <li>
              <A href="https://www.paypal.com/cgi-bin/webscr&cmd=_s-xclick&hosted_button_id=NXTRNY49H77YQ">
                Provide a one-time membership payment of $30 USD
              </A>
            </li>
          </ol>
          <p>
            After completing these steps, access to the Alumni Directory will be
            granted and a MAA wine glass will be mailed to you.
          </p>
        </TextBlock>
        <TextBlock title="Donation" className="tc">
          <p>
            If you would like to support the MAASU Alumni Association, consider
            donating{" "}
            <A href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LFY3B4ZT98TVN&source=url">
              here
            </A>
            .
          </p>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
