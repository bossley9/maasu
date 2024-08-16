import { A } from "../../components/Link";
import { Container } from "../../components/Container";
import { EA } from "../../components/EmailAnchor";
import { TextBlock } from "../../components/TextBlock";
import { BaseLayout } from "../../layouts/BaseLayout";

export default function () {
  return (
    <BaseLayout title="Directors Council">
      <Container>
        <TextBlock title="Directors Council">
          <p>
            The Directors Council is a group of volunteers who are within two
            years of completing a bachelor’s degree with knowledge of and
            interest in the APIDA community. Volunteers have experience working
            with or within a student organization, and oversee projects for
            MAASU. The three council positions include the Director of Alumni
            Relations, Director of Finance & Partnerships, and the Director of
            Programs & Assessment. Council members serve two-year terms.
          </p>
        </TextBlock>
        <TextBlock title="Directors Council Committee">
          <p>
            Separately, there is the Directors Council Committee, which is a
            group of volunteers (Graduate students / professionals) with
            specific knowledge, skills and expertise to help assist MAASU with
            special projects.
          </p>
          <p>
            Commitment is project based and a list of open and potential
            projects can be found <A href="https://bit.ly/3aZ9u87">here</A>.
          </p>
          <p>
            For more information please view our{" "}
            <A href="https://docs.google.com/forms/d/e/1FAIpQLSfUsKp2kqs64fW6reA13IuN1ppAbmssytsKeDhyhqMB1MmIgw/viewform">
              application form
            </A>
            .
          </p>
          <p>
            Thank you for your interest in being a volunteer for the MAASU
            Directors Council Committee! If you have any questions, comments, or
            concerns, please contact the Directors Council at{" "}
            <EA>directorscouncil@maasu.org</EA>.
          </p>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
