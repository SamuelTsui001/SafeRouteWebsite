# EmailJS Setup Guide

This guide will help you set up EmailJS to enable automatic email sending from the contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions:
   - For Gmail: You'll need to authorize EmailJS to send emails on your behalf
   - Click **Connect Account** and authorize with Google
5. Note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form

**Subject:** New School Inquiry - SafeRoute Website

**Content:**
```
Hello,

You have received a new inquiry from a school interested in using SafeRoute.

Contact Information:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Role: {{role}}

School Information:
School Name: {{school_name}}
District Name: {{district_name}}
Number of Students: {{student_count}}

Message:
{{message}}

---
This email was sent from the SafeRoute website contact form.
```

4. Note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (also called API Key)
3. Copy it (e.g., `xxxxxxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_abc123
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz
```

## Step 6: Update ContactForm.jsx (if needed)

The ContactForm component is already configured to use these environment variables. Make sure the template variables match:

- `from_name` - Contact person's name
- `from_email` - Contact person's email
- `phone` - Phone number (optional)
- `role` - Contact person's role (Superintendent, Principal, etc.)
- `school_name` - School name (optional)
- `district_name` - School district name (optional)
- `student_count` - Approximate number of students (optional)
- `message` - Message/needs description
- `to_email` - Recipient email (set to samuel.ben.tsui@gmail.com)

## Step 7: Test

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (samuel.ben.tsui@gmail.com) for the message

## Important Notes

- **Never commit your `.env` file** - It's already in `.gitignore`
- The free tier allows 200 emails per month
- For production, make sure to add the environment variables to your hosting platform (GitHub Actions secrets, Vercel, Netlify, etc.)

## Troubleshooting

**Emails not sending?**
- Check that all environment variables are set correctly
- Verify your EmailJS service is connected
- Check the browser console for error messages
- Make sure your template variables match the ones in ContactForm.jsx

**Need more emails?**
- Upgrade to a paid EmailJS plan
- Or use an alternative service like Formspree, SendGrid, etc.



