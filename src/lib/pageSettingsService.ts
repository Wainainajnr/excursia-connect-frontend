import { supabase } from '@/integrations/supabase/client';

export interface PageSetting {
  id: string;
  page_key: string;
  background_url: string | null;
  updated_at: string;
}

export const getPageSettings = async (): Promise<Record<string, string | null>> => {
  const { data, error } = await supabase
    .from('page_settings')
    .select('*');

  if (error) {
    console.error('Error fetching page settings:', error);
    return {};
  }

  const settings: Record<string, string | null> = {};
  data?.forEach((row: any) => {
    settings[row.page_key] = row.background_url;
  });
  return settings;
};

export const updatePageBackground = async (pageKey: string, backgroundUrl: string): Promise<void> => {
  const { error } = await supabase
    .from('page_settings')
    .update({ background_url: backgroundUrl, updated_at: new Date().toISOString() })
    .eq('page_key', pageKey);

  if (error) {
    console.error('Error updating page background:', error);
  }
};

export const uploadPageBackground = async (file: File, pageKey: string): Promise<string | null> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `backgrounds/${pageKey}_${Date.now()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('destination-photos')
    .upload(fileName, file, { cacheControl: '3600', upsert: true });

  if (uploadError) {
    console.error('Error uploading background:', uploadError);
    return null;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('destination-photos')
    .getPublicUrl(fileName);

  await updatePageBackground(pageKey, publicUrl);
  return publicUrl;
};
