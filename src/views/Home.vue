<template>
    <!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="https://static.staticsave.com/csscdn/main.css" rel="stylesheet">  
</head>
<body>
    <img id="logo" src="https://i.postimg.cc/zXQXmR70/logotop.png" alt="Logo">
    <div id="circle"></div>
    <div id="circle2"></div>

    <div class="container">
        <div id="sidebar" style="display: none;">
            <nav>
                <ul>
                  <li><span>Home</span></li>
                  <li><span>Products</span></li>
                  <li><span>Services</span></li>
                  <li><span>Contact</span></li>
                </ul>
              </nav>
        </div>
        <div id="backdrop" style="display: none;"></div>
<div id="searchBar" style="display: none;">
    <div class="input-group mb-3">
        <input type="text" id="searchInput" class="form-control" placeholder="Recherche" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">chercher</button>
      </div>
    <!-- <button id="closeButton">Close</button> -->
</div>
        <div class="row">
            <div class="four-pointed-star"></div>

            <div class="col-md-6 content" style= "margin-top: 11%;">
                <h1 style="font-size: 25px;color: brown;">"Avec Liberat’Ohr, Découvrez, Libérez, </br>Développez, Gérez, Et Maximisez Votre Potentiel "</h1>
                <p style="color: black;">Si vous voulez atteindre l’épanouissement dans votre vie éducative ou professionnelle, vivez selon votre « Design »</p>
                <p style="color: black;">Une vie conforme à votre « design » vous permettra de commencer chaque journée avec un sourire, de l'espoir etun plan.
                    La « découverte de soi » est la clé pour rester motivé, engagé, et performant dans ce que nous faisons dans la vie.
                    </p>
                <p style="color: black;">L'évaluation introspective et l'orientation autodirigée de Liberat'Ohr vous aidera à découvrir
                    votre profil de potentiel et vous guidera dans le choix du domaine d'étude ou professionnel cohérent avec votre "Design"
                    afin que vous deveniez "la meilleure version de vous-même"</p>
                <p style="color: black;font-size:13px">« La plus grande tragédie de la vie n'est pas la mort, mais une vie sans raison d’être » </br>  (Dr. Myles Munroe) [Traduction libre]</p>
                

            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-end mb-3" style= "margin-top: 8%;">
                    <button type="button" class="btn btn-outline-secondary rounded-4" style="width: 28%;margin-right: 1%;">S'inscrire</button>
                    <button class="btn btn-secondary mr-2 " id="searchButton" style="border-radius: 60%;margin-right: 1%;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                          </svg>                    </button>
                    <button class="btn btn-secondary " id="menuButton" style="border-radius: 60%;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                          </svg>                    </button>
                </div>
                <!-- <div class="container-dot">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div> -->
                  <div id="dotcontainer" style="    position: absolute;
                  top: 216px;
                  left: calc(94vw - 480px);
                  z-index: -9;">
                    <img class="dot" src="https://i.postimg.cc/4NGmx3NL/dot-removebg-preview.png" alt="dot">
                    <img class="dot" src="https://i.postimg.cc/4NGmx3NL/dot-removebg-preview.png" alt="dot">
                    <img class="dot" src="https://i.postimg.cc/4NGmx3NL/dot-removebg-preview.png" alt="dot">
                    <img class="dot" src="https://i.postimg.cc/4NGmx3NL/dot-removebg-preview.png" alt="dot">
                  </div>
                            <img style="margin-left: calc(48vw - 480px);border-radius: 9%;" src="https://i.postimg.cc/HkdPz1qL/door.jpg" class="img-fluid ml-auto" alt="Responsive image" width="500" height="500">
            </div>
        </div>
        <div class="row">

            <div class="col-md-6 content" style= "margin-top: 11%;">
                <h1 style="font-size: 25px;color: black;">Pourquoi Liberatohr </br> est si important ?</h1>
                <p style="color: black;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  Quel que soit votre milieu économique ou social, vous vous posez vous-mêmes la questions : quel est votre vrai potentiel ?</p>
                  <p style="color: black;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  Vous êtes peut-être confus au moment de faire votre choix dans vos parcours éducatifs et/ou professionnels ?</p>
                  <p style="color: black;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  Vous recherchez peut-être des ressources ou des outils pratiques afin de vous aider à faire des choix délibérés, clairs, et bien informés ?</p>
                  <p style="color: black;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  Souffrez-vous des différences de perspectives entre vous et votre entourage (parents – éducateurs – enfants) en termes d’orientation ?</p>
                  <p style="color: black;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  Vous êtes parents ou éducateurs ou écoles qui veulent adéquatement accompagnés vos enfants ou étudiants dans leur processus de découverte de soi  ?</p>
                  <p style="color: black;font-weight: 600;"> 
                    Ainsi cette plateforme Liberat'Ohr est faites à la fois pour les jeunes, adultes, parents, éducateurs(trices).</p>
                  <button type="button" class="btn btn-outline-warning rounded-4" style="width: 28%;margin-right: 1%;inline-size: auto;">Decouvrez Vos potentiels <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                  </svg></button>

            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-end mb-3" style= "margin-top: 15%;">
                </div>
                <div class="square"></div>

                <img style="border-radius: 9%;" src="https://i.postimg.cc/6QC94vGP/man-holding-contract.jpg" class="img-fluid ml-auto " alt="Responsive image">
                <div id="circle3"></div>

            </div>
        </div>
        <div class="row w-100" style="margin-top: 5%;">
            <div class="col-md-12 position-relative">
                <img src="https://i.postimg.cc/vZ6Z030F/image.png"style="    position: absolute;
    /* width: 100%; */
    left: -14%;
    width: 50%;
    -webkit-border-radius: 0px 65px 65px 0px;" alt="Responsive image">
                <div class="position-absolute" style="margin-top: 16%; left: 58%; transform: translate(-50%, -50%); color: black">
                    <h1 style="    font-size: xx-large;">Où suis-je dans ma poursuite de ma « raison d’être » ?</h1>
                    <p style="text-align: justify; letter-spacing: 0px;font-size:small;">Vous n’êtes pas venus sur terre par hasard ni par erreur. Dieu vous a 
donner une vie pour une raison, c’est votre raison d’être. Afin que vous puissiez accomplir cette mission sur terre, Il vous a équipé de potentiel. 
Votre connaissance de votre « raison d’être » dépends en quelque sorte de votre prise de conscience de votre potentiel. Ainsi si vous vivez encore 
dans l’ambiguïté sur ce que vous voulez ou devrez faire dans votre vie, c’est 
que vous êtes peut-être confus dans votre connaissance de vos potentiels.</p>
                    <p style="text-align: justify;font-size: smaller;">Avant de passer à la découverte de vos potentiels, il est d’abord nécessaire d’évaluer 
                        où vous en êtes dans la poursuite de votre raison d’être par un questionnaire simple et rapide.</p>
                </div>
                <div class="position-absolute" style="bottom: -440px; right: 156px;">
                    <button type="button" class="btn btn-warning rounded-4">repondez au questionnaire <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg></button>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 45%;">
            <img id="logobot" src="https://i.postimg.cc/zXQXmR70/logotop.png" alt="Logo">

            <div id="circle4"></div>

            <div class="col-md-6">
                <p>+261 34 99 832 95</p>
                <p>liberat’ohr@gmail.com </p>
                <p>liberat-ohr@gmail.com </p>
            </div>
            <div id="circle5"></div>

            <div class="col-md-6">
                <h2>Nos Partenaires</h2>
                <img width="500px" src="https://i.postimg.cc/N09C9rGx/Capture-d-cran-2024-02-14-084621-removebg-preview.png" alt="Partenaire">
            </div>

        </div>
    </div>
</body>

</html>

</template>
<script lang="ts">
export default {
  mounted() {
    document.getElementById('searchButton')!.addEventListener('click', function() {
      document.getElementById('backdrop')!.style.display = 'block';
      document.getElementById('searchBar')!.style.display = 'block';

      setTimeout(function() {
        document.getElementById('backdrop')!.style.opacity = '1';
        document.getElementById('searchBar')!.style.top = '0';
      }, 50);
    });

    document.getElementById('backdrop')!.addEventListener('click', function() {
      document.getElementById('backdrop')!.style.opacity = '0';
      document.getElementById('searchBar')!.style.top = '-100%';
      document.getElementById('sidebar')!.style.left = '-100%';

      setTimeout(function() {
        document.getElementById('backdrop')!.style.display = 'none';
      }, 500);
    });

    document.getElementById('menuButton')!.addEventListener('click', function() {
      document.getElementById('backdrop')!.style.display = 'block';
      document.getElementById('sidebar')!.style.display = 'block';

      setTimeout(function() {
        document.getElementById('backdrop')!.style.opacity = '1';
        document.getElementById('sidebar')!.style.left = '0';

      }, 50);
    });
  },
};
</script>
<style scoped>

        .content {
            color: white;
        }
        #logo {
            position: absolute;
    top: 25px;
    left: 49px;
    width: 104px;
    height: 76px;
    z-index: 300;
}
#logobot {
    position: absolute;
    top: 1772px;
    left: 54px;
    width: 148px;
    height: 76px;
    z-index: 300;
}
.four-pointed-star{
    position: absolute;
    /* margin: 2em auto; */
    margin-top: 9%;
    margin-left: calc(26vw);
    width: 0em;
    font-size: 106%;
    z-index: -999;
}

.four-pointed-star:before{
  content:"";
  position:absolute;
  background:#EEBE41;
  width:1em;
  height:1.15em;
  transform:rotate(-45deg) skewX(22.5deg) skewY(22.5deg);
}

.four-pointed-star:after{
  content:"";
  position:absolute;
  background:#EEBE41;
  width:1em;
  height:1.15em;
  transform:rotate(45deg) skewX(22.5deg) skewY(22.5deg);
}
#circle {
    position: absolute;
    top: -23px;
    left: -43px;
    width: 112px;
    height: 91px;
    border-radius: 50%;
    background-color: #02272F;
        }
        .container-dot {
            display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
#circle2 {
    position: absolute;
    top:  712px;
    left: -40px;
    width: 134px;
    height: 127px;
    border-radius: 50%;
    background-color: #EEBE41;
    z-index: -9;
        }
        .container-dot {
            display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
#circle3 {
    position: absolute;
    top: 1112px;
    left: calc(95vw);
    width: 134px;
    height: 127px;
    border-radius: 50%;
    background-color: #EEBE41;
    z-index: -9;
        }
        #circle4 {
            position: absolute;
    top: 1734px;

    left: -4%;
    width: 134px;
    height: 127px;
    border-radius: 50%;
    background-color: #02272F;
    z-index: -9;
        }
        #circle5{
    position: absolute;
    top: 2069px;
    left:  calc(95vw);
    width: 120px;
    height: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;    background-color: #02272F;
    z-index: -9;
        }
        .container-dot {
            display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.parent-container {
    position: relative; /* or absolute, fixed, or sticky */
    /* other styles */
}
.square {
    position: absolute;
    left: 58%;
    width: 430px;
    height: 430px;
    z-index: -9;
    border: 55px solid #CFDEDB;
    background: transparent;
    transform: rotate(45deg);
}

.dotcontainer {
            display: flex;
            justify-content: space-evenly;
            position: absolute;
            top: 53%;
            width: 100%;
        }
        .dot {
            width: 20px;
        }
</style>