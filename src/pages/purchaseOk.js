import React from "react"
import { Link } from "gatsby"
import * as queryString from 'query-string'

import successSVG from '../images/success.svg'
import errorSVG from '../images/error.svg'
import SEO from "../components/seo"

const PurchaseOk = (props) => {
  let [success, setSuccess] = React.useState(null)
  let [error, setError] = React.useState(null)

  React.useEffect(() => {
    const { session_id: sessionId } = queryString.parse(props.location.search)

    fetch('/.netlify/functions/verify_purchase', {
      method: 'POST',
      body: JSON.stringify({
        sessionId
      })
    })
    .then((res) => {
      if(res.status !== 200) {
        setError('Oops, the servers cannot verify your purchase, please contact ospfranco@protonmail.com')
      } else {

        setSuccess(true)
      }
    })
    .catch(() => setError('Oops, the servers cannot verify your purchase, please contact ospfranco@protonmail.com'))
  },[props.location]);

  if(error) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <SEO title="Purchase error" />
        <img src={errorSVG} className="h-64"/>
        <div className="p-4 md:w-1/2 flex flex-col items-center">
          <div className="font-bold text-center my-4">
            Oh cr*p, it seems the servers cannot verify your purchase, please contact <a href="mailto:ospfranco@protonmail.com" className="font-bold text-blue-500">ospfranco@protonmail.com</a>
          </div>
        </div>
        <Link to="/" className="text-blue-500">Go back to the homepage</Link>
      </div>
    )
  }

  if(success) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <SEO title="Thank you for you purchase!" />
        <div className="p-4 md:w-1/2 flex flex-col items-center">

          <img src={successSVG} className="h-64"/>
          <div className="font-bold py-4 text-lg">
            Thank you for your purchase!
          </div>

          <a 
            href="https://www.dropbox.com/s/5ihlm27s5g5b7sj/tempomat.zip?dl=1"
            className="bg-blue-500 text-white font-bold py-2 px-8 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-700 hover:border-blue rounded m-10"
          >
            Download
          </a>

          <div className="text-center py-4">
            With your purchase I can continue to enhance and support Tempomat, if you have any questions or need help, just send me an <a href="mailto:ospfranco@protonmail.com" className="font-bold text-blue-500">email</a>
          </div>
    
          <Link to="/" className="text-blue-500">Go back to the homepage</Link>
        </div>
      </div>
    )
  }

  return null

}

export default PurchaseOk;