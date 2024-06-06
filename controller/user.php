<?php
class User {
  private $id;
  private $uniqueId;
  private $username;
  private $email;
  private $password;
  private $image;
  private $isAdmin;

  public function __construct($id = null, $uniqueId, $username, $email, $password, $image = null, $isAdmin = false) {
    $this->id = $id;
    $this->uniqueId = $uniqueId;
    $this->username = $username;
    $this->email = $email;
    $this->password = $password;
    $this->image = $image;
    $this->isAdmin = $isAdmin;
  }

  // Getters
  public function getId() {
    return $this->id;
  }

  public function getUniqueId() {
    return $this->uniqueId;
  }

  public function getUsername() {
    return $this->username;
  }

  public function getEmail() {
    return $this->email;
  }

  public function getPassword() {
    return $this->password;
  }

  public function getImage() {
    return $this->image;
  }

  public function getIsAdmin() {
    return $this->isAdmin;
  }

  // Setters
  public function setId($value) {
    $this->id = $value;
  }

  public function setUniqueId($value) {
    $this->uniqueId = $value;
  }

  public function setUsername($value) {
    $this->username = $value;
  }

  public function setEmail($value) {
    $this->email = $value;
  }

  public function setPassword($password) {
    // Ensure the password is only hashed when setting it directly, not when fetching from the database
    if (!password_get_info($password)['algo']) {
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    } else {
        $this->password = $password;
    }
  }

  public function setImage($value) {
    $this->image = $value;
  }

  public function setIsAdmin($value) {
    $this->isAdmin = $value;
  }
}
?>