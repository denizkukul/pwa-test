import { ref, set, push, remove, serverTimestamp } from "firebase/database";
import { auth, db } from './firebase';
import { useState, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { fetchBlogs } from "./utils/fetchBlogs";

function App() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState({});
  const blogsRef = ref(db, `/blogs`);

  useEffect(async () => {
    const blogs = await fetchBlogs();
    setBlogs(blogs);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser(null);
        signInWithRedirect(auth, new GoogleAuthProvider());
      }
    });
    return unsubscribe;
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newMessageRef = push(messagesRef);
  //   set(newMessageRef, { content: value, timestamp: serverTimestamp(), authorId: user.uid });
  //   setValue("");
  // };

  // const deleteMessage = id => {
  //   remove(ref(db, `/messages/${id}`));
  // };

  return (
    <>
      {
        Object.entries(blogs).map((entry, i) => (

          <div key={entry[0]}>
            <span>{entry[1].title}</span>
            <span>{entry[1].content}</span>
            {/* <span style={{ marginLeft: "10px", display: entry[1].authorId === user.uid ? "inline-block" : "none" }} onClick={e => deleteMessage(entry[0])}>X</span> */}
          </div>
        ))
      }

      {/* <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form> */}
    </>
  );
}

export default App;