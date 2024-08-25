import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { A } from "@/components/Link";
import { board, BoardMember } from "@/data/board";
import { BaseLayout } from "@/layouts/BaseLayout";

function BoardMemberProfile({ member }: { member: BoardMember }) {
  return (
    <div class="w-50 w-25-ns hov-tdu">
      <a href={`mailto:${member.email}`} class="c-inh tdn">
        <div class="w-100 h-100 pa2 tc">
          <img src={member.image} alt={member.name} class="w-100 br" />
          <p class="ma0 fw700">
            {member.name} ({member.pronouns})
          </p>
          <span>{member.title}</span>
        </div>
      </a>
    </div>
  );
}

export default function () {
  return (
    <BaseLayout title="Executive Board">
      <Container>
        <TextBlock title="Executive Board">
          <span>
            MAASU's executive board is divided into four subsections for a
            collectively stronger focus on each of the subsections' duties and
            roles. These subsections are the executive director, the executive
            coordinating committee, the directors council, and the board of
            advisors. Each subsection plays an integral role in the management
            of MAASU functions.
          </span>
        </TextBlock>
        <section>
          <h5 class="title5 tc my2">Executive Coordinating Committee</h5>
          <div class="df fw-w jc-c">
            {board
              .filter((member) => member.type === "ECC")
              .map((m) => (
                <BoardMemberProfile member={m} />
              ))}
          </div>
          <p class="my4 tc">
            Executive Coordinating Committee applications are currently open!{" "}
            <A href="https://docs.google.com/forms/d/e/1FAIpQLSe03CO3UJuoHte4isx7JJRT9ZWnTt2CnqEce8FnFDlMm-H3Qw/viewform">
              Apply here.
            </A>
          </p>
        </section>
        <hr class="w-100 my4" />
        <section>
          <h5 class="title5 tc my2">Directors Council</h5>
          <div class="df fw-w jc-c">
            {board
              .filter((member) => member.type === "DC")
              .map((m) => (
                <BoardMemberProfile member={m} />
              ))}
          </div>
          <p class="my4 tc">
            Directors Council applications are currently closed.
          </p>
        </section>
        <hr class="w-100 my4" />
        <section>
          <h5 class="title5 tc my2">Executive Director</h5>
          <div class="df fw-w jc-c">
            {board
              .filter((member) => member.type === "ED")
              .map((member) => (
                <BoardMemberProfile member={member} />
              ))}
          </div>
          <p class="my4 tc">
            Executive Director applications are currently closed.
          </p>
        </section>
        <hr class="w-100 my4" />
        <section>
          <h5 class="title5 tc my4">Board Of Advisors</h5>
          <div class="df fw-w jc-c">
            {board
              .filter((member) => member.type === "BOA")
              .map((member) => (
                <BoardMemberProfile member={member} />
              ))}
          </div>
          <p class="my4 tc">
            Board of Advisors applications are currently closed.
          </p>
        </section>
      </Container>
    </BaseLayout>
  );
}
