// src/gudang.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Crud.css'; 

const Crud = () => {
    const [Siswa, setSiswa] = useState([]);
    const [formData, setFormData] = useState({ id: '', nama: '', stock: '', harga: '' });
    const [isEditing, setIsEditing] = useState(false);

    const fetchSiswa = async () => {
        const response = await axios.get('http://localhost:5000/api/siswa');
        setSiswa(response.data);
    };

    useEffect(() => {
        fetchSiswa();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await axios.put(`http://localhost:5000/api/siswa/${formData.id}`, formData);
        } else {
            await axios.post('http://localhost:5000/api/siswa', formData);
        }
        setFormData({ id: '', nama: '', NISN: '', umur: '' , hobi: '', status:''});
        setIsEditing(false);
        fetchSiswa();
    };

    const handleEdit = (item) => {
        setFormData(item);
        setIsEditing(!isEditing);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/siswa/${id}`);
        fetchSiswa();
    };

    return (
        <div>
            <h1>CRUD Kelompok Azril, Sheren, Pasya</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Nama"
                    required
                />
                <input
                    type="number"
                    name="NISN"
                    value={formData.NISN}
                    onChange={handleChange}
                    placeholder="NISN"
                    required
                />
                <input
                    type="number"
                    name="umur"
                    value={formData.umur}
                    onChange={handleChange}
                    placeholder="umur"
                    required
                />
                <input
                    type="number"
                    name="hobi"
                    value={formData.hobi}
                    onChange={handleChange}
                    placeholder="hobi"
                    required
                />
                <input
                    type="number"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    placeholder="status"
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>umur</th>
                        <th>hobi</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {Siswa.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.NISN}</td>
                            <td>{item.umur}</td>
                            <td>{item.hobi}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Crud;
