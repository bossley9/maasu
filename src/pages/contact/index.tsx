import { Container } from "../../components/Container";
import { TextBlock } from "../../components/TextBlock";
import { BaseLayout } from "../../layouts/BaseLayout";

export default function () {
  const submissionMsg = "";
  // const [submissionMsg, setSubmissionMsg] = useState('')

  // const handleFormSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //
  //   const { name, email, message } = e.target as any
  //
  //   const response = {
  //     'entry.761143299': name.value,
  //     'entry.390586168': 'board@maasu.org',
  //     'entry.1997635310': email.value,
  //     'entry.596068453': message.value,
  //   }
  //
  //   const formData = querystring.stringify(response)
  //
  //   const url = `https://docs.google.com/forms/d/e/1FAIpQLSc17EG7ml0EG9Kb6JYED6lIaZhaDKZmK3NxPmOjp1vErzo0Ag/formResponse?${formData}`
  //
  //   const options = {
  //     method: 'POST',
  //     mode: 'no-cors',
  //   }
  //
  //   try {
  //     await fetch(url, options as RequestInit)
  //     setSubmissionMsg('Your message was sent.')
  //   } catch (e) {
  //     setSubmissionMsg(`Unable to send message: ${e.message}`)
  //   }
  // }

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
          {/* <form class="mxa w-100" onSubmit={handleFormSubmit}> */}
          <form class="mxa w-100">
            <input
              class={inputClassNames}
              type="text"
              required
              name="name"
              placeholder="First and last name"
            />
            <input
              class={inputClassNames}
              type="email"
              required
              name="email"
              placeholder="Email"
            />
            <textarea
              class={inputClassNames}
              required
              name="message"
              placeholder="Message"
              style="min-height:300px"
            />
            {submissionMsg ? (
              <div class={inputClassNames}>{submissionMsg}</div>
            ) : (
              <button
                class={`${inputClassNames} fw700 tr-2 c-bg-main bg-text-main hov-c-text-main hov-bg-bg-main`}
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </TextBlock>
      </Container>
    </BaseLayout>
  );
}
