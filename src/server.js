import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("my name is balabhadra sai sathwik\n")
        res.write("Branch:CSE | Reg no: 23B91A0522\n")
        res.write("DOB:26/03/2006 | Gender: Male\n")
        res.write("Email: balabhadrasaisathwik@gmail.com | Phone: +91 7780262039\n")
        res.write("Address:-d/no:5/2/28,gollagudem,Amalapuram,Andhra Pradesh,533201.\n")
        res.write("------------------------------------------------------------------------------------------------------------\n")
        res.write("Education:\n")
        res.write("qualifications::Institution::Year of Graduation\n")
        res.write("Bachelor of Science in Computer Science::SRKREC::persuing\n")
        res.write("internediate in mpc::aditya inter college::june 2023\n")
        res.write("secoudary education::aditya school::june 2021\n")
        res.write("------------------------------------------------------------------------------------------------------------\n")
        res.write("Skills:\n")
        res.write("HTML,CSS,python,java,JavaScript,React,Node.js,Git,SQL\n")
        res.write("------------------------------------------------------------------------------------------------------------\n")
        res.write("Strengths:\n")
        res.write("Strong problem-solving skills\n")
        res.write("Excellent communication and teamwork\n")
        res.write("Proven leadership abilities\n")
        res.write("High attention to detail\n")
        res.write("Adaptability to new technologies\n")
        res.write("------------------------------------------------------------------------------------------------------------\n")
        res.write("Weaknesses:\n")
        res.write("over anxity\n")
        res.write("Tendency to take on too many works simultaneously\n")
        res.write("Preference for independent work\n")

        res.end()

    }

    else if (req.url === '/resume') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header-content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
    color: #333;
}

header p {
    margin: 5px 0;
    color: #777;
}

.profile-picture {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

section {
    margin-bottom: 20px;
}

section h2 {
    border-bottom: 2px solid #f4f4f4;
    padding-bottom: 5px;
    color: #333;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

table th {
    background-color: #f4f4f4;
    color: #333;
}

.skills, .attributes {
    list-style: none;
    padding: 0;
}

.skills li, .attributes li {
    margin-bottom: 5px;
}

.skills li {
    display: inline;
    margin-right: 10px;
    background: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
}

    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="header-content">
                <img src="profile.jpg" alt="sathwik" class="profile-picture">
                <div>
                    <h1>Balabhadra sai sathwik</h1>
                    <p>Branch:CSE | Reg no: 23B91A0522</p>
                    <p>DOB: 26/03/2006 | Gender: Male</p>
                    <p>Email: balabhadrasaisathwik@gmail.com | Phone: +91 7780262039</p>
                    <p>Address:-d/no:5/2/28,gollagudem,
                                Amalapuram,Andhra Pradesh,
                                533201.
                    </p>
                </div>
            </div>
        </header>
        
        <section>
            <h2>Summary</h2>
            <p>preparing for vedhic hackerthon.learning full stack development </p>
        </section>

        <section>
            <h2>Education</h2>
            <table>
                <thead>
                    <tr>
                        <th>qualifications</th>
                        <th>Institution</th>
                        <th>Year of Graduation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bachelor of Science in Computer Science</td>
                        <td>SRKREC</td>
                        <td>persuing</td>
                    </tr>
                    <tr>
                        <td>internediate in mpc</td>
                        <td>aditya inter college</td>
                        <td>june 2023</td>
                    </tr>
                    <tr>
                        <td>secoudary education</td>
                        <td>aditya school</td>
                        <td>june 2021</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Skills</h2>
            <ul class="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>python</li>
                <li>java</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>SQL</li>
            </ul>
        </section>

        <section>
            <h2>Strengths</h2>
            <ul class="attributes">
                <li>Strong problem-solving skills</li>
                <li>Excellent communication and teamwork</li>
                <li>Proven leadership abilities</li>
                <li>High attention to detail</li>
                <li>Adaptability to new technologies</li>
            </ul>
        </section>

        <section>
            <h2>Weaknesses</h2>
            <ul class="attributes">
                <li>over anxity</li>
                <li>Tendency to take on too many works simultaneously</li>
                <li>Preference for independent work</li>
            </ul>
        </section>
    </div>
</body>
</html>

            `)
        res.end()

    }


    else if (req.url === '/senddata') {
        res.statusCode = 200
        
        res.setHeader("Content-Type", "application/json");
        const data ={personal:{ Name: "balabhadra sai sathwik", Branch: "cse" , regno: "23B91A0522" , dob:"26.03.2006" ,gender:"male" },
                    contact:{ email: "balabhadrasaisathwik@gmail.com", phonenumber: 7780262039  },
                    address:{ dno: "5-2-28", landmark: "gollagudem" , town: "amalapuram" , state:"andhra pradesh" ,pincode:533201 },
                    education:{ qualification1: {name:"Bachelor of Science in Computer Science",institution:"SRKREC",year:"pursuing"}, qualification2: {name:"internediate in mpc",institution:"aditya inter college",year:"june 2023"} ,qualification3: {name:"secoudary education",institution:"aditya school",year:"june 2021"}},
                    skills:{ skills: ["HTML", "CSS", "python", "java", "javascript","react","node.js","Git","SQL"]}   }
        // const personal = { Name: "balabhadra sai sathwik", Branch: "cse" , regno: "23B91A0522" , dob:"26.03.2006" ,gender:"male" }
        // const contact = { email: "balabhadrasaisathwik@gmail.com", phonenumber: 7780262039  }
        // const address = { dno: "5-2-28", landmark: "gollagudem" , town: "amalapuram" , state:"andhra pradesh" ,pincode:533201 }
        // const education = { qualification1: {name:"Bachelor of Science in Computer Science",institution:"SRKREC",year:"pursuing"}, qualification2: {name:"internediate in mpc",institution:"aditya inter college",year:"june 2023"} ,qualification3: {name:"secoudary education",institution:"aditya school",year:"june 2021"}}
        // const skills = { skills: ["HTML", "CSS", "python", "java", "javascript","react","node.js","Git","SQL"]}
        // res.end(JSON.stringify(personal))
        // res.end(JSON.stringify(contact))
        // res.end(JSON.stringify(address))
        // res.end(JSON.stringify(education))
        // res.end(JSON.stringify(skills))
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});