import { BaseLayout } from "../../../layouts/BaseLayout";
import { A } from "../../../components/Link";
import { EA } from "../../../components/EmailAnchor";
import { TextBlock } from "../../../components/TextBlock";
import { SOCIAL } from "../../../constants";
import { Container } from "../../../components/Container";

export default function () {
  return (
    <BaseLayout title="Where Are You From">
      <Container>
        <TextBlock title="The Where Are You From Project">
          <p>#whereareyoufrom?</p>
          <p>
            MAASU strives to tell the story of Asian Pacific Islander Desi
            Americans in the Midwest through the #whereareyoufrom project. The
            project’s main goal is to combat the question "Where are you from?"
            that many APIDAs are are constantly asked.
          </p>
          <p>
            This question identifies APIDAs as foreigners in their own home,
            making them perpetual foreigners when they are not. The
            #whereareyoufrom project collects the stories of individuals across
            the Midwest through videos, audio and written stories. The stories
            we have collected range from working professionals to students,
            family, and friends who grew up in the Midwest.
          </p>
          <p>
            If you are interested in reading stories, you can check out our{" "}
            <A href={SOCIAL.filter((s) => s.name === "facebook")[0].url}>
              Facebook page
            </A>{" "}
            or view our monthly newsletters and read the stories there.
          </p>
          <p>
            For more information on this project, contact{" "}
            <EA>advocacy@maasu.org</EA>.
          </p>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
