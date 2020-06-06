import React from 'react'
import { Cell, Grid, Page, Type } from '../../components'
import querystring from 'querystring'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import modules from './Contact.module.scss'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      submission: null,
      submissionMessage: '',
    }
  }

  componentDidMount() {
    document.title = 'Contact - The Midwest Asian American Students Union'
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = e.target

    const response = {
      'entry.1059489069': 'ecc@maasu.org',
      'entry.366340186': name.value,
      'entry.1066764004': email.value,
      'entry.1137712670': message.value
    }

    const formData = querystring.stringify(response)

    const url = `https://docs.google.com/forms/d/e/1FAIpQLScR8VrdLO9dHOs_PIabASBPkSIjinUQklxh_rncEDygrikeNQ/formResponse?${formData}`

    const options = {
      method: 'POST',
      mode: 'no-cors',
    }

    try {
      await fetch(url, options)
      this.setState({
        submission: 'success',
        submissionMessage: 'Your message was sent.'
      })
    } catch (e) {
      this.setState({
        submission: 'error',
        submissionMessage: 'Unable to send message: ' + e,
      })
    }
  }

  render() {
    return (
      <Page className={`${modules.contact}`}>
        <Type variant='h2'>Contact Us</Type>

        <div className={`${modules.content}`}>
          <div className={`${modules.linkContainer}`}>
            <Grid className={`${modules.linkGrid} disp-in-flex`}>
              <Cell auto>
                <a href='https://facebook.com/maasuofficial'><FaFacebookF /></a>
              </Cell>
              <Cell auto>
                <a href='https://twitter.com/MAASUOfficial'><FaTwitter /></a>
              </Cell>
              <Cell auto>
                <a href='https://www.instagram.com/MAASUOfficial/'><FaInstagram /></a>
              </Cell>
            </Grid>
          </div>

          <p>Any questions? Send us a message and we'll get back to you as soon as possible!</p>

          <form className={`${modules.contactForm}`} onSubmit={this.handleSubmit}>
            <input type='text' required name='name' placeholder='First and last name' />
            <input type='email' required name='email' placeholder='Email' />
            <textarea required name='message' placeholder='Message'></textarea>
            <div className={`${modules.contactResponse} ${this.state.submission ? modules[`contact-${this.state.submission}`] : ''}`}>
              <span>{this.state.submissionMessage}</span>
            </div>
            <button type='submit'>Submit</button>
          </form>

          <footer>
            <span style={{ display: 'none' }}>Special thanks to Craig Bossley for logo design.</span>
            <br />
            <span>&copy;MAASU 2020. For additional information or questions regarding the website please contact <a className='mail' href='MAILTO:technet@maasu.org'>technet@maasu.org</a>.</span>
            <br />
            <img className={`${modules.logo}`} src={`${process.env.PUBLIC_URL}/assets/branding/light/logo-text.svg`} alt='The Midwest Asian American Students Union' />
          </footer>
        </div>
      </Page>
    )
  }
}

export default Contact
