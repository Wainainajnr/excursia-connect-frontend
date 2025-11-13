import { Poster } from '@/types/poster';

const STORAGE_KEY = 'excursia_posters';

export const getPosters = (): Poster[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const savePosters = (posters: Poster[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posters));
};

export const addPoster = (poster: Omit<Poster, 'id' | 'createdAt'>): Poster => {
  const posters = getPosters();
  const newPoster: Poster = {
    ...poster,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  posters.push(newPoster);
  savePosters(posters);
  return newPoster;
};

export const updatePoster = (id: string, updates: Partial<Poster>): void => {
  const posters = getPosters();
  const index = posters.findIndex(p => p.id === id);
  if (index !== -1) {
    posters[index] = { ...posters[index], ...updates };
    savePosters(posters);
  }
};

export const deletePoster = (id: string): void => {
  const posters = getPosters().filter(p => p.id !== id);
  savePosters(posters);
};
