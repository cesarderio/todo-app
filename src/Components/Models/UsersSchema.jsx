const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'writer','user'] },
});

export default usersSchema;
