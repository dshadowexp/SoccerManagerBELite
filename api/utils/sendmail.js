import config from "config";
import fs from "fs";
import ejs from "ejs";
import { fileURLToPath } from 'url';
import path, { dirname } from "path";
import nodemailer from "nodemailer";

const __dirname = dirname(fileURLToPath(import.meta.url));

const transport = nodemailer.createTransport({
  host: config.get('email.mailtrap.host'),
  port: config.get('email.mailtrap.port'),
  auth: {
    user: config.get('email.mailtrap.username'),
    pass: config.get('email.mailtrap.password')
  }
});

export const sendMail = (receiverEmail, templateName=null) => {
    const templatePath = path.resolve(__dirname, templateName);
    const template = fs.readFileSync(templatePath, 'utf-8');

    var mailOptions = {
        from: 'nodemailer@example.com',
        to: receiverEmail,
        subject: 'Sample Email Template',
        html: ejs.render(template, {'name': 'Kofi Appiah', 'company': 'Winie Inc'})
    };

    transport.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log(info);
    })
}

