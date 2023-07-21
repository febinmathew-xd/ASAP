-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2023 at 05:20 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_asap`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(50) NOT NULL,
  `studentid` int(50) NOT NULL,
  `vacancyid` int(50) NOT NULL,
  `resume` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `studentid`, `vacancyid`, `resume`) VALUES
(1, 18, 4, '1689941768_teahub.io-vintage-car-hd-wallpapers-3495380.jpg'),
(2, 18, 4, '1689941959_teahub.io-wallpaper-laptop-anime-1664538.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `account_no` bigint(22) DEFAULT NULL,
  `account_name` varchar(222) DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL,
  `expiry` text DEFAULT NULL,
  `courseid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `certificate` text DEFAULT NULL,
  `is_approved` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id`, `account_no`, `account_name`, `cvv`, `expiry`, `courseid`, `userid`, `certificate`, `is_approved`) VALUES
(11, 324234, 'test', 3424, '2023-01-01', 1, 18, 'Febin._.Digital Marketing._.certificate.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `corporate`
--

CREATE TABLE `corporate` (
  `id` int(11) NOT NULL,
  `username` varchar(222) DEFAULT NULL,
  `contact` bigint(22) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `loginid` int(11) NOT NULL,
  `isapproved` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `corporate`
--

INSERT INTO `corporate` (`id`, `username`, `contact`, `address`, `description`, `loginid`, `isapproved`) VALUES
(13, 'Devayani MD', 7845124578, 'Kadakkal, Kollam', 'testsss', 13, 1),
(15, 'john', 9865326598, 'test', 'test', 21, 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `details` text NOT NULL,
  `price` int(11) DEFAULT NULL,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `title`, `details`, `price`, `image`) VALUES
(1, 'Digital Marketing', 'Etiam at ullamcorper velit. Fusce ac augue ut tellus pretium semper ac et dui. Mauris mollis eget neque ac.', 4500, '1686814288_popular_sub3.png'),
(5, 'Graphic Design', 'Etiam at ullamcorper velit. Fusce ac augue ut tellus pretium semper ac et dui.', 7800, '1686814255_popular_sub1.png'),
(6, 'Web Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus metus nisi, in dapibus quam placerat vitae.', 6500, '1686814227_popular_sub2.png'),
(7, 'Machine Learning', 'Etiam at ullamcorper velit. Fusce ac augue ut tellus pretium semper ac et dui. Mauris mollis eget neque ac.', 8000, '1687587883_istockphoto-966248982-1024x1024.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `course_payment`
--

CREATE TABLE `course_payment` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(20) NOT NULL,
  `studentid` int(20) NOT NULL,
  `querytitle` varchar(50) NOT NULL,
  `querycontent` text NOT NULL,
  `replytitle` varchar(50) DEFAULT NULL,
  `reply` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `studentid`, `querytitle`, `querycontent`, `replytitle`, `reply`) VALUES
(1, 20, 'About course', 'please contact me', 'ok', 'okkkk'),
(2, 20, 'test title', 'test content', 'hey', 'helo'),
(3, 20, 'test title 4', 'test content4', 'yooii', 'ookk'),
(4, 20, 'test title 7', 'test content 7', 'okay', 't'),
(5, 20, 'test 100', 'test r3737', 'titler', 'title'),
(6, 20, 'heyyy', 'heeey', 'yyioh', 'gbjhb'),
(7, 18, 'hey..this is feb', 'i want to cancel my course', 'ok bruuhh', 'yjmngg'),
(8, 18, 'ffdf', 'dfdfdfd', NULL, NULL),
(9, 18, 'gfgfgf', 'fgfgfgfgf', 'not available', 'sorry bruuuhh'),
(10, 18, 'testing', 'testing gndgj gng gndklg klsg l lgng lgg lg f;gmfg ffgfg', NULL, NULL),
(11, 18, 'testing', 'testing gndgj gng gndklg klsg l lgng lgg lg f;gmfg ffgfg', NULL, NULL),
(12, 18, 'testing', 'testing gndgj gng gndklg klsg l lgng lgg lg f;gmfg ffgfg', NULL, NULL),
(13, 18, 'testing', 'testing gndgj gng gndklg klsg l lgng lgg lg f;gmfg ffgfg', 'stop spamming', 'ok'),
(14, 18, 'testing', 'testing gndgj gng gndklg klsg l lgng lgg lg f;gmfg ffgfg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `courseid` int(11) NOT NULL,
  `venueid` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `total_marks` int(11) DEFAULT NULL,
  `passing_marks` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exams`
--

INSERT INTO `exams` (`id`, `courseid`, `venueid`, `date`, `time`, `title`, `description`, `total_marks`, `passing_marks`) VALUES
(3, 1, 1, '2023-07-13', '14:00:00', 'Digital Marketing Exam', 'test', 100, 45);

-- --------------------------------------------------------

--
-- Table structure for table `exam_results`
--

CREATE TABLE `exam_results` (
  `id` int(11) NOT NULL,
  `studentid` int(11) NOT NULL,
  `examid` int(11) NOT NULL,
  `teacherid` int(11) NOT NULL,
  `marks` int(11) NOT NULL,
  `remarks` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam_results`
--

INSERT INTO `exam_results` (`id`, `studentid`, `examid`, `teacherid`, `marks`, `remarks`) VALUES
(1, 18, 3, 6, 45, 'test');

-- --------------------------------------------------------

--
-- Table structure for table `jobadmin`
--

CREATE TABLE `jobadmin` (
  `id` int(11) NOT NULL,
  `username` varchar(222) NOT NULL,
  `contact` bigint(22) NOT NULL,
  `loginid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobadmin`
--

INSERT INTO `jobadmin` (`id`, `username`, `contact`, `loginid`) VALUES
(16, 'job admin', 7845124500, 16);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `usertype` int(11) NOT NULL COMMENT '0: admin\r\n1: student\r\n2: tutor\r\n3: resource teacher\r\n4: corporate\r\n5: candidate\r\n6:job admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `usertype`) VALUES
(1, 'admin@gmail.com', 'admin', 0),
(6, 'apsara@gmail.com', '123', 2),
(8, 'niji@gmail.com', '123', 3),
(10, 'gopika@gmail.com', '123', 1),
(13, 'devus@gmail.com', '123', 4),
(15, 'asif@gmail.com', '123', 1),
(16, 'jobadmin@gmail.com', '123', 6),
(18, 'febinmathew@gmail.com', '123', 1),
(20, 'arya@gmail.com', '123', 1),
(21, 'john@gmail.com', '123', 4);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(22) NOT NULL,
  `courseid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `message` text NOT NULL,
  `hostid` int(20) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `courseid`, `userid`, `message`, `hostid`) VALUES
(1, 1, 18, 'heeyy..i have a doubt', 0),
(2, 1, 18, 'yoo', 0),
(3, 1, 18, 'no doubts', 0),
(4, 1, 18, 'asasdasas', 0),
(5, 1, 10, 'hihihi', 0),
(6, 1, 10, 'gigigi', 0),
(8, 1, 6, 'May I know whhats the doubtsss', 18),
(9, 1, 6, 'kooi', 10),
(10, 1, 6, 'hiii', 18),
(11, 1, 18, 'dfff', 0),
(12, 1, 6, 'check', 18),
(13, 1, 6, 'hey gopika', 10),
(14, 1, 6, 'yooo', 10),
(15, 1, 6, 'to febin', 18),
(16, 1, 6, 'to febin', 18),
(17, 1, 6, 'to febin', 18),
(18, 1, 6, 'to gopika', 10),
(19, 1, 6, 'to gopika', 10),
(20, 1, 20, 'hei teacher....', 0),
(21, 1, 6, 'hello arya', 20),
(22, 1, 6, 'hello arya', 20),
(23, 1, 6, 'hello arya2', 20),
(24, 1, 20, 'Your classes are boring af..', 0),
(25, 1, 6, 'he febin', 18),
(26, 1, 6, 'he febin', 20),
(27, 1, 6, 'hjhjh', 0),
(28, 1, 6, 'tt', 0),
(29, 1, 6, 'fff', 18),
(30, 1, 6, 'hey ry', 20),
(31, 1, 20, 'sorry teacher', 0),
(32, 1, 20, 'really sorry', 0),
(33, 1, 6, 'its okay', 20);

-- --------------------------------------------------------

--
-- Table structure for table `practical_sessions`
--

CREATE TABLE `practical_sessions` (
  `id` int(11) NOT NULL,
  `courseid` int(11) NOT NULL,
  `venueid` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `practical_sessions`
--

INSERT INTO `practical_sessions` (`id`, `courseid`, `venueid`, `date`, `time`, `title`, `description`) VALUES
(3, 1, 1, '2023-01-08', '13:00:00', 'Welding Session', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `resource_teacher`
--

CREATE TABLE `resource_teacher` (
  `id` int(11) NOT NULL,
  `username` varchar(222) DEFAULT NULL,
  `contact` bigint(20) DEFAULT NULL,
  `qualification` varchar(222) DEFAULT NULL,
  `loginid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resource_teacher`
--

INSERT INTO `resource_teacher` (`id`, `username`, `contact`, `qualification`, `loginid`) VALUES
(8, 'Niji M Joy', 7845124575, 'PhD', 8);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `username` text DEFAULT NULL,
  `contact` bigint(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `qualification` varchar(222) DEFAULT NULL,
  `courseid` int(11) DEFAULT NULL,
  `loginid` int(11) DEFAULT NULL,
  `isapproved` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `username`, `contact`, `age`, `qualification`, `courseid`, `loginid`, `isapproved`) VALUES
(10, 'Gopika G', 784521465, 25, 'PG', 1, 10, 1),
(12, 'Asif', 7845124578, 22, 'UG', 5, 15, 1),
(18, 'Febin', 8965326598, 23, 'Under Graduate', 1, 18, 1),
(20, 'Arya', 8980202200, 24, 'Under Graduate', 1, 20, 1);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `username` text DEFAULT NULL,
  `contact` bigint(22) DEFAULT NULL,
  `courseid` int(11) DEFAULT NULL,
  `qualification` varchar(222) DEFAULT NULL,
  `loginid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `username`, `contact`, `courseid`, `qualification`, `loginid`) VALUES
(6, 'Apsara Raj', 9845782225, 1, 'PG', 6);

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `courseid` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timetable`
--

INSERT INTO `timetable` (`id`, `courseid`, `date`, `time`) VALUES
(1, 1, '2023-06-13', '21:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tutorial`
--

CREATE TABLE `tutorial` (
  `id` int(11) NOT NULL,
  `title` varchar(222) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `courseid` int(11) DEFAULT NULL,
  `teacherid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutorial`
--

INSERT INTO `tutorial` (`id`, `title`, `description`, `file`, `courseid`, `teacherid`) VALUES
(2, 'Electronics Basics 01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tempus purus. Etiam pulvinar ante et tortor mattis efficitur. Fusce tincidunt feugiat vestibulum. Vestibulum quis turpis erat. Curabitur aliquam, ipsum tristique finibus mollis, justo purus cursus urna, eget aliquam sem tellus quis eros. Vestibulum tincidunt ex sed ultricies molestie. Aenean eget hendrerit nisi, porttitor euismod orci. Nam massa dui, porta a commodo eu, tincidunt ac felis. In ut erat et neque consequat condimentum ultrices eu felis. Sed lacus nibh, vulputate id eleifend vitae, sagittis eget turpis.', '1686574463_Bird Detection ER.png', 1, 6),
(4, 'Electronics Basics 02', 'Nulla convallis tortor sit amet tempus tincidunt. Maecenas ultrices at odio eget interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a diam orci. Donec nisi diam, euismod id blandit nec, pretium in dui. Pellentesque sodales, eros aliquam volutpat blandit, lorem augue ultricies metus, vitae bibendum ante lectus ac tellus. Mauris hendrerit sollicitudin justo non convallis. Nullam rhoncus, nibh a aliquam accumsan, orci diam molestie diam, sit amet sagittis turpis turpis sed nisi. Nulla ornare dignissim nulla, eu fermentum magna sollicitudin sit amet. Curabitur pretium nisi ac arcu suscipit, vitae rutrum lacus lacinia. Nullam imperdiet, nunc in pulvinar lobortis, nisi nisi posuere quam, a ornare turpis dui at quam. Quisque fermentum imperdiet massa. Praesent a libero nisi. Praesent quis mollis lorem, tempus vestibulum neque.', '1686833022_ASAP project.docx', 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `vaccancies`
--

CREATE TABLE `vaccancies` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `jobdescription` text DEFAULT NULL,
  `lastdate` date DEFAULT NULL,
  `location` text DEFAULT NULL,
  `qualification` varchar(222) DEFAULT NULL,
  `experience_needed` int(11) DEFAULT NULL,
  `corporateid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaccancies`
--

INSERT INTO `vaccancies` (`id`, `title`, `jobdescription`, `lastdate`, `location`, `qualification`, `experience_needed`, `corporateid`) VALUES
(4, 'Software Tester\n', 'Web design refers to the design of websites that are displayed on the internet.Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation.', '2023-06-28', 'test', 'DIPLOMA', 1, 21);

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

CREATE TABLE `venue` (
  `id` int(11) NOT NULL,
  `venuename` varchar(222) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `lat` text DEFAULT NULL,
  `lng` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue`
--

INSERT INTO `venue` (`id`, `venuename`, `location`, `lat`, `lng`) VALUES
(1, 'Fathima Matha College', 'Kollam Railway Station', '8.8858968', '76.595131');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `corporate`
--
ALTER TABLE `corporate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_results`
--
ALTER TABLE `exam_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobadmin`
--
ALTER TABLE `jobadmin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `practical_sessions`
--
ALTER TABLE `practical_sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resource_teacher`
--
ALTER TABLE `resource_teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tutorial`
--
ALTER TABLE `tutorial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vaccancies`
--
ALTER TABLE `vaccancies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `corporate`
--
ALTER TABLE `corporate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `exam_results`
--
ALTER TABLE `exam_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobadmin`
--
ALTER TABLE `jobadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `practical_sessions`
--
ALTER TABLE `practical_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `resource_teacher`
--
ALTER TABLE `resource_teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tutorial`
--
ALTER TABLE `tutorial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vaccancies`
--
ALTER TABLE `vaccancies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `venue`
--
ALTER TABLE `venue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
