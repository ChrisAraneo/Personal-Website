import React from 'react';

const Project = (props) => (
    <div class="project">
        <header class="project-header"><h2>{props.header}</h2></header>
        <section class="project-body mb-2">
            <p>{props.body}</p>
        </section>
        <footer class="project-footer">
            {props.technologies.map(tech => (
                <><span className="badge">{tech}</span>{" "}</>
            ))}
        </footer>
    </div>
);

export default Project;