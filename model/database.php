<?php
class Database {
    //DB connection parameters
    private $host = 'localhost';
    private $dbname = 'RecipeDatabase';
    private $username = 'sdc480_user';
    private $password = 'sdc480_pw';

    //DB connection and error message
    private $conn;
    private $conn_error = '';

    function __construct()
    {
            mysqli_report(MYSQLI_REPORT_OFF);

            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->dbname);
            
            if($this->conn === false) {

                $this->conn_error = " Failed to connect to DB: " . mysqli_connect_error();
            }
    }

    function __destruct()
    {
        mysqli_close($this->conn);
    }

    function getDBConn() {
        return $this->conn;
    }
    
    function getDBError() {
        return $this->conn_error;
    }
    function getDBHost() {
        return $this->host;
    }
    function getDBName() {
        return $this->dbname;
    }
    function getDBUser() {
        return $this->username;
    }
    function getDBUserPw() {
        return $this->password;
    }
}