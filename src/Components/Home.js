import React from 'react'

function Home() {
    return (
        <div>
             <section id="home">
            <div className="row">
                <div className="col-sm-6 column">
                    <div>
                        <h1> Hi, <br/> I am Sayantan Dutta,</h1>
                        <div className="typewriter">
                            <h2>A Frontend Developer</h2>
                        </div>
                        <h3>HTML . CSS . Javascript</h3>
                        <a href="#contact"><button className="btn btn-primary">Contact Me</button></a>
                    </div>
                </div>
                <div className="col-sm-6 column">
                    <div className="img_holder" >
                        <img src="Profile.jpg" alt="profile" id="img"/>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Home
