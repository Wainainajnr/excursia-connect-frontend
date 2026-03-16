
-- Add offer columns to destinations
ALTER TABLE public.destinations
  ADD COLUMN IF NOT EXISTS offer boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS offer_price text,
  ADD COLUMN IF NOT EXISTS original_price text;

-- Create page_settings table for dynamic backgrounds
CREATE TABLE IF NOT EXISTS public.page_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key text NOT NULL UNIQUE,
  background_url text,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.page_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view page_settings" ON public.page_settings FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can insert page_settings" ON public.page_settings FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can update page_settings" ON public.page_settings FOR UPDATE TO public USING (true);
CREATE POLICY "Anyone can delete page_settings" ON public.page_settings FOR DELETE TO public USING (true);

-- Seed default page settings rows
INSERT INTO public.page_settings (page_key) VALUES ('relocation_background'), ('offers_background'), ('about_background')
ON CONFLICT (page_key) DO NOTHING;
