# Southern Leather and Trim website

A Next.js site for Southern Leather and Trim (Ocoee, FL): Katzkin leather
interiors and auto detailing. Built with the App Router, TypeScript and
Tailwind CSS, ready to deploy on Vercel.

## Run it on your computer

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Address      | What it is                                             |
| ------------ | ------------------------------------------------------ |
| `/`          | Home, with the seat color builder                      |
| `/leather`   | Katzkin leather interiors: options, steps, questions   |
| `/detailing` | Detailing packages, add-ons, questions                 |
| `/gallery`   | Photos of finished work (linked once photos are added) |
| `/contact`   | Quote request form, phone, hours, map                  |

## Before you go live

Almost everything you'd want to change is in **`lib/site.ts`**. Search that
file for `TODO`:

1. **Hours.** Add your opening hours. Until then the site says "Call for hours".
2. **Detailing packages and prices.** The three packages and the add-ons are
   placeholders. Replace them with your real menu. Set `price` to something
   like `"From $180"`, or leave it `null` to show "Call for a quote".
3. **Service area.** Confirm the list of towns.
4. **Katzkin status.** Set `katzkinAuthorized: true` only if the shop is in
   Katzkin's authorized installer network.
5. **Social links.** Add Facebook, Instagram or Google review links.
6. **Leather copy.** The warranty, color count and install time come from
   Katzkin's public information. Check them against Katzkin's current terms.

### Add photos

1. Put image files in `public/gallery/`.
2. List each one in the `gallery` array in `lib/site.ts`:

```ts
gallery: [
  {
    file: "f150-saddle.jpg",
    alt: "Ford F-150 front seats in saddle leather with cream stitching",
    caption: "2022 F-150, saddle leather",
    width: 1600,
    height: 1200,
  },
],
```

The Gallery link appears in the menu as soon as there is one photo.

### Make the quote form send email

The form posts to `app/api/quote/route.ts`, which sends email through
[Resend](https://resend.com) (free tier is enough for a shop site).

1. Create a Resend account using the shop's email address and make an API key.
2. In Vercel, open Project > Settings > Environment Variables and add
   `RESEND_API_KEY`.
3. Redeploy.

Without a verified domain, Resend only delivers to the address you signed up
with, so sign up with the inbox that should receive quotes. Once you own a
domain, verify it in Resend and set `QUOTE_FROM_EMAIL`
(for example `Website <quotes@yourdomain.com>`).

Until the key is set, the form still works: it opens the visitor's own email
app with the request filled in and addressed to the shop.

See `.env.example` for all the variables.

## Deploy to Vercel

1. Put this folder in a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Southern Leather and Trim website"
   git branch -M main
   git remote add origin https://github.com/YOUR-NAME/southern-leather-and-trim.git
   git push -u origin main
   ```

2. Go to https://vercel.com/new, import the repository and press Deploy.
   Vercel detects Next.js on its own. No settings to change.
3. Add your domain under Project > Settings > Domains, then set the
   `NEXT_PUBLIC_SITE_URL` environment variable to it
   (for example `https://www.southernleatherandtrim.com`) and redeploy.
   That address is used in the sitemap and link previews.

## Changing the look

- Colors and fonts: the `@theme` block at the top of `app/globals.css`.
- Seat builder colors: the `LEATHERS` and `THREADS` lists at the top of
  `components/SeatBuilder.tsx`. They are on-screen approximations with
  generic names, not Katzkin's catalog.

## Trademark note

Katzkin is a registered trademark of Katzkin Leather, Inc. The site uses the
name in text only. Get Katzkin's permission before adding their logo or
product photos.
