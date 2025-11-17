-- Create destinations table
CREATE TABLE public.destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT,
  price TEXT NOT NULL,
  date TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create destination_photos table
CREATE TABLE public.destination_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id UUID NOT NULL REFERENCES public.destinations(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destination_photos ENABLE ROW LEVEL SECURITY;

-- Public read access for destinations
CREATE POLICY "Anyone can view destinations"
  ON public.destinations
  FOR SELECT
  USING (true);

-- Allow anyone to insert destinations (for now - can be secured later with auth)
CREATE POLICY "Anyone can insert destinations"
  ON public.destinations
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update destinations
CREATE POLICY "Anyone can update destinations"
  ON public.destinations
  FOR UPDATE
  USING (true);

-- Allow anyone to delete destinations
CREATE POLICY "Anyone can delete destinations"
  ON public.destinations
  FOR DELETE
  USING (true);

-- Public read access for photos
CREATE POLICY "Anyone can view destination photos"
  ON public.destination_photos
  FOR SELECT
  USING (true);

-- Allow anyone to manage photos (can be secured with auth later)
CREATE POLICY "Anyone can insert destination photos"
  ON public.destination_photos
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update destination photos"
  ON public.destination_photos
  FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete destination photos"
  ON public.destination_photos
  FOR DELETE
  USING (true);

-- Create storage bucket for destination photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'destination-photos',
  'destination-photos',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
);

-- Storage policies for destination photos
CREATE POLICY "Anyone can view destination photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'destination-photos');

CREATE POLICY "Anyone can upload destination photos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'destination-photos');

CREATE POLICY "Anyone can update destination photos"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'destination-photos');

CREATE POLICY "Anyone can delete destination photos"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'destination-photos');

-- Create index for faster queries
CREATE INDEX idx_destination_photos_destination_id ON public.destination_photos(destination_id);
CREATE INDEX idx_destination_photos_display_order ON public.destination_photos(destination_id, display_order);