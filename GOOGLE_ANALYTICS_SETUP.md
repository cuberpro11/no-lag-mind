# Google Analytics Setup Guide for Nola G Mind

## Overview
This guide walks you through setting up Google Analytics 4 (GA4) for your Next.js website.

---

## Step 1: Create a Google Analytics Account

1. Visit [Google Analytics](https://analytics.google.com)
2. Click **"Start measuring"** (or sign in to your Google account if prompted)
3. Enter your account details:
   - **Account Name**: "Nola G Mind" (or your preference)
   - **Website URL**: Your website domain
   - **Industry Category**: Select appropriate category
   - **Business Size**: Choose yours
4. Accept the terms and click **"Create"**

---

## Step 2: Create a Property

1. After account creation, you'll be prompted to create a property
2. Click **"Create"** under "Property"
3. Enter property details:
   - **Property Name**: "Nola G Mind Website"
   - **Reporting Time Zone**: Select your timezone
   - **Currency**: Select your currency
4. Click **"Next"**
5. Answer business information questions
6. Click **"Create"**

---

## Step 3: Create a Web Data Stream

1. Choose **"Web"** as your platform
2. Enter your website details:
   - **Website URL**: Your domain (e.g., `https://nolagmind.com`)
   - **Stream Name**: "Website Traffic"
3. Click **"Create stream"**

---

## Step 4: Get Your Measurement ID

After creating the data stream, you'll see your **Measurement ID** displayed prominently. It looks like:
```
G-XXXXXXXXXX
```

**Save this ID** - you need it for the next step!

---

## Step 5: Add Measurement ID to Your Project

1. Open `.env.local` in your project root
2. Replace `your_measurement_id_here` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Save the file

**Important**: Keep this file private and don't commit it to version control (it's already in .gitignore)

---

## Step 6: Verify Installation

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your website in a browser

3. Go to Google Analytics → Admin → Data Streams

4. Click your web data stream

5. Look for the **"Realtime"** report on the left sidebar - it should show:
   - 1 active user (you)
   - Your page view being tracked

---

## Step 7: Deploy to Production

When you're ready to deploy:

1. Add your `.env.local` values to your hosting platform's environment variables
   - For Vercel: Project Settings → Environment Variables
   - For other platforms: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your ID

2. Redeploy your site

---

## Using Google Analytics

### View Reports

1. **Realtime Report**: Admin → Data Streams → Realtime (shows live visitor activity)
2. **Traffic Sources**: Left sidebar → Acquisition → Traffic sources
3. **User Behavior**: Left sidebar → Engagement → Pages and screens
4. **Audience**: Left sidebar → User data

### Common Metrics

- **Sessions**: A period of interaction with your website
- **Page views**: Number of times a page was viewed
- **Users**: Number of unique visitors
- **Bounce rate**: Percentage of sessions that left without interaction
- **Avg. session duration**: Average time spent per session

---

## Tracking Custom Events (Optional)

If you want to track specific user interactions:

```typescript
import { event } from '@/lib/gtag';

// In your component
const handleClick = () => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: 'signup_button',
  });
};
```

---

## Troubleshooting

**Google Analytics not showing data:**
- Verify your Measurement ID is correct in `.env.local`
- Ensure `NEXT_PUBLIC_` prefix is used (required for client-side access)
- Restart your dev server after changing `.env.local`
- Check browser console for any errors (F12 → Console)
- Wait 24-48 hours before seeing full historical reports in GA

**Data not appearing in Realtime:**
- Make sure you're not blocking cookies in your browser
- Check that JavaScript is enabled
- Visit your site and wait 1-2 minutes

**Environment variable not loading:**
- Restart dev server: `npm run dev`
- Clear Next.js cache: `rm -rf .next` then `npm run dev`

---

## Files Modified

- `app/layout.tsx` - Added Google Analytics scripts
- `.env.local` - Added Measurement ID (create this file)
- `lib/gtag.ts` - Helper functions for tracking (optional, for custom events)

---

## Security Notes

- The `NEXT_PUBLIC_` prefix makes this variable public (it's visible in browser)
- This is intentional - Google Analytics needs the ID client-side
- Never put sensitive API keys with `NEXT_PUBLIC_` prefix
- Keep `.env.local` out of version control (already configured)

---

## Support

For more information:
- [Google Analytics Documentation](https://support.google.com/analytics)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
