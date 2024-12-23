<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: ../index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registeration</title>
    <link rel="icon" href="../images/coffee-shop.png">
    <link rel="stylesheet" href="../CSS/shop.css">
     <!-- font-awesome -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <!-- Fonts  -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@400..700&family=Funnel+Display:wght@300..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,400;0,500;1,400&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@400..700&family=Funnel+Display:wght@300..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap" rel="stylesheet">    
</head>
<body>
     <!-- Header start  -->
     <header style="color: black !important">
        <div class="logo1">
            <img src="../images/logo-1.png" alt="">
        </div>
        <div class="menu-icon"><i class="fa-solid fa-bars"></i></div>
        <div class="menu-bar">
            <ul>
                <li><a  style="color: black !important"href="../index.php">Home</a></li>
                <li><a href="../menu.php">Menu</a></li>
                <li><a href="../reservation.php">Reservation</a></li>
                <li class="pages2">
                    <a href="#">Pages</a>
                    <ul class="pages-content2">
                        <li><a href="../pages/offer.php">WHAT WE OFFER</a></li>
                        <li><a href="../pages/our_team.php">MEET OUR TEAM</a></li>
                        <li><a href="../pages/Our_process.php">OUR PROCESS</a></li>
                        <li><a href="../pages/contact_us.php">CONTACT US</a></li>
                    </ul>
                </li>

                <li><a href="../about_us.php">About Us</a></li>
                <li class="pages2">
                    <a href="#" style="color:#BA946D !important;">Shop</a>
                    <ul class="pages-content2">
                        <li><a href="../shop/acount.php" style="color:#BA946D !important;">MY ACCOUNT</a></li>
                        <li><a href="../shop/cart.php">CART</a></li>
                        <li><a href="../shop/products.php">PRODUCTS</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="logo">
            <img id="logo" src="../images/logo-2.png" alt="">
        </div>

        <div class="box">
            <div class="links">
                <ul>
                    <li><a href="../index.php">HOME</a></li>
                    <li><a href="../menu.php">MENU</a></li>
                    <li><a href="../reservation.php">RESERVATON</a></li>
                    <li class="pages">
                        <a href="#">PAGES</a>
                        <ul class="pages-content">
                            <li><a href="../pages/offer.php">WHAT WE OFFER</a></li>
                            <li><a href="../pages/our_team.php">MEET OUR TEAM</a></li>
                            <li><a href="../pages/Our_process.php">OUR PROCESS</a></li>
                            <li><a href="../pages/contact_us.php">CONTACT US</a></li>
                        </ul>
                    </li>
                    <li><a href="../about_us.php">About Us</a></li>
                    <li class="pages">
                        <a href="#" style="color:#BA946D !important;">SHOP</a>
                        <ul class="pages-content">
                            <li><a href="../shop/acount.php" style="color:#BA946D !important;">MY ACCOUNT</a></li>
                            <li><a href="../shop/cart.php">CART</a></li>
                            <li><a href="../shop/products.php">PRODUCTS</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="icons">
                <a href="cart.php"><i class="fa-solid fa-cart-shopping"><span class="Span_Cart">0</span></i></a>
                <a class="user_login"><i class="fa-solid fa-user"></i></a>
                <i id="bar" class="fa-solid fa-bars"></i>
            </div>
            <form action="" class="search-bar-container">
                <input type="search" id="search-bar" placeholder="Search Here...." >
                <label for="search-bar" class="fas fa-search"></label>
            </form>
        </div>
        
        <div class="sidebar" id="sidebar">
            <button id="closeSidebar" class="close-btn"><i class="fa-solid fa-xmark"></i></button> <!-- Close button -->
            <div class="img-bar"><img src="../images/sidearea-logo.png" alt=""></div>
            <div class="text-bar">
                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem.</p>
                <div class="icon-bar">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-tumblr"></i>
                </div>
            </div>
        </div>
        <div class="user_login_logout display_login">
            <div class="user_img"><img src="../images/user2.png" alt=""></div>
            <p id="userName1">Your Name</p>
            <a href="../shop/acount.php" class="login">Login</a>
            <a href="../shop/logout.php" class="logout">Logout</a>
        </div>
    </header>
    <!-- Header end -->

    <!-- Account start  -->
    <div class="account">
        <div class="myacc">
            <h1 style="font-family: sans-serif; display: inline-block;"><span>MY ACCOUNT</span></h1>
            <div style="font-family: Merriweather, serif; font-style: italic; font-weight: 400; font-size: 18px;float: right; padding: 30px 0px;">
                <a href="" style="text-decoration: none; color: #C7A17A;">Barista</a>
                <span style="color: #C7A17A;"> / My Account</span>
            </div>
        </div>
        <div class="container">
            <div class="login">
                <h1>Registeration</h1>
                <?php
                 use PHPMailer\PHPMailer\PHPMailer;
                 use PHPMailer\PHPMailer\Exception;
                    if (isset($_POST["submit"])) {
                    $fullName = $_POST["fullname"];
                    $email = $_POST["email"];
                    $password = $_POST["password"];
                    $passwordRepeat = $_POST["repeat_password"];
                    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
                    $errors = array();
                    if (empty($fullName) OR empty($email) OR empty($password) OR empty($passwordRepeat)) {
                        array_push($errors,"All fields are required");
                    }
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        array_push($errors, "Email is not valid");
                    }
                    if (strlen($password)<8) {
                        array_push($errors,"Password must be at least 8 charactes long");
                    }
                    if ($password!==$passwordRepeat) {
                        array_push($errors,"Password does not match");
                    }
                    require_once "database.php";
                    $sql = "SELECT * FROM users WHERE email = '$email'";
                    $result = mysqli_query($conn, $sql);
                    $rowCount = mysqli_num_rows($result);
                    if ($rowCount>0) {
                        array_push($errors,"Email already exists!");
                    }
                    if (count($errors)>0) {
                        foreach ($errors as  $error) {
                            echo "<div class='REGISTER'>$error</div>";
                        }
                    }else{
                        
                        $sql = "INSERT INTO users (full_name, email, password) VALUES ( ?, ?, ? )";
                        $stmt = mysqli_stmt_init($conn);
                        $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
                        if ($prepareStmt) {
                            mysqli_stmt_bind_param($stmt,"sss",$fullName, $email, $passwordHash);
                            mysqli_stmt_execute($stmt);
                           
        
                            require 'php_mailer/src/Exception.php';
                            require 'php_mailer/src/PHPMailer.php';
                            require 'php_mailer/src/SMTP.php';
        
                                $mail = new PHPMailer(true);
        
                                $mail->isSMTP();
                                $mail->Host = 'smtp.gmail.com';
                                $mail->SMTPAuth = true;
                                $mail->Username = 'baristacoffeeshop0@gmail.com'; 
                                $mail->Password = 'eeaymixmrzpjggio'; 
                                $mail->SMTPSecure = 'ssl';
                                $mail->Port = 465;
        
                                $mail->setFrom('baristacoffeeshop0@gmail.com'); // Your Gmail address
                                $mail->addAddress($_POST["email"]);   // Recipient's email from form input
        
                                $mail->isHTML(true);
                                $mail->Subject = 'Welcome to Barista Coffee Shop!';
                                $mail->Body = "
                                <h1>Welcome, {$fullName}!</h1>
                                <p>Thank you for registering with Barista Coffee Shop☕❤️.</p>
                                <p>If you have any questions, feel free to contact us!</p>
                            ";
                            $mail->send();
                            
                            echo "<div class='REGISTER'>You are registered successfully. A confirmation email has been sent.</div>"; 
                        }
                            else
                            {
                            die("Something went wrong");
                            }
                    }
                    }
                 
                    
                    

                ?>
                <form action="acount.php" method="post">
                    <!-- username   -->
                    <label for="fullname"><p>User name :</p></label>
                    <input type="text" class="email" name="fullname" style="height: 52px;">

                    <!-- email  -->
                    <label for="email"><p>email address :</p></label>
                    <input type="email" class="email" name="email" style="height: 52px;">

                    <!-- password   -->
                    <label for="password"><p>Password:</p></label>
                    <input type="password" class="password" name="password" style="height: 52px;">

                    <!-- password   -->
                    <label for="repeat_password"><p>Repeat Password:</p></label>
                    <input type="password" class="password" name="repeat_password" style="height: 52px;">
                    
                    <!-- submit   -->
                   <input type="submit" role="button" value="Registeration" name="submit" class="buttonl">  
                   <!-- <a href="login.php">Login</a>  -->
                </form>
                <P   style="text-decoration: none; color: #C7A17A;"></P>Already have an account? 
                <a href="login.php" style="text-decoration: none; color: #735a20; cursor: pointer;">
                    Login
                 </a>
                <p>
                    <!-- <button class="buttonl" role="button">Login</button> -->
                    <input type="checkbox" name="remember" value="remember me">
                    <label for="remember me">Remember me</label>
                </p>
            <a href="" style="text-decoration: none; color: #C7A17A;">Lost your password?</a>
            </div>
        </div>
    </div>
    <!-- Account start  -->

    <!-- Footer start  -->
    <footer class="footer">
        <div class="container">
            <div class="first-footer">
                <div class="ff-section" id="ff-section-1" style="margin-left: 0; margin-right: 1.6rem;">
                    <h3 style="background-color: #56412ccd; text-shadow: 2px 2px 5px #211D1A; padding-left: 5px;">OPENING HOURS</h3>
                    <div class="days">
                    <div class="day">
                        <span class="day-name">Monday</span>
                        <span class="time closed" style="color: #BA946D;">CLOSED</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Tuesday</span>
                        <span class="time">9:00 - 22:00</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Wednesday</span>
                        <span class="time">9:00 - 22:00</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Thursday</span>
                        <span class="time">9:00 - 22:00</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Friday</span>
                        <span class="time">9:00 - 1:00</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Saturday</span>
                        <span class="time">12:00 - 1:00</span>
                    </div>
                    <div class="day">
                        <span class="day-name">Sunday</span>
                        <span class="time">9:00 - 22:00</span>
                    </div>
                    </div>
                </div>
                <div class="ff-section" id="ff-section-2" style="margin-left: 0rem">
                    <h3 style="background-color: #56412ccd; text-shadow: 2px 2px 5px #211D1A; padding-left: 5px;">LATEST POSTS</h3>
                    <div class="blog-posts">
                    <div class="blog-post">
                        <h2 class="post">EXPAND YOUR MIND, CHANGE EVERYTHING</h2>
                        <p class="date">14.02.2017</p>
                      </div>
                      <div class="blog-post">
                        <h2 class="post">PLACES TO GET LOST</h2>
                        <p class="date">14.02.2017</p>
                      </div>
                      <div class="blog-post">
                        <h2 class="post">LEWIS HOWES</h2>
                        <p class="date">14.02.2017</p>
                      </div>
                      <div class="blog-post">
                        <h2 class="post">ELEVATE YOUR EXPECTATIONS</h2>
                        <p class="date">14.02.2017</p>
                      </div>
                    </div>
                 
                </div>
                <div class="ff-section" id="ff-section-3">
                    <h3 style="background-color:#56412ccd; text-shadow: 2px 2px 5px #211D1A; padding-left: 5px;">GET IN TOUCH</h3>
                    <div class="addresses">
                        <div class="address">
                          <a href="mailto:xyz@gmail.com" class="mail">xyz@gmail.com</a>
                           <p class="disc">1-444-123-4559</p>
                        <p class="disc">Raymond Boulevard 224,<br>New York</p>
                        <p class="date" style="border:none; font-weight: 500; font-size: 0.9rem;">Available 24/7</p>
                        </div>
                    
                    </div>
                </div>
                <div class="ff-section" id="ff-section-4" style="margin-left: 1rem;
                ">
                    <h3 style="background-color: #56412ccd; text-shadow: 2px 2px 5px #211D1A; padding-left: 5px;">OTHER LOCATIONS</h3>
                    <div class="article">
                            <p class="title">BARISTA COFFEE SHOP</p>
                            <p class="disc">2606 Saints Alley</p>
                            <p class="disc">Tampa, FL 33602</p>
                    </div>
                    <div class="article" id="article-2">
                            <p class="title">BARISTA CAFE</p>
                            <p class="disc">2606 Saints Alley</p>
                            <p class="disc">Tampa, FL 33602</p>
                    </div>
                </div>
            </div>
            <div class="second-footer">
                <div class="s1"><p>© Team11</p></div>
                <div class="s2">
                    <a href="" class="icons"><i class="fa-brands fa-twitter"></i></a>
                    <a href="" class="icons"><i class="fa-brands fa-instagram"></i></a>
                    <a href="" class="icons"><i class="fa-brands fa-facebook"></i></a>
                    <a href="" class="icons"><i class="fa-brands fa-linkedin-in"></i> </a>
                    <a href="" class="icons"><i class="fa-brands fa-vimeo-v"></i></a>
                    <a href="" class="icons"><i class="fa-brands fa-tumblr"></i></a>
                </div>
                <div class="s3"><p>2024 All Rights Reserved</p></div>
            </div>
        </div>
    </footer>
    <!-- Footer end -->
    <button id="scrollToTopBtn" title="Go to top"><i class="fa-solid fa-arrow-up"></i></button>
    <script src="../JS/ALL2.js "></script>
    <?php if (isset($_SESSION["user"]) && $_SESSION["user"] == "yes"): ?>
    <script>
        // Ensure you safely echo the value of $_POST["fullname"] within the JavaScript
        var fullname = <?php echo json_encode($_SESSION["name"]); ?>;
        document.getElementById('userName1').innerHTML = fullname + " !";
    </script>
    <?php endif; ?>

    <script> 
        //header
        window.onload=()=> {
            const header = document.querySelector('header');
            header.classList.add('white-bg'); // Add class to change background
            logo.src = '../images/logo-1.png'; // Change logo when in viewport
        };
        <?php if (isset($_SESSION["user"]) && $_SESSION["user"] == "yes"): ?>
         document.getElementById('userName1').innerHTML = "Login successful!";
        <?php endif; ?>
    </script>
</body>
</html>
