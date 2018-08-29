CREATE TABLE CUSTOMERS(
  ID lONG PRIMARY KEY AUTO_INCREMENT,
  FIRST_NAME VARCHAR(255) NOT NULL,
  LAST_NAME VARCHAR(255) NOT NULL,
  BIRTH_DATE VARCHAR(50) NOT NULL,
  SEX VARCHAR(50) NOT NULL,
  IDENTIFICATION_NUMBER LONG(20) NOT NULL
);

CREATE TABLE ORDERS(
  ID LONG PRIMARY KEY AUTO_INCREMENT,
  DATE VARCHAR(50) NOT NULL,
  STATUS VARCHAR(255) NOT NULL,
  PRICE DOUBLE(50) NOT NULL,
  CURRENCY VARCHAR(50) NOT NULL,
  FK_CUSTOMER_ID LONG NOT NULL,

  CONSTRAINT FK_ORDERS_TO_CUSTOMER FOREIGN KEY (FK_CUSTOMER_ID) REFERENCES CUSTOMERS(ID)
);