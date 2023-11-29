export async function fetchBlogs() {
    const response = await fetch("https://pwa-test-59a03-default-rtdb.europe-west1.firebasedatabase.app/blogs.json");
    const messages = await response.json();
    return messages;
};