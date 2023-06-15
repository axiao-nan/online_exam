# 在线考试系统

## 第一章 业务场景介绍

### 1.1业务背景概述

​	随着计算机软件技术的高速发展，现代社会正快速迈入了一个互联网应用时代，Web应用在各行业都得到了广泛的应用，如小型公司的运销存管理系统，高校的教务管理系统等都是通过B/S架构搭建的Web应用。在过去的几年中，在线考试系统应用在很多行业都得到了广泛的应用，但在教学管理考核中难以普及。因此，本文针对当前在教学考核中遇到的实际题目进行分析，设计出了一款基于B/S架构的在线考试系统。

### 1.2业务场景说明

​	本在线考试系统的设计主要分为两个角色设计，一个管理者角色管理考试相关的信息（相当于教师），一个考生角色参加管理者发布的考试。其中管理者可以添加、删除、修改和查看考生信息，可以查询统计成绩，可以管理发布考试试题；考生可以查看本人的详细信息并且自定义上传头像信息，可以查询考试信息以及成绩信息，可以参加在线考试。另外，两个角色都提供了修改登录密码的功能。最后，对本文中设计实现的所需功能进行了功能测试，测试结果表明，该系统可以满足教学考核中选择题和判断题的考核需求。



## 第二章 系统需求分析

### 2.1系统可行性分析

- #### 技术可行性

技术可行性是通过对本项目实现所涉及的技术进行系统分析，找出技术难题及解决方案保证系统在技术实现环节不再出现问题而导致无法继续，本系统主要涉及到的技术是web技术，这种技术的应用已经非常广泛，自身有着很多技术解决方案的积累，所以遇到问题应该都能找到很多资料进行查阅。web技术是传统的B/S架构，它具有稳定性，可扩展性等优点。本项目最终决定前端使用vue+bootstrap技术，后端使用springboot+mysql数据库

### 2.2功能需求分析

​	在系统中不同类型的角色有着不同的功能需求，角色需要完成哪些工作，达到什么样的目标，系统需要分哪些模块去完成等等都是系统需求分析中需要考虑的重要因素，为了充分了解不同角色对系统的使用需求，我对不同角色进行了需求分析，主要的功能需求包括以下几个方面

- #### 学生需求

​	学生是这个系统中用户量最多的角色，主要通过电脑浏览器进行登录完成测试，可以查看考试信息、完成的考试的成绩及个人信息。考生的登录初始账号统一由管理者进行添加分发，考生通过自行登录后，可以根据需求决定是否更改登录的密码，另外还提供一个个性化的个人信息头像上传功能。

​	学生角色登录系统时要求系统界面简单明了，能够符合大部分的考生的操作。关于最主要的考试功能，在考试期间需要可以导航到任意的题目号进行显示，需要可以显示出已经选择了答案的题目的答案并且能够更改原来选择的答案，需要可以在试题计时结束后自动提交试题答案，需要可以在提交试卷时进行试题的得分计算并且能够导航到成绩显示的页面供考生查看。除此，在考试的页面还需要给出适当的提示，如“离开此页面将没有成绩”等提示。大致的功能需求如图2-1所示：

![学生需求](C:\Users\nansh\Desktop\学生需求.png)



- #### 管理员需求

​	管理者主要需要对整个系统进行管理，需要完成考试试题的发布和对已发布考试的删除，考生信息的录入、查看、修改、删除。在实际的应用中，一般情况下考生的数量都是大于30个人的，因而有必要在考生管理的页面进行考生信息的分页显示。管理者的需要完成的任务繁多，<u>其中试题的录入这一项工作最为繁琐，因此，需要提供一个excel中间文件完成一次性上传考核的题目。为了保证试题录入的时系统的正确性，提供一个试题的模板给管理者参照录入自己需要考核的题目，并且提供考试相关信息描述的录入，如考试时间，考试的描述（期中考试，期末考试，英语考试，物理考试）</u>

​	在考生管理中录入考生信息完成和考试的发布完成后，考生可以通过登录系统完成发布的考试，在考生完成了考试后，管理者可以在成绩统计中查询已发布的考试的成绩统计（最高分、最低分和平均分）和未完成考试的考生信息。大致的功能需求如图2-2所示：

![管理员需求](C:\Users\nansh\Desktop\管理员需求.png)



### 2.3非功能需求分析

​	基于B/S架构的在线考试系统通过浏览器（Browser）和服务器（Server）交互的方式实现，功能界面应当遵循界面简洁，简单操作的原则，避免繁琐问题给用户增加工作量等，具体要求包括：

#### 2.3.1界面美观

​	界面时进行人加交互的接口，根据大部分的web应用的操作方式进行UI的布局设计，具备良好的UI界面是吸引用户使用的最直接元素。因此系统的操作界面整体采用黑白色为主色调，黑色背景作为导航栏的显示，，白色作为功能按钮的显示。

#### 2.3.2操作简单

​	系统的操作需要同时兼顾管理者和考生的使用需求，同时更要对常用功能和易出错功能给与人性化的提示，并且能够拥有操作结果的反馈信息。

#### 2.3.3.多用户在线考核

　　本系统是目标用户是教育部门，系统至少需要能够40个考生同时进行在线考试的并发量要求。

#### 2.3.4 运行稳定

　　在线考试系统是教育考核的一种新方式，在考核的过程中必须保证应用的稳定性，避免发生崩溃导致考生需要重复考等故障。

## 第三章 系统设计

### 3.1系统整体设计

​	根据前期的需求描述要求，本系统的使用主要是PC电脑端，用户可以通过电脑浏览器使用本系统。本系统设计是基于B/S架构下实现的，软件服务器的运行环境为Windows 10专业版、Tomcat服务器、MySQL数据库以及Navicat数据库管理软件；用户运行环境主要是标准的浏览器环境。服务器业务逻辑的处理采用springboot技术实现，用户端的功能显示与功能实现采用vue语言和bootstrap框架实现。详见3-1系统平台记录表：

| 服务器操作系统 |                       |
| -------------- | --------------------- |
| 数据库         | MySQL                 |
| 数据库管理软件 | Navicat               |
| Web服务器      | Tomcat                |
| 客户端浏览器   | Edge ，Chrome         |
| 开发环境       | IntelliJ IDEA，VScode |
| 开发语言       | java，vue             |

​	系统中的考生信息和考试试题对数据的安全性有较高要求，采用B/S架构的应用具有良好的扩展性外，也具有一定的安全性，只有通过登录验证数据库中的用户表存在用户记录的用户才能进入本系统。

### 3.2业务流程设计

​	根据需求分析，系统的角色分为管理者和学生两个角色，业务的流程可以分为两个分支，具体的业务流程图如图3-2和图3-3所示：

管理端业务流程：

![管理端流程图](C:\Users\nansh\Desktop\管理端流程图.png)

学生端业务流程：



![学生端流程图](C:\Users\nansh\Desktop\学生端流程图.png)



​	管理者登录本系统后可以有四个业务流程，一是考生信息录入，根据新加入学的学生信息录入本系统，如果录入错误还可以修改删除，二是试卷管理，管理者可以根据要求选择不同题型的确定题目数量，最后发布本试题到系统中，三是试题管理，提前在系统中确定题目题目数量，然后在考试管理中选择试卷中三是成绩统计，待试题发布成功和考生登录系统完成考试后，管理者可以在成绩统计中查看以发布的试题的成绩统计。	

​	学生登录本系统后可以有两个业务流程，一是查看管理者发布的试题，如果有试题，学生可以开始在线考试，答题完成后可以交卷，交卷完成后等待考试的成绩。

### 3.3系统框架设计

​	系统的使用是通过浏览器访问Web服务器的，系统整体设计分为两个角色，分别为管理者和考生。管理者角色主要提供考生管理、试题管理和成绩统计三大功能模块；考生角色主要提供我的考试、我的信息两大功能模块。

管理员角色功能框架如图3.1所示：

![管理员角色功能 (1)](C:\Users\nansh\Desktop\管理员角色功能 (1).png)



学生角色功能框架如图3.2所示：

![学生角色功能框架](C:\Users\nansh\Desktop\学生角色功能框架.png)

### 3.4主要功能模块设计

​	本系统的设计主要是解决当前传统教学考核中的选择题，判断题题型系统判定，简答题题型人工判定，主要的功能模块可以分为两个大模块，九个小模块分别为登录模块，查看个人信息修改密码模块，管理端的学生管理模块，试卷管理模块，试题管理模块，教师评判模块和成绩统计模块，以及学生端的考试模块，查看排行榜模块。

#### 3.4.1登录模块设计

​	系统登录模块是本系统的入口。具体业务流程如图3.3所示。

![登录模块设计](C:\Users\nansh\Desktop\登录模块设计.png)

#### 3.4.2学生端设计

​	学生是本系统只要角色之一，主要功能模块有考试模块、查看排行榜模块，考试模块，排行榜模块主要实现学生查看总成绩和各科成绩的排名情况，具体实现流程如图3.4所示。



![学生端流程图](C:\Users\nansh\Desktop\学生端流程图.png)

#### 3.4.3管理员/教师端设计

​	管理员也是使用本系统角色之一，功能模块主要有学生管理模块，试卷管理模块，试题管理模块，

##### 3.4.3.1学生管理模块设计



![学生管理模块](C:\Users\nansh\Desktop\学生管理模块.png)

##### 3.4.3.2试卷管理模块设计



##### 3.4.3.3试题管理模块设计



![试题管理模块](C:\Users\nansh\Desktop\试题管理模块.png)

##### 3.4.3.4成绩管理模块设计

![成绩统计模块](C:\Users\nansh\Desktop\成绩统计模块.png)

#### 3.4.4服务器端设计

##### 3.4.3.1web服务器设计



##### 3.4.3.2数据库设计

## 数据库

学生表：

| 字段    | 数据类型 | 描述         | 注释                |
| :------ | -------- | ------------ | ------------------- |
| s_id    |          | 学生id       | 主键自增            |
| s_name  |          | 学生姓名     | 不为空              |
| s_sex   |          | 学生性别     | 不为空              |
| s_num   |          | 学生学号     | 不为空              |
| s_pwd   |          | 学生密码     | 不为空（不少于6位） |
| s_photo |          | 学生头像     |                     |
| c_id    |          | 学生选修课程 | 不为空/外键         |

管理员/教师表

| 字段    | 数据类型 | 描述         | 注释        |
| ------- | -------- | ------------ | ----------- |
| t_id    |          | 教师id       | 主键自增    |
| t_name  |          | 教师姓名     | 不为空      |
| t_sex   |          | 教师性别     | 不为空      |
| t_num   |          | 教师号       | 不为空      |
| t_pwd   |          | 教师密码     | 不为空      |
| t_photo |          | 教师头像     |             |
| c_id    |          | 教师教授课程 | 不为空/外键 |

成绩表

| 字段   | 数据类型 | 描述     | 注释        |
| ------ | -------- | -------- | ----------- |
| s_id   |          | 学生id   | 主键自增    |
| s_name |          | 学生姓名 | 不为空      |
| c_id   |          | 课程号   | 不为空      |
| score  |          | 学生成绩 | 不为空/外键 |

课程表

| 字段 | 数据类型 | 描述   | 注释     |
| ---- | -------- | ------ | -------- |
| c_id |          | 课程号 | 主键自增 |
| name |          | 课程名 | 不为空   |

选择题表

| 字段       | 数据类型 | 描述     | 注释 |
| ---------- | -------- | -------- | ---- |
| x_id       |          | 题目id   | 主键 |
| content    |          | 题目     |      |
| c_id       |          | 课程号   | 外键 |
| answer_a   |          | 选项A    |      |
| answer_b   |          | 选项B    |      |
| answer_c   |          | 选项C    |      |
| answer_b   |          | 选项D    |      |
| answer_key |          | 正确答案 |      |

填空/简答表

| 字段       | 数据类型 | 描述     | 注释   |
| ---------- | -------- | -------- | ------ |
| j_id       |          | 题目id   | 主键   |
| content    |          | 题目     | 不为空 |
| c_id       |          | 课程号   | 外键   |
| answer     |          | 答案     |        |
| answer_key |          | 正确答案 |        |





## 第四章 系统功能实现





