// Abre el menú lateral
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
}

// Cierra el menú lateral
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
}

// Muestra el contenido correspondiente basado en la opción seleccionada
function showContent(option) {
    let content = '';

    switch(option) {
        case 'username':
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("main-content").style.marginLeft = "0";
            content = `
                <h1>Username</h1>
                <div class="card">
                    <h2>WhatsMyName</h2>
                    <p>Buscando por nombres de usuario en diferentes lineas, nos sale en qué sitio web existe alguien con ese usuario.</p>
                    <a href="https://whatsmyname.app/" class="btn" target="_blank">Visitar Sitio</a>
                </div>
                <div class="card">
                    <h2>NameCheckup</h2>
                    <p>Ingrese un nombre de usuario y le mostrará los dominios validos, invalidos o los tomados y en las plataformas donde existe ya un usuario con ese nombre.</p>
                    <a href="https://namecheckup.com/" class="btn" target="_blank">Visitar Sitio</a>
                </div>
                
            `;
            break;
        case 'email':
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("main-content").style.marginLeft = "0";
            content = `
                <h1>Email</h1>
                <div class="card">
                    <h2>Have i Been pwned?</h2>
                    <p>Si desea comprobar la seguridad de su cuenta de correo, emplee este sitio web. Pwned es cuando su cuenta ha sido victima de un hackeo masivo y es posible que otros tengan acceso a su cuenta. Si en algun caso es afirmativo, porfavor, cambie su contraseña de inmediato.</p>
                    <a href="https://haveibeenpwned.com/" class="btn" target="_blank">Visitar Sitio</a>
                </div>
                <div class="card">
                    <h2>Readotify</h2>
                    <p>Si usted piensa que se ha comprometido la seguridad de su cuenta de correo y alguien está leyendo sus correos, envie un correo con Re@d Notify y podrá detectar cuando se lee ese correo.</p>
                    <a href="https://www.readnotify.com/" class="btn" target="_blank">Visitar Sitio</a>
                </div>
                <div class="card">
                    <h2>emailrep</h2>
                    <p>SE RECOMIENDA NUNCA ABRIR CORREOS DE ALGUIEN QUE NO SE SABE QUIEN ES. En el caso que abra un correo que no sabe claramente de quien es, con esta aplicacion puede detectar la reputación de esta cuenta basada en registros en rrss, actividad sospechosa, etc.</p>
                    <a href="https://emailrep.io/" class="btn" target="_blank">Visitar Sitio</a>
                </div>
            `;
            break;
            case 'ip':
                document.getElementById("sidebar").style.width = "0";
                document.getElementById("main-content").style.marginLeft = "0";
                content = `
                    <h1>IP</h1>
                    <div class="card">
                        <h2>IP Fingerprints</h2>
                        <p>Si dispone de una dirección IP, al introducirla en esta aplicación podrá geolocalizar al dispositivo con esa dirección IP.</p>
                        <a href="https://www.ipfingerprints.com/" class="btn" target="_blank">Visitar Sitio</a>
                    </div>
                    <div class="card">
                        <h2>PortScanner</h2>
                        <p>Introduciendo un Dominio o IP escanea el puerto y deja una descripción amplia acerca de lo que hemos especificado.</p>
                        <a href="https://portscanner.online/es/" class="btn" target="_blank">Visitar Sitio</a>
                    </div>
                    <div class="card">
                        <h2>ODIN</h2>
                        <p>El sistema de busqueda más amplio del mundo, pudiendo buscar IP, Puertos, Servicios, Productos, etc.</p>
                        <a href="https://www.getodin.com/" class="btn" target="_blank">Visitar Sitio</a>
                    </div>
                    <div class="card">
                        <h2>LiveIPMap</h2>
                        <p>Permite detectar o reportar un abuso de IP y localiza la IP y muestra si es abusa o no.</p>
                        <a href="https://www.liveipmap.com/" class="btn" target="_blank">Visitar Sitio</a>
                    </div>
                `;
                break;
                case 'imagen-video':
                    document.getElementById("sidebar").style.width = "0";
                    document.getElementById("main-content").style.marginLeft = "0";
                    content = `
                        <h1>Imagen/Video</h1>
                        <div class="card">
                            <h2>PimEyes</h2>
                            <p>Subiendo una foto podemos encontrar donde está publicada esa imagen. Sirve como seguridad ante las personas que emplean fotos de otros para contactar contigo.</p>
                            <a href="https://pimeyes.com/en" class="btn" target="_blank">Visitar Sitio</a>
                        </div>
                        <div class="card">
                            <h2>EarthCam</h2>
                            <p>Puede visualizar las cámaras de todo el mundo en esta aplicación.</p>
                            <a href="https://www.earthcam.com/" class="btn" target="_blank">Visitar Sitio</a>
                        </div>
                        <div class="card">
                            <h2>MyFonts</h2>
                            <p>Poniendo la URL de una imagen o subiendo la imagen, podemos detectar la fuente empleada en esta foto.</p>
                            <a href="https://ejemplo2.com" class="btn" target="_blank">Visitar Sitio</a>
                        </div>
                    `;
                    break;
                    case 'rrss':
                        document.getElementById("sidebar").style.width = "0";
                        document.getElementById("main-content").style.marginLeft = "0";
                        content = `
                            <h1>RRSS</h1>
                            <div class="card">
                                <h2>Lookup-ID</h2>
                                <p>Introduciendo la URL del perfil de alguien en Facebook puedes obtener su ID.</p>
                                <a href="https://lookup-id.com/" class="btn" target="_blank">Visitar Sitio</a>
                            </div>
                            <div class="card">
                                <h2>Inflact</h2>
                                <p>Introduciendo el usuario de una cuenta publica de Instagram podrás visualizar su perfil sin necesidad de acceder a instagram.</p>
                                <a href="https://inflact.com/profiles/instagram-viewer/" class="btn" target="_blank">Visitar Sitio</a>
                            </div>
                            <div class="card">
                                <h2>RedditCommentDownloader</h2>
                                <p>Gracias a esta aplicación podemos descargar el historial completo de cualquier usuario de reddit.</p>
                                <a href="https://roadtolarissa.com/javascript/reddit-comment-visualizer/" class="btn" target="_blank">Visitar Sitio</a>
                            </div>
                            <div class="card">
                                <h2>Google Social Search</h2>
                                <p>Esta aplicación sirve para busar todos los post de todas las redes sociales existentes de la persona que busques.</p>
                                <a href="https://www.social-searcher.com/google-social-search/" class="btn" target="_blank">Visitar Sitio</a>
                            </div>
                        `;
                        break;
                        case 'metadatos':
                            document.getElementById("sidebar").style.width = "0";
                            document.getElementById("main-content").style.marginLeft = "0";
                            content = `
                                <h1>Metadatos</h1>
                                <div class="card">
                                    <h2>ExitfTool</h2>
                                    <p>Con esta aplicación descargable podrás leer, escribir y editar los metadatos de archivos.</p>
                                    <a href="https://exiftool.org/" class="btn" target="_blank">Visitar Sitio</a>
                                </div>
                                <div class="card">
                                    <h2>Metagoofil</h2>
                                    <p>Metagoofil recopila informacion de metadatos de documentos publicos de una compañia en concreto.</p>
                                    <a href="https://www.edge-security.com/metagoofil.php" class="btn" target="_blank">Visitar Sitio</a>
                                </div>
                            `;
                            break;
                            case 'foros-blogs':
                                document.getElementById("sidebar").style.width = "0";
                                document.getElementById("main-content").style.marginLeft = "0";
                                content = `
                                    <h1>Foros/Blogs</h1>
                                    <div class="card">
                                        <h2>ForumsCariglist</h2>
                                        <p>Buscando un topico de Foro podemos encontrar todos los foros relacionados con ese tópico.</p>
                                        <a href="https://forums.craigslist.org/" class="btn" target="_blank">Visitar Sitio</a>
                                    </div>
                                    <div class="card">
                                        <h2>IRC Chat Rooms</h2>
                                        <p>Busca salas de chat para que pueda estar informado acerca de sus usuarios y sus tópicos.</p>
                                        <a href="https://netsplit.de/channels/search.php" class="btn" target="_blank">Visitar Sitio</a>
                                    </div>
                                    <div class="card">
                                        <h2>BlogSearchEngine</h2>
                                        <p>Esta aplicación encuentra diferentes blogs segun los términos de búsqueda que introduzca.</p>
                                        <a href="https://www.blogsearchengine.org/" class="btn" target="_blank">Visitar Sitio</a>
                                    </div>
                                `;
                                break;
                                case 'acerca-de':
                                    document.getElementById("sidebar").style.width = "0";
                                    document.getElementById("main-content").style.marginLeft = "0";
                                    content = `
                                        <h1>Acerca de</h1>
                                        <div class="card">
                                            <h2>Git-Hub</h2>
                                            <p>Perfil Git-Hub del autor.</p>
                                            <a href="https://github.com/bxbx3rt" class="btn" target="_blank">Visitar Sitio</a>
                                        </div>
                                        <div class="card">
                                            <h2>Correo de Contacto</h2>
                                            <p>2000100@proton.me</p>
                                        </div>
                                    `;
                                    break;

        // Agrega más casos para otras opciones del menú
        default:
            content = `
                <h1>Bienvenido a OSINT Framework</h1>
                <p>Selecciona una opción del menú lateral para ver el contenido.</p>
            `;
    }
    document.getElementById("content").innerHTML = content;
}
