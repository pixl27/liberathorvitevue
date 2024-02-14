
<template>

    
    <div class="container" >
        <div class="image-container">
            <div class="four-pointed-star" style="font-size:168%;"></div>
            <img id="logo" src="https://i.postimg.cc/zXQXmR70/logotop.png" alt="Logo">
            <div id="circle"></div>
            <div id="circle2"></div>
            <div id="circle4"></div>
            <img src="../assets/orientation.jpg" alt="Orientation Image" style="margin-top: 30%; width: 100%;">
        </div>
        <div class="login-container">
            <!-- Login content here -->
            <div class="button-container">
                <Button class="signup-button">S'INSCRIRE</button>
            </div>
            <div class="login-form">
                <h1>Bienvenue !</h1>
                <h2>Enregistrer Votre Compte</h2> 
                <div class="form-group">
                    <label for="name">NOM</label><br>
                    <InputText type="text" class="form-control" id="name" aria-describedby="emailHelp"/><br>
                    <label for="email">EMAIL</label><br>
                    <InputText type="email" class="form-control" id="email" aria-describedby="emailHelp"/><br>
                    <label for="password">MOT DE PASSE</label><br>
                    <InputText type="password" class="form-control" id="password" aria-describedby="emailHelp"/><br>
                    <Button class="signin-button">SE CONNECTER</button>
                </div>
                <div class="row">
                <h2>Créer mon compte avec : </h2>

                
               
                <Button class="facebook-button">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <Button class="facebook-button">
                    <i class="fab fa-google"></i> 
                </button>
                    

                </div>
            </div>

        </div>
    </div>


</template>




<style scoped>


.fab{
    font-size: 30px;
}

.social-button-fb {
    margin-left: 20px;
    background-color: #b7d6d4; /* Facebook's color */
    color: #5f5555; /* white color for the icon */
    padding: 30px; /* add some padding */
    border-radius: 50%; /* make the button a circle */
    border: 2px solid black; /* add a black border */
}

.social-button-google {
    margin-left: 20px;
    background-color: #b7d6d4; /* Facebook's color */
    color: #5f5555; /* white color for the icon */
    padding: 25px; /* add some padding */
    border-radius: 50%; /* make the button a circle */
    border: 2px solid black; /* add a black border */
}
.row{
    display: flex;
    justify-content: normal;
    margin-top: 5%;
}
.login-form{
    margin-top: 2%;
    margin-left: 5%;
}

.facebook-button {
    margin-left: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px; /* adjust as needed */
    height: 50px; /* adjust as needed */
    border-radius: 50%; /* makes the button circular */
    background-color: #b7d6d4; /* Facebook's color */
    color: #0c0c0c; /* white color for the icon */
    border: 2px solid black; /* add a black border */
    font-size: 24px; /* adjust as needed */
}

.form-group {
    margin-top: 5%;
}
.form-control {
    margin-top: 1%;
    margin-bottom: 2%;
    width: 1100px;
    height: 70px; /* adjust as needed */
    padding: 10px; /* adjust as needed */
    border-radius: 15px; /* adjust as needed */
    font-size: 20px; /* adjust as needed */
}

.login-form h1 {
    color: #a85941; /* change to your desired color */
    font-size: 40px; /* change to your desired size */
    font-style: bold; 
    margin-bottom: 0;/* change to your desired style */
}

.login-form label {
    font-size: 30px; /* change to your desired size */
    font-style: bold; 
    margin-bottom: 0;/* change to your desired style */
}

.login-form h2 {
    color: #6a7c855e; /* change to your desired color */
    font-size: 35px; /* change to your desired size */
    font-style: bold;
    margin-top: 0; /* change to your desired style */
}
.button-container {
    margin-top: 2%;
    margin-left: 90%
}

.signin-button {
    margin-top: 2%;
    font-size: 30px;
    text-align: center;
    line-height: 60px; /* adjust this value to match your button's height */
    border-radius: 40px; /* add this line to make the button rounded */
    background-color: #000000; /* change to black */
    color: #ffffff; /* change to white */
    border: 2px solid #02272F;
}
.signup-button {
    font-size: medium;
    text-align: center;
    line-height: 30px; /* adjust this value to match your button's height */
    border-radius: 25px; /* add this line to make the button rounded */
    background-color: #b7d6d4;
    border: 2px solid #02272F;
}
.container {
    display: flex;
    height: 100vh;
}

.image-container {
    width: 30%;
    background-color: #ffffff;
}


.login-container {
    width: 70%;
    background-color: #b7d6d4;
    z-index: 300;
}

.four-pointed-star{
    position: absolute;
    /* margin: 2em auto; */
    margin-top: 90px;
    margin-left: 563px;
    width: 28em;
    font-size: 250%;
    z-index:350;
}

#circle4 {
            position: absolute;
    height: 100px;
    width: 200px;
    border-radius: 100px 100px 0 0;
    top: 845px;
    left: 2%;
    /* border-radius: 50%; */
    background-color: #02272F;
        }

#circle2 {
    position: absolute;
    top: 750px;
    left: 500px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #EEBE41;
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

#logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 125px;
    height: 76px;
    z-index: 300;
}

#circle {
    position: absolute;
    top: -90px;
    left: -90px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #02272F;
   
}

</style>