var videos = []; 

var canales =[
    {canal:"Fuera JOH",descripcion:"Canal de videos de marchas"},
    {canal:"Anime",descripcion:"Canal de videos de Animes cooooool♥"},
    {canal:"Musica",descripcion:"Canal de videos de Musiquita"}
];



(function(){
    for (var i = 0; i < canales.length; i++) {
        document.getElementById("canal").innerHTML += 
            `<option value="${canales[i].canal}">${canales[i].canal}</option>`;
    }    
})();


function guardar(){
    if(
        !validarCampoVacio(document.getElementById("titulo")) &&
        !validarCampoVacio(document.getElementById("urlc"))  &&
        !validarCampoVacio(document.getElementById("vistas"))&&
        !validarCampoVacio(document.getElementById("duracion"))&&
        !validarCampoVacio(document.getElementById("subido"))
    ){
        return;
    }
    

    var video = {
        titulo:document.getElementById("titulo").value,
        urlcaratula:document.getElementById("urlc").value,
        canal:document.getElementById("canal").value,
        vistas:document.getElementById("vistas").value,
        durac:document.getElementById("duracion").value,
        subido:document.getElementById("subido").value
    };

    videos.push(video); 
    console.log(videos);

    document.getElementById("ro").innerHTML+=

                ` <div  class=" col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
                <div style=" background-image: url(${video.urlcaratula})" id="viinfo" class="vidmin" >
                <label>${video.titulo} </label>
                <label style="background:black; opacity: 0.7; border-radius: 3px; padding: 2px ">${video.durac}</label>
                                               
                </div>
                <div id="des" >
                    <div style="margin-left:50px;">
                     <b>${video.titulo} </b>
                     <br>
                     <label style="font-size:15px; color:#aaadaf">${video.canal}</label>
                     
                     <label style="font-size:15px; color:#aaadaf">${video.vistas}|${video.durac}</label>
                        </div>
                </div>
            </div>
                
               
                </div>`;
                
}


function validarCampoVacio(campo){
    if (campo.value==""){
        campo.classList.add("campo-invalido");
        return false;
    }else{
        return true;
    }
}
