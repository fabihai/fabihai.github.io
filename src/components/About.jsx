function About() {
    return (
        <div className="about" id="about">
            <div className="column col-3 d-flex align-items-center">
                <img className="object-fit-cover ratio ratio-1x1 overflow-hidden rounded-circle border w-100" src="../../headshot.jpg"/>
            </div>
            <div className="column col-6">
                <h1>Hi! I'm Fabiha.</h1>
                <p className="lead">I am a recent graduate from Barnard College of Columbia University, where I studied Computer Science with a focus on Applications.</p>

                <p className="lead">I'm seeking roles in software engineering that will allow me to stay connected to the people that I'm building for. My goal is to develop solutions with the following in mind: impact, user empathy, and community connection.</p>
                {/* I'm seeking a career in software engineering where I can stay connected to the people I’m building for--roles that combine technical challenge with impact, user empathy, and community connection. */}
            </div>
        </div>
    )
}

export default About;