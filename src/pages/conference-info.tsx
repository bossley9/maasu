import { BaseLayout } from "../layouts/BaseLayout";
import { Container } from "../components/Container";
import { TextBlock } from "../components/TextBlock";

export default function () {
  return (
    <BaseLayout title="Our Conferences">
      <Container>
        <TextBlock title="Our Conferences">
          <p>
            Every fall, MAASU hosts a Leadership Summit, catered to 150-200
            students and every spring, MAASU hosts a Spring Conference,
            accommodating over 700 attendees.
          </p>
          <p>
            These conferences bring to light the history, challenges, and
            initiatives that the Asian Pacific Islander Desi American community
            faces. Each year, these conferences are hosted at different schools,
            allowing for students around the Midwest to travel, explore, and
            gain a further understanding of the resources that their peers have.
            In addition, each host school showcases the talent of its students
            and local community through performances, workshops, and keynotes.
            Each conference closes with a banquet, and the Spring Conference
            also recognizes particular members in the community for their
            outstanding work in service and leadership.
          </p>
          <p>
            <strong>
              For the 2023-2024 school year, our Leadership Summit will take
              place Nov. 10-12, 2023 at Wichita State University, and our Spring
              Conference will take place April 5-7, 2023 at the University of
              Michigan.
            </strong>
          </p>
        </TextBlock>
        <TextBlock title="Leadership Summit">
          <p>
            Because the Leadership Summit caters to a smaller group of students,
            the aim of this Summit is to really focus on leadership development.
            While the focus is on leadership, the Summit still offers a spectrum
            of different workshops to capture the wide range of interests of the
            MAASU student network. A unique aspect of Leadership Summit is
            connecting organization presidents with each other; typically,
            presidents are invited to a Presidents’ Council during one of the
            workshop sessions. All attendees are welcome to register for
            workshops ranging from professional networking to leadership style
            training.
          </p>
        </TextBlock>
        <TextBlock title="Spring Conference">
          <p>
            Attendance for Spring Conference ranges from 700 to over 1,000
            attendees and has a broader focus. It builds off the themes of
            leadership development from the Leadership Summit, and also includes
            workshops on understanding identity, engaging in advocacy and more.
            Spring Conference is MAASU’s largest event of the year and a
            fantastic opportunity for students to build networks with one
            another as they prepare for the coming year. Soon-to-be graduates
            are also offered professional outreach opportunities to prepare for
            life after graduation.
          </p>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
