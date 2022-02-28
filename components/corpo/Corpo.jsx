import React, { Component } from 'react';


class Corpo extends Component {
    render() { 
        return (
                <section className="conteudo">
                    <div className="conteudo__conteiner-5">
                        <div className="conteudo__conteiner">
                            <h2 className="conteudo__titulo">Transform your brand</h2>
                            <p className="conteudo__texto">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                            <a href="" className="conteudo__link link1">Learn more</a>
                        </div>
                    <div className="conteudo__img img1"></div>
                    </div>
                    <div className="conteudo__conteiner-2">
                        <div className="conteudo__conteiner">
                            <h2 className="conteudo__titulo">Stand out to the right audience</h2>
                            <p className="conteudo__texto">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                            <a href="" className="conteudo__link link2">Learn more</a>
                        </div>
                        <div className="conteudo__img img2"></div>
                    </div>
                        <div className='conteudo__conteiner-3'>
                            <div className="conteudo__conteiner-4 img3">
                                <h3 className="conteudo__titulo-2">Graphic design</h3>
                                <p className="conteudo__texto-2">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                            </div>
                            <div className="conteudo__conteiner-4 img4">
                                <h3 className="conteudo__titulo-2">Photography</h3>
                                <p className="conteudo__texto-2">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                            </div>
                        </div>
                </section>
        );
    }
}
 
export default Corpo;