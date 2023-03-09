import { useEffect, useState } from "react";

function HeaderLi({ itemName, link, index }) {
    const [activeLink, setActiveLink] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition <= 300) {
                setActiveLink();
            } else if (scrollPosition <= 550) {
                setActiveLink(0);
            } else if (scrollPosition <= 850) {
                setActiveLink(1);
            } else if (scrollPosition <= 1200) {
                setActiveLink(2);
            } else if (scrollPosition > 1200) {
                setActiveLink(3);
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
