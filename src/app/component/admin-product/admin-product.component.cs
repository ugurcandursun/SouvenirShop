@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

.box-shadow { margin: 15px}
.button{
    border-radius: 5px;
    background-color: lightblue;
    color:white;
    padding: 4px 60px;
    margin-left: 18px;
    border: none;
    cursor: pointer;
  }
  .button-insert{
    border-radius: 5px;
    background-color: tomato;
    color:white;
    padding: 4px 60px;
    margin-right: 18px;
    border: none;
    position: absolute; right: 0;
  }
  .checked {
    color: orange;
    width: 14px;
    height: 14px;
    transform: scale(0.8); 
  }
  .unchecked{

    width: 14px;
    height: 14px;
    transform: scale(0.8); 
  }
  .colseven{
    width: 200px;height: 200px;
  }
  .element{
    margin-left: 10px;
    margin-right: 10px;
  }
  .fa{
  display: inline;
  }
 
  .header{
    margin-left: 15px;

  }
  .wrapper{
    display: flex;
    position: relative;

  }
  
  .wrapper .sidebar{
    width: 210px;
    height: 100%;
    background: lightblue;
    padding: 30px 0px;
    position: fixed;
  }
  
  .wrapper .sidebar h3{
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
  }
  
  .wrapper .sidebar ul li{
    padding: 15px;
    border-bottom: 1px solid #bdb8d7;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    border-top: 1px solid rgba(255,255,255,0.05);
  }    
  
  .wrapper .sidebar ul li a{
    color: white;
    display: block;
  }
  
  .wrapper .sidebar ul li a .fas{
    width: 25px;
  }
  
  .wrapper .sidebar ul li:hover{
    background-color:forestgreen;
  }
      
  .wrapper .sidebar ul li:hover a{
    color: #fff;
  }
  .wrapper .main_content{
    width: 100%;
    margin-left: 200px;
  }
  
  .wrapper .main_content .header{
    padding: 20px;
    background: #fff;
    color: #717171;
    border-bottom: 1px solid #e0e4e8;
  }
  
  .wrapper .main_content .info{
    margin: 20px;
    color: #717171;
    line-height: 25px;
  }
  
  .wrapper .main_content .info div{
    margin-bottom: 20px;
  }
  
 
