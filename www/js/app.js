var nombre = "";

function SHA1(msg) {
  function rotate_left(n,s) {
    var t4 = ( n<<s ) | (n>>>(32-s));
    return t4;
  };
  function lsb_hex(val) {
    var str="";
    var i;
    var vh;
    var vl;
    for( i=0; i<=6; i+=2 ) {
      vh = (val>>>(i*4+4))&0x0f;
      vl = (val>>>(i*4))&0x0f;
      str += vh.toString(16) + vl.toString(16);
    }
    return str;
  };
  function cvt_hex(val) {
    var str="";
    var i;
    var v;
    for( i=7; i>=0; i-- ) {
      v = (val>>>(i*4))&0x0f;
      str += v.toString(16);
    }
    return str;
  };
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  };
  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 0x67452301;
  var H1 = 0xEFCDAB89;
  var H2 = 0x98BADCFE;
  var H3 = 0x10325476;
  var H4 = 0xC3D2E1F0;
  var A, B, C, D, E;
  var temp;
  msg = Utf8Encode(msg);
  var msg_len = msg.length;
  var word_array = new Array();
  for( i=0; i<msg_len-3; i+=4 ) {
    j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
    msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
    word_array.push( j );
  }
  switch( msg_len % 4 ) {
    case 0:
      i = 0x080000000;
    break;
    case 1:
      i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
    break;
    case 2:
      i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
    break;
    case 3:
      i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8  | 0x80;
    break;
  }
  word_array.push( i );
  while( (word_array.length % 16) != 14 ) word_array.push( 0 );
  word_array.push( msg_len>>>29 );
  word_array.push( (msg_len<<3)&0x0ffffffff );
  for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
    for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
    for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for( i= 0; i<=19; i++ ) {
      temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B,30);
      B = A;
      A = temp;
    }
    for( i=20; i<=39; i++ ) {
      temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B,30);
      B = A;
      A = temp;
    }
    for( i=40; i<=59; i++ ) {
      temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B,30);
      B = A;
      A = temp;
    }
    for( i=60; i<=79; i++ ) {
      temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotate_left(B,30);
      B = A;
      A = temp;
    }
    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }
  var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

  return temp.toLowerCase();
} 

    
    function login(){

         $.getJSON('http://www.uglobal.edu.co/WebService/login/login.php',function(data){

          console.log(JSON.stringify(data));

          var username = document.formulario.username.value;
          var password = document.formulario.password.value;
          var pass = SHA1(password);


          if(username == "" || password == ""){
                    alert('Rellena todos los campos');
          }else{

          for (var i = 0; i < data.length; i++) {
                
                if(data[i].username == username && data[i].password == pass){
                      nombre = data[i].username;
                      $("#nombre").html("<h3>"+nombre+"</h3>");
                      $('#error').html('');
                      window.location.href = "index.html#cuenta";
                      break;
                }else{

                  $('#error').html('<center><h5>Usuario o contraseña incorrecto<h5></center>');
                  $('#password').val("");
                }
          };
         }            
        });

    }

    function perfil(){

         $.getJSON('http://www.uglobal.edu.co/WebService/perfil/',function(dat){

          console.log(JSON.stringify(dat));

          for (var i = 0; i < dat.length; i++) {
                
                if(dat[i].Cedula == nombre){

                    $("#datos").html(                              
                              "<h5>Nombres:</h5> <p> "+dat[i].Nombres+" "+dat[i].Apellidos+" </p> "+                              
                              "<h5>Cédula:</h5> <p> "+dat[i].Cedula+" </p> "+
                              "<h5>Edad:</h5> <p> "+dat[i].Edad+" </p> "+
                              "<h5>Correo:</h5> <p> "+dat[i].Correo+" </p> "+
                              "<h5>Ciudad:</h5> <p> "+dat[i].Ciudad+" </p> "+
                              "<h5>Telefono:</h5> <p> "+dat[i].Telefono+" </p> "+
                              "<h5>Discapacidad:</h5> <p> "+dat[i].Tipo_Discapacidad+" </p> "+
                              "<h5>Ocupacion:</h5> <p> "+dat[i].Ocupacion+" </p> "+
                              "<h5>Etnia:</h5> <p> "+dat[i].Etnia+" </p> "
                              
                      );
                  window.location.href="index.html#perfil";
                }

          };
                     
        });


    }

    function videocall(){

      var apiKey ="";
      var sessionId="";
      var tokenJ="";
      var tele = $("#un").val();

      if(tele =="" ){
                    alert('Ingresa Un Numero Telefonico');

          }else{

        $.getJSON('http://www.uglobal.edu.co/WebService/index.php',function(data){

          console.log(JSON.stringify(data));

          apiKey = data[0].key;
          sessionId = data[0].sesion;
          tokenJ = data[0].token;

          console.log(apiKey);

          var session = OT.initSession(apiKey, sessionId); 
          session.on({ 
              streamCreated: function(event) { 
                session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append'}); 
              } 
          }); 
          session.connect(tokenJ, function(error) {
            if (error) {
              console.log(error.message);
            } else {
              session.publish('myPublisherDiv'); 

              $.ajax({
                type: "POST",
                url: "http://www.uglobal.edu.co/WebService/credenciales/insertar.php",
                data: ({sesion: sessionId, token: tokenJ, numero: tele, cedula: nombre }),
                cache: false,
                dataType: "text"

             });

              window.location.href="index.html#videollamada";
            }
           });   
                     
         });
    }
  }
  function insertar() {

    var elNombre = $("#nombres").val();
    var elApell = $("#apellidos").val();
    var tipoDoc = $('#documento').val();
    var n_documento = $('#n_documento').val();
    var contrasena = $('#contrasena').val();
    var email = $('#email').val(); 
    var edad = $('#edad').val();
    var estrato = $('#estrato').val();
    var educativo = $ ('#n_educativo').val();
    var miciudad = $ ('#ciudad').val();
    var mietnia = $ ('#etnia').val();
    var elTipousu = $ ('#t_usuario').val();
    var elgenero = $ ('#genero').val();
    var ladisc = $ ('#t_discapacidad').val();
    var laocupa = $ ('#ocupacion').val();
    var eldesplaza = $ ('#v_desplaza').val();
    var eltelefono = $ ('#n_telefono').val();
    var validapass = $ ('#r_contrasena').val(); 
    
    if(elNombre == "" && elApell == "" && contrasena =="" && email =="" && miciudad =="" ){
                    alert('Rellena todos los campos');

          }else{ if (contrasena == validapass) {

             $.ajax({
             type: "POST",
             url: "http://www.uglobal.edu.co/WebService/registro/registro.php",
             data: ({nombre: elNombre, apellido: elApell, t_document: tipoDoc, n_document: n_documento, password: contrasena, correo: email, age: edad, estrat: estrato, n_educa: educativo, etnia: mietnia, t_usu: elTipousu, t_disca: ladisc, ocupacion: laocupa, desplazamiento: eldesplaza, telefono: eltelefono, genero: elgenero, ciudad: miciudad}),
             cache: false,
             dataType: "text",
             success: onSuccess
             
           });

          }else{
            alert('contraseñas no coinciden');
          }

        }
            function onSuccess()
            {
             
              alert('Se han registrado tus datos');
              window.location.href="index.html";  

            }

}   

function stopPublishing() {
    if (publisher) {
        session.unpublish(publisher);
    }
    publisher = null;

    show('publishLink');
    hide('unpublishLink');
}


var cedu =  ""; 

function recordar(){
  var contentType ="application/x-www-form-urlencoded; charset=utf-8";

  cedu = $("#cedula").val();
  var n_contra = $("#n_contra").val();
  var rn_contra = $("#rn_contra").val();

  if(cedu == "" || n_contra == "" || rn_contra == ""){

      alert("Verifica todos los campos");

  }else{
    if(n_contra == rn_contra){

        $.ajax({
             type: "POST",
             url: "http://www.uglobal.edu.co/WebService/recordar/index.php",
             data: ({cedula : cedu, ncontrasena: n_contra}),
             cache: false,
             dataType: "text",
             success: onSuccess
             
           });
    }else{
      alert("Las contraseñas no coinciden");
    }
  }

  function onSuccess()
            {
               

              $.getJSON('http://www.uglobal.edu.co/WebService/perfil/',function(dat){

              console.log(JSON.stringify(dat));

              for (var i = 0; i < dat.length; i++) {
                
                if(dat[i].Cedula == cedu){

                  alert("Se ha modificado tu contraseña");
                  break;
                  window.location.href="index.html#perfil";
                }else{
                  alert("Esta cédula no existe");
                  break;
                }

          };
                     
        });

            }


}

function cerrar() {
 navigator.app.exitApp();
}