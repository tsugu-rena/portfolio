import React from "react";
import styles from "./Home.module.css";
import ProjectCard from "../components/ProjectCard";
import MainLogoImage from "../assets/imageFile/logo-suetsugu-rena.svg";
import saveNImage from "../assets/imageFile/thbn-saven.svg";
import koujienImage from "../assets/imageFile/thbn-koujien.svg";
import endirectImage from "../assets/imageFile/thbn-endirect.svg";
import enTenshokuNImage from "../assets/imageFile/thbn-entenshoku.svg";
import engageImage from "../assets/imageFile/thbn-engage.svg";
import graphicImage from "../assets/imageFile/thbn-graphic.svg";
import codeImage from "../assets/imageFile/thbn-code.svg";


const projects = [
  {
    title: "エン転職のサイト改善（ABテスト）",
    startDate: "2021/7/1",
    endDate: "2024/6/30",
    description: "サイト内体験の向上とビジネス目標を両立する施策を、企画から実装、効果検証まで一貫して担当しました。",
    image: enTenshokuNImage,
    link: "/en-tenshoku",
  },
  {
    title: "営業資料集約ツール「save-n」の開発",
    startDate: "2021/7/7",
    endDate: "2021/10/14",
    description: "商談用資料を一元管理する社内ツールのデザイン設計を担当し、営業部門の生産性向上とナレッジの標準化に貢献しました。",
    image: saveNImage,
    link: "/save-n",
  },
  {
    title: "社内FAQ「広辞en」のリプレイス",
    startDate: "2022/10/28",
    endDate: "2022/12/20",
    description: "社内FAQのデザインおよび実装を担当し、情報へのアクセス性を大幅に改善しました。長期運用を見据えたデザイン設計を行い、管理の効率化を実現しました。",
    image: koujienImage,
    link: "/koujien",
  },
  {
    title: "エン転職ダイレクト HTMLメールの開発",
    startDate: "2024/6/11",
    endDate: "2024/7/12",
    description: "スカウト開封率向上を目指し、従来のテキストメールをHTML化。デザインと実装を担当し、視覚的に魅力的なメールを提供しました。",
    image: endirectImage,
    link: "/endirect",
  },
  {
    title: "engage導入事例サイトの開発",
    startDate: "2024/6/1",
    endDate: "2024/9/30",
    description: "microCMSを用いて、記事を完結に入稿できる仕組みを実現。シニアエンジニアの指導のもと、デザイン設計からフロントエンド実装まで担当しました。",
    image: engageImage,
    link: "/engage",
  },
  {
    title: "グラフィックデザイン",
    startDate: "2021/4/5",
    endDate: "",
    description: "PhotoshopやIllustratorを使用して、記事サムネイルやバーチャルオフィス背景を作成。視覚的に魅力的かつ印象的なデザインを制作しました。",
    image: graphicImage,
    link: "/graphic",
  },
  {
    title: "コーディング・実装",
    startDate: "2021/4/5",
    endDate: "",
    description: "シニアエンジニアの指導のもと、WordPress（PHP）やmicroCMS（React）を使用した実装経験があります。",
    image: codeImage,
    link: "/code",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.mainVisual}>
        <img className={styles.logo} src={MainLogoImage} alt="suetsugu renaのロゴ" />
        <div className={styles.textArea}>
          <span className={styles.category}>Designer&Coder</span>
          <span className={styles.caption}>/</span>
          <span className={styles.caption}>Portfolio</span>
        </div>
      </div>
      <div className={styles.workSection}>
        <h2 className={styles.sectionTitle}>Work</h2>
        <div className={styles.workList}>
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} startDate={project.startDate} endDate={project.endDate} description={project.description} image={project.image} link={project.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
