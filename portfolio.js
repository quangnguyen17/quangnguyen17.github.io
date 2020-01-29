
var sections = [
    {
        title: "Projects",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores debitis, minima eos error eaque quasi veniam, eum nesciunt, aspernatur itaque officia iste soluta alias. Ipsa voluptas maiores voluptatibus error",
    },
    {
        title: "Resumes",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores debitis, minima eos error eaque quasi veniam, eum nesciunt, aspernatur itaque officia iste soluta alias. Ipsa voluptas maiores voluptatibus error",
    },
    {
        title: "About",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores debitis, minima eos error eaque quasi veniam, eum nesciunt, aspernatur itaque officia iste soluta alias. Ipsa voluptas maiores voluptatibus error",
    },
    {
        title: "Contact & Collaboration",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores debitis, minima eos error eaque quasi veniam, eum nesciunt, aspernatur itaque officia iste soluta alias. Ipsa voluptas maiores voluptatibus error",
    },
]

function render() {
    for (var index in sections) {
        code = `<div class="row w-100 h-full m-0 align-items-center bg-${index} bg-custom">
                    <div class="col text-light text-center">
                        <h2>${sections[index].title}</h2>
                        <p class="mx-5 px-5">${sections[index].subtitle}</p>
                    </div>
                </div>`;

        $('.main-content').append(code);
    }
}

$(document).ready(function () {
    render();
});