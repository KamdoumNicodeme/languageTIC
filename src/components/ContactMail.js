import React, { Fragment, Component } from "react";
import axios from 'axios';
import contact from "./globals";


class Contact extends Component {

  constructor(props) {
      super(props);
      this.state = {
        name: 'Lary Sherokee',
        phone:'017630797185',
        email: "kamdoum.ngadjui@web.de",
        message: 'my message is there'
      }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
}

onEmailChange(event) {
    this.setState({email: event.target.value})
}

onPhoneChange(event) {
    this.setState({phone: event.target.value})
}

onMsgChange(event) {
    this.setState({message: event.target.value})
}

submitEmail(e){
  e.preventDefault();

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.state)
};
// alert(90)
fetch('/send', requestOptions)
     .then(response => response.json())
    .then(data => {

      alert("email sent" + JSON.stringify(data));
      this.resetForm();
    })
    .catch(error => {
      alert("Email not sent" + JSON.stringify(error));
    })
    ;


    return;
  axios({
    method: "POST", 
    // url:"http://localhost:3000/send", 
    url:"/send", 
    data:  this.state,
    boby:  this.state,
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Envoyé."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  }).catch(g => {
    alert(JSON.stringify(g))

  })
}

resetForm(){
  this.setState({name: '', email: '',phone:'', message: ''})
}

render() {
  return (
    <section className="contact-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h2 className="section__title">Contactez -nous</h2>
            <p className="section__meta">Nous vous repondrons par e-mail ou vous appelons directement</p>
            <p className="section__desc">
              Pour une réponse directe et rapide, il est conseiller de nous appeller directement oubien de nous écrire sur notre numero whatsapp
            </p>
            <ul className="section__list">
              <li>
                <a href="#none">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#none">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-shared">
            <form   method="post" onSubmit={this.submitEmail.bind(this)} >
              <div className="row">
                <div className="col-lg-6 col-sm-6 form-group">
                                         <input placeholder = "Name"  id="name" type="text" 
                                 className="form-control" required value={this.state.name} 
                                 onChange={this.onNameChange.bind(this)}/>

                  {/* <input
                    type="text"
                    name="name"
                    placeholder="Vos noms"
                    className="form-control" required value={this.state.name} 
                                 onChange={this.onNameChange.bind(this)}
                  /> */}
                </div>

                <div className="col-lg-6 col-sm-6 form-group">
                  {/* <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Vos adresse Email"
                  /> */}
                                <input placeholder = "Email"  id="email" type="email"
                                className="form-control" aria-describedby="emailHelp"
                                required value={this.state.email} 
                                onChange={this.onEmailChange.bind(this)}/>

                </div>

                <div className="col-lg-12 form-group">
                  <input
                    className="form-control"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Téléphone"
                    required value={this.state.phone}
                    onChange={this.onPhoneChange.bind(this)}
                  />
                </div>

                <div className="col-lg-12 col-sm-12 form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message" 
                    required value={this.state.message}
                    placeholder="Votre message"
                    onChange= {this.onMsgChange.bind(this)}
                  ></textarea>

                </div>

                <div className="col-lg-12 col-sm-12">
                  <button className="theme-btn submit__btn" type="submit">
                    Envoyer votre message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row contact-detail-action">
        <div className="col-lg-4">
          <div className="contact-item contact-item1">
            <h3 className="contact__title">Notre Mission</h3>
            <p className="contact__desc">
              Transformez votre temps d'apprentissage en moments de plaisir! Au service de toutes les réussites et ouvert á toutes les bourses
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-item contact-item2">
            <h3 className="contact__title">Addresse</h3>
            <p className="contact__desc">
              Á 200 Mètres de la <br /> TOTAL NKOLMBONG en direction du stade JAPOMA
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-item contact-item3">
            <h3 className="contact__title">Contact</h3>
            <p className="contact__desc">
            {contact.gfl_tic_email} <br />
              {contact.gfl_phone_orange}<br />
              {contact.lary}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
      // <div className="section">
      //     <div className="container">
      //         <div className="row">
      //             <div className="col-md-12">
      //                 <div className="section-title">
      //                     <h2 className="title">Contact Us</h2>
      //                     <p>Let us know what you think! In order to provide better service,
      //                          please do not hesitate to give us your feedback. Thank you.</p><hr/>
      //                     <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
      //                         method="POST">
      //                     <div className="form-group">
      //                     <div className="row">
      //                     <div className="col-md-6">
      //                         <input placeholder = "Name"  id="name" type="text" 
      //                            className="form-control" required value={this.state.name} 
      //                            onChange={this.onNameChange.bind(this)}/>
      //                     </div>
      //                     <div className="col-md-6">
      //                         <input placeholder = "Email"  id="email" type="email"
      //                           className="form-control" aria-describedby="emailHelp"
      //                           required value={this.state.email} onChange=
      //                           {this.onEmailChange.bind(this)}/>
      //                     </div>
      //                     </div>
      //                     </div>
      //                     <div className="form-group">
      //                         <input placeholder = "Subject"  id="subject" type="text"
      //                           className="form-control" required value={this.state.subject}
      //                           onChange={this.onSubjectChange.bind(this)}/>
      //                     </div>
      //                     <div className="form-group">
      //                         <textarea placeholder = "Message"  id="message" 
      //                            className="form-control" rows="1" 
      //                            required value={this.state.message}
      //                            onChange= {this.onMsgChange.bind(this)}/>
      //                     </div>
      //                     <button type="submit" className="primary-btn submit">Submit</button>
      //                     </form>
      //                 </div>
      //             </div>

      //         </div>

      //     </div>
      // </div>
  );
}

}

export default Contact;
