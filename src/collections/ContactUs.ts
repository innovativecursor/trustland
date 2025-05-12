import { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'
import payload from 'payload'

import dotenv from 'dotenv'

dotenv.config() // ✅ Load environment variables

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // ✅ Prevent SSL/TLS issues
  },
  logger: true, // ✅ Enable debugging logs
  debug: true, // ✅ Debugging mode
})

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email Address', required: true },
    { name: 'phone', type: 'text', label: 'Phone Number', required: true },
    { name: 'message', type: 'textarea', label: 'Message', required: true },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Submitted At',
      admin: { readOnly: true },
      hooks: { beforeChange: [({ value }) => value || new Date().toISOString()] },
    },
    {
      name: 'emailSent',
      type: 'checkbox',
      label: 'Email Sent',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc }) => {
        if (doc?.emailSent) return

        try {
          console.log(`ℹ️ Sending admin email notification...`)
          await transporter.sendMail({
            from: `"PBRS New Form Update" <${process.env.ADMIN_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'PBRS Business Inquiry',
            text: `You have a new contact form submission:\n\nName: ${doc.name}\nEmail: ${doc.email}\nPhone: ${doc.phone}\nMessage: ${doc.message}`,
          })
          console.log('✅ Email sent to admin successfully!')

          if (!doc.email) {
            console.error('❌ No user email provided. Skipping auto-reply.')
            return
          }

          console.log(`ℹ️ Sending auto-reply to ${doc.email}...`)
          await transporter.sendMail({
            from: `"PBRS Support" <${process.env.ADMIN_EMAIL}>`,
            to: doc.email,
            subject: 'Thank You for Contacting Us',
            html: `
              <div style="text-align: center;">
                <h2>Thank you for reaching out to PBRS!</h2>
                <p>Hello ${doc.name},</p>
                <p>We have received your message and will get back to you shortly.</p>
                <p>Best regards, <br>PBRS Team</p>
              </div>
            `,
          })
          console.log('✅ Auto-reply sent to user successfully!')

          if (typeof doc.id !== 'undefined') {
            // @ts-ignore - Ignore "unused attribute" warning
            await payload.update({
              collection: 'contact-us',
              id: doc.id,
              data: { emailSent: true },
            })
            console.log('✅ Email status updated in database!')
          }
        } catch (error) {
          console.error('❌ Error sending email:', error)
        }
      },
    ],
  },
}

export default ContactUs
