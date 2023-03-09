import { useEffect, useState } from "react";

function HeaderLi({ itemName, link, index }) {
    const [activeLink, setActiveLink] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                document.querySelector("#quemEuSou"),
                document.querySelector("#habilidades"),
                document.querySelector("#projetos"),
                document.querySelector("#contatos"),
            ];
            const scrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;

            console.log(scrollPosition);
            for (let i = sections.length - 2; i >= 0; i--) {
                const section = sections[i];
                if (scrollPosition <= 150) {
                    setActiveLink();
                } else if (scrollPosition >= 1230) {
                    setActiveLink(sections.length - 1);
                    break;
                } else if (scrollPosition >= section.offsetTop - 50) {
                    setActiveLink(i);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <li
            key={index}
            className={`border md:border-2 py-1 px-2 mt-1 md:mt-0 rounded-full md:rounded border-slate-600 active:border-none active:bg-blue-400 active:text-slate-50 ${
                activeLink === index
                    ? "border-none bg-blue-400 text-slate-50"
                    : ""
            }`}
        >
            <a href={link}>{itemName}</a>
        </li>
    );
}

export default HeaderLi;
