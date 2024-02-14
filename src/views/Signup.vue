<template>
    <!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="https://static.staticsave.com/csscdn/main.css" rel="stylesheet">  
</head>
<body >
    <img id="logo" src="https://i.postimg.cc/zXQXmR70/logotop.png" alt="Logo">
    <div id="circle"></div>
    <div id="circle2"></div>
    <div id="circle3"></div>
    <div id="circle4"></div>
    <div class="white-line"></div>
    <div class="white-line" style="left: 299px;
    top: 348px;"></div>

    <div class="container" style="margin-right: 390px;">
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
            <div class="four-pointed-star" style="font-size: 168%;
    left: 365px;
    top: 1132px;
"></div>

            <div class="col-md-6 content" style= "margin-top: 11%;position: absolute;">
                <h1 style="font-size: 64px;color: brown;">Bienvenue !</h1>
                <h1 style="font-size: 31px;color: darkgrey;">Créer Votre Compte<br/></h1>


            </div>
            <div class="col-md-6" style="background-color: white; margin-top: 11%; height: 238px;     width: 838px;   margin-left: 905px; border-radius: 37px; padding: 20px;">
    <div class="icon-container">
        <div 
            class="icon-text" 
            v-for="(option, index) in options" 
            :key="index" 
            @click="selectOption(option)"
            :class="{ 'selected': selectedOption === option }"
        >
            <img src="https://i.postimg.cc/bwjFDvSX/placholder-removebg-preview.png">
            <p class="customlabel">{{ option }}</p>
        </div>
    </div>
</div>
        </div>
        <div class="row">
            <div class="col-md-6" style="">
    <!-- Icons and text here -->

  
    <div class="form-group">
        <div class="input-container">
            <label class="customlabel" for="nom">Nom:</label>
            <InputText id="username" style="height: 87px;
    width: 650px;
    border: 2px solid black;
    border-radius: 27px;margin-top: 22px;" aria-describedby="username-help" />
        </div>

        <div class="input-container" style="    margin-left: 116px;">
            <label   class="customlabel" for="prenom">Prenom:</label>
            <InputText id="prenom"  style="height: 87px;
    width: 650px;
    border: 2px solid black;
    margin-left:10px;
    margin-top: 22px;
    border-radius: 27px;" name="prenom"/>
        </div>
    </div>
    <div style="    margin-left: 780px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;">    <label style="font-size: x-large;
    font-weight: bold;">
        SEXE
    </label>
        <label style="font-size: x-large;display: flex;  margin-left: 50px;  align-items: center;
">
            <Checkbox style="margin-right: 25px;" id="homme" name="gender" value="homme"/>
            Homme
        </label>
        <label  style="font-size: x-large;display: flex;  margin-left: 50px;  align-items: center;
">
            <Checkbox style="margin-right: 25px;" id="femme" name="gender" value="femme"/>
            Femme
        </label></div>

        <div class="form-group">
        <div class="input-container">
            <label  class="customlabel" for="age">Age:</label>
            <InputText id="age" style="height: 87px;
    width: 216px;
    border: 2px solid black;
    border-radius: 27px;" name="age"/>
        </div>

        <div class="input-container" style="    margin-left:169px;
">
            <label  class="customlabel" for="nationalite">Nationalite:</label>
            <InputText  style="height: 87px;
    width: 1040px;
    border: 2px solid black;
    border-radius: 27px;" id="nationalite" name="nationalite"/>
        </div>
    </div>
    <div class="form-group">
        <div class="input-container"  style="z-index: 1;">
            <label  class="customlabel" for="pays">Pays:</label>
            <InputText style="height: 87px;
    width: 650px;
    border: 2px solid black;
    border-radius: 27px;" id="pays" name="pays"/>
        </div>

        <div class="input-container" style="margin-left: 127px;">
            <label  class="customlabel" for="region">Region:</label>
            <InputText style="height: 87px;
    width: 650px;
    border: 2px solid black;
    border-radius: 27px;" id="region" name="region"/>
        </div>
    </div>
    <div class="form-group">
        <div class="input-container" style="z-index: 1;">
            <label  class="customlabel" for="adresse">Adresse:</label>
            <InputText style="height: 87px;
    width: 1427px;
    border: 2px solid black;
    border-radius: 27px;" id="adresse" name="adresse"/>
        </div>
    </div>
    <div class="form-group">
        <div class="input-container">
            <label  class="customlabel" for="email">Email:</label>
            <InputText style="height: 87px;
    width: 650px;
    border: 2px solid black;
    border-radius: 27px;" id="email" name="email"/>
        </div>

        <div class="input-container" style="margin-left: 127px;">
            <label  class="customlabel" for="telephone">Telephone:</label>
            <InputText style="height: 87px;
    width: 650px;
    border: 2px solid black;
    border-radius: 27px;" id="telephone" name="telephone"/>
        </div>
    </div>
 

</div>
        </div>
    </div>
    <div class="" style="background-color: white; padding: 20px;    height: 210px;width: 1290px;-webkit-border-radius: 0px 65px 65px 0px; margin-top: 20px;    display: flex;
flex-direction: column;">
        <label style="  margin-left: 140px; margin-top: 26px;  font-size: xx-large;color: darkgrey;
">
            <Checkbox style="margin-bottom: 12px;" id="ok" name="ok" value="ok"/>
            J’accepte les conditions d’utilisation
        </label>
        <label style=" margin-left: 140px;   font-size: xx-large; color: darkgrey;
">
            <Checkbox style="margin-bottom: 12px;" id="no" name="no" value="no"/>
            Je souhaite recevoir les offres, les nouveautés et conseils du site
        </label>

    </div>
    <Button severity="contrast"  style="    display: block;
    margin-top: 482px;
    border-radius: 29px;
    position: absolute;
    width: 221px;
    height: 75px;
    font-size: x-large;
    font-weight: bold;
    /* bottom: -482px; */
    /* left: 160px; */
    margin-top: -39px;
    margin-left: 131px;">Se connecter</button>
    <div class="spacer">

    </div>
</body>

</html>

</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            options: ['ETUDIANT', 'PARENTS', 'ENSEIGNANTS'],
            selectedOption: null as string | null,
        }
    },
    methods: {
        selectOption(option: string) {
            this.selectedOption = option;
        }
    }
})
</script>
<style scoped>
.selected {
    /* Add your CSS styles for the selected option here */
    border: 2px solid #000;
}
.white-line {
    position: absolute;
    width: 212px;
    top: 190px;
    left: 162px;
    height: 11px;
    background-color: #ffffff;
}
.spacer {
    margin-top: 100px;
}
.customlabel {
    font-size: xx-large;
    font-weight: bold;
}
.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.input-container {
    display: flex;
    flex-direction: column;
}
.icon-container {
    display: flex;
    justify-content: space-around;
}

.icon-text {
    text-align: center;
}

.icon-class {
    font-size: 24px;
}
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
    margin-top: 120px;
    margin-left: calc(48vw);
    width: 28em;
    font-size: 250%;
    /* z-index: -999;*/
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
    top: 82px;
    left: 1785px;
    width: 174px;
    height: 166px;
    border-radius: 50%;
    background-color: #EEBE41;
        }
        .container-dot {
            display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
#circle3 {
    position: absolute;
    top: 732px;
    left: calc(-7vw);
    width: 369px;
    height: 337px;
    border-radius: 50%;
    background-color: #EEBE41;
        }
        #circle4 {
            position: absolute;
    height: 100px;
    width: 200px;
    border-radius: 100px 100px 0 0;
    top: 1422px;
    left: 67%;
    /* border-radius: 50%; */
    background-color: #02272F;
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