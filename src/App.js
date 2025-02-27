import { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
    const [tweet, setTweet] = useState("");
    const [stance, setStance] = useState(null);

    const analyzeStance = async () => {
        try {
            const response = await axios.post("https://stance-detection-app-1.onrender.com/detect-stance", { tweet });
            setStance(response.data.stance);
        } catch (error) {
            console.error("Error:", error);
            setStance("Error fetching stance.");
        }
    };

    return (
        <div className="container">
            <h2>Tweet Stance Detection</h2>
            <input
                type="text"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
                placeholder="Enter a tweet"
            />
            <button onClick={analyzeStance}>Analyze</button>
            {stance && <p className="result">Detected Stance: <b>{stance}</b></p>}
        </div>
    );
}

export default App;
