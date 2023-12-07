-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 04:48 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gadgets_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `idCategory` int(11) NOT NULL,
  `nameCategory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idCategory`, `nameCategory`) VALUES
(1, 'Màn hình PC'),
(2, 'Máy tính xách tay'),
(3, 'Thiết bị mạng'),
(4, 'Đồng hồ thông minh'),
(5, 'Tai nghe'),
(6, 'Máy nghe nhạc'),
(7, 'Camera'),
(8, 'Máy đọc sách'),
(9, 'Phụ kiện');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL,
  `nameProduct` varchar(200) NOT NULL,
  `image` text NOT NULL,
  `price` double NOT NULL,
  `sale` double NOT NULL,
  `featured` int(1) NOT NULL DEFAULT 0 COMMENT '0 là sp bình thường, 1 là đặc biệt',
  `purchase` int(10) NOT NULL DEFAULT 0 COMMENT 'Số lượt mua',
  `idCategory` int(11) NOT NULL,
  `brand` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`idProduct`, `nameProduct`, `image`, `price`, `sale`, `featured`, `purchase`, `idCategory`, `brand`) VALUES
(1, 'LG UltraGear 27GR95QE-B.ATV - 26.5in OLED QHD 240Hz', 'screen-1.jpg', 24490000, 0.1, 1, 10, 1, 'LG'),
(2, 'Dahua DHI-LM27-C201 - 27in FHD IPS', 'screen-2.jpg', 2700000, 0, 0, 5, 1, 'Dahua'),
(3, 'ASUS Vivobook 15 X1504ZA-NJ582W - Intel UHD', 'laptop-1.jpg', 16990000, 0.15, 0, 2, 2, 'ASUS'),
(4, 'Garmin Venu 3 - Stone White', 'watch-1.jpg', 12290000, 0, 1, 12, 4, 'Garmin'),
(5, 'Máy đọc sách Kindle Paperwhite 4 chống nước 8GB', 'read-1.jpg', 5690000, 0, 1, 20, 8, 'Amazon'),
(6, 'Razer Ornata V3 X', 'key-1.png', 1090000, 0.1, 1, 27, 9, 'Razer'),
(7, 'Dahua DHI-LM24-A200 - 23.6in FHD VA', 'screen-3.jpg', 2000000, 0, 0, 7, 1, 'Dahua'),
(8, 'Dahua DHI-LM27-E231 - 27in FHD IPS', 'screen-4.jpg', 4190000, 0, 0, 5, 1, 'Dahua'),
(9, 'Dell Vostro 3430 - i7-1355U - 16GB - 512GB SSD', 'laptop-2.jpg', 25990000, 0, 0, 14, 2, 'Dell'),
(10, 'Lenovo ThinkPad T16 Gen 2 - i7-1355U - 16GB DDR5', 'laptop-3.jpg', 31090000, 0.2, 1, 10, 2, 'Lenovo'),
(11, 'Garmin Instinct Black - Tactical Edition Camo', 'watch-2.png', 9900000, 0.05, 1, 9, 4, 'Garmin'),
(12, 'Razer Basilisk V3 X HyperSpeed', 'mouse-1.jpg', 1890000, 0, 1, 13, 9, 'Razer'),
(13, 'LG Gram 2023 14Z90R-G.AH53A5 - i5-1340P', 'laptop-4.jpg', 32490000, 0, 1, 6, 2, 'LG'),
(14, 'Razer DeathStalker V2 Pro TKL - Keyboard Linear Red Switch', 'key-2.png', 4790000, 0.15, 1, 16, 9, 'Razer'),
(15, 'Razer BlackWidow V4 Pro - Yellow Switch - US Layout - FRML', 'key-3.png', 6199000, 0, 0, 3, 9, 'Razer'),
(16, 'Dahua DHI-LM27-E230C - 27in FHD VA Cong', 'screen-5.jpg', 3650000, 0.1, 0, 24, 1, 'Dahua'),
(17, 'LG UltraGear 48GQ900-B.ATV - 48in OLED UHD 4K 120Hz', 'screen-6.jpg', 29490000, 0.1, 1, 18, 1, 'LG'),
(18, 'Màn hình di động Viewsonic VP16 - 15.6in FHD OLED USB-C', 'screen-7.jpg', 13990000, 0, 1, 7, 1, 'ViewSonic'),
(19, 'Máy đọc sách Onyx Boox Note Air 2 Plus', 'read-2.jpg', 13990000, 0.2, 0, 20, 8, 'ONYX BOOX'),
(20, 'Garmin Venu SQ 2 - Metallic Mint Aluminum Bezel', 'watch-3.jpg', 6490000, 0, 0, 15, 4, 'Garmin'),
(21, 'Garmin Approach R10', 'watch-4.jpg', 16290000, 0.15, 1, 17, 4, 'Garmin'),
(22, 'Camera GoPro Hero 10 Black', 'camera-1.jpg', 13990000, 0, 0, 12, 7, 'Gopro'),
(23, 'Ultrasone Meteor One', 'listen-1.png', 6990000, 0.1, 1, 5, 5, 'Ultrasone'),
(24, 'Astel & Kern A & Norma SR35', 'music-1.jpg', 21900000, 0.2, 0, 16, 6, 'Astel & Kern'),
(25, 'ASUS ROG Rapture GT-AX6000', 'network-1.jpg', 11290000, 0, 0, 11, 3, 'ASUS'),
(27, 'dasdasd123456', '1701877548155-watch-3.jpg', 1234, 0.1, 1, 0, 6, 'adasda123');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `fullName`, `email`, `password`, `role`) VALUES
(1, 'Lê Trung Tín', 'tin@gmail.com', 'tin123', 0),
(2, 'Admin', 'admin@gmail.com', 'admin123', 1),
(3, 'Tin', 'tin123@gmail.com', '123', 0),
(4, 'Tin12', 'tin12@gmail.com', '123', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
