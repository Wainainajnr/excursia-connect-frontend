import { supabase } from '@/integrations/supabase/client';

export interface Destination {
  id: string;
  title: string;
  description: string;
  location?: string;
  price: string;
  date: string;
  created_at: string;
}

export interface DestinationPhoto {
  id: string;
  destination_id: string;
  image_url: string;
  display_order: number;
  created_at: string;
}

export const getDestinations = async (): Promise<Destination[]> => {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching destinations:', error);
    return [];
  }

  return data || [];
};

export const getDestinationPhotos = async (destinationId: string): Promise<DestinationPhoto[]> => {
  const { data, error } = await supabase
    .from('destination_photos')
    .select('*')
    .eq('destination_id', destinationId)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching destination photos:', error);
    return [];
  }

  return data || [];
};

export const addDestination = async (destination: Omit<Destination, 'id' | 'created_at'>): Promise<Destination | null> => {
  const { data, error } = await supabase
    .from('destinations')
    .insert([destination])
    .select()
    .single();

  if (error) {
    console.error('Error adding destination:', error);
    return null;
  }

  return data;
};

export const updateDestination = async (id: string, updates: Partial<Destination>): Promise<void> => {
  const { error } = await supabase
    .from('destinations')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Error updating destination:', error);
  }
};

export const deleteDestination = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('destinations')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting destination:', error);
  }
};

export const uploadDestinationPhoto = async (
  file: File,
  destinationId: string,
  displayOrder: number
): Promise<string | null> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${destinationId}/${Date.now()}.${fileExt}`;

  const { error: uploadError, data } = await supabase.storage
    .from('destination-photos')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (uploadError) {
    console.error('Error uploading photo:', uploadError);
    return null;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('destination-photos')
    .getPublicUrl(fileName);

  // Save photo record to database
  const { error: dbError } = await supabase
    .from('destination_photos')
    .insert([{
      destination_id: destinationId,
      image_url: publicUrl,
      display_order: displayOrder
    }]);

  if (dbError) {
    console.error('Error saving photo record:', dbError);
    return null;
  }

  return publicUrl;
};

export const deleteDestinationPhoto = async (photoId: string, imageUrl: string): Promise<void> => {
  // Extract file path from URL
  const urlParts = imageUrl.split('/destination-photos/');
  if (urlParts.length > 1) {
    const filePath = urlParts[1].split('?')[0];
    
    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('destination-photos')
      .remove([filePath]);

    if (storageError) {
      console.error('Error deleting photo from storage:', storageError);
    }
  }

  // Delete from database
  const { error: dbError } = await supabase
    .from('destination_photos')
    .delete()
    .eq('id', photoId);

  if (dbError) {
    console.error('Error deleting photo record:', dbError);
  }
};
