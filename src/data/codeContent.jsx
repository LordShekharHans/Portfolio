
// data/codeContent.jsx

export const smallScreenCodeContent = `
const coder = {
    name:'Shekhar Hans',
    location: 'Kolkata, West Bengal, India',
    skills:['React', 'NextJS', 'Redux', 
        'Express', 'NestJS', 'MySql',
        'MongoDB', 'Docker', 'AWS'],
    hardWorker:true,
    quickLearner:true,
    problemSolver:true,
    hireable:function() {
        return(
            this.hardWorker&&
            this.problemSolver&&
            this.skills.length>=5
        );
    };
};
`;

export const largeScreenCodeContent = `
const coder = {
    name: 'Shekhar Hans',
    location: 'Kolkata, West Bengal, India',
    skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'],
    about: \`I'm a passionate front-end web developer with a background
    in computer science. With strong communication skills and
    knowledge of illustration, I am seeking opportunities to
    contribute, grow, and learn in the field, and I'm open 
    to exciting job opportunities.\`,
    email: 'shekharhans161@gmail.com',
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
`;


export const MPCodeContent = `
const education = {
    secondary: {
        school: 'Monglapota High School',
        board: 'WBBSE BOARD',
        duration: 'May 2008 - 2018',
        marks: '82.85%'
    },
    displayEducation: function() {
        return \`Secondary:\\n
        School: \${this.secondary.school}\\n
        Board: \${this.secondary.board}\\n
        Duration: \${this.secondary.duration}\\n
        Marks: \${this.secondary.marks}\`;
    }
};

// Example usage:
console.log(education.displayEducation());
`;

export const HSCodeContent = `
const education = {
    higherSecondary: {
        school: 'Bankura Christian Collegiate School',
        board: 'WBCHSE BOARD',
        duration: 'May 2018 - 2020',
        stream: 'Science',
        marks: '80.2%'
    },
    displayEducation: function() {
        return \`Higher Secondary:\\n
            School: \${this.higherSecondary.school}\\n
            Board: \${this.higherSecondary.board}\\n
            Duration: \${this.higherSecondary.duration}\\n
            Stream: \${this.higherSecondary.stream}\\n
            Marks: \${this.higherSecondary.marks}\`;
    }
};

// Example usage:
console.log(education.displayEducation());
`;
export const CollageCodeContent = `
    const education = {
    graduation: {
        college: 'Meghnad Saha Institute Of Technology',
        university: 'Maulana Abul Kalam Azad University of Technology',
        duration: 'May 2021 - Present',
        degree: 'B Tech in Computer Science And Engineering',
        sgpa: '9.48 (1st Year)'
    },
    displayEducation: function() {
        return \`College: \${this.graduation.college}\\n
            University: \${this.graduation.university}\\n
            Duration: \${this.graduation.duration}\\n
            Degree: \${this.graduation.degree}\\n
            SGPA: \${this.graduation.sgpa}\`;
    }
};

// Example usage:
console.log(education.displayEducation());
`;
