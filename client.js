//client side JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    const packButtons = ["raichuPack", "mewtwoPack", "gyaradosPack", "pidgeotPack"];    //use same function for different buttons
    packButtons.forEach(packId => {
        document.getElementById(packId).addEventListener("click", () => {
            fetch('/api/openPack')  //execute code
                .then(response => {
                    if (!response.ok) {     //error treatment
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then(data => {
                    const cardImagesDiv = document.getElementById("cardImages");
                    cardImagesDiv.innerHTML = '';   //clear the array 
    
                    data.pack.forEach(card => {
                        const cardDiv = document.createElement('div');  //create a div in the html code for the cards
                        cardDiv.className = 'cardDiv';
    
                        const cardName = document.createElement('p');   //create a paragraph in the html code for the name and rarity of the cards
                        cardName.textContent = `${card.Name} - ${card.Rarity}`;
                        cardDiv.appendChild(cardName);
                        
                        const cardImage = document.createElement('img');    //create an image element to insert the image of the card
                        cardImage.className ='cardImage';
                        cardImage.src = card.Image;     //html link of the image
                        cardImage.alt = `${card.Name} image`;   //alt text for accessibility
                        cardDiv.appendChild(cardImage);
                    
                        const cardPrice = document.createElement('p');  //create a paragraph in the html code for the price of the card
                        cardPrice.className ='cardPrice';
                        cardPrice.textContent = `${card.Price} USD`; 
                        cardDiv.appendChild(cardPrice);
    
                        cardImagesDiv.appendChild(cardDiv); //append it on the father div
                    });
                })
                .catch(error => {   //error treatment
                    console.error('Error:', error);
                    alert('Failed to open pack. Please try again.');
                });
        });
    })


});