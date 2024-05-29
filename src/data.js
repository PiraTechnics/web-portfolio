import BuyRule from "./images/projecticons/BuyRule.png";
import Bookshelf from "./images/projecticons/Bookshelf.png";
import NCAARecall from "./images/projecticons/Football.png";
import Wetter from "./images/projecticons/Wetter.png";
import QuestMap from "./images/projecticons/QuestMap.png";
import Prio from "./images/projecticons/Prio.png";
import BattleScribe from "./images/projecticons/Battlescribe.png";
import Gelato from "./images/projecticons/Gelato.png";
import Cerulean from "./images/projecticons/Cerulean.png";

export const projects = [
	{
		title: "BattleScribe MonsterDB",
		text: "Monster Databse viewer for Dungeons & Dragons 5th edition",
		thumbnail: BattleScribe,
		github: "https://github.com/PiraTechnics/BattleScribe",
		live: "https://battlescribe.vercel.app/dashboard/monsters",
		technologies: ["Next.js, MongoDB, Mongoose, TailwindCSS"],
	},
	{
		title: "Cerulean Web Studio",
		text: "Web Design Company Site",
		thumbnail: Cerulean,
		github: "https://github.com/PiraTechnics/cerulean-web-studio",
		live: "https://ceruleanwebstudio.com",
		technologies: ["React", "TailwindCSS", "Next.js"],
	},
	{
		title: "1022 Gelato",
		text: "Cafe & Gelateria Website",
		thumbnail: Gelato,
		github: "https://github.com/PiraTechnics/1022-gelato",
		live: "https://sparkly-klepon-d0912d.netlify.app/",
		technologies: ["React", "TailwindCSS", "Astro"],
	},
	{
		title: "BuyRule",
		text: "A Legend of Zelda ecommerce parody application, stocking all an adventurer's needs!",
		thumbnail: BuyRule,
		github: "https://github.com/PiraTechnics/buyrule",
		live: "https://gregarious-phoenix-51a442.netlify.app",
		technologies: ["React", "TailwindCSS", "Vite.js"],
	},
	{
		title: "Bard's Bookshelf",
		text: "Stylish and responsive literature blog, powered by Gatsby and Netlify's CMS",
		thumbnail: Bookshelf,
		github: "https://github.com/PiraTechnics/gatsby-decap-blog",
		live: "https://bardsbookshelf.com",
		technologies: ["React", "TailwindCSS", "Gatsby", "GraphQL", "Decap CMS"],
	},
	{
		title: "Football Recall",
		text: "Test your memory of the AP top 25 teams, and score all the points!",
		thumbnail: NCAARecall,
		github: "https://github.com/PiraTechnics/top-25-recall",
		live: "https://zesty-crisp-40253b.netlify.app/",
		technologies: ["React", "TailwindCSS", "Vite.js", "REST API"],
	},
	{
		title: "Wetter",
		text: "A responsive, location-based weather application",
		thumbnail: Wetter,
		github: "https://github.com/PiraTechnics/wetter",
		live: "https://piratechnics.github.io/wetter/",
		technologies: ["React", "TailwindCSS", "Vite.js"],
	},
	{
		title: "QuestMap",
		text: "Upload, edit and plot your RPG journey alongside the whole party",
		thumbnail: QuestMap,
		github: "https://github.com/PiraTechnics/questmap",
		technologies: ["Python", "Django", "LeafletJS"],
	},
	/* 	{
		title: "Prio",
		text: "A To-do list web application",
		thumbnail: Prio,
		github: "https://github.com/PiraTechnics/Prio",
		live: "https://piratechnics.github.io/Prio/",
		technologies: ["React", "Bootstrap"],
	}, */
];

export default projects;
