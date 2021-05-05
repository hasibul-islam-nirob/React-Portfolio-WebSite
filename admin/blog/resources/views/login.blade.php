<html>
<head>
    <title>Admin Login</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet"/>
</head>
<body>
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-center mt-5">
            <div class="card">
                <div class="card-body">
                    <h3>Admin Login</h3><hr>
                    <input id="userName" class="form-control" type="text" placeholder="User Name"><br>
                    <input id="password" class="form-control" type="password" placeholder="Password"><br>
                    <button id="loginBtn" onclick="onLogin()" class="btn btn-dark btn-block">Login</button>
                </div>
            </div>
        </div>
    </div>

</div>


<script type="text/javascript">

    function onLogin(){
        let username = document.getElementById('userName').value;
        let password = document.getElementById('password').value;

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function (){
            if (this.readyState == 4 && this.status == 200){
                if (this.responseText == "1"){
                    window.location.href = "/";
                }else{
                    alert("Login Fail");
                }
            }
        }
        xmlHttp.open("GET","/onLogin/"+username+"/"+password,true);
        xmlHttp.send();

    }

</script>
<script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
></script>


</body>
</html>

