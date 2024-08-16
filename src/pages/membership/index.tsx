import { EA } from "../../components/EmailAnchor";
import { A } from "../../components/Link";
import { Container } from "../../components/Container";
import { TextBlock } from "../../components/TextBlock";
import { memberList } from "../../data/members";
import { BaseLayout } from "../../layouts/BaseLayout";

export default function () {
  const members = memberList.sort((a, b) =>
    a.institution.localeCompare(b.institution),
  );

  return (
    <BaseLayout title="Membership">
      <Container>
        <TextBlock title="Membership">
          <p>
            The Midwest Asian Pacific Islander Desi American Students Union
            provides resources and support to the Asian Pacific Islander Desi
            American community and youth. The opportunities for networking,
            leadership, and personal development through our involvement is
            invaluable.
          </p>
          <p>Benefits include:</p>
          <ul>
            <li>Conference registration rates will be discounted</li>
            <li>
              Gain support from MAASU’s experienced network of leaders in the
              APIDA community about activism and student organization growth
            </li>
            <li>
              Network with students and alumni from the member schools of MAASU,
              as well as various professionals and prominent figures from the
              APIDA community.
            </li>
          </ul>
          <p>
            For more information, contact <EA>ecc@maasu.org</EA>.
          </p>
        </TextBlock>
        <TextBlock title="Our Members">
          <ul class="mxa w-30 w-100-s">
            {members.map((member) => (
              <li>
                {member.orgUrl ? (
                  <A href={member.orgUrl}>{member.institution}</A>
                ) : (
                  <span>{member.institution}</span>
                )}
              </li>
            ))}
          </ul>
        </TextBlock>
        <TextBlock title="Representatives">
          <p>
            All members schools will select a MAASU Representative. MReps, for
            short, are the official liaison between member schools and the MAASU
            Executive Coordinating Committee (ECC). As stated in the MAASU
            constitution, each school may only have one MRep. The roles, duties,
            and responsibilities of the MRep consists of the following:
          </p>
          <ul>
            <li>
              Respond to emails and messages from MAASU Communications chairs or
              other members of the ECC when necessary
            </li>
            <li>
              Update their school’s APIDA organizations on MAASU information
              regarding campaigns, conferences, and fundraisers
            </li>
            <li>
              Has the power to submit one vote for conference bids, ECC
              elections, and constitutional changes
            </li>
            <li>Help elect the ECC for the upcoming year</li>
            <li>
              Has the power to accept or decline amendments made to the
              constitution
            </li>
          </ul>
          <p>
            Voting requires a two-thirds attendance in order to reach quorum.
            MReps will serve a full academic year in conjunction with the
            communications chairs. Should any MRep need to step down for any
            reasons, the institution must replace the MRep and connect them
            immediately with the communications chairs for updates.
          </p>
          <p>
            Any school or national organization falling within the Midwest
            region is eligible to join MAASU as set forth in the bylaws. All
            authority of MAASU shall ultimately rest in the member schools in
            conjuncture with the Executive Coordinating Committee.
          </p>
        </TextBlock>
        <TextBlock title="Eligibility">
          <p>MAASU recognizes the forms of membership as outlined:</p>
          <ul>
            <li>
              Campus Organizations: Hereinafter referred to as "member schools."
              Membership shall be open to any formally recognized Asian Pacific
              Islander American student organization at an institution of Higher
              Education. Has voting privileges.
            </li>
            <li>
              Affiliate Organization Membership: Hereinafter referred to as
              "affiliates." Membership shall also be open to any nationally
              recognized Asian Pacific Islander American organization. Must have
              college student representative in order to have voting privileges.
            </li>
          </ul>
        </TextBlock>
        <TextBlock title="Join">
          <form
            class="payment-members"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="paypal"
          >
            <input name="cmd" type="hidden" value="_s-xclick" />
            <input
              name="hosted_button_id"
              type="hidden"
              value="PAC57KL3CTH2A"
            />
            <p>MAASU offers three payment plans for membership:</p>
            <select name="os0">
              <option value="1 Year">1 Year $75.00 USD</option>
              <option value="2 Years">2 Years $140.00 USD</option>
              <option value="3 Years">3 Years $200.00 USD</option>
            </select>
            <input name="currency_code" type="hidden" value="USD" />
            <br />
            <br />
            <button class="ma0" type="submit">
              Checkout with Paypal
            </button>
          </form>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
