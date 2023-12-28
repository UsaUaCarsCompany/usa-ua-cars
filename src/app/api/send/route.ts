import { NextResponse,NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(req:NextRequest) {
    try {
      const body = await req.json()
      console.log('body',body)
      const {name,
      email,
      phone,
      message,} = body
      const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'linetsky.yura@gmail.com',
      subject: 'Клієнт хоче зв`язатися з вами',
      html: `<h1>Contact Form Data:</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>`,
      })
        return NextResponse.json({data})
    } catch (error) {
      return NextResponse.json({error})
    }
}
