import React, { useState } from "react";
import { useMapData } from '@/lib/useMapData'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    parent: ""
  });
  const [success, setSuccess] = useState(false);
  const { data, isLoading, isError } = useMapData()

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/v2/additem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if (data.success) {
      setSuccess(true);
    }
  };
  if (isLoading) return <div>Loading...</div>
  return (
    <>
    {success ? (
      <div >
        <p className={styles.success}>Data added successfully!</p>
        <div className={styles.success}>
        <Link className={styles.mapButton} href="/"> Back to map</Link>
        </div>
      </div>
    ) : (
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          maxlength="80"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="url"
          patter="https://.*"
          placeholder="URL"
          value={formData.url}
          onChange={handleInputChange}
          required
        />
        <select
          name="parent"
          value={formData.parent}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select Parent
          </option>
          {data.nodes.map(node => (
            <option key={node.id} value={node.id}>
              {node.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    )}
    </>
  );
};

export default Form;
