// Function to get the current year and populate it in the footer
function getCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}


// Function to get the date of last modification and populate it in the footer
function getLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes().toString().padStart(2, '0')}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}

// Call the function to get and display the current year when the page loads
getCurrentYear();

// Call the function to get and display the date of last modification when the page loads
getLastModifiedDate();


const hamButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// const mainnav = document.querySelector('navigation')
// const hambutton = document.getElementById('menu');

// // Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// function displayCourses(coursesToDisplay){
//     const container = document.getElementById('coursesContainer');
//     container.innerHTML = ''; 

//     coursesToDisplay.forEach(course => {
//         const courseElement = document.createElement('div');
//         courseElement.classList.add('course');
//         courseElement.innerHTML = `
//       <h3>${course.title} (${course.subject} ${course.number})</h3>`;
//       container.appendChild(courseElement);
//     });
// }

    //   <p>${course.description}</p>
    //   <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
    

    
 
 function filterCourses(category) {
    let filteredCourses;

    if (category === 'ALL') {
        filteredCourses = courses; // Muestra todos los cursos
    } else {
        filteredCourses = courses.filter(course => course.subject === category); // Filtra por la categoría
    }

    // Muestra los cursos filtrados
    displayCourses(filteredCourses);

    // Sumar los créditos de los cursos filtrados
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    // Mostrar el total de créditos
    document.getElementById('totalCredits').innerText = `Total Credits: ${totalCredits}`;
}

function displayCourses(coursesToDisplay) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';  // Limpiar el contenedor

    coursesToDisplay.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');

        // Crear una clase única para cada curso basada en el `subject` y `number`
        const uniqueClass = `${course.subject}-${course.number}`;
        courseElement.classList.add(uniqueClass);

        courseElement.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>Credits: ${course.credits}</p>
        `;

        container.appendChild(courseElement);
    });
}
