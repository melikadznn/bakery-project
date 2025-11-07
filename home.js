// Create style element and add CSS
const style = document.createElement('style');
style.textContent = `
  .section-container {
    position: relative;
    width: 100%;
    height: 400px;
    background: url('https://images.unsplash.com/photo-1505253210343-b2f1a8ad8fb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') no-repeat center;
    background-size: cover;
    color: white;
    font-family: "Georgia", serif;
    overflow: hidden;
  }
  .section-overlay {
    position: absolute;
    inset: 0;
    background: rgba(75, 0, 130, 0.6); /* purple overlay */
    z-index: 0;
  }
  .header-left {
    position: absolute;
    top: 50px;
    left: 50px;
    font-weight: bold;
    font-size: 32px;
    max-width: 350px;
    z-index: 1;
  }
  .number-right {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 48px;
    font-family: 'Arial', sans-serif;
    z-index: 1;
  }
  .text-block {
    position: absolute;
    bottom: 50px;
    right: 50px;
    max-width: 450px;
    font-size: 14px;
    line-height: 1.5;
    font-family: Arial, sans-serif;
    z-index: 1;
  }
  .text-block small {
    display: block;
    margin-bottom: 8px;
    color: #ddd;
    font-size: 10px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  .text-block strong {
    font-weight: 700;
  }
`;
document.head.appendChild(style);

// Create the section container
const section = document.createElement('section');
section.className = 'section-container';

// Overlay
const overlay = document.createElement('div');
overlay.className = 'section-overlay';
section.appendChild(overlay);

// Left heading
const headerLeft = document.createElement('h1');
headerLeft.className = 'header-left';
headerLeft.textContent = 'Tell us what you have in mind';
section.appendChild(headerLeft);

// Right number
const numberRight = document.createElement('div');
numberRight.className = 'number-right';
numberRight.textContent = '01';
section.appendChild(numberRight);

// Text block bottom right
const textBlock = document.createElement('div');
textBlock.className = 'text-block';
textBlock.innerHTML = `
  <small>Manual ingredients selection</small>
  <strong>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.</strong>
`;
section.appendChild(textBlock);

// Append the section to the body or any container you want
document.body.appendChild(section);