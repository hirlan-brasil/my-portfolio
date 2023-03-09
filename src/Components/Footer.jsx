import githubIcon from "../assets/redes-sociais-icons/github-icon.png";
import linkedlnIcon from "../assets/redes-sociais-icons/linkedIn-icon.png";

function Footer() {
    return (
        <div>
            {/*---- ENTRE EM CONTATO ----*/}
            <div id="contatos" className="relative py-16">
                <div className="absolute inset-x-0 top-7 text-center">
                    <h1 className="inline-block w-[294px] md:w-[360px] text-3xl font-bold bg-slate-50 md:px-8">
                        Entre em contato, estou no aguardo :)
                    </h1>
                </div>
                <div className="border-y-4 border-blue-400 space-x-20 text-center py-20 font-bold">
                    <a className="text-3xl text-blue-400" href="#">
                        Linkedln
                    </a>
                    <a className="text-3xl text-blue-400" href="#">
                        GitHub
                    </a>
                </div>
                <div className="absolute inset-x-0 bottom-10 text-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center bg-slate-50 space-x-4 px-6">
                            <a href="#">
                                <img
                                    src={githubIcon}
                                    alt="link do meu github"
                                    width={"38px"}
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={linkedlnIcon}
                                    alt="link do meu linkedln"
                                    width={"38px"}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*---- /ENTRE EM CONTATO ----*/}

            <div className="container mx-auto text-center text-sm font-semibold">
                <span className="block text-3xl font-bold text-blue-400 pt-6 pb-20">
                    "Obrigado pelo scrolling!"
                </span>
                <span className="block">@Copyright 2023</span>
                <span className="block pb-20 md:pb-2">
                    Criado por Hirlan Brasil
                </span>
            </div>
        </div>
    );
}

export default Footer;
