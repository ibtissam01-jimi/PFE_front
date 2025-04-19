


import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import axios from "axios";
import AddGuide from "./AddGuide";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Guides = () => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await axios.get("http://localhost:8000/guides");
      setGuides(response.data.guides);
    } catch (error) {
      console.error("Erreur lors de la récupération des guides :", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/guides/${id}`);
      setGuides((prev) => prev.filter((g) => g.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du guide :", error);
    }
  };
  

  const handleEdit = (id) => {
    console.log("Édition du guide avec l'ID :", id);
    // Tu peux ajouter ici la redirection vers une page d’édition
  };

  const addGuide = (newGuide) => {
    setGuides((prev) => [...prev, newGuide]);
  };

  const filteredGuides = guides.filter((guide) =>
    guide.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {!showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-black">Guides</h1>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center mb-6">
            <div className="flex flex-wrap md:flex-nowrap gap-3 flex-grow">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guide"
                  className="pl-10 pr-4 py-2 w-full md:w-1/3 bg-white border border-gray-300 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#0f3556] text-white px-4 py-2 rounded hover:bg-[#b89e65] transition"
            >
              Add Guide
            </Button>
          </div>

          <div className="shadow-lg rounded-lg overflow-x-auto">
            <div className="p-4">
              <table className="min-w-full text-sm text-left border-collapse bg-[#f4f1ec]">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2 font-medium text-black">Photo</th>
                    <th className="px-4 py-2 font-medium text-black">Name</th>
                    <th className="px-4 py-2 font-medium text-black">Email</th>
                    <th className="px-4 py-2 font-medium text-black">Address</th>
                    <th className="px-4 py-2 font-medium text-black">City</th>
                    <th className="px-4 py-2 font-medium text-black">CIN</th>
                    <th className="px-4 py-2 font-medium text-black">CV</th>
                    <th className="px-4 py-2 font-medium text-black">Phone</th>
                    <th className="px-4 py-2 font-medium text-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide) => (
                      <tr key={guide.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <img
                            src={`http://localhost:8000${guide.photo}`}
                            alt={guide.name}
                            className="w-10 h-10 rounded-full"
                          />
                        </td>
                        <td className="px-4 py-2 text-black">{guide.name}</td>
                        <td className="px-4 py-2 text-black">{guide.email}</td>
                        <td className="px-4 py-2 text-black">{guide.address}</td>
                        <td className="px-4 py-2 text-black">{guide.city_id}</td>
                        <td className="px-4 py-2 text-black">{guide.cin}</td>
                    
                        <td className="px-4 py-2 text-black">
                          <a
                            href={guide.cv}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View CV
                          </a>
                        </td>
                        <td className="px-4 py-2 text-black">{guide.phone_number}</td>
                        <td className="px-4 py-2 flex gap-3">
                          <button onClick={() => handleEdit(guide.id)} title="Edit">
                            <FaEdit className="text-blue-500" />
                          </button>
                          <button onClick={() => handleDelete(guide.id)} title="Delete">
                            <FaTrashAlt className="text-red-500" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="p-4 text-center text-gray-500">
                        No guides found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {showForm && <AddGuide setShowForm={setShowForm} addGuide={addGuide} />}
    </div>
  );
};

export default Guides;
