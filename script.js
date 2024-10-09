body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

header {
    text-align: center;
    background: #007bff;
    color: white;
    padding: 10px 0;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #d1d1d1;
}

.section {
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.produtos-container {
    display: flex;
    flex-wrap: wrap;
}

.produto {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    width: calc(50% - 20px);
    transition: transform 0.3s;
}

.produto:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.produto img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

button {
    background: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #218838;
}

#total {
    font-weight: bold;
    margin-top: 20px;
}

footer {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
}

notificacao {
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    border-radius: 5px;
}
.notificacao {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
}
