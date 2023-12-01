<div>
  <link rel="stylesheet" href="css/style.css" />
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Tutores </title>
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
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a className="active" href="tutores.html">Tutores</a></li>
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
  </header>{/* End Header */}
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
        <h2>Tutores a cargo</h2>
        <p>Cada granito que aportamos a cada una de las diferentes familias que integran esta gran comunidad es un gran sentimiento de felicidad para nosotros, debido a que son valores muy importantes para así poder tener una sana convivencia en el hogar. </p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= Events Section ======= */}
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/padre.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Diego Fernando</a></h5>
                <p className="fst-italic text-center">Domingo, Septiembre 26, 9:00 am</p>
                <p className="card-text">"Nunca pensé que estaría tan agradecido por una aplicación, pero la verdad es que esta app de seguridad infantil ha sido una verdadera bendición para mi familia. Gracias a ella, puedo mantenerme al tanto de la ubicación de mis hijos en tiempo real y asegurarme de que siempre estén a salvo. Además, el hecho de poder recibir alertas de emergencia en caso de que ocurra algo es una gran tranquilidad para mí. Realmente recomiendo esta aplicación a todos los padres que quieran asegurarse de que sus hijos estén seguros en todo momento."</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/juntos.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Victoria Gómez</a></h5>
                <p className="fst-italic text-center">Miércoles, Noviembre 15 , 12:00 pm</p>
                <p className="card-text">"Como tutores, siempre estamos preocupados por la seguridad de los niños que cuidamos, y esta aplicación ha sido una herramienta invaluable para nosotros. Nos permite monitorear la ubicación de los niños en tiempo real, lo que nos brinda una mayor tranquilidad y nos permite actuar rápidamente en caso de que ocurra algo. Además, la aplicación es muy fácil de usar y los niños se sienten seguros al saber que estamos monitoreando su ubicación. Definitivamente recomendamos esta aplicación a cualquier persona que cuide niños." </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Events Section */}
    {/* ======= Events Section ======= */}
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/hombress.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Camilo Ordoñez</a></h5>
                <p className="fst-italic text-center">Martes, Marzo 09, 11:00 am</p>
                <p className="card-text"> "No puedo decir lo suficiente sobre lo mucho que esta aplicación ha ayudado a mi familia. Como padre, siempre estoy preocupado por la seguridad de mis hijos, pero gracias a esta aplicación, puedo mantenerme al tanto de su ubicación en tiempo real y asegurarme de que estén a salvo en todo momento. Además, el hecho de poder recibir alertas de emergencia en caso de que algo suceda me brinda una gran tranquilidad. Recomendaría esta aplicación a cualquier padre o madre que quiera asegurarse de que sus hijos estén seguros en todo momento."</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/chicos.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Hermanos Fernández</a></h5>
                <p className="fst-italic text-center">Sábado, Junio 15, 4:00 pm</p>
                <p className="card-text">"Para nosotros es una gran aplicación, debido a que con ella podemos estar tranquilos y salir a la calle con total tranquilidad y confianza, ya que nuestros padres o tutores podrán estar pendientes de nuestro estado, además de que gracias a las alertas podemos avisar de manera oportuna a nuestros seres queridos si nos sentimos en una situación posible de peligro, y también algo muy bueno que tiene es el historial de rutas, en el cual podemos ver a detalle las rutas que hemos realizado y el tiempo que hemos tardado en las mismas."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Events Section */}
    {/* ======= Events Section ======= */}
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/madrehijos.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Lorena / Tutora responsable</a></h5>
                <p className="fst-italic text-center">Martes, Agosto 26, 3:00 pm</p>
                <p className="card-text">"Cuando decidí ser una tutora responsable me comprometí con brindarle a mis chicos total seguridad y confianza, y eso es algo que logré usando ConfiApp, la aplicación superó todas mis espectativas y de igual manera le aportó a la confianza de los chicos, lo que más me gusta es la ubicación en tiempo real, que me permite ver en donde están y como se encuentran. Siendo honesta y sincera, se la recomiendo a todos los padres, madres y tutores que quieren estar tranquilos cuando se trata de una vida adolescente."</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="Images/madre.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Camila López / Madre soltera</a></h5>
                <p className="fst-italic text-center">Domingo, Marzo 07, 8:00 pm</p>
                <p className="card-text">Una de las situaciones más complejas en una familia es ser madre soltera, por diferentes situaciones de la vida, más sin embargo no fue un impedimento para ser la mejor madre y brindarle siempre lo mejor a mi hija, mediante ConfiApp logré que mi hija estuviera más tranquila cuando saliera a la calle, logramos mejorar nuestra confianza y nos volvimos mucho más unidas, gracias ConfiApp."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Events Section */}
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
