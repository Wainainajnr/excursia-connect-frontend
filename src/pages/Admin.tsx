import { useState, useEffect } from 'react';
import { Trash2, Edit, Upload, Plus } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { getPosters, addPoster, updatePoster, deletePoster } from '@/lib/posterStorage';
import { Poster } from '@/types/poster';

const Admin = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', location: '', date: '', price: '', image: '' });
  const [multiFormData, setMultiFormData] = useState<Array<{ title: string; description: string; location: string; date: string; price: string; image: string; }>>([]);

  useEffect(() => { setPosters(getPosters()); }, []);
  useEffect(() => { setMultiFormData(Array(6).fill(null).map(() => ({ title: '', description: '', location: '', date: '', price: '', image: '' }))); }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (index !== undefined) {
          const newData = [...multiFormData];
          newData[index] = { ...newData[index], image: reader.result as string };
          setMultiFormData(newData);
        } else {
          setFormData(prev => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMultiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validForms = multiFormData.filter(f => f.title.trim() && f.description.trim() && f.price.trim() && f.image);
    if (validForms.length === 0) { toast.error('Please fill out at least one poster'); return; }
    validForms.forEach(f => addPoster({ ...f, title: f.title.trim(), description: f.description.trim(), location: f.location.trim(), date: f.date || new Date().toLocaleDateString(), price: f.price.trim() }));
    toast.success(`Added ${validForms.length} poster(s)!`);
    setPosters(getPosters());
    setMultiFormData(Array(6).fill(null).map(() => ({ title: '', description: '', location: '', date: '', price: '', image: '' })));
    setShowUploadForm(false);
  };

  const handleEdit = (poster: Poster) => { setEditingId(poster.id); setFormData({ title: poster.title, description: poster.description, location: poster.location || '', date: poster.date, price: poster.price, image: poster.image }); setShowUploadForm(true); };
  const handleUpdate = (e: React.FormEvent) => { e.preventDefault(); if (!formData.title.trim() || !formData.description.trim() || !formData.price.trim()) { toast.error('Fill required fields'); return; } if (editingId) { updatePoster(editingId, formData); toast.success('Updated!'); setEditingId(null); } setPosters(getPosters()); setFormData({ title: '', description: '', location: '', date: '', price: '', image: '' }); setShowUploadForm(false); };
  const handleDelete = (id: string) => { if (confirm('Delete?')) { deletePoster(id); setPosters(getPosters()); toast.success('Deleted!'); } };
  const handleMultiChange = (i: number, field: string, value: string) => { const newData = [...multiFormData]; newData[i] = { ...newData[i], [field]: value }; setMultiFormData(newData); };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div><h1 className="text-4xl font-heading font-bold mb-4">Admin Dashboard</h1><p className="text-muted-foreground">Manage posters</p></div>
            <Button className="btn-pill" onClick={() => { setShowUploadForm(true); setEditingId(null); }}><Plus className="h-5 w-5 mr-2" />Add Posters</Button>
          </div>
          {showUploadForm && <div className="bg-card p-8 rounded-xl shadow-lg mb-12"><h2 className="text-2xl font-heading font-bold mb-6">{editingId ? 'Edit' : 'Upload (Up to 6)'}</h2>{editingId ? <form onSubmit={handleUpdate} className="space-y-6"><div><label className="block text-sm font-medium mb-2">Image</label><Input type="file" accept="image/*" onChange={handleImageUpload} />{formData.image && <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg mt-2" />}</div><div><label className="block text-sm font-medium mb-2">Title *</label><Input value={formData.title} onChange={e => setFormData(p => ({ ...p, title: e.target.value }))} required /></div><div><label className="block text-sm font-medium mb-2">Description *</label><Textarea value={formData.description} onChange={e => setFormData(p => ({ ...p, description: e.target.value }))} rows={4} required /></div><div className="grid md:grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-2">Location</label><Input value={formData.location} onChange={e => setFormData(p => ({ ...p, location: e.target.value }))} /></div><div><label className="block text-sm font-medium mb-2">Date</label><Input value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} /></div></div><div><label className="block text-sm font-medium mb-2">Price *</label><Input value={formData.price} onChange={e => setFormData(p => ({ ...p, price: e.target.value }))} placeholder="From KShs..." required /></div><div className="flex gap-4"><Button type="submit" className="flex-1">Update</Button><Button type="button" variant="outline" className="flex-1" onClick={() => { setShowUploadForm(false); setEditingId(null); }}>Cancel</Button></div></form> : <form onSubmit={handleMultiSubmit}><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">{multiFormData.map((f, i) => <div key={i} className="bg-muted p-4 rounded-lg space-y-3"><h3 className="font-semibold">Poster {i+1}</h3><Input type="file" accept="image/*" onChange={e => handleImageUpload(e, i)} className="text-xs" />{f.image && <img src={f.image} alt="" className="w-full h-24 object-cover rounded" />}<Input value={f.title} onChange={e => handleMultiChange(i, 'title', e.target.value)} placeholder="Title" className="text-xs" /><Textarea value={f.description} onChange={e => handleMultiChange(i, 'description', e.target.value)} placeholder="Description" rows={2} className="text-xs" /><Input value={f.location} onChange={e => handleMultiChange(i, 'location', e.target.value)} placeholder="Location" className="text-xs" /><Input value={f.date} onChange={e => handleMultiChange(i, 'date', e.target.value)} placeholder="Date" className="text-xs" /><Input value={f.price} onChange={e => handleMultiChange(i, 'price', e.target.value)} placeholder="KShs" className="text-xs" /></div>)}</div><div className="flex gap-4"><Button type="submit" className="flex-1"><Upload className="h-4 w-4 mr-2" />Upload All</Button><Button type="button" variant="outline" className="flex-1" onClick={() => setShowUploadForm(false)}>Cancel</Button></div></form>}</div>}
          <div><h2 className="text-2xl font-heading font-bold mb-6">Posters ({posters.length})</h2>{posters.length === 0 ? <div className="bg-muted p-12 rounded-xl text-center"><p className="text-muted-foreground">No posters yet.</p></div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{posters.map(p => <div key={p.id} className="bg-card rounded-xl overflow-hidden shadow-lg"><div className="relative h-48"><img src={p.image} alt={p.title} className="w-full h-full object-cover" /><div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{p.price}</div></div><div className="p-4"><h3 className="font-heading font-semibold text-lg mb-2 line-clamp-1">{p.title}</h3><p className="text-sm text-muted-foreground mb-2 line-clamp-2">{p.description}</p>{p.location && <p className="text-xs text-muted-foreground mb-2">📍 {p.location}</p>}<p className="text-xs text-accent mb-4">{p.date}</p><div className="flex gap-2"><Button variant="outline" size="sm" className="flex-1" onClick={() => handleEdit(p)}><Edit className="h-4 w-4 mr-1" />Edit</Button><Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDelete(p.id)}><Trash2 className="h-4 w-4 mr-1" />Delete</Button></div></div></div>)}</div>}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
