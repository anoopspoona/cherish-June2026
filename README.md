# Cherish Every Bite Platform

Premium Next.js + Supabase operations platform for a Kerala-style healthy meal subscription and cloud kitchen in Trivandrum.

## Stack
- Next.js App Router, TypeScript, Tailwind CSS
- Supabase PostgreSQL/Auth/Storage/RLS
- Google Maps Places + polygon/radius serviceability helpers
- Razorpay-ready payment abstraction

## Environment
Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
NEXT_PUBLIC_DEFAULT_KITCHEN_LAT=8.5241
NEXT_PUBLIC_DEFAULT_KITCHEN_LNG=76.9366
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client components.

## Supabase setup
Run SQL files in order:
1. `supabase/001_schema.sql`
2. `supabase/002_rls_seed.sql`

This creates the full data model, enables RLS, seeds owner admins (`anoop.anoops@gmail.com`, `sindhug84@gmail.com`), default kitchen location, cutoff time, categories, and plan aliases.

## Local preview
```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Business rules implemented
- Menu cycle is 4 weeks × 6 service days = 24 active service days.
- Calendar displays 5 visual weeks / 35 cells.
- Sundays are always Kitchen Closed / No Delivery and are not active service days.
- Subscription and preorder tables reject Sunday delivery dates at the database level.
- CSV import validates canonical headers for plan master, menu cycle, dish catalog, and delivery zones.
- GeoJSON delivery-zone coordinates are converted from `[longitude, latitude]` to `{ lat, lng }` in map utilities.

## Important blockers before production
- Connect a real Supabase project and run migrations.
- Configure Supabase Auth email templates and Storage bucket `dish-images`.
- Add Google Maps API key with Places + Maps JavaScript enabled.
- Add Razorpay credentials and webhook verification endpoint.
- Replace placeholder admin mutation screens with final server-action forms for high-volume operations.
