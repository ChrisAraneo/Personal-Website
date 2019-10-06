import React from 'react';

const Project = (props) => (
    <div class="project">
        <header class="project-header">
            <span className="project-index mb-05">{props.index + 1 < 10 ? "0" + (props.index + 1) + "/04" : (props.index + 1) + "/04"}</span>
            <h2>{props.header}</h2>
        </header>
        <section class="project-body">
            <p>{props.body}</p>
        </section>
        <footer class="project-footer">
            {props.technologies.map(tech => (<span className="badge">{tech}</span>))}
        </footer>
    </div>
);

export default Project;