
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Express Frontend</title>
            <style>
                body {
                    font-family: Arial;
                    background: #f0f4f8;
                    text-align: center;
                    padding-top: 100px;
                }

                .container {
                    background: white;
                    padding: 40px;
                    margin: auto;
                    width: 60%;
                    border-radius: 12px;
                }

                h1 {
                    color: #16a34a;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Express Frontend!</h1>
                <h2>Jenkins CI/CD Deployment</h2>
                <p>Express application is running successfully.</p>
                <p>Port: 3000</p>
                <a href="/health">Check Application Health</a>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "Express",
        port: PORT
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
});

module.exports = app;
