<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/mailSend.css">
    <title>E-mail display</title>
</head>
<body>
    <div class="container">
        <div class="is-sent">
            <?php
                if($_SERVER['REQUEST_METHOD'] == 'POST'){
                    $to_email = "mikolaj.warda@gmail.com";
                    $subject = $_POST['subject'];
                    $message = $_POST['description'];
                    $headers = "From: ".$_POST['email'];
                                
                    if (mail($to_email, $subject, $message, $headers)){
                        echo "Email successfully sent to $to_email...";
                    }else{
                        echo "Email sending failed!";
                    }
                }
            ?>
        </div>
       
        <div class="subject"><?php echo $subject ?></div>
        <div class="message"><?php echo $message ?></div>
        <div class="from"><?php echo $headers ?></div>
        
    </div>
</body>
</html>


