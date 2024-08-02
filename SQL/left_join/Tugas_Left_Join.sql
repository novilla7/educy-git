CREATE DATABASE eduwork;

USE eduwork;

-- tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30),
    name VARCHAR(50),
    password VARCHAR(255),
    address VARCHAR(50),
    role VARCHAR(10),
    status VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM users;


-- tabel categories
CREATE TABLE categories(
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    code VARCHAR(100),
    name VARCHAR(100),
    slug VARCHAR(20),
    description TEXT,
    status VARCHAR(30),
    photo VARCHAR(100),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

SELECT * FROM categories;

-- tabel products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    category_id INT,
    user_id INT,
    code VARCHAR(100), 
    name VARCHAR(100),
    slug VARCHAR(20),
    description LONGTEXT,
    photo VARCHAR(100),
    qty INT,
    unit VARCHAR(100),
    price DOUBLE,
    status VARCHAR(30),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


SELECT * FROM products;


-- masukan data ke dalam tabel
INSERT INTO users(email, name, password, address, role, status) VALUES
	('user1@example.com', 'budi', 'password1', 'Address One', 'customer', 'active'),
	('user2@example.com', 'andi', 'password2', 'Address Two', 'customer', 'active'),
	('user3@example.com', 'nandi', 'password3', 'Address Three', 'admin', 'active'),
	('user4@example.com', 'aldi', 'password4', 'Address Four', 'customer', 'inactive'),
	('user5@example.com', 'nindi', 'password5', 'Address Five', 'customer', 'active');

INSERT INTO categories(user_id, code, name, slug, description, status, photo) VALUES
    (1, '1', 'Makanan', 'produk-a', 'Deskripsi Produk A', 'Ada', 'foto_a.jpg'),
    (1, '2', 'Makanan', 'produk-b', 'Deskripsi Produk B', 'Ada', 'foto_b.jpg'),
    (2, '3', 'Minuman', 'produk-c', 'Deskripsi Produk C', 'Kosong', 'foto_c.jpg'),
    (2, '4', 'Makanan', 'produk-d', 'Deskripsi Produk D', 'Ada', 'foto_d.jpg'),
    (3, '5', 'Minuman', 'produk-e', 'Deskripsi Produk E', 'Kosong', 'foto_e.jpg');
    
INSERT INTO products (category_id, user_id, code, name, slug, description, photo, qty, unit, price, status) VALUES
	(1, 1, 'P001', 'Mie Ayam', 'product-one', 'Description product satu', 'product1.jpg', 1, 'pcs', 10.000, 'active'),
	(2, 2, 'P002', 'Bakso', 'product-two', 'Description product dua', 'product2.jpg', 1, 'pcs', 12.000, 'active'),
	(3, 3, 'P003', 'Es Teh', 'product-three', 'Description product tiga', 'product3.jpg', 2, 'pcs', 5.000, 'active'),
	(4, 4, 'P004', 'Seblak', 'product-four', 'Description product empat', 'product4.jpg', 1, 'pcs', 10.000, 'inactive'),
	(5, 5, 'P005', 'Es Jeruk', 'product-five', 'Description product lima', 'product5.jpg', 2, 'pcs', 5.000, 'active');



SHOW CREATE TABLE categories;
SHOW CREATE TABLE products;



-- Left Join
-- select => memilih yang ditampilkan yg berasal dari semua tabel (semua data yg dimasukan nanti akan keluar fieldnya)
-- from => memilih tabel users dan dari sebelah kiri (karena ini left join maka akan keluar adalah dari tabel user lalu kekanan tabel lanjutannya)
-- left join adalah forgn key yg dihubungkan ke tabel users jadi di dalam left join gk perlu masukin users karena users adalah utama yg akan keluar
SELECT 
    u.id AS user_id,
    u.email,
    u.name AS user_name,
    c.id AS category_id,
    c.user_id,
    c.name AS category_name,
    c.code AS category_code,
    p.id AS product_id,
    p.category_id,
    p.name AS product_name,
    p.price,
    p.status AS product_status
FROM 
    users u
LEFT JOIN 
    categories c ON u.id = c.user_id
LEFT JOIN 
    products p ON c.id = p.category_id;






SHOW DATABASES;

SHOW TABLES;

drop database eduwork
