export const getNote = (req, res) => {
    res.status(200).send("You got notes!");
}

export const createNote = (req, res) => {
  res.status(201).json({ message: 'Note created' });
}

export const updateNote = (req, res) => {
  res.status(201).json({ message: 'Note updated' });
}

export const deleteNote = (req, res) => {
  res.status(201).json({ message: 'Note deleted' });
}
