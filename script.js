document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Cosmium Mod",
            description: "Amazing mod created by aetherical shard/cosmomite",
            image: "https://media.forgecdn.net/avatars/thumbnails/1006/641/256/256/638528636799234360.png",
            link: "https://www.curseforge.com/minecraft/mc-mods/cosmium"
        },
        {
            title: "Redstone Contraptions",
            description: "Complex redstone machinery and automation.",
            image: "https://source.unsplash.com/random/300x200?redstone",
            link: "#"
        },
        {
            title: "Underwater City",
            description: "A breathtaking city built entirely underwater.",
            image: "https://source.unsplash.com/random/300x200?underwater",
            link: "#"
        }
    ];

    const projectContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectCard = `
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="${project.image}">
                        <span class="card-title">${project.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${project.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="${project.link}">View Project</a>
                    </div>
                </div>
            </div>
        `;
        projectContainer.innerHTML += projectCard;
    });
});
