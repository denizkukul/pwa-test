
const { useState, useEffect } = React;


const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
                firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }
        });
        return unsubscribe;
    }, []);

    return (
        <div onClick={() => { firebase.auth().signOut(); }} className="app-container">
            <h2>PWA-BLOG</h2>
            <div className="blog-list">
                <div className="blog-container">
                    <div className="blog">BLOG1</div>
                </div>
                <div className="blog-container">
                    <div className="blog">BLOG2</div>
                </div>
                <div className="blog-container">
                    <div className="blog">BLOG3</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));