import React from 'react';
import './AboutStyle.css';

const AboutUs = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="profile-photo">
                <img src="https://media.licdn.com/dms/image/D5603AQGFQQutlqvDTQ/profile-displayphoto-shrink_200_200/0/1705032529378?e=1716422400&v=beta&t=IkYbJpZUl0Wjy3wsiFynHvasK9shK5QU3j5430XkhaA" />
            </div>
            <div className="info">
                <p><strong>Name:</strong> Devasheesh Dubey</p>
                <p><strong>Phone:</strong> +91 8958452868</p>
                <p><strong>Email:</strong> devdubey15091999@gmail.com</p>
            </div>
            <div className="academic-profile">
                <h2>Academic Profile</h2>
                <table>
                    <tr>
                        <th>Course</th>
                        <th>College</th>
                        <th>Score</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>Diploma in Advance Computing</td>
                        <td>Centre for Development of Advanced Computing, Mumbai</td>
                        <td>Pursuing</td>
                        <td>2023-2024</td>
                    </tr>
                    <tr>
                        <td>Master of Computer Applications (MCA)</td>
                        <td>Dr Bhimrao Ambedkar University, Agra</td>
                        <td>6.95 CGPA</td>
                        <td>2021-2023</td>
                    </tr>
                    <tr>
                        <td>Bachelor of Computer Applications (BCA)</td>
                        <td>Chhatrapati Shahu Ji Maharaj University, Kanpur</td>
                        <td>5.54 CGPA</td>
                        <td>2018 - 2021</td>
                    </tr>
                    <tr>
                        <td>Class XII</td>
                        <td>Bal Vikash Sansthan, Auraiya</td>
                        <td>76.4%</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>Class X</td>
                        <td>S Jabar Singh Yadav I C Barepur, Auraiya</td>
                        <td>81.16%</td>
                        <td>2014</td>
                    </tr>
                </table>
            </div>
            <div className="technical-skills">
                <h2>Technical Skills</h2>
                <ul>
                    <li>Java, OOPS, MySQL, Spring, Spring Boot, Hibernate, JDBC.</li>
                    <li>C++, C#, HTML, CSS, JavaScript, Docker, React JS.</li>
                    <li>Visual Studio Code, IntelliJ IDEA, Eclipse, Spring Tool Suite.</li>
                </ul>
            </div>
            <div className="work-experience">
                <h2>Work Experience</h2>
                <p>SoftDreamz Technologies Pvt. Ltd., New Delhi</p>
                <p>July 22 – Oct 22</p>
                <p>Full Stack Developer Intern</p>
                <ul>
                    <li>Worked with Java Frameworks like spring, spring boot and front-end framework like React JS etc.</li>
                    <li>Collaborated with the development team to design, develop, and implement software solutions.</li>
                    
                </ul>
            </div>
            <div className="projects">
                <h2>Projects</h2>
                <p>Vehicular Configurator</p>
                <ul>
                    <li>Functionality: This project allows users to:</li>
                    <li>Seamless Ordering:</li>
                    <li>Data Management & Reporting:</li>
                    
                </ul>
            </div>
            <div className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>Java Programming for Complete Beginners by Udemy.</li>
                    <li>C++ And Java Training Crash Course 2022 by Udemy.</li>
                    <li>SQL & PostgreSQL for Beginners by Udemy.</li>
                </ul>
            </div>
            <div className="strengths">
                <h2>Strengths</h2>
                <ul>
                    <li>Good Communication Skills</li>
                    <li>Ability in learning new concepts</li>
                    <li>Leadership skills and a good team player</li>
                    <li>Time Management</li>
                    <li>Commitment towards work</li>
                </ul>
            </div>
            <div className="declaration">
                <p><strong>Declaration:</strong> I solemnly declare that all the above information is correct to the best of my knowledge and belief.</p>
            </div>
        </div>
    );
}

export default AboutUs;
