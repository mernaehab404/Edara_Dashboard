-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2023 at 04:10 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edaradash`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `warehouse_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `stock`, `image_url`, `description`, `warehouse_ID`) VALUES
(7, 'keyboard gamingggg', 1, '1683159769694.jpg', 'colorfull-high quality', 1),
(9, 'ideapad laptop', 2, '1683578130622.jpg', 'Enhanced graphics powerful', 1),
(10, 'laptop l340', 1, '1683578274567.jpg', 'Enhanced Graphics', 2),
(11, 'laptop l340', 1, '1683579083500.jpg', 'Enhanced Graphics', 2),
(12, 'laptop l340', 1, '1683579182028.jpg', 'Enhanced Graphics', 0);

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `warehouseID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `status` varchar(15) NOT NULL DEFAULT 'pending' COMMENT 'pending/declined/accepted',
  `transaction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `productID`, `quantity`, `warehouseID`, `userID`, `status`, `transaction`) VALUES
(4, 7, 10, 1, 9, 'pending', ''),
(5, 7, 5, 1, 13, 'Decrease', 'pending'),
(6, 7, 7, 1, 12, 'Increase', 'pending'),
(7, 7, 1, 1, 9, 'Increase', 'pending'),
(8, 7, 5, 1, 9, 'Increase', 'pending'),
(9, 7, 5, 1, 13, '', 'pending'),
(10, 7, 5, 1, 9, 'pending', ''),
(11, 7, 10, 1, 9, 'pending', 'increase'),
(22, 7, 10, 1, 9, 'pending', 'increase'),
(31, 7, 5, 1, 9, 'pending', 'increase'),
(32, 7, 5, 1, 13, 'pending', 'decrease');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `type` tinyint(1) NOT NULL COMMENT '0-> user\r\n1 -> admin',
  `warehouseID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `phone`, `status`, `type`, `warehouseID`) VALUES
(9, 'nada Maher', 'nada@user.com', '$2b$10$Gq5XlIjE9SRBOO8ffS.9ju75MPfGxL2WC0XoEtRaHgcTBH9VVPfF2', '109e43be9f26fc6adf65', '01112', 'active', 0, 1),
(10, 'admin', 'admin@admin.com', '$2b$10$x0SiDVxahQjqd9n4eaMNDet2ZqoxZ9gMHwKmDK0AdV/SKd8rdiBJS', '64c7faf0ee7d6e04a03d', '0111', 'active', 1, NULL),
(12, ' merna user', 'merna@gmail.com', '$2b$10$4zqX6Vz5MTFg5NsJG2uTJuO.1bV/ugwyx1/EFQBLpl24U7vx8dvQW', '7382e53bb89d76c8c00394b078dee88c', '', 'active', 0, 1),
(13, ' muhammedduser', 'muhameed@gmail.com', '$2b$10$igbgklTkhWLR5x/lvOofcOxyFNDw0C0KT4sGrgzIT1RFds6YUBwNy', '66ab7945baf317d8cb0e037030fc8460', '', 'active', 0, NULL),
(14, 'merna', 'merna@gmail.com', '', '', '0103040', 'idle', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `supervisorID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`id`, `name`, `location`, `status`, `supervisorID`) VALUES
(1, 'mmmmmm', 'yttty', '', 12),
(3, 'electronic', 'Cairo', 'active', NULL),
(4, 'accssisories', 'Helwan', 'active', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `warehouse id` (`warehouse_ID`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product ID` (`productID`),
  ADD KEY `user id` (`userID`),
  ADD KEY `warehouse id` (`warehouseID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `warehouse id` (`warehouseID`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supervisor id` (`supervisorID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requests_ibfk_3` FOREIGN KEY (`warehouseID`) REFERENCES `warehouses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`warehouseID`) REFERENCES `warehouses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`supervisorID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
