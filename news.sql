/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : CwizWebsite

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 04/04/2019 17:54:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `occur_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(255) NOT NULL,
  `newsImg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES (13, '新闻', 'AIOps技术新贵 云兴维智获数千万A轮融资', '近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。近日，国内领先智能运维服务公司云兴维智获得华创资本投资的数千万元人民币A轮融资，本轮融资将用于进一步推进基于机器学习算法和人工智能的IT运维（AIOps）技术产品落地，为客户提供更便捷高效的智能运维解决方案。', '2018/05/17', '//mp.weixin.qq.com/s/hcNKRYOtRh4dY3CGv6r-PA', 'https://cloudwiz.cn/static/img/news-1.31816b5.png');
INSERT INTO `news` VALUES (14, '新闻', '如何运用Cloudwiz实现真正的故障溯源', '在PMS系统中，部分门店的房间状态在顾客 房后没有及时进行更新，导致新入住客户无法正常办理入住手续，相关房源状态更新经常在某个时间点出现严重延迟。通过传统的故障处理流程，业务部门难以判断导致系统异常的直接原因。', '2018/06/26', '//mp.weixin.qq.com/s/ZOx-4YdPoy-leNrlr0-9HQ', 'https://cloudwiz.cn/static/img/news-2.e420aa1.png');
INSERT INTO `news` VALUES (15, '新闻', 'Cloudwiz亮相2018云原生技术实践峰会', '金融机构“上云”是近年来的主流发展方向，云计算成为 助推金融行业进入科技化新时代的重要助力。根据预测，中国云计算市场规模2018年将增长到7823亿元，从2012年到2018年的年均复合增长率为56.8%。而在全球，金融云在全球云计算市场占比超过20%。', '2018/08/24', '//mp.weixin.qq.com/s/OgYZxrDEiPNtyCdhSnZWEg', 'https://cloudwiz.cn/static/img/news-3.70f502a.png');
INSERT INTO `news` VALUES (16, '新闻', '云兴维智：引领云+金融时代的新一轮革新', '8月26日，作为我国金融业唯一的全国性展览平台和亚太地区影响力最大的金融盛会，2018中国国际金融展圆满落幕。本次展会以“金融新时代·科技新发展·创新新气象”为主题。云兴维智作为国际领先的AIOps技术高科技软件公司，为国内外多家知名金融机构提供智能运维服务。', '2018/09/07', '//mp.weixin.qq.com/s/TyOBFK86mVvWLipx3ShTdw', 'https://cloudwiz.cn/static/img/news-4.118b7c0.png');
INSERT INTO `news` VALUES (17, '新闻', 'Cloudwiz亮相2018云原生技术实践峰会', '9月20日，2018年云原生技术实践峰会（CloudNative Best Practices Summit）成功落幕。超过200名云原生相关行业的负责人、头部厂商和生态伙伴相聚一堂，共同见证了这一云原生行业前所未有的高端用户盛会。', '2018/09/21', '//mp.weixin.qq.com/s/tkGdrUMRVczxPlV0264qUA', 'https://cloudwiz.cn/static/img/news-5.0ea0acf.png');
INSERT INTO `news` VALUES (18, '新闻', '云兴维智亮相AWS Transformation Day', '10月31日，AWS Transformation Day 全球巡展中国首站，在上海拉开帷幕。这是 AWS 针对企业级客户精心打造的数字化转型与创新技术峰会，旨在分享 AWS 创新文化与企业级技术，致力于帮助企业转型上云，加速市场响应，提升运营效率，强化安全与合规，以初创企业的速度进行创新。', '2018/11/01', '//mp.weixin.qq.com/s/20bYGUdFMRFUg-kQtYEDeQ', 'https://cloudwiz.cn/static/img/news-7.2904328.jpeg	');
INSERT INTO `news` VALUES (19, '新闻', '云兴维智作为主讲嘉宾参加全球运维技术大会', '受会议主办方InfoQ的邀请，2018年11月15日-16日，云兴维智参加了全球运维技术大会（CNUTCon）。会议期间，云兴维智CEO王亚雷作为主讲嘉宾发表精彩演讲。公司CEO王亚雷在会议期间，做了题为《智能故障处理中的系统工程》的演讲，重点介绍了云兴维智在AIOps领域的探索和成果。1受会议主办方InfoQ的邀请，2018年11月15日-16日，云兴维智参加了全球运维技术大会（CNUTCon）。会议期间，云兴维智CEO王亚雷作为主讲嘉宾发表精彩演讲。公司CEO王亚雷在会议期间，做了题为《智能故障处理中的系统工程》的演讲，重点介绍了云兴维智在AIOps领域的探索和成果。2受会议主办方InfoQ的邀请，2018年11月15日-16日，云兴维智参加了全球运维技术大会（CNUTCon）。会议期间，云兴维智CEO王亚雷作为主讲嘉宾发表精彩演讲。公司CEO王亚雷在会议期间，做了题为《智能故障处理中的系统工程》的演讲，重点介绍了云兴维智在AIOps领域的探索和成果。', '2018/11/21', '//mp.weixin.qq.com/s/ZtznjV-nDGD49PqU_n-dgQ', 'https://cloudwiz.cn/static/img/news-7.2904328.jpeg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
