// =============================================
// PART 1: VARIABLES AND CONDITIONALS
// =============================================

// Variable declarations
let userStatus = 'active';
const userAge = 25;
let discountEligible = false;

// Conditional examples
if (userAge >= 18) {
    console.log('User is an adult');
} else {
    console.log('User is a minor');
}

if (userStatus === 'active' && userAge > 21) {
    discountEligible = true;
    console.log('User is eligible for discount');
}

// Function to demonstrate conditionals
function checkUserStatus() {
    const ageInput = document.getElementById('ageInput');
    const outputElement = document.getElementById('statusOutput');
    
    if (!ageInput.value) {
        outputElement.textContent = 'Please enter your age.';
        return;
    }
    
    const age = parseInt(ageInput.value);
    let message = '';
    
    // Conditional logic
    if (age < 0) {
        message = 'Please enter a valid age.';
    } else if (age < 13) {
        message = 'You are a child.';
    } else if (age < 18) {
        message = 'You are a teenager.';
    } else if (age < 65) {
        message = 'You are an adult.';
    } else {
        message = 'You are a senior.';
    }
    
    // Additional conditional check
    if (age >= 18) {
        message += ' You can vote!';
    } else {
        message += ' You cannot vote yet.';
    }
    
    outputElement.textContent = message;
}

// =============================================
// PART 2: CUSTOM FUNCTIONS
// =============================================

// Function 1: Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// Function 2: Change background color of an element
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
    }
}

// Demo function for calculating area
function calculateAreaDemo() {
    const width = parseFloat(document.getElementById('widthInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const outputElement = document.getElementById('areaOutput');
    
    if (isNaN(width) || isNaN(height)) {
        outputElement.textContent = 'Please enter valid numbers for width and height.';
        return;
    }
    
    const area = calculateArea(width, height);
    outputElement.textContent = `The area of the rectangle is: ${area}`;
}

// Wrapper function for changing color
function changeColor(elementId, color) {
    changeBackgroundColor(elementId, color);
}

// =============================================
// PART 3: LOOP EXAMPLES
// =============================================

// Loop 1: For loop to count numbers
function countNumbers() {
    const outputElement = document.getElementById('countOutput');
    outputElement.textContent = '';
    
    for (let i = 1; i <= 10; i++) {
        // Add a delay for visual effect
        setTimeout(() => {
            outputElement.textContent += `Count: ${i} `;
        }, i * 500);
    }
}

// Loop 2: While loop to generate users
function generateUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear previous list
    
    let count = 0;
    const users = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva'];
    
    while (count < users.length) {
        const listItem = document.createElement('li');
        listItem.textContent = `User: ${users[count]} (ID: ${count + 1})`;
        userList.appendChild(listItem);
        count++;
    }
}

// =============================================
// PART 4: DOM INTERACTIONS
// =============================================

// DOM Interaction 1: Changing text content
function changeText() {
    const textElement = document.getElementById('textElement');
    const messages = [
        'This text has been changed!',
        'DOM manipulation is powerful!',
        'You can change content dynamically!',
        'JavaScript makes web pages interactive!'
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    textElement.textContent = messages[randomIndex];
}

// DOM Interaction 2: Toggling a CSS class
function toggleStyle() {
    const styleElement = document.getElementById('styleElement');
    styleElement.classList.toggle('highlight');
    
    // Add some inline styles for demonstration
    if (styleElement.classList.contains('highlight')) {
        styleElement.style.color = '#6a11cb';
        styleElement.style.fontWeight = 'bold';
        styleElement.style.fontSize = '1.2em';
    } else {
        styleElement.style.color = '';
        styleElement.style.fontWeight = '';
        styleElement.style.fontSize = '';
    }
}

// DOM Interaction 3: Creating and appending new elements
function addNewItem() {
    const newItemInput = document.getElementById('newItemInput');
    const dynamicList = document.getElementById('dynamicList');
    
    if (!newItemInput.value.trim()) {
        alert('Please enter some text for the new item.');
        return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = newItemInput.value;
    
    // Add a delete button to the new item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        dynamicList.removeChild(newItem);
    };
    
    newItem.appendChild(deleteButton);
    dynamicList.appendChild(newItem);
    
    // Clear the input
    newItemInput.value = '';
}

// =============================================
// EVENT LISTENER SETUP
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Part 1 event listeners
    document.getElementById('checkStatusBtn').addEventListener('click', checkUserStatus);
    
    // Part 2 event listeners
    document.getElementById('calculateAreaBtn').addEventListener('click', calculateAreaDemo);
    
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeColor('colorBox', this.getAttribute('data-color'));
        });
    });
    
    // Part 3 event listeners
    document.getElementById('generateUsersBtn').addEventListener('click', generateUsers);
    document.getElementById('countNumbersBtn').addEventListener('click', countNumbers);
    
    // Part 4 event listeners
    document.getElementById('changeTextBtn').addEventListener('click', changeText);
    document.getElementById('toggleStyleBtn').addEventListener('click', toggleStyle);
    document.getElementById('addItemBtn').addEventListener('click', addNewItem);
    
    // Allow pressing Enter in the add item input
    document.getElementById('newItemInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addNewItem();
        }
    });
});
