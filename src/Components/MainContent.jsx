import githubIcon from "../assets/redes-sociais-icons/github-icon.png";
import linkedlnIcon from "../assets/redes-sociais-icons/linkedIn-icon.png";

import foto from "../assets/minha-foto.png";

import MainContentSkills from "./MainContentSkills";
import html5Icon from "../assets/skills-icons/html5-icon.svg";
import css3Icon from "../assets/skills-icons/css3-icon.svg";
import javascriptIcon from "../assets/skills-icons/javascript-icon.svg";
import reactIcon from "../assets/skills-icons/react-icon.svg";
import tailwindcssIcon from "../assets/skills-icons/tailwindcss-icon.svg";

import MainContentProjects from "./MainContentProjects";
import projectsImg from "../assets/projects-img.png";

function MainContent() {
    return (
        <div>
            {/*---- TOP ----*/}
            <div className="flex items-center max-w-6xl mx-auto">
                <div className="hidden sm:inline-block p-6">
                    <img
                        src={foto}
                        alt="Minha foto"
                        style={{ maxWidth: "240px" }}
                    />
                </div>
                <div className="p-6 pb-20">
                    <h1 className="text-4xl font-bold">
                        Hello world
                        <span className="animation-piscaPisca">,</span>
                    </h1>
                    <p className="text-lg">
                        Consequat eu mollit Lorem sit exercitation in nostrud
                        dolore pariatur duis. Anim minim veniam minim duis est.
                    </p>
                </div>
                <div className="flex items-end">
                    <ul className="flex flex-col items-center space-y-1 py-6 pr-2 sm:pr-6 pt-36">
                        <li className="text-lg vertical-text pl-[15px]">
                            ______________________
                        </li>
                        <li className="inline-block">
                            <a href="#">
                                <img
                                    src={githubIcon}
                                    alt="link do meu github"
                                    width={"38px"}
                                />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a href="#">
                                <img
                                    src={linkedlnIcon}
                                    alt="link do meu linkedln"
                                    width={"38px"}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/*---- /TOP ----*/}

            {/*---- ABOUT ME ----*/}
            <div id="quemEuSou" className=" px-8 py-2 max-w-6xl mx-auto">
                <h1 className="text-3xl text-blue-400 font-bold">About me</h1>
                <div className="flex">
                    <span className="min-w-[80px] text-2xl">--------</span>
                    <p className="text-lg pt-1">
                        Lorem laboris ad sit in laboris.Velit anim eiusmod
                        consectetur est labore.Quis deserunt nisi ad culpa.Do
                        voluptate anim tempor nostrud ex irure qui non commodo
                        nostrud.
                    </p>
                </div>
            </div>

            {/*---- /ABOUT ME ----*/}

            {/*---- MY SKILLS ----*/}
            <div
                id="habilidades"
                className="container mx-auto text-center pt-14 pb-16"
            >
                <h1 className="text-3xl text-blue-400 font-bold pb-4">
                    .My Skills
                </h1>
                <div className="space-x-3">
                    <MainContentSkills path={html5Icon} alt={"Html5"} />
                    <MainContentSkills path={css3Icon} alt={"Css3"} />
                    <MainContentSkills
                        path={javascriptIcon}
                        alt={"JavaScript"}
                    />
                    <div className="pt-2 space-x-3">
                        <MainContentSkills path={reactIcon} alt={"React"} />
                        <MainContentSkills
                            path={tailwindcssIcon}
                            alt={"Tailwindcss"}
                        />
                    </div>
                </div>
            </div>

            {/*---- /MY SKILLS ----*/}

            {/*---- PROJETOS ----*/}
            <div className="relative p-10" id="projetos">
                <div className="absolute inset-x-0 top-1 text-center">
                    <h1 className="inline text-3xl text-blue-400 font-bold bg-slate-50 rounded-lg px-3 py-1">
                        Projects
                    </h1>
                </div>
                <div className="mx-auto rounded-lg shadow-lg bg-slate-800 max-w-6xl">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 pt-12 pb-6">
                        <div className="rounded-md overflow-hidden border-2 border-white">
                            <MainContentProjects
                                imgSrc={projectsImg}
                                imgAlt={"Imagem do projeto"}
                                title={"Título do projeto"}
                                description={"Descrição do projeto"}
                            />
                        </div>
                        <div className="hidden sm:inline-block rounded-md overflow-hidden border-2 border-white">
                            <MainContentProjects
                                imgSrc={projectsImg}
                                imgAlt={"Imagem do projeto"}
                                title={"Título do projeto"}
                                description={"Descrição do projeto"}
                            />
                        </div>
                        <div className="hidden md:inline-block rounded-md overflow-hidden border-2 border-white">
                            <MainContentProjects
                                imgSrc={projectsImg}
                                imgAlt={"Imagem do projeto"}
                                title={"Título do projeto"}
                                description={"Descrição do projeto"}
                            />
                        </div>
                    </div>
                    <div className="container mx-auto text-center">
                        <a
                            className="inline-block px-1 py-2 cursor-default"
                            href="#projeto"
                        >
                            <div className="flex items-center justify-center text-white px-1 hover:opacity-50">
                                <span className="mr-1 pb-0.5">Veja mais</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/*---- /PROJETOS ----*/}
        </div>
    );
}

export default MainContent;
