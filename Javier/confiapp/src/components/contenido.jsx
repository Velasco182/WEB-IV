function Contenido() {
  return (
    <div>
      {/* Modal de inicio de sesion */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    <img src="images/Iconoverde.png" id="img" />
                </h5><h4 className="logo me-auto"><a href="landing.html"> CONFIAPP</a></h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                {/* return validacion() */}
                <form action onsubmit="return validacion()">
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
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkInicio" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                    </div>
                    <div id="centrar">
                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button> */}
                    <button type="submit" className="btn btn-primary" id="enviarInicio" onclick="location.href='javascript:iniciarSesion(user, pass)'">Ingresar</button> 
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
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Siéntete seguro con<br />ConfiApp</h1>
            <h2>Te ayudaremos a estar tranquilo en cuanto <br /> a la seguridad de tu menor a cargo <br />
                gracias a la ubicación en tiempo real <br /> que utilizamos</h2>
            <img src="assets/images/celruta.jpg" id="derecha" />
            {/*Aqui está el modal de registro*/}
            <a className="btn-get-started" data-bs-toggle="modal" data-bs-target="#modalRegistro">Regístrate</a>
            </div>
        </section>{/* End Hero */}
        {/* Modal de hacer el registro */}
        <div className="modal fade" id="modalRegistro" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    <img src="assets/images/Iconoverde.png" id="img" />
                </h5><h4 className="logo me-auto"><a href="landing.html">Regístro CONFIAPP</a></h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                <form action="#exampleModal" onsubmit="return validacion()">
                    <div className="mb-3">
                    <label className="form-label">Nombres completos</label>
                    <input id="nombre" type="text" className="form-control" maxLength={20} required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Apellidos completos</label>
                    <input id="apellido" type="text" className="form-control" maxLength={20} required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Tipo de documento</label>
                    <select id="tDocumento" className="form-select" aria-label="Default select example" required>
                        <option value={1}>Cédula de Ciudadanía</option>
                        <option value={2}>Cédula de Extranjería</option>
                        <option value={3}>Pasaporte</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Número de documento</label>
                    <input id="nDocumento" type="number" className="form-control" maxLength={10} required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Rol que ocupa</label>
                    <select id="rol" className="form-select" aria-label="Default select example" required>
                        <option value={1}>Padre de familia</option>
                        <option value={2}>Madre de familia</option>
                        <option value={2}>Tutor responsable</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Fecha de nacimiento</label>
                    <input id="fechaN" type="date" className="form-control" max="2004-12-31" required />
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
                    <input id="tYC" type="checkbox" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Acepto todos los términos y condiciones.</label>
                    </div>
                    <div id="centrar">
                    <button type="submit" className="btn btn-primary" id="enviarRegistro" onclick="location.href='javascript:registro(nombre, apellido, tDocumento, nDocumento, rol, fechaN, registroPassword, registroConfirmarPassword, tYC)'">Registrarme</button>
                    <a className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar Sesión</a>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        {/*Aqui TERMINA  el modal de registro */}
        <main id="main">
            <p>
            </p><h2 id="mitad">Descubre nuestro funcionamiento <br />
            <a href="#bajadita"> <img src="assets/images/flechita.png" /></a>  </h2>
            <p />
            <hr id="bajadita" className="blanquito" />
            {/* ======= About Section ======= */}
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                    <img src="assets/images/alerta.jpg" className="img-fluid" alt />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Alerta</h3>
                    <ul id="distancia">
                    <li><i className="bi bi-check-circle" />Recibe un mensaje SOS del niño
                        cuando se encuentra en peligro y no puede llamarte.
                        Recibirás la ubicación exacta y el teléfono del niño empezará a grabar las actividades del entorno</li>
                    </ul>
                </div>
                </div>
            </div>
            </section>{/* End About Section */}
            <hr />
            {/* ======= About Section ======= */}
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-delay={100}>
                    <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.074044988169!2d-76.56323245004829!3d2.482440966561334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses!2sco!4v1678807469492!5m2!1ses!2sco" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content" id="centradito">
                    <h3>Haz un seguimiento sobre el historial de movimientos de tu chico</h3>
                    <ul id="distancia">
                    <li><i className="bi bi-check-circle" /> Gracias a nuestro sistema de Historial de rutas y seguimiento, podrás acceder a los últimos 
                        lugares que el menor recorrió y el tiempo que estuvo en ese lugar.</li>
                    </ul>
                </div>
                </div>
            </div>
            </section>{/* End About Section */}
            <hr />
            {/* ======= About Section ======= */}
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                    <img src="assets/images/segura.jpg" className="img-fluid" alt />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" id="centradito">
                    <h3>Seguridad</h3>
                    <ul id="distancia">
                    <li><i className="bi bi-check-circle" /> Gracias a la innovación, ConfiApp puede asegurarle a cada uno de 
                        nuestros usuarios total confiabilidad y seguridad al momento de hacer uso del aplicativo</li>
                    </ul>
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
                <div className="row" id="centradito">
                <div className="col-lg-5 d-flex ">
                    <div className="content">
                    <h3>¿Por qué elegir a ConfiApp?</h3>
                    <p>
                        Desde inicios del año 2023 logramos <br />
                    </p><div className="col-xl-12 pt-8 pt-md-0 order-2 order-md-1 content">
                        <ul>
                        <li><i className="bi bi-check-circle" /> Unir a más tutores responsables con sus menores mediante nuestras actividades lúdicas</li>
                        </ul>
                        <ul>
                        <li><i className="bi bi-check-circle" /> Incentivar a más familias a hacer parte de esta comunidad.  </li>
                        </ul>
                        <ul>
                        <li><i className="bi bi-check-circle" /> Administrar de una forma organizada nuestras rutas, lo que concluyó en el Historial de Rutas  </li>
                        </ul>
                    </div>
                    <p />
                    </div>
                </div>
                <img src="assets/images/otrafamilia.jpg" id="imagenn" />
                <p>
                </p><div className="col-lg-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-xl-4 d-flex align-items-stretch">
                        <a href>
                            <div className="icon-box mt-4 mt-xl-0" id="hola">
                            <i className="bx bx-receipt" />
                            <h4>Oficinas principales</h4>
                            <p>Afortunadamente somos una empresa Colombiana, por ende hemos logrado expandirnos a la gran mayoría de departamentos del país 
                                y específicamente en el Cauca.
                            </p>
                            </div>
                        </a>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                        <a href="nosotros.html">
                            <div className="icon-box mt-4 mt-xl-0" id="hola">
                            <i className="bx bx-cube-alt" />
                            <h4>Cómo funciona nuestro aplicativo</h4>
                            <p>La tecnología ha ido innovando a través del tiempo, y así mismo ConfiApp se ha adaptado a estos cambios para ofrecer nuestros
                                servicios de la mejor manera.
                            </p>
                            </div>
                        </a>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                        <a href="tutores.html">
                            <div className="icon-box mt-4 mt-xl-0" id="hola">
                            <i className="bx bx-assets/images" />
                            <h4>Galería de imágenes Tutores y Menores</h4>
                            <p>Uno de nuestros mayores logros es poder ver cómo hemos ayudado a unir cada una de las familias que están en nuestra comunidad</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>{/* End .content*/}
                </div>
                </div>
                <p />
            </div>
            </section>{/* End Why Us Section */}
            {/* ======= Seccion de padres de familia ======= */}
            <section id="trainers" className="trainers"> <legend id="centrar"> Aportando tranquilidad a las familias </legend> <br />
            <div className="container" data-aos="fade-up">
                <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                    <img src="assets/images/padre.jpg" className="img-fluid" alt />
                    <div className="member-content">
                        <h4>Diego Fernando</h4>
                        <span>Padre de familia</span>
                        <p>
                        "Nunca pensé que estaría tan agradecido por una aplicación, pero la verdad es que esta app de seguridad infantil ha sido una verdadera bendición para mi familia. Gracias a ella, puedo mantenerme al tanto de la ubicación de mis hijos en tiempo real y asegurarme de que siempre estén a salvo. {/* Además, el hecho de poder recibir alertas de emergencia en caso de que ocurra algo es una gran tranquilidad para mí. Realmente recomiendo esta aplicación a todos los padres que quieran asegurarse de que sus hijos estén seguros en todo momento."*/}
                        </p>
                        <div className="social">
                        <a href="https://web.whatsapp.com/" target="_blank"><i className="bi bi-whatsapp" /></a>
                        <a href="https://www.facebook.com/SENACauca" target="_blank"><i className="bi bi-facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram" /></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i className="bi bi-google" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                    <img src="assets/images/juntos.jpg" className="img-fluid" alt />
                    <div className="member-content">
                        <h4>Camilo y Victoria</h4>
                        <span>Tutores a cargo</span>
                        <p>
                        "Como tutores, siempre estamos preocupados por la seguridad de los niños que cuidamos, y esta aplicación ha sido una herramienta invaluable para nosotros. Nos permite monitorear la ubicación de los niños en tiempo real, lo que nos brinda una mayor tranquilidad y nos permite actuar rápidamente en caso de que ocurra algo. {/*  Además, la aplicación es muy fácil de usar y los niños se sienten seguros al saber que estamos monitoreando su ubicación. Definitivamente recomendamos esta aplicación a cualquier persona que cuide niños."*/}
                        </p>
                        <div className="social">
                        <a href="https://web.whatsapp.com/" target="_blank"><i className="bi bi-whatsapp" /></a>
                        <a href="https://www.facebook.com/SENACauca" target="_blank"><i className="bi bi-facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram" /></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i className="bi bi-google" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="member">
                    <img src="assets/images/madre.jpg" className="img-fluid" alt />
                    <div className="member-content">
                        <h4>Ángela Sofía</h4>
                        <span>Madre de familia</span>
                        <p>
                        "No puedo decir lo suficiente sobre lo mucho que esta aplicación ha ayudado a mi familia. Como madre, siempre estoy preocupada por la seguridad de mis hijos, pero gracias a esta aplicación, puedo mantenerme al tanto de su ubicación en tiempo real y asegurarme de que estén a salvo en todo momento. {/* Además, el hecho de poder recibir alertas de emergencia en caso de que algo suceda me brinda una gran tranquilidad. Recomendaría esta aplicación a cualquier padre o madre que quiera asegurarse de que sus hijos estén seguros en todo momento."*/}
                        </p>
                        <div className="social">
                        <a href="https://web.whatsapp.com/" target="_blank"><i className="bi bi-whatsapp" /></a>
                        <a href="https://www.facebook.com/SENACauca" target="_blank"><i className="bi bi-facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram" /></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i className="bi bi-google" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* Fin padres de familia */}
        </main>{/* End #main */}
    </div>
  );
}

export default Contenido;