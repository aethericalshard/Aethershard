document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Castle Build",
            description: "An amazing medieval castle built block by block.",
            image: "https://source.unsplash.com/random/300x200?castle",
            link: "#"
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
