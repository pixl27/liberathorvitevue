
<template>
    <div class="container">
        <div class="image-container">
            <img id="logo" src="https://i.postimg.cc/zXQXmR70/logotop.png" alt="Logo">
            <div id="circle"></div>
            <img src="../assets/orientation.jpg" alt="Orientation Image" style="margin-top: 30%; width: 100%;">
        </div>
        <div class="login-container">
            <!-- Login content here -->
            <div class="button-container">
                <button class="signup-button">S'INSCRIRE</button>
            </div>
            <div class="login-form">
                <h1>Bienvenue !</h1>
                <h2>Enregistrer Votre Compte</h2> 
                <div class="form-group">
                    <label for="name">NOM</label><br>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"><br>
                    <label for="email">EMAIL</label><br>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"><br>
                    <label for="password">PASSWORD</label><br>
                    <input type="password" class="form-control" id="password" aria-describedby="emailHelp"><br>
                    <button class="signin-button">SE CONNECTER</button>
                </div>
                <div class="row">
                <h2>Créer mon compte avec : </h2>

                
                <button class="social-button-fb">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button class="social-button-google">
                    <i class="fab fa-google"></i> 
                </button>
                    

                </div>
            </div>

        </div>
    </div>
</template>
<button class="signup-button">S'INSCRIRE</button>




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
    margin-top: 5%;
    margin-left: 5%;
}

.form-group {
    margin-top: 5%;
}
.form-control {
    margin-top: 1%;
    margin-bottom: 2%;
    width: 1100px;
    height: 40px; /* adjust as needed */
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
}

#logo {
    position: absolute;
    top: 25px;
    left: 49px;
    width: 104px;
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