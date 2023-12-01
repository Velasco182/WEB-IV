<div>
  <link rel="stylesheet" href="css/style.css" />
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Foros </title>
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
          <li><a href="tutores.html">Tutores</a></li>
          <li><a className="active" href="foros.html">Foros</a></li>
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
        <h2>Foros en Colombia</h2>
        <p>Una de nuestras grandes ventajas es que somos un aplicativo desarrollado en el Departamento del Cauca, por ende nos permitió expandirnos por todo nuestro país en cada uno de los departamentos y poco a poco ir llegando a cada una de las familias. </p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= Cource Details Section ======= */}
    <section id="course-details" className="course-details">
      <div className="container" data-aos="fade-up">
        <div className="row" id="centradito">
          <div className="col-lg-8">
            <legend id="mitad">Cómo funcionan nuestros foros <br />
              <a href="#irabajo"> <img src="iconos/flechita.png" /></a></legend>
            <img src="Images/foritos.jpg" className="img-fluid" />
            <hr id="irabajo" />
            <br />
            <h3>Aportando valor</h3>
            <p>
              Cada uno de nuestros encuentros presenciales y virtuales está diseñado 100% para fortalecer los lazos de sana convivencia en cada una de las familias, para que así mismo se sientan en su zona de confort cuando están en nuestra compañía, y poco a poco ir involucrándolos en este proyecto que tiene como objetivo estar pendientes de la seguridad física y de la integridad de nuestros chicos, por quienes trabajamos día a día sin descanso para poder brindarles el mejor servicio posible.
            </p>
          </div>
        </div>
      </div>
    </section>{/* End Cource Details Section */}
    {/* ======= Cource Details Tabs Section ======= */}
    <section id="cource-details-tabs" className="cource-details-tabs">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Foros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Convivencia con padres y tutores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hablando con los chicos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Uso de la aplicación</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Importancia</h3>
                    <p className="fst-italic">Los foros desde el comienzo nos permitieron acercarnos a cada una de las familias, padres, madres y tutores, y así mismo logramos fortalecer los lazos de confianza al interior del hogar.</p>
                    <p>Cuando hacemos los foros siempre tratamos de que sea diverso, es decir que estén involucrados los tutores y los menores, debido a que nos podemos dirigir hacia ambos, de igual manera logramos resolver dudas o inquietudes que tengan sobre algún tema en específico o en relación al aplicativo.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2" id="centradito">
                    <img src="Images/forogeneral.jpg" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Convivencia al interior del hogar</h3>
                    <p className="fst-italic">Uno de los temas más importantes y sobre el cual recalcamos mucho es la relación que tienen al interior de las casas, debido a que aquí empieza la sana convivencia.</p>
                    <p>Nos referimos a sana convivencia debido a que son los padres o los tutores quienes les brindan la confianza y la total de seguridad a los menores de hacer uso del aplicativo.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="Images/hogar.jpg" className="img-fluid" id="centradito" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Confianza y tranquilidad</h3>
                    <p className="fst-italic">El aspecto más importante es lograr entrar al corazón de los chicos</p>
                    <p>Es esencial que los foros transmitan seguridad a los chicos, así no se sienten vigilados por sus responsables sino que se sienten protegidos en caso de que su integridad pueda estar en peligro.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="Images/forochicos.jpg" className="img-fluid" id="centradito" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Buen uso para un buen resultado</h3>
                    <p className="fst-italic">Para nosotros siempre y en cada momento prevalece estar informados respecto a cómo funciona la aplicación.</p>
                    <p>Algo muy importante es tener dudas, ya que con esto podemos resolver cada una de las inquietudes o preguntas que tienen nuestros usuarios respecto a algo o alguna función en general, así mismo cuando surgen cambios prácticos en el aplicativo no dudamos en compartirlo con los usuarios en cada foro.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/course-details-tab-4.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                    <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/course-details-tab-5.png" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Cource Details Tabs Section */}
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
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center "><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>
