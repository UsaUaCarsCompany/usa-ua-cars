// !! RESEND
// import { NextResponse,NextRequest } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)


// export async function POST(req:NextRequest) {
//     try {
//       const body = await req.json()
//       console.log('body',body)
//       const {name,
//       email,
//       phone,
//       message,} = body
//       const data = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'linetsky.yura@gmail.com',
//       subject: `Клієнт на імя ${name} хоче звязатися з вами`,
//       html: `<h1>Contact Form Data:</h1>
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <p>Message: ${message}</p>`,
//       })
//         return NextResponse.json({data})
//     } catch (error) {
//       return NextResponse.json({error})
//     }
// }


//!! NODEMAILER
import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, car } = body;

    // Set up the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'usauacars.company@gmail.com',
      to: 'usauacars.company@gmail.com',
      subject: `Клієнт на імя ${name} хоче конкретний автомобіль`,
      html: `
      <div style="background-color: #fbe441; color: #000; padding: 20px; border-radius: 12px;">
        <h1>Відправлена форма клієнта:</h1>
        <h2>Ім'я: ${name}</h2>
        <h2>Емайл: ${email}</h2>
        <h2>Номер телефону: ${phone}</h2>
        <h2>Автомобіль який хоче клієнт: ${car}</h2>
      </div>
    `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ info });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}
