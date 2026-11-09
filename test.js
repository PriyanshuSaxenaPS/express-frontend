
const http = require("http");
const app = require("./app");

const server = app.listen(0, async () => {
    const port = server.address().port;

    try {
        const response = await fetch(`http://127.0.0.1:${port}/health`);
        const data = await response.json();

        if (response.status !== 200 || data.status !== "healthy") {
            throw new Error("Health check failed");
        }

        console.log("Express tests passed!");
        server.close();
    } catch (error) {
        console.error(error);
        server.close(() => process.exit(1));
    }
});
