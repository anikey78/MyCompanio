import { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X, BookOpen, Calendar, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

interface Note {
  id: string;
  title: string;
  content: string;
  date: Date;
  mood?: string;
}

export function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'My First Entry',
      content: 'Today was a good day. I feel grateful for all the positive things happening in my life.',
      date: new Date(),
      mood: '😊'
    }
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    if (!editTitle.trim() || !editContent.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: editTitle,
      content: editContent,
      date: new Date(),
    };

    setNotes([newNote, ...notes]);
    setEditTitle('');
    setEditContent('');
    setIsCreating(false);
  };

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleSave = () => {
    if (!editingId) return;

    setNotes(notes.map(note =>
      note.id === editingId
        ? { ...note, title: editTitle, content: editContent }
        : note
    ));
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsCreating(false);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl mb-4">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-4">
            My Personal Journal
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Keep track of your thoughts, feelings, and important moments. Your private space for reflection and growth.
          </p>
        </div>

        {/* Create New Note Button */}
        {!isCreating && !editingId && (
          <div className="mb-8">
            <Button
              onClick={() => setIsCreating(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 rounded-2xl shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Journal Entry
            </Button>
          </div>
        )}

        {/* Create/Edit Form */}
        {(isCreating || editingId) && (
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 border border-emerald-100">
            <h3 className="text-slate-800 mb-4">
              {isCreating ? 'New Journal Entry' : 'Edit Entry'}
            </h3>
            <div className="space-y-4">
              <Input
                placeholder="Entry title..."
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border-2 border-slate-200 focus:border-emerald-400 py-6"
              />
              <Textarea
                placeholder="What's on your mind?..."
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="min-h-[200px] border-2 border-slate-200 focus:border-emerald-400 resize-none"
              />
              <div className="flex gap-3">
                <Button
                  onClick={isCreating ? handleCreate : handleSave}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isCreating ? 'Create' : 'Save'}
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="border-slate-300"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Notes List */}
        <div className="space-y-6">
          {notes.length === 0 ? (
            <div className="text-center py-16 bg-white/50 rounded-3xl border border-slate-100">
              <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No journal entries yet. Start writing to track your journey!</p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-slate-800 mb-2">{note.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {note.date.toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      {note.mood && <span className="text-2xl">{note.mood}</span>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(note)}
                      variant="ghost"
                      className="text-emerald-600 hover:bg-emerald-50"
                      disabled={editingId !== null || isCreating}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(note.id)}
                      variant="ghost"
                      className="text-red-600 hover:bg-red-50"
                      disabled={editingId !== null || isCreating}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-slate-600 whitespace-pre-wrap">{note.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
