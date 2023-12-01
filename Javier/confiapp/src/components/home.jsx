<div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>ConfiApp</title>
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
      <h1 className="logo me-auto"><a href="#"> CONFIAPP</a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="landing.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a id="inicio" className="active inicio" href="#">Inicio</a></li>
          <li><a id="tutores" className="tutores" href="tutores.html">Tutores</a></li>
          <li><a id="rutasGuardadas" className="rutasGuardadas" href="rutasguardadas.html">Rutas guardadas</a></li>
          <li><a id="miMenor" className="miMenor" href="events.html">Mi menor</a></li>
          {/*Menú desplegable de contactos */}
          <li className="dropdown"><a href="#"><span>Información personal</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Datos personales</a></li>
              <li><a href="#">Datos del menor</a></li>
            </ul>
          </li>
          {/*Menú desplegable de contactos */}
          <li className="dropdown"><a href="#"><span>Contáctanos</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Línea Telefónica</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Correo Electrónico</a></li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex justify-content-center align-items-center">
    <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
      <h1>Bienvenido de Nuevo a <br />ConfiApp</h1>
      <h2>Cada día que pasa tratamos de mejorar para llenar de seguridad y confianza a nuestra juventud !</h2>
      <a href="courses.html" className="btn-get-started" id="registrate" data-bs-toggle="modal" data-bs-target="#modalRegistro">Registrar menor</a>
    </div>
  </section>{/* End Hero */}
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
              <li><i className="bi bi-check-circle" /> Contamos con nuestro Historial de Rutas, que nos permite acceder de manera rápida y precisa a los lugares que el menor ttransitó</li>
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
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>¿Por qué elegir a ConfiApp?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="about.html" className="more-btn">Leer Más <i className="bx bx-chevron-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt" />
                    <h4>Oficinas principales</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt" />
                    <h4>Como funciona nuestro aplicativo</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images" />
                    <h4>Galería de imagenes Tutores y Menores</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>{/* End .content*/}
          </div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay={100}>
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{color: '#ffbb2c'}} />
              <h3><a href>Lorem Ipsum</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}} />
              <h3><a href>Dolor Sitema</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{color: '#e80368'}} />
              <h3><a href>Fechas </a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{color: '#e361ff'}} />
              <h3><a href>Magni Dolores</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{color: '#47aeff'}} />
              <h3><a href>Nemo Enim</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{color: '#ffa76e'}} />
              <h3><a href>Eiusmod Tempor</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{color: '#11dbcf'}} />
              <h3><a href>Mis datos</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" style={{color: '#4233ff'}} />
              <h3><a href>Nuestras sedes</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" style={{color: '#b2904f'}} />
              <h3><a href>Dirada Pack</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" style={{color: '#b20969'}} />
              <h3><a href>Moton Ideal</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" style={{color: '#ff5828'}} />
              <h3><a href>Mi ubicación</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" style={{color: '#29cc61'}} />
              <h3><a href>Mi Tutor</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Features Section */}
    {/* ======= Popular Courses Section ======= */}
    <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>Mis Rutas Comunes</p>
          <h2>Popayán</h2>
        </div>
        <div className="row" data-aos="zoom-in" data-aos-delay={100}>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Desde Lás Américas hacia el Ctpi</h4>
                  <p className="price">35 Min aprox.</p>
                </div>
                <h3><a href="course-details.html">Ruta más recorrida</a></h3>
                <p>Tu lugar de partida empieza en el barrio Las Américas, y tu lugar de destino es el Centro de teleinformática y producción industrial, el trayecto lo realizas por la panamericana.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt />
                    <span>Diego Fernando</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart" />&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Course Item*/}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Desde </h4>
                  <p className="price">$250</p>
                </div>
                <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt />
                    <span>Lana</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart" />&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Course Item*/}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>
                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt />
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />&nbsp;20
                    &nbsp;&nbsp;
                    <i className="bx bx-heart" />&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Course Item*/}
        </div>
      </div>
    </section>{/* End Popular Courses Section */}
    {/* ======= Trainers Section ======= */}
    <section id="trainers" className="trainers">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay={100}>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt />
              <div className="member-content">
                <h4>Diego Fernando</h4>
                <span>Padre de familia</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt />
              <div className="member-content">
                <h4>Angela Sofía</h4>
                <span>Madre de familia</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt />
              <div className="member-content">
                <h4>William Anderson</h4>
                <span>Content</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Trainers Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Encuéntranos</h3>
            <p>
              Carrera 9 #71N - 60 <br />
              Barrio el Placer <br />
              Zona norte Popayán<br /><br />
              <strong>Teléfono:</strong> 018000 - 18000 23948<br />
              <strong>Correo:</strong> Ctpi@misena.edu .com<br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Secciones </h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Inicio</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Nosotros</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Tutores</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Foros</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Rutas guardadas</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Contáctanos</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Línea Telefónica</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">WhatsApp</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Facebook</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Instagram</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Correo Electrónico</a></li>
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
          Designed by <a href="https://bootstrapmade.com/">Adso  2556678</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
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
