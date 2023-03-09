function HeaderLi({ itemName, link }) {
    return (
        <li className="border md:border-2 py-1 px-2 mt-1 md:mt-0 rounded-full md:rounded border-slate-600 hover:border-none hover:bg-blue-400 hover:text-slate-50 ">
            <a href={link}>{itemName}</a>
        </li>
    );
}

export default HeaderLi;
