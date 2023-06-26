
import React  from 'react'
import{useState} from'react'
import "./styles/Contact.css"


const Contact = () =>{
  const [data, setData] = useState({ name: '',email: '',phone: '',message: ''});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !/^[a-zA-Z]+$/.test(data.name)) {
      alert('Please enter a valid name (containing only alphabets)');
      return;
    }

    if (!data.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!data.phone || !/^\d{10}$/.test(data.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    // Handle form submission logic here
    alert('Form submitted successfully');
    // Reset form data
    setData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
    <div class="card text-bg-dark">
 <img src="./assets/Hero_section.jpg" class="card-img" alt="..."/>
 <div class="card-img-overlay">
 <h1>Contact Us</h1>
   <p class="card-text">We’re here to help you live life the BhookLagi way. </p>
 </div>
</div>
    <div className="flexbox">
      <div className="flexitem" style={{ marginLeft: "100px", marginTop: "90px" }}>
        <form  method ="post" onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" onChange={handleChange} value={data.name} placeholder="Enter your name" required  />
          <input type="email" name="email"id="email" onChange={handleChange} value={data.email} placeholder="example@gmail.com" required />
          <input type="tel" name="phone" id="phone" onChange={handleChange}  value={data.phone}  placeholder="8469XXXXXX" required />
          <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Your queries" className='my-2' required  />
          <button type="submit" id="submit">Send</button>

      <div className="direct-contact-container">
      <u className="contact-list">
        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">IIIT Lucknow</span></i></li>
        
        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call" id="link">(212) 555-2368</a></span></i></li>
        
        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email" id="link">bhooklagih@gmail.com</a></span></i></li>

      </u>
      <ul className="social-media-list">
        <li><a href="#" target="_blank" className="contact-icon">
          <i className="fa fa-github" aria-hidden="true"></i></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
          <i className="fa fa-codepen" aria-hidden="true"></i></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
          <i className="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
          <i className="fa fa-instagram" aria-hidden="true"></i></a>
        </li>       
      </ul>
      </div>
    </form>
    </div>
    <div className="flexitem">
      <img src="./assets/Form_photo.png" className="photo"></img>
      </div>
      </div>
      </>
  )
}
export default Contact



