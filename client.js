document.addEventListener('DOMContentLoaded', () => {
    const packButtons = ["raichuPack", "mewtwoPack", "gyaradosPack", "pidgeotPack"];
    packButtons.forEach(packId => {
        document.getElementById(packId).addEventListener("click", () => {
            fetch('/api/openPack') 
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then(data => {
                    const cardImagesDiv = document.getElementById("cardImages");
                    cardImagesDiv.innerHTML = ''; 
    
                    data.pack.forEach(card => {
                        const cardDiv = document.createElement('div');
                        cardDiv.className = 'cardDiv';
    
                        const cardName = document.createElement('p');
                        cardName.textContent = `${card.Name} - ${card.Rarity}`;
                        cardDiv.appendChild(cardName);
                        
                        const cardImage = document.createElement('img');
                        cardImage.className ='cardImage';
                        cardImage.src = card.Image; 
                        cardImage.alt = `${card.Name} image`;
                        cardDiv.appendChild(cardImage);
                    
                        const cardPrice = document.createElement('p');
                        cardPrice.className ='cardPrice';
                        cardPrice.textContent = `${card.Price} USD`; 
                        cardDiv.appendChild(cardPrice);
    
                        cardImagesDiv.appendChild(cardDiv);
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to open pack. Please try again.');
                });
        });
    })


});