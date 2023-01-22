import React, { useState } from 'react';
import axios from 'axios';
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://charlytocapi.onrender.com/api/blog/', {title, description, category});
            console.log("Post sent successfully");
        } catch (error) {
            console.log("Error while sending post: ", error);
        }
    }

    return (
        <form className='create-post' onSubmit={handleSubmit}>
            <h1>If you are here and you're not the page owner maybe you should go... Or post something nice</h1>

            <label>
                Title
                </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>
                Description</label>
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        
            <label>
                Category</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="submit" value="Create Post" />
        </form>
    );
};

export default CreatePost;
