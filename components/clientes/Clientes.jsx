import React, { Component } from 'react';
import pessoa1 from "../../assets/images/image-emily.jpg"
import pessoa2 from "../../assets/images/image-thomas.jpg"
import pessoa3 from "../../assets/images/image-jennie.jpg"


class Clientes extends Component {
    render() { 
        return (
            <section className="clientes">
                <h3 className="clientes__titulo">Client testimonials</h3>
                <div className='clientes__conteiner'>
                    <div className="clientes__conteiner-2">
                        <div className='clientes__conteiner-img'>
                            <img src={pessoa1} alt="" className="clientes__img" />
                        </div>
                        <p className="clientes__texto">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <p className="clientes__nome">Emily R.</p>
                        <p className="clientes__proficao">Marketing Director</p>
                    </div>
                    <div className="clientes__conteiner-2">
                        <div className='clientes__conteiner-img'>
                            <img src={pessoa2} alt="" className="clientes__img" />
                        </div>
                        <p className="clientes__texto">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                        <p className="clientes__nome">Thomas S.</p>
                        <p className="clientes__proficao">Chief Operating Officer</p>
                    </div>
                    <div className="clientes__conteiner-2">
                        <div className='clientes__conteiner-img'>
                            <img src={pessoa3} alt="" className="clientes__img" />
                        </div>
                        <p className="clientes__texto">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        <p className="clientes__nome">Jennie F.</p>
                        <p className="clientes__proficao">Business Owner</p>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Clientes;