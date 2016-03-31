<?php
/**
 * Created by PhpStorm.
 * User: Orion
 * Date: 31.03.2016
 * Time: 15:25
 */
$pdo = new PDO("mysql:host=localhost;dbname=myweight", "root", "") or die("no db connect");

$query = "INSERT INTO weights VALUES(?, ?)";
$stmt = $pdo->prepare($query);
$stmt->execute([$_POST['date'], $_POST['weight']]);
header("Location: index.php");