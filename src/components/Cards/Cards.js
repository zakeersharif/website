import './Cards.css'
const Cards=()=>{
 return(
    <div className='feature-cards'>
    <div className='gst'>
     <img src="https://business.amazon.in/assets/in/new-registration-19th-march-2021/icons/354_Icon_01.jpg.transform/192x192/image.jpg" alt="tax"/>
     <h2>GST invoice for input tax credit</h2>
     <p className='description-1'>Save upto 28% on your business purchases by claiming GST input tax credit.</p>
    </div>
    <div className='gst'>
     <img src="https://business.amazon.in/assets/in/new-registration-19th-march-2021/icons/354_Icon_02.jpg.transform/192x192/image.jpg" alt="cart" />
     <h2>Bulk Discounts</h2>
     <p className='description-1'>Save 5% or more with Bulk Discounts on over 15+ crore  products starting at just two units of the same item.</p>
    </div>
    <div className='gst'>
     <img src="https://business.amazon.in/assets/in/new-registration-19th-march-2021/icons/354_Icon_03.jpg.transform/192x192/image.jpg" alt="car"/>
     <h2>Fast and Reliable shipping</h2>
     <p className='description-1'>Benefit from Amazon's world-class logistics. Also access free and fast delivery with prime</p>
    </div>
    <div className='gst'>
     <img src="https://business.amazon.in/assets/in/2nd-feb/Saving-2.jpg.transform/192x192/image.jpg" alt="car"/>
     <h2>Business Deals</h2>
     <p className='description-1'>Save more with Business Exclusive Deals with no minimum order quantity.</p>
    </div>
    </div>
 )
}
export default Cards