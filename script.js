/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f4f4f4;
}

/* Header */
header {
    background: #000;
    color: white;
    padding: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

/* Hero Section */
#home {
    background: url('assets/images/banner.jpg') no-repeat center center/cover;
    color: white;
    padding: 100px 20px;
}

.cta-button {
    display: inline-block;
    background: #ff4500;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    text-decoration: none;
    border-radius: 5px;
}

/* Services Section */
.service-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.service {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 250px;
}

/* Contact Form */
form input, form textarea {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: black;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background: darkgray;
}

/* Footer */
footer {
    background: #000;
    color: white;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
}
