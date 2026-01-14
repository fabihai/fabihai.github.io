import '../../styles.css'

const Module2 = () => {
    return (
        <div className ="content module2" id="module2">
            <div className="heading">
                <h1>Watermelon Pop</h1>
                <p className="lead">COMS BC3930 Creative Embedded Systems - Module 2</p>
                <p><i>Last Modified: 04/03/2024</i></p>
            </div>
            <div className="links">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/crfyNMYa0SM?si=PPlt9DWu9mVlBOnj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="post">
                <h2>Inspiration</h2>
                <p>I wanted to make a simple game where the user has to go around obstacles to reach a goal. Here the goal is to achieve as high of a goal as possible. Watermelon are one of my favorite fruits for many reasons so I thought it would be fun to create a game where instead of a person spitting watermelon seeds, it would be the watermelon itself shooting seeds to pop balloons, hence the name "Watermelon Pop".
                </p>
                
                <h2>Technical Aspect</h2>
                <p>This was made on an ESP32. The full code can be found on my GitHub <a href="https://github.com/fabihai/watermelon-pop" target="_blank">here</a>.</p>
                <p>For the hardware, two buttons and a potentiometer were used, which control wther the game can be reset, the seed attacks, and moving the watermelon up and down the screen.</p>
                <p>I used PyGame to run the visual game part of this project. I used Serial to handle communication between Arduino and the laptop. The images on the screen are all sprites that are created automatically as the game continues (the Watermelon and the Balloons), or as a result of user actions (the Seeds). Sprite functions are handled in their respective classNamees: Player(), Balloon(), Seed(), and Score().</p>
                
                <h2>Gameplay</h2>
                <p>The game itself is pretty straightforward. The user uses the potentiometer to move up and down the screen. One button handles resetting the game and another fires seeds at the balloons. For each balloon that the player pops with the seeds, the user gains 10 points. If the watermelon collides with a balloon, the player loses 10 points. Certain balloons are randomly generated to be worth +30 or -30 points. If a seed hits any of these balloons, they will gain or lose 30 points accordingly instead of the usual 10 points. Pressing the reset button will reset the score, and delete all sprites from the screen except for the watermelon.</p>
                
                <h2>Enclosure</h2>
                <p>I wanted to make this seem like an arcade game so opted for a shape that looks like a mini arcade machine. In arcades, the machines are usually very colorful and are covered with symbols from the game, which I wanted to reflect in this game. So I filled the space with as many many watermelon colors and symbols in the game that I could.</p>
                <img src="/pictures/makingenclosure.jpg" alt="Enclosure pieces cut out" />
                <figcaption>The enclosure pieces all cut out and ready to be put together.</figcaption>

                <img src="/pictures/enclosureglued.jpg" alt="Enclosure pieces all glued together" />
                <figcaption>The enclosure pieces all glued together and ready to be colored.</figcaption>
                
                <img src="/pictures/finalenclosure.jpg" alt="Final enclosure that is colored." />
                <figcaption>Final colored enclosure</figcaption>
            </div>
        </div>
    )
}

export default Module2;