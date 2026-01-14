import '../../styles.css'

const Module1 = () => {
    return (
        <div className="content module1" id="module1">
            <div className="heading">
                <h1>"If I Must Die"</h1>
                <p className="lead">COMS BC3930 Creative Embedded Systems - Module 1</p>
                <p><i>Last Modified: 02/22/2024</i></p>

            </div>
            <div className="links">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/85yTASQBNr8?si=lagV1qASt4tz9Hec" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BdbYyanjtaQ?si=-u-eJ6bmEv_RultJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
            </div>
            <div className="post">
                <h2>Inspiration</h2>
                <p>Over the past few months, much of the worlds attention has been focused on what is currently happening in Palestine and Israel. This project is a response to this, specifically in the context of the tense atmosphere present in Barnard College and Columbia University's campuses. In an atmosphere where voices are being suppressed, it is meant to spread awareness in an open space for students through simple, yet moving art. "If I Must Die" aims to emphasize key parts of the poem and to allow the audience to feel as though they are hearing the words on the screen at the timing that they appear. The poem "If I Must Die" was written by the late Palestinian poet and professor, Refaat Alareer, who was martyred in an Israeli airstrike on December 7, 2023.
                </p>

                <h2>Technical Aspect</h2>
                <p>This was made on an ESP32. The full code used for this project can be found on my GitHub <a href="https://github.com/fabihai/if-i-must-die/tree/main">here</a>.</p>
                <p>Since first reading the poem, different parts have struck me as very meaningful, so I wanted to emphasize these parts in the installation. To do this, I experimented with the timing of the words, their placement on the screen, color, and moving words across the screen.
                </p>
                <p>The trickiest part to implement was the word "above" moving up the screen like a kite. To do this, I had to play around with the timing of the word to make it appear and disappear quick enough to give the effect of motion. Additionally, I had to experiment with the x and y position on the display screen to ensure that it seemed to fly above the correct word.
                </p>
                <div id="code">
                    <pre>{`
            tft.drawString("sees the kite, ",0,0,4);

            delay(500);

            tft.drawString(" my kite you made,",30,26,4);
            delay(500);
            tft.drawString("flying up above",10,78,4);
            delay(500);
            tft.drawString("                                          ",10,78,4);
            tft.drawString("flying up ",10,78,4);
            delay(50);
            tft.drawString("above", 115, 70, 4);
            delay(500);
            tft.drawString("                                         ",115,70,4);
            tft.drawString("above", 115, 62, 4);
            delay(500);
            tft.drawString("                                         ",115,62,4);
            tft.drawString("above", 115, 56, 4);
            delay(500);
            tft.drawString("                                         ",115,56,4);
            tft.drawString("above", 115, 48, 4);
            delay(WAIT);
                        `}
                    </pre>  
                </div>

                <h2>Installation</h2>
                <p>This project was meant for an installation that was to last for a few hours in the 5th floor of Milstein Library. We had to attach batteries to the ESP32's. We used heatshrink on the connector wires to prevent the red and black ones from touching each other, and then connected them to the battery and the ESP32. After being connected to the batteries, the ESP32 and connected battery were placed in an envelope (which we decorated to match the theme of each project) and hung from an air vent next to a window overlooking Barnard and Columbia's campus.</p>
                
                <div className="inline">
                    <div>
                        <img src="/pictures/boardandbattery.jpg" alt="board and battery" />
                        <div className="caption">The battery (with heatshrink on the connector wire) and board ready to go for the installation.</div>
                    </div>
                    <div>
                        <img src="/pictures/OnDisplay.jpg" alt="Board on display" />
                        <div className="caption">The board in its envelope on display.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module1;