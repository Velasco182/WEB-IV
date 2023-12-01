<div>
  <link rel="stylesheet" href="css/style.css" />
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Nosotros</title>
  <meta content name="description" />
  <meta content name="keywords" />
  {/* Favicons */}
  <link href="Images/Iconoverde.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Mentor
  * Updated: Mar 09 2023 with Bootstrap v5.2.3
  * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <a href="landing.html">
        <img src="Images/Iconoverde.png" id="img" /></a>
      <h1 className="logo me-auto"><a href="landing.html"> CONFIAPP</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="landing.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a href="landing.html">Inicio</a></li>
          <li><a className="active" href="nosotros.html">Nosotros</a></li>
          <li><a href="tutores.html">Tutores</a></li>
          <li><a href="foros.html">Foros</a></li>
          {/*Menú desplegable de contactos */}
          <li className="dropdown"><a href="#"><span>Contáctanos </span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#lineatel">Línea Telefónica</a></li>
              <li><a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a></li>
              <li><a href="https://www.facebook.com/SENACauca" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
              <li><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Correo Electrónico</a></li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <a className="get-started-btn pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" id="ali">Iniciar Sesión</a>
      <a className="get-started-btn pointer" data-bs-toggle="modal" data-bs-target="#modalRegistro">Registrarme</a>
      {/* Button trigger modal */}
    </div>
  </header>
  {/* End Header */}
  {/* Modal de inicio de sesion */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            <img src="Images/Iconoverde.png" id="img" />
          </h5><h4 className="logo me-auto"><a href="landing.html"> CONFIAPP</a></h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form action="Home.html" onsubmit="return validacion()">
            <div className="mb-3">
              <label className="form-label">Tipo de documento</label>
              <select className="form-select" aria-label="Default select example" required>
                <option value={1}>Cédula de Ciudadanía</option>
                <option value={2}>Cedula de Extranjería</option>
                <option value={3}>Pasaporte</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Número de documento</label>
              <input type="number" className="form-control" id="inicioDocumento" aria-describedby="emailHelp" required maxLength={10} minLength={7} />
              <div id="emailHelp" className="form-text">Nunca compartiremos su información personal con nadie más.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="inicioContraseña" maxLength={10} minLength={7} required />
            </div>
            {/* <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
      <label class="form-check-label" for="exampleCheck1">Verificado</label>
    </div> */}
            <div id="centrar">
              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> */}
              <button type="submit" className="btn btn-primary" id="enviarInicio">Ingresar</button>
              <a className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalRegistro">Regístrate</a>
            </div>
          </form>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  </div>  
  {/* fin del Modal de inicio de sesion */} 
  {/* Modal de hacer el registro */}
  <div className="modal fade" id="modalRegistro" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            <img src="Images/Iconoverde.png" id="img" />
          </h5><h4 className="logo me-auto"><a href="landing.html">Regístro CONFIAPP</a></h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form action="Home.html">
            <div className="mb-3">
              <label className="form-label">Nombres completos</label>
              <input type="text" className="form-control" maxLength={20} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellidos completos</label>
              <input type="text" className="form-control" maxLength={20} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de documento</label>
              <select className="form-select" aria-label="Default select example" required>
                <option value={1}>Cédula de Ciudadanía</option>
                <option value={2}>Cédula de Extranjería</option>
                <option value={3}>Pasaporte</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Número de documento</label>
              <input type="number" className="form-control" maxLength={10} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Rol que ocupa</label>
              <select className="form-select" aria-label="Default select example" required>
                <option value={1}>Padre de familia</option>
                <option value={2}>Madre de familia</option>
                <option value={2}>Tutor responsable</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de nacimiento</label>
              <input type="date" className="form-control" max="2004-12-31" required />
              <div id="emailHelp" className="form-text">Debes ser mayor de 18 años.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="registroPassword" required minLength={8} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
              <input type="password" className="form-control" id="registroConfirmarPassword" required minLength={8} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="checkRegistro" required />
              <label className="form-check-label" htmlFor="exampleCheck1">Acepto todos los términos y condiciones.</label>
            </div>
            <div id="centrar">
              <button type="submit" className="btn btn-primary" id="enviarRegistro">Registrarme</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*Aqui TERMINA  el modal de registro */}
  <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Nosotros</h2>
        <p> Somos un equipo de expertos en seguridad y tecnología comprometidos con la seguridad y protección de los menores en línea y fuera de línea. Nuestra misión es proporcionar herramientas innovadoras y efectivas para ayudar a los padres, tutores y educadores a mantener a los niños seguros y protegidos en todo momento. Con nuestra tecnología avanzada y nuestra experiencia en seguridad infantil, esperamos proporcionar tranquilidad y confianza a las familias en todo momento. </p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
            <img src="assets/img/about.jpg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Como trabaja el equipo de ConfiApp</h3>
            <p className="fst-italic">
              Cada integrante de nuestro equipo de trabajo brinda un granito de arena para 
            </p>
            <ul>
              <li><i className="bi bi-check-circle" /> Brindamos seguridad y confianza en todo momento a los tutores y a los menores a cargo</li>
              <li><i className="bi bi-check-circle" /> Hemos sido condecorados como uno de los mejores aplicativos sobre seguridad juvenil e infantil</li>
              <li><i className="bi bi-check-circle" /> Contamos con nuestro Historial de Rutas, que nos permite acceder de manera rápida y precisa a los lugares que el menor transitó</li>
            </ul>
            <p>
              Así es que logramos llenar de felicidad y tranquilidad a cada uno de las personas que integran esta familia
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Counts Section ======= */}
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={1962} data-purecounter-duration={1} className="purecounter" />
            <p>Familias</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={5347} data-purecounter-duration={1} className="purecounter" />
            <p>Rutas guardadas</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={87} data-purecounter-duration={1} className="purecounter" />
            <p>Condecoraciones</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={1} className="purecounter" />
            <p>Ciudades</p>
          </div>
        </div>
      </div>
    </section>{/* End Counts Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonios de nuestros aliados</h2>
          <p>Qué opinan frente a nuestra innovación</p>
        </div>
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="Images/jolie.jpg" className="testimonial-img" alt />
                  <h3>Angelina Jolie</h3>
                  <h4>Actriz &amp; Modelo</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Esta aplicación es una herramienta increíble para los padres preocupados. Me encanta la tranquilidad que siento al saber dónde están mis hijos en todo momento. ¡Gracias por hacer que la seguridad de los niños sea una prioridad!
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="Images/obama.jpg" className="testimonial-img" alt />
                  <h3>Barack Obama</h3>
                  <h4>Ex-presidente EUA</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Como padre, entiendo lo importante que es la seguridad de los niños. Esta aplicación es una excelente manera de mantener a los niños seguros mientras les permite disfrutar de la libertad de explorar el mundo. Estoy impresionado por la tecnología detrás de esta aplicación y su capacidad para brindar tranquilidad a los padres.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="Images/winfryy.jpg" className="testimonial-img" alt />
                  <h3>Oprah Winfrey</h3>
                  <h4>Periodista</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Estoy sorprendida por la simplicidad y eficacia de esta aplicación. La seguridad de los niños es de vital importancia y esta aplicación es una herramienta valiosa para garantizar que los padres puedan estar al tanto del paradero de sus hijos en todo momento.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="Images/bill.jpg" className="testimonial-img" alt />
                  <h3>Bill Gates</h3>
                  <h4>CEO Microsoft</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Esta aplicación es un gran ejemplo de cómo la tecnología puede mejorar la seguridad de los niños. Es impresionante ver cómo la ubicación en tiempo real puede ser una herramienta tan poderosa para garantizar la seguridad de los niños. Felicidades por crear una aplicación tan útil.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="Images/serena.jpg" className="testimonial-img" alt />
                  <h3>Serena Williams</h3>
                  <h4>Ex-jugadora de Tenis</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Como madre, siempre estoy buscando maneras de mantener a mi hija segura. Esta aplicación es una herramienta valiosa que me permite saber dónde está mi hija en todo momento. Me encanta cómo la tecnología puede ser utilizada de manera efectiva para proteger a los niños. Definitivamente recomendaría esta aplicación a otros padres.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Testimonials Section */}
  </main>{/* End #main */}
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
  <div id="preloader">
    <img src="Images/Iconoverdetxt.png" alt />
  </div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>
