import { useState } from 'react'
import './Faqs.css'


const Faqs=()=>{
const [showMessage,setShowMessage]=useState(false)
const [showMessage2,setShowMessage2]=useState(false)
const [showMessage3,setShowMessage3]=useState(false)
const [showMessage4,setShowMessage4]=useState(false)

const [showMessage6,setShowMessage6]=useState(false)

  const onChangeHandler=()=>{
        setShowMessage(!showMessage)
    }
    const onChangeHandler2=()=>{
        setShowMessage2(!showMessage2)
    }
    const onChangeHandler3=()=>{
        setShowMessage3(!showMessage3)
    }
    const onChangeHandler4=()=>{
        setShowMessage4(!showMessage4)
    }
   

    const onChangeHandler6=()=>{
        setShowMessage6(!showMessage6)
    }
 
    
    return(
    
     <ul className='q-a-card'>
        <li className="faqs-card" onClick={onChangeHandler} key='1'>
                    <div className='question-card'>
                    <b>What is Amazon Business?</b>
                    <b>{showMessage? '-':'+'}</b>
                    </div>
                    {showMessage&&<p className='outline'>Amazon Business is the one stop solution for all your office purchase needs. Access India’s largest selection of products with GST invoice. Get competitive prices with convenient buying options. Discover a smarter and a more efficient way to buy for work!</p>}
        </li>
        <li className="faqs-card" onClick={onChangeHandler2} key='2'>
                    <div className='question-card'>
                    <b className='questions'>What do I need to do register for an account?</b>
                    <b className='questions'>{showMessage2? '-':'+'}</b>
                    </div>
                    {showMessage2 && <p className='outline'>It is free to register for an Amazon Business account. There is no long-term commitment, and no minimum spend. All you need is your work email and basic company information. If we require additional information to verify your business, we will let you know. To speed up verification, have these documents ready: GST certificate or Business PAN and Company Information (E.g: Name, Registered address) at time of registration.
                    Click here to create a free business account.</p>}
        </li>
        <li className="faqs-card" onClick={onChangeHandler3} key='3'>
                    <div className='question-card'>
                    <b>Why should i create an account on Amazon Business?</b>
                    <b>{showMessage3? '-':'+'}</b>
                    </div>
                    {showMessage3&&<p className='outline'>As a business customer, you get access to lakhs of products with a GST invoice allowing you to take input tax credit. Further, you will also get business exclusive deals and quantity discounts on many of these products. You will be able to enjoy the convenience of placing orders and getting those delivered to your doorstep.</p>}
        </li>
        <li className="faqs-card" onClick={onChangeHandler4} key='4'>
                    <div className='question-card'>
                    <b>What kind of email address should I use to register?</b>
                    <b>{showMessage4? '-':'+'}</b>
                    </div>
                    {showMessage4&&<p className='outline'>If you have not used Amazon for business purchases, we recommend using your work email for business account. By doing so, you can keep your business and personal purchases separate. If you do not have a different email address, you can also enter your existing Amazon account email id to convert it to a business account. </p>}
        </li>
       
        <li className="faqs-card" onClick={onChangeHandler6} key='6'>
                    <div className='question-card'>
                    <b >My Business has locations in Multiple cities, Can I still use Amazon Business?</b>
                    <b>{showMessage6? '-':'+'}</b>
                    </div>
                    {showMessage6&&<p className='outline'>Yes, Amazon Business delivers to businesses in over 99.5% of pincodes in the country. Businesses from all over the country can now purchase business supplies and receive local delivery. </p>}
        </li>
     </ul>
     
    )
}
export default Faqs