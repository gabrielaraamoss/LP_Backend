const express = require("express");
var request = require("request");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async function (req, res) {
  try {
    let transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL || "",
        pass: process.env.MAIL_PASS || "",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const html = htmlFormat(req.body);
    const mailOptions = {
      from: process.env.MAIL || "",
      to: process.env.MAIL || "",
      subject: req.body.tema,
      html,
    };
    let response = await transporter.sendMail(mailOptions);
    console.log(
      `Email enviado a ${process.env.MAIL || ""}. Tiempo de mensaje: ${
        response.messageTime
      }`
    );
    res.status(200).json({
      message: "Correo enviado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al enviar correo" });
  }
});

router.get("/", function (req, res) {
  res.status(200).json({
    message: "Handling GET request to /contact",
  });
});

const htmlFormat = (datos) => {
  return `
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>
            Nombre: <b>${datos.nombre}</b> <br>
            Apellido: <b>${datos.apellido}</b> <br>
            Correo: ${datos.correo} <br>
            Tema: ${datos.tema} <br>
            Mensaje: ${datos.mensaje} <br>
        
        </div>
    
    </body>
    
    </html>
    `;
};

module.exports = router;
