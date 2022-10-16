import React from "react";
import "./skill.css"
import {FaJava, FaReact, FaVuejs} from "react-icons/fa";
import {DiJavascript, DiMongodb} from "react-icons/di";
import {SiSpringboot, SiSqlite, SiTailwindcss} from "react-icons/si";
import {CgGoogle} from "react-icons/cg";

const Skills = () =>{
    return(
        <section id={"skill"} className={"skills container section"}>
            <div className={"sectionTitle"}>
                <h5 className={"titleText"}>Skills
                    <div className={"underline"}>
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className={"skillsContainer grid"}>
                <div className={"skillGroup"}>
                    <div className={"groupTitle"}>
                        <h2 className={"title"}>Full stack software engineer</h2>
                        <span className={"subTitle"}>
                            3 years Experience
                        </span>
                    </div>

                    <div className={"generalSkills"}>
                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <FaJava className={"icon"}/>
                            </div>
                            <span className={"skillName"}>Java</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <SiSpringboot className={"icon"}/>
                            </div>
                            <span className={"skillName"}>Spring-boot</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <DiJavascript className={"icon"}/>
                            </div>
                            <span className={"skillName"}>JavaScript</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <SiTailwindcss className={"icon"}/>
                            </div>
                            <span className={"skillName"}>Css framework (Tailwind)</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <SiSqlite className={"icon"}/>
                            </div>
                            <span className={"skillName"}>SQL</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <DiMongodb className={"icon"}/>
                            </div>
                            <span className={"skillName"}>NoSQL</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <FaReact className={"icon"}/>
                            </div>
                            <span className={"skillName"}>React</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <FaVuejs className={"icon"}/>
                            </div>
                            <span className={"skillName"}>VueJs</span>
                        </div>

                        <div className={"singleSkill"}>
                            <div className={"iconBox flex"}>
                                <CgGoogle className={"icon"}/>
                            </div>
                            <span className={"skillName"}>Googling</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;