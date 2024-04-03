const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

console.log(process.env.EMAIL_USERNAME);

app.post('/api/send-email', (req, res) => {
    const { name, email, object, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "marieliserenzema@gmail.com",
            pass: "sasp nwpj sdja nrxt"
        }
    });

    const mailOptions = {
        from: 'marieliserenzema@gmail.com',
        to: 'marieliserenzema@hotmail.fr',
        subject: 'Nouveau message du formulaire de contact',
        text: `Nom: ${name}\nEmail: ${email}\nObject: ${object}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (err, result) => {
        if (err) {
            console.log(err)
            res.json('Opps error occured')
        } else {
            res.json('thanks for e-mailing me');
        }
    })

    res.status(200).send('Got it !!');
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
