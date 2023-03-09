function MainContentProjects({ imgSrc, imgAlt, title, description }) {
    return (
        <div>
            <img class="w-full" src={imgSrc} alt={imgAlt} />
            <div class="px-6 py-4">
                <div class="font-bold text-white text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}

export default MainContentProjects;
