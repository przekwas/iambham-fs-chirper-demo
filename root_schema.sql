CREATE TABLE users (
	id INT AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

DESCRIBE users;

CREATE TABLE chirps (
	id INT AUTO_INCREMENT,
    userid INT NOT NULL,
    content VARCHAR(241) NOT NULL, 
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users (id)
);

DESCRIBE chirps;



INSERT INTO users (password, username, email) VALUE
('cbfdac6008f9cab4083784cbd1874f76618d2a97', 'sdgsdfgsdfg', 'asdfasdf');

SELECT * FROM users;

UPDATE users SET username = 'Test 1', email = 'test1@test.com' WHERE id = 1;

DELETE FROM users WHERE id = 4;

INSERT INTO chirps (userid, content) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat tempor ex eget tempor. Praesent.'),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat tempor ex eget tempor. Praesent.'),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat tempor ex eget tempor. Praesent.'),
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat tempor ex eget tempor. Praesent.');

SELECT chirps.*, users.username FROM chirps
JOIN users ON users.id = chirps.userid;

CREATE USER 'chirper_demo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'chirper_demo';
GRANT ALL PRIVILEGES ON chirper_demo TO 'chirper_demo';
FLUSH PRIVILEGES;