function Footer() {
  return (
    <div>
      {/* ======= Footer ======= */}
        <footer id="footer">
            <div className="footer-top">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact" id="lineatel">
                    <h3>Encuéntranos</h3>
                    <p>
                    <a href="https://goo.gl/maps/ictFw6tjTr5pGLpp9">
                        Carrera 9 #71N - 60 <br />
                        Barrio el Placer <br />
                        Zona norte Popayán<br /><br />
                    </a>
                    <strong>Teléfono:</strong> 018000 - 18000 23948<br />
                    <strong>Correo:</strong> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"> Ctpi@misena.edu.com </a>  <br />
                    </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Secciones </h4>
                    <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Inicio</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="nosotros.html">Nosotros</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="tutores.html">Tutores</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="foros.html">Foros</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Contáctanos</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Línea Telefónica</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://www.facebook.com/SENACauca" target="_blank">Facebook</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Correo Electrónico</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Déjanos tu correo</h4>
                    <p>Te enviaremos un mensaje desde soporte para responder tus dudas e inquietudes</p>
                    <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Guardar" />
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                © Copyright <strong><span>ConfiApp</span></strong>. Todos los derechos reservados
                </div>
                <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
                Designed by <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">ADSO  2556678 / ConfiApp</a>
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="https://web.whatsapp.com/" target="_blank" className="whatsapp"><i className="bx bxl-whatsapp" /></a>
                <a href="https://www.facebook.com/SENACauca" target="_blank" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="https://www.instagram.com/" target="_blank" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="google"><i className="bx bxl-google" /></a>
            </div>
            </div>
        </footer>{/* End Footer */}
    </div>
  );
}

export default Footer;