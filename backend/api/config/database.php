<?php
// used to get mysql database connection
class DatabaseService{
    //private $db_host = "sql205.epizy.com";
    //private $db_name = "epiz_28283926_db";
    //private $db_user = "epiz_28283926";
    //private $db_password = "AcqZiOyrKqr";
    //private $connection;
    private $db_host = "localhost";
    private $db_name = "db";
    private $db_user = "root";
    private $db_password = "";
    private $connection;

    public function getConnection(){

        $this->connection = null;

        try{
            $this->connection = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
        }catch(PDOException $exception){
            echo "Connection failed: " . $exception->getMessage();
        }

        return $this->connection;
    }
}
?>