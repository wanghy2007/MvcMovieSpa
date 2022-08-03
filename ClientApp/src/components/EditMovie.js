import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function EditMovie() {
    const { id } = useParams();
    const [formValues, setFormValues] = useState({
        id: "",
        title: "",
        releaseDate: "",
        genre: "",
        price: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`movies/${id}`);
            const data = await response.json();
            setFormValues(data);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        console.log(value);
        setFormValues((prevState) => {
            return {
                ...prevState,
                name: value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`movies/${id}`, {
            method: "POST",
            body: JSON.stringify({
                id: formValues.id,
                title: formValues.title,
                releaseDate: formValues.releaseDate,
                genre: formValues.genre,
                price: formValues.price,
            }),
        });
    };

    return (
        <div>
            <h1>Edit</h1>
            <h4>Movie</h4>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" value={formValues.id} onChange={handleChange} />
                        <div className="form-group">
                            <label for="Title" className="control-label">Title</label>
                            <input id="Title" className="form-control" value={formValues.title} onChange={handleChange} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}