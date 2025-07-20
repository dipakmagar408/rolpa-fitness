import React, { useState } from 'react';

const Ohi = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    address: `City ${i + 1}, Nepal`,
    contact: `98000000${String(i + 1).padStart(2, '0')}`,
    image: `https://picsum.photos/300/200?random=${i + 1}`
  }));

  const toggleMenu = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const handleRightClick = (e) => {
    e.preventDefault(); // disable right click context menu
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          onClick={() => toggleMenu(card.id)}
          onContextMenu={handleRightClick}
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{card.name}</h2>
            <p className="text-gray-600 text-sm"><strong>Address:</strong> {card.address}</p>
            <p className="text-gray-600 text-sm"><strong>Contact:</strong> {card.contact}</p>

            {selectedCardId === card.id && (
              <div className="mt-3 space-y-2 border-t pt-2">
                <a
                  href={card.image}
                  download
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Download
                </a>
                <a
                  href={card.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Save As
                </a>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = card.image;
                    link.download = `profile-${card.id}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Save Image
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ohi;
