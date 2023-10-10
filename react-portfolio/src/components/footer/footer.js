import React from 'react'
import './footer.css'
import github from '../../images/github.svg'
import linkdien from '../../images/linkdein.svg'
import mail from '../../images/mail.svg'
function footer() {
  return (
   
     <div className="footer">
        <div className="icons"> 
            <a href="https://github.com/mohd-khan09"><img src={github} alt="" />github.com/mohd-khan09</a>
            <a href="https://www.linkedin.com/in/mohammed-khan-627402203/"><img src={linkdien} alt="" />www.linkedin.com/in/mohammed-khan-627402203</a>
            <a href="https://mohammed.khan@antstack.io"><img src={mail} alt="" />mohammed.khan@antstack.io</a>
        </div>
     </div>

  )
}

export default footer
