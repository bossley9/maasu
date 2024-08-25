import { Container } from "@/components/Container";
import { TextBlock } from "@/components/TextBlock";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function () {
  const inputClassNames =
    "clearall w-100 fs0 my3 pa3 ff-hind bg-bg-main border bs-solid bc-text-main";

  return (
    <BaseLayout title="Contact">
      <Container className="tc">
        <TextBlock title="Contact MAASU">
          <p>
            Any questions? Send us a message and we'll get back to you as soon
            as possible!
          </p>
          <form id="contact" class="mxa w-100" method="post">
            <input
              type="text"
              required
              readonly
              name="entry.390586168"
              value="board@maasu.org"
              style="display:none!important"
            />
            <input
              class={inputClassNames}
              type="text"
              required
              name="entry.761143299"
              placeholder="First and last name"
            />
            <input
              class={inputClassNames}
              type="email"
              required
              name="entry.1997635310"
              placeholder="Email"
            />
            <textarea
              class={inputClassNames}
              required
              name="entry.596068453"
              placeholder="Message"
              style="min-height:300px"
            />
            <div id="submsg" class={inputClassNames} style="display:none"></div>
            <button
              id="contact-submit"
              class={`${inputClassNames} fw700 tr-2 c-bg-main bg-text-main hov-c-text-main hov-bg-bg-main`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </TextBlock>
      </Container>
      <script>
        {`
        function setMessage(message) {
          document.getElementById("contact-submit").remove()
          const msg = document.getElementById("submsg")
          msg.innerHTML = message
          msg.style.display = "block"
        }

        document.getElementById("contact").addEventListener("submit", function(e) {
          e.preventDefault()
          const params = new URLSearchParams(new FormData(e.target))
          const url = "https://docs.google.com/forms/d/e/1FAIpQLSc17EG7ml0EG9Kb6JYED6lIaZhaDKZmK3NxPmOjp1vErzo0Ag/formResponse?" + params.toString()

          fetch(url, { method: "POST", mode: "no-cors" })
            .then(function (res) {
              if (res.status >= 400) {
                throw new Error(res.statusText)
              }
              setMessage("Your message was sent.")
            })
            .catch(function(e) {
              setMessage("Unable to send message: " + e.message)
            })
        })
        `}
      </script>
    </BaseLayout>
  );
}
