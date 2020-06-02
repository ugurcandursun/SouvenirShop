USE [master]
GO
/****** Object:  Database [SouvenirShop]    Script Date: 31.05.2020 22:33:58 ******/
CREATE DATABASE [SouvenirShop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SouvenirShop', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\SouvenirShop.mdf' , SIZE = 4288KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'SouvenirShop_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\SouvenirShop_log.ldf' , SIZE = 1072KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [SouvenirShop] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SouvenirShop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SouvenirShop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SouvenirShop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SouvenirShop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SouvenirShop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SouvenirShop] SET ARITHABORT OFF 
GO
ALTER DATABASE [SouvenirShop] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [SouvenirShop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SouvenirShop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SouvenirShop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SouvenirShop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SouvenirShop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SouvenirShop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SouvenirShop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SouvenirShop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SouvenirShop] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SouvenirShop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SouvenirShop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SouvenirShop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SouvenirShop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SouvenirShop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SouvenirShop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SouvenirShop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SouvenirShop] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [SouvenirShop] SET  MULTI_USER 
GO
ALTER DATABASE [SouvenirShop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SouvenirShop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SouvenirShop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SouvenirShop] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [SouvenirShop] SET DELAYED_DURABILITY = DISABLED 
GO
USE [SouvenirShop]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Products](
	[ProductID] [int] IDENTITY(1,1) NOT NULL,
	[AverageCustomerRating] [int] NOT NULL,
	[Price] [int] NOT NULL,
	[Type] [nvarchar](50) NOT NULL,
	[ImageURL] [varchar](150) NOT NULL,
	[ProductDescription] [text] NOT NULL,
	[Color] [nvarchar](50) NULL,
	[Gender] [nvarchar](50) NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Sales]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sales](
	[SalesID] [int] IDENTITY(1,1) NOT NULL,
	[DateofSale] [date] NOT NULL CONSTRAINT [DF_SomeName]  DEFAULT (getdate()),
	[UserID] [int] NOT NULL,
	[Howmanyproductssold] [int] NOT NULL,
	[Ratinginformation] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
 CONSTRAINT [PK__Sales__C952FB12346E0BDE] PRIMARY KEY CLUSTERED 
(
	[SalesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Surname] [nvarchar](50) NOT NULL,
	[Email_Address] [text] NOT NULL,
	[IsLogin] [bit] NULL CONSTRAINT [DF_Customers_IsLogin]  DEFAULT ((0)),
	[Password] [nvarchar](50) NOT NULL,
	[isAdmin] [bit] NULL DEFAULT ((0)),
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Customers] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Customers]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [fkProductID] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [fkProductID]
GO
/****** Object:  StoredProcedure [dbo].[deleteProduct]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[deleteProduct]
(
 @pID int
)
AS
	DELETE FROM Products WHERE ProductID = @pID

GO
/****** Object:  StoredProcedure [dbo].[deleteUser]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[deleteUser]
(
 @userID int
)
AS
	DELETE FROM Users WHERE UserID = @userID

GO
/****** Object:  StoredProcedure [dbo].[InsertProduct]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertProduct]  @averageCustomerRating int, @price int, @type nvarchar(50),@ImageURL varchar(50),
@ProductDescription text ,@color nvarchar(50), @gender nvarchar(50)
AS
BEGIN
INSERT INTO Products VALUES (@averageCustomerRating, @price, @type, @ImageURL,
@ProductDescription,@color, @gender)
END

GO
/****** Object:  StoredProcedure [dbo].[InsertUser]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertUser]  @customerName nvarchar(50),@customerSurname nvarchar(50),
@Email_Address text ,@IsLogin bit, @password nvarchar(50),@isAdmin bit
AS
BEGIN
INSERT INTO Customers VALUES (@customerName,@customerSurname,
@Email_Address,@IsLogin,@password,@isAdmin)
END

GO
/****** Object:  StoredProcedure [dbo].[updateProduct]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[updateProduct]
(
@pID int,@averageCustomerRating int, @price int, @type nvarchar(50),@ImageURL varchar(50),
@ProductDescription text ,@color nvarchar(50), @gender nvarchar(50)
)
AS
	UPDATE Products SET price=@price,type=@type, ImageURL=@ImageURL,ProductDescription=@ProductDescription,color=@color,gender=@gender

	WHERE ProductID = @pID

GO
/****** Object:  StoredProcedure [dbo].[ViewAllProducts]    Script Date: 31.05.2020 22:33:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ViewAllProducts] 
AS
SELECT ImageURL, ProductDescription, Color, Gender, Type, Price, AverageCustomerRating
FROM Products

GO
USE [master]
GO
ALTER DATABASE [SouvenirShop] SET  READ_WRITE 
GO
INSERT INTO Products VALUES ( 3,209 ,'Shoes-Bag' ,'assets\shoes-bag\shoe1.jpg','Nike Sneakers','Red' ,'Woman');
INSERT INTO Products VALUES ( 4,100 ,'Shoes-Bag' ,'assets\shoes-bag\bag3.jpg','Andoer Gray Backpack','White' ,'Unisex');
INSERT INTO Products VALUES ( 5,200 ,'Shoes-Bag' ,'assets\shoes-bag\shoe2.jpg','Nike Sport Shoes','Blue' ,'Woman');
INSERT INTO Products VALUES ( 5,310 ,'Shoes-Bag' ,'assets\shoes-bag\shoe3.jpg','Nike Running Shoes','Gray' ,'Woman');
INSERT INTO Products VALUES ( 5,360 ,'Shoes-Bag' ,'assets\shoes-bag\shoe4.jpg','Skecher Children Shoes','White' ,'Woman');
INSERT INTO Products VALUES ( 4,49 ,'Shoes-Bag' ,'assets\shoes-bag\bag2.jpg','Cloth Bag ','White' ,'Woman');
INSERT INTO Products VALUES ( 5,400 ,'Shoes-Bag' ,'assets\shoes-bag\shoe6.jpg','Nike Running Shoe','White' ,'Woman');
INSERT INTO Products VALUES ( 3,180 ,'Shoes-Bag' ,'assets\shoes-bag\bag1.jpg','Handmade Summer Bag','White' ,'Man');
INSERT INTO Products VALUES ( 2,150 ,'Shoes-Bag' ,'assets\shoes-bag\bag6.jpg','Hiking Backpack','Gray' ,'Unisex');
INSERT INTO Products VALUES ( 4,420 ,'Shoes-Bag' ,'assets\shoes-bag\shoe5.jpg','Skecher Sports Shoes','White' ,'Woman');
INSERT INTO Products VALUES ( 5,99 ,'Shoes-Bag' ,'assets\shoes-bag\bag4.jpg','Shoulder Bag','Black' ,'Woman');
INSERT INTO Products VALUES ( 5,30 ,'Shoes-Bag' ,'assets\shoes-bag\bag5.jpg','Shoulder Bag ','Red' ,'Woman');

INSERT INTO Products VALUES ( 3,120 ,'Home-Life' ,'assets\home-life\home1.jpg','Dinner Set','White' ,'Woman');
INSERT INTO Products VALUES ( 4,100 ,'Home-Life' ,'assets\home-life\home2.jpg','Vase','White' ,'Unisex');
INSERT INTO Products VALUES ( 5,20 ,'Home-Life' ,'assets\home-life\home3.jpg','2-Piece Curtain','White' ,'Woman');
INSERT INTO Products VALUES ( 5,20 ,'Home-Life' ,'assets\home-life\home3.jpg','2-Piece Curtain','Gray' ,'Woman');
INSERT INTO Products VALUES ( 2,70 ,'Home-Life' ,'assets\home-life\home4.jpg','Waxed','White' ,'Woman');
INSERT INTO Products VALUES ( 4,40 ,'Home-Life' ,'assets\home-life\home5.jpg','Colored Frame','Gold' ,'Woman');
INSERT INTO Products VALUES ( 5,150 ,'Home-Life' ,'assets\home-life\home6.jpg','Wall Hanging Cup','Black' ,'Woman');
INSERT INTO Products VALUES ( 3,180 ,'Home-Life' ,'assets\home-life\home7.jpg','Dinner Set','Black' ,'Man');
INSERT INTO Products VALUES ( 2,250 ,'Home-Life' ,'assets\home-life\home8.jpg','Lisens Set','Black' ,'Unisex');
INSERT INTO Products VALUES ( 4,200 ,'Home-Life' ,'assets\home-life\home10.jpg','Wall Shelf','White' ,'Woman');
INSERT INTO Products VALUES ( 5,50 ,'Home-Life' ,'assets\home-life\home11.jpg','Couch','Gray' ,'Woman');
INSERT INTO Products VALUES ( 5,30 ,'Home-Life' ,'assets\home-life\home12.jpg','Night Lamb','White' ,'Man');

INSERT INTO Products VALUES ( 3,150 ,'Electronic' ,'assets\electronics\electronic1.jpg','Xiaomi Smart Watch','Black' ,'Unisex');
INSERT INTO Products VALUES ( 4,400 ,'Electronic' ,'assets\electronics\electronic2.jpg','Airpod Bluetooth Headset','White' ,'Unisex');
INSERT INTO Products VALUES ( 5,170 ,'Electronic' ,'assets\electronics\electronic3.jpg','Headphone','White' ,'Woman');
INSERT INTO Products VALUES ( 2,500 ,'Electronic' ,'assets\electronics\electronic4.jpg','iPhone','Red' ,'Woman');
INSERT INTO Products VALUES ( 4,40 ,'Electronic' ,'assets\electronics\electronic5.jpg','Powerbank','Red' ,'Woman');
INSERT INTO Products VALUES ( 5,140 ,'Electronic' ,'assets\electronics\electronic6.jpg','Mouse Keyboard Set','Black' ,'Woman');
INSERT INTO Products VALUES ( 3,120 ,'Electronic' ,'assets\electronics\electronic7.jpg','Watch','Black' ,'Man');
INSERT INTO Products VALUES ( 2,70 ,'Electronic' ,'assets\electronics\electronic8.jpg','Bluetooth Charger','Black' ,'Unisex');
INSERT INTO Products VALUES ( 2,200 ,'Electronic' ,'assets\electronics\electronic9.jpg','Apple iPad','Black' ,'Unisex');
INSERT INTO Products VALUES ( 4,250 ,'Electronic' ,'assets\electronics\electronic10.jpg','Laptop','Black' ,'Woman');
INSERT INTO Products VALUES ( 5,470 ,'Electronic' ,'assets\electronics\electronic11.jpg','Vacuum Cleaner','Purple' ,'Woman');
INSERT INTO Products VALUES ( 5,400 ,'Electronic' ,'assets\electronics\electronic12.jpg','Sony Playstation','Black' ,'Man');



INSERT INTO Products VALUES ( 3,30 ,'Accessories' ,'assets\accessories\accessories1.jpg','Stone Earings','Purple' ,'Woman');
INSERT INTO Products VALUES ( 4,30, 'Accessories','assets\accessories\accessories2.jpg' ,'Sea Shell Earrings','White','Woman' );
INSERT INTO Products VALUES ( 5,80,'Accessories','assets\accessories\accessories3.jpg' ,'Sea Shell Necklace','White', 'Woman');
INSERT INTO Products VALUES ( 2,200,'Accessories','assets\accessories\accessories4.jpg','Leather Watch','Red','Man' );
INSERT INTO Products VALUES ( 4,180,'Accessories','assets\accessories\accessories5.jpg','Leather Watch','Black','Man' );
INSERT INTO Products VALUES ( 3,400,'Accessories','assets\accessories\accessories6.jpg','Watch','Silver','Woman' );
INSERT INTO Products VALUES ( 2,100,'Accessories','assets\accessories\accessories7.jpg','Belt','Black','Man' );
INSERT INTO Products VALUES ( 5,110,'Accessories','assets\accessories\accessories8.jpg','Hat','Blue','Woman' );
INSERT INTO Products VALUES ( 3,280,'Accessories','assets\accessories\accessories9.jpg','Watch','Brown','Man' );
INSERT INTO Products VALUES ( 2,550,'Accessories','assets\accessories\accessories10.jpg','Sun Glasses','Black','Man' );
INSERT INTO Products VALUES ( 5,200,'Accessories','assets\accessories\accessories11.jpg','Jewelry Set','Purple','Woman' );
INSERT INTO Products VALUES ( 4,120,'Accessories','assets\accessories\accessories12.jpg','Cap','Black','Man' );

INSERT INTO Products VALUES ( 4,200,'Cosmetics','assets/cosmetic/cosmetic1.jpg','Sun Cream','White','Unisex' );
INSERT INTO Products VALUES ( 3,190,'Cosmetics','assets/cosmetic/cosmetic2.jpg','Benefit Blusher Palette','Pink','Woman' );
INSERT INTO Products VALUES ( 4,5,'Cosmetics','assets/cosmetic/cosmetic3.jpg','Nail Polish','Pink','Woman');
INSERT INTO Products VALUES ( 3,500,'Cosmetics','assets/cosmetic/cosmetic4.jpg','Versace Perfume','Green','Man'  );
INSERT INTO Products VALUES ( 5,200,'Cosmetics','assets/cosmetic/cosmetic5.jpg','Honest Skincare Set','White','Woman');
INSERT INTO Products VALUES ( 4,35,'Cosmetics','assets/cosmetic/cosmetic6.jpg','Honest Powder','Pink','Man' );
INSERT INTO Products VALUES ( 2,80,'Cosmetics','assets/cosmetic/cosmetic7.jpg','Herbal Serum','Green','Unisex' );
INSERT INTO Products VALUES ( 3,60,'Cosmetics','assets/cosmetic/cosmetic8.jpg','Mascara','Black','Woman' );
INSERT INTO Products VALUES ( 4,160,'Cosmetics','assets/cosmetic/cosmetic9.jpg','Mascara','Black','Woan' );
INSERT INTO Products VALUES ( 5,130,'Cosmetics','assets/cosmetic/cosmetic10.jpg','Skincare Set','Blue','Man' );
INSERT INTO Products VALUES ( 4,220,'Cosmetics','assets/cosmetic/cosmetic11.jpg','Nars Eyeshadow Palette','Black','Woman' );
INSERT INTO Products VALUES ( 3,350,'Cosmetics','assets/cosmetic/cosmetic12.jpg','Perfume','Black','Man' );