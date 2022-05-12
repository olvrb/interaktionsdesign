<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />	
            <div class = "popup-insideimg">
                <img src = "assets/test.jpg" alt="test"> <!--Call on image from images-->
                
            </div>	
            <div class = "popup-exitbtn">           	
		        <input type="image" id="popup-close" alt="exit" src="./assets/cross.png" @click="TogglePopup()"><!--fixa bilden-->	
            </div> 	
		</div>
        <div class="btm-popup">
            <div class = "btm-popuptitle">
                <h2>
                    <strong>Titel på bild</strong> <!-- Titel på bild tagen från databas-->
                </h2>
                
                <div class = "btm-popupkeywrd">
                    <h4>Nyckelord</h4>
                </div>
                
                <div class = "tag-foundationtot">                    
                

                    <div class = "tag-foundation1">                    
                    </div>

                    <div class = "tag-foundation2">                    
                    </div>

                    <div class = "tag-foundation3">                    
                    </div>

                    <div class = "tag-foundation4">                    
                    </div>

                    <div class = "tag-foundation5">                    
                    </div>
                </div>

                <div class = "tagtot"> <!--Lägga in så att alla txt taggar ändras beroende på vad för taggar som läggs in och så att dem är invisible om inte alla är ifyllda, max 5-->

                    <div class = "tag-txt1">
                        <p>tagg1</p>                    
                    </div>

                    <div class = "tag-txt2">
                        <p>tagg2</p>                    
                    </div>

                    <div class = "tag-txt3">
                        <p>tagg3</p>                    
                    </div>

                    <div class = "tag-txt4">
                        <p>tagg4</p>                    
                    </div>

                    <div class = "tag-txt5">
                        <p>tagg5</p>                    
                    </div> 
                </div>

                <div class = "btm-photographer">
                    <h4>Fotograf</h4>
                </div>

                <div class = "btm-photographername">
                    <p>Test testsson</p>
                </div>

                <div class = "btm-desctitle">
                    <h4>Beskrivning</h4>
                </div>

                <div class = "btm-desc">
                    <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia. Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
                </div> <!--Lägga in så att man kan köra desc när man klickar på en knapp-->
                
                <div class = "btm-imageused">
                    <p><strong>Denna bild är inköpt och kan användas</strong></p> 
                    
                    <div class = "btm-imageusedcolourred">
                        <p>N</p><!--N, skriv in så att den kan ändras beroende på databas--> 
                    </div>

                    <p><strong>gånger till</strong></p>
                </div>

                <div class = "btm-edit">
                    <p><strong>Redigera</strong></p> <!--Måste göra en ny sida för att redigera, lägg in en pennikon också-->
                </div>

                <div class = "btm-download">
                    <p><strong>Ladda ner</strong></p> <!--Gör så att det går att ladda ner, lägg in en nedladdningsikon också-->
                </div>
                
            </div>
        </div>
        
	</div>    
</template>

<script>
export default {
	props: ['TogglePopup'],
    
}


</script>

<style lang="scss" scoped>
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;     
        background-color: rgba(0, 0, 0, 0.5); //Fixa background color så den tar hela skärmen?
        
        display: flex;
        align-items: center;
        justify-content: center;
        
    
    .popup-inner {
        position: relative;
        background: #FFF;
        padding: 32px;   
        top: -100px;
        height: 400px;
        width: 800px; 
        border-radius: 4%;
        margin-bottom: 5px; 

    .popup-insideimg{
        position:relative;
        width:800px;
        height:350px;   
    }   
    
    .popup-exitbtn{
        position:relative; 
        top: -370px; 
        right: -400px;         
    }         
    }

    .btm-popup{
        position:fixed;
        margin-top: 5px;
        margin-bottom: 5px;
        left: 527px;
        right: 0;
        bottom: 0;
        z-index: 99;
        height: 300px;
        width: 865px;
        background-color: #FFF;
        border-radius: 4%;

        align-items: center;
        
        
    }
    .btm-popuptitle{
        position: relative;
        left: -350px;
        

    .btm-popupkeywrd{
        position: relative;
        left: -35px;
        top: -10px;
        
    }

    .tag-foundationtot{
        position:absolute; 
        margin-left: 360px;        
        top: 70px; 
    }

    .tag-foundation1{
        position: relative;
        margin-right: 30px;         
        height: 30px;
        width: 70px;
        background-color: LightGray;
        border-radius: 15%;    
        float: left;    
    }

    .tag-foundation2{
        position: relative;
        margin-right: 30px;         
        height: 30px;
        width: 70px;
        background-color: LightGray;
        border-radius: 15%;    
        float: left;        
    }

    .tag-foundation3{
        position: relative;        
        margin-right: 30px;  
        height: 30px;
        width: 70px;
        background-color: LightGray;
        border-radius: 15%;   
        float: left;         
    }

    .tag-foundation4{
        position: relative;        
        margin-right: 30px;
        height: 30px;
        width: 70px;
        background-color: LightGray;
        border-radius: 15%; 
        float: left;           
    }

    .tag-foundation5{
        position: relative;         
        margin-right: 30px;
        height: 30px;
        width: 70px;
        background-color: LightGray;
        border-radius: 15%; 
        float: left;           
    }

    .tagtot {
        position:absolute;        
        left: 375px;
        margin-top: -35px;
        

    .tag-txt1{
        position: relative;
        margin-right: 60px;
        display:inline-block;        
        float:left;        
    }

    .tag-txt2{
        position: relative;
        margin-right: 60px;
        display:inline-block;  
        float:left;
      
    }

    .tag-txt3{
        position: relative;
        margin-right: 60px;
        display:inline-block;
        float:left;
        
        
    }

    .tag-txt4{
        position: relative;
        margin-right: 60px;
        display:inline-block;
        float:left;
        
        
    }

    .tag-txt5{
        position: relative;        
        display:inline-block;
        float:left;     
        
    }
    }
    }

    .btm-photographer{
        position: relative;
        left: -40px;
        top: 20px; 
    }

    .btm-photographername{
        position: relative;
        left: -27px;
        top: 5px;
    }

    .btm-desctitle{
        position: relative;
        left:-25px;
    }

    .btm-desc{
        position: relative;
        top:-15px;
        left:355px;
        max-width: 700px;        
    }

    .btm-imageused{
        position: absolute;
        left: 970px;
        top: -30px; 
        z-index: 99;        
    }
    .btm-imageusedcolourred{
        position:relative;
        color: red;
        margin-top: -15px;
        margin-bottom: -15px;
    }

    .btm-edit{
        position:relative;
        color:purple;
        left:1100px;
        top:-200px;
        width:100px;
        height: 50px;
        border: 2px; 
        border-style: solid;
        border-radius: 15%;
        border-color: black; 
          
    }

    .btm-download{
        position:relative;
        color:purple;
        left:1100px;
        top:-200px;
        width:100px;
        height: 50px;
        border: 2px; 
        margin-top:15px;
        border-style: solid;
        border-radius: 15%;
        border-color: black; 
    }
    }     
</style>