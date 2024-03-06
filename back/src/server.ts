import app from './app'
const PORT = 8000

app.listen(PORT, () => {
    console.clear()
    console.log("Server started on port", PORT)
});