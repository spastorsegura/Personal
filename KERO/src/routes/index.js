const { Router } = require("express");
const nodemailer = require("nodemailer");
const { PassThrough } = require("nodemailer/lib/xoauth2");
const router = Router();

router.post("/send-email", async (req, res) => {
  const { email, nombre, telf, mensaje } = req.body;

  contentHTML = `
        <h1>Información del usuario</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Email: ${email}</li>
            <li>teléfono: ${telf}</li>
        </ul>
        <p>Mensaje: ${mensaje}</p>
    `;

  const transporter = nodemailer.createTransport({
    host: "gator4007.hostgator.com",
    port: 465,
    secure: true,
    auth: {
      user: "Info@kero-go.com",
      pass: "Info123$",
    },
    tls: {
      rejectUnauthorize: false,
    },
  });

  const info = await transporter.sendMail({
    from: "'Kero-Go Server' <Info@kero-go.com>",
    to: "Info@kero-go.com",
    subject: "Website Contact Form",
    //   text:'Hola mundo'
    html: contentHTML
  });

  console.log("Message sent", info.messageId);

  res.redirect("/success.html");
});

module.exports = router;
