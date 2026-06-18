import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// In‑memory store
let notes = [];
let nextId = 1;

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  const note = { id: nextId++, title, content: content || '' };
  notes.push(note);
  res.status(201).json(note);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ error: 'not found' });
  res.json(note);
});

app.put('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ error: 'not found' });
  const { title, content } = req.body;
  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;
  res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {
  const idx = notes.findIndex(n => n.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  notes.splice(idx, 1);
  res.json({ deleted: true });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
