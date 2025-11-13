import { useState, useEffect } from 'react';
import { Trash2, Edit, Plus, Upload } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Poster } from '@/types/poster';
import { getPosters, addPoster, updatePoster, deletePoster } from '@/lib/posterStorage';

const Admin = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPoster, setEditingPoster] = useState<Poster | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    loadPosters();
  }, []);

  const loadPosters = () => {
    setPosters(getPosters());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.description || !formData.price || !formData.date) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (title, description, price, date)",
        variant: "destructive",
      });
      return;
    }

    if (!formData.image) {
      toast({
        title: "Image Required",
        description: "Please upload an image for the poster",
        variant: "destructive",
      });
      return;
    }

    try {
      if (editingPoster) {
        updatePoster(editingPoster.id, formData);
        toast({
          title: "Success!",
          description: "Poster updated successfully",
        });
      } else {
        addPoster(formData);
        toast({
          title: "Success!",
          description: "Poster added successfully",
        });
      }

      resetForm();
      loadPosters();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save poster. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (poster: Poster) => {
    setEditingPoster(poster);
    setFormData({
      title: poster.title,
      description: poster.description,
      location: poster.location || '',
      date: poster.date,
      price: poster.price,
      image: poster.image,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this poster?')) {
      deletePoster(id);
      toast({
        title: "Deleted",
        description: "Poster deleted successfully",
      });
      loadPosters();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      date: '',
      price: '',
      image: '',
    });
    setEditingPoster(null);
    setIsFormOpen(false);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Admin Panel
              </h1>
              <p className="text-muted-foreground">
                Manage posters and special offers for Excursia Connect
              </p>
            </div>
            <Button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-5 w-5 mr-2" />
              {isFormOpen ? 'Cancel' : 'Add Poster'}
            </Button>
          </div>

          {/* Form */}
          {isFormOpen && (
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-12 animate-fade-in">
              <h2 className="text-2xl font-heading font-bold mb-6">
                {editingPoster ? 'Edit Poster' : 'Add New Poster'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Safari Adventure"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Maasai Mara, Kenya"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date">Valid Until / Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      placeholder="e.g., Valid until Dec 31, 2025"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Price (KShs) *</Label>
                    <Input
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., KShs 150,000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the offer or event..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Poster Image *</Label>
                  <div className="mt-2">
                    <label className="flex items-center justify-center w-full p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {formData.image ? 'Change image' : 'Upload image'}
                        </span>
                      </div>
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {formData.image && (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="mt-4 w-full h-48 object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {editingPoster ? 'Update Poster' : 'Add Poster'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Posters Grid */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">
              Current Posters ({posters.length})
            </h2>
            {posters.length === 0 ? (
              <div className="bg-muted p-12 rounded-xl text-center">
                <p className="text-muted-foreground">No posters yet. Add your first poster to get started!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {posters.map((poster) => (
                  <div
                    key={poster.id}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                        {poster.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {poster.description}
                      </p>
                      <p className="text-primary font-bold mb-4">{poster.price}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleEdit(poster)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(poster.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
