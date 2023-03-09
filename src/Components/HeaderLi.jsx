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

            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollPosition <= 100) {
                    setActiveLink();
                }
                if (scrollPosition >= 1700) {
                    setActiveLink(3);
                }
                const section = sections[i];
                if (scrollPosition >= section.offsetTop - 200) {
                    setActiveLink(i);
                    console.log(activeLink);
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
