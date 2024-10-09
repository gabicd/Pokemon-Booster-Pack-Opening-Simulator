import re
from bs4 import BeautifulSoup
import requests
import pandas as pd
import csv

URL = 'https://www.tcgcollector.com/sets/114/base-set-2?releaseDateOrder=newToOld&displayAs=images'

def preprocess_pokemon_info(div):
    div = div.split(sep='(')
    return ([div[0].strip(), '(' + div[1].split()[3]])

def get_pokelist(url):
    pokelist = []
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        pokemons = soup.find_all('div', class_='card-image-grid-item card-search-result-item has-image')

        for pokemon in pokemons:
            pokeinfo = pokemon.find('div', class_='card-image-grid-item-card-title').string
            try:
                rarity = pokemon.find('span', class_ = 'card-image-controls-item-rarity').find('img')['alt']
            except:
                rarity = 'Common'

            l = preprocess_pokemon_info(pokeinfo)
            l.append(rarity)
            pokelist.append(l)

    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
    return pokelist

def write_pokelist(pokelist):
    with open('pokemons.csv', 'w', newline='', encoding='utf-8') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerow(['Card Name', 'Index', 'Rarity'])

        for pokemon in pokelist:
            spamwriter.writerow(pokemon)

            import csv
URL = 'https://www.tcgcollector.com/sets/114/base-set-2?releaseDateOrder=newToOld&displayAs=images'

def preprocess_pokemon_info(div):
    div = div.split(sep='(')
    return ([div[0].strip(), '(' + div[1].split()[3]])

def get_pokelist(url):
    pokelist = []
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        pokemons = soup.find_all('div', class_='card-image-grid-item card-search-result-item has-image')

        for pokemon in pokemons:
            pokeinfo = pokemon.find('div', class_='card-image-grid-item-card-title').string
            try:
                rarity = pokemon.find('span', class_ = 'card-image-controls-item-rarity').find('img')['alt']
            except:
                rarity = 'Common'

            l = preprocess_pokemon_info(pokeinfo)
            l.append(rarity)
            pokelist.append(l)

    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
    return pokelist

def write_pokelist(pokelist):
    with open('pokemons.csv', 'w', newline='', encoding='utf-8') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerow(['Card Name', 'Index', 'Rarity'])

        for pokemon in pokelist:
            spamwriter.writerow(pokemon)
import csv
URL = 'https://www.tcgcollector.com/sets/114/base-set-2?releaseDateOrder=newToOld&displayAs=images'

def preprocess_pokemon_info(div):
    div = div.split(sep='(')
    return ([div[0].strip(), '(' + div[1].split()[3]])

def get_pokelist(url):
    pokelist = []
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        pokemons = soup.find_all('div', class_='card-image-grid-item card-search-result-item has-image')

        for pokemon in pokemons:
            pokeinfo = pokemon.find('div', class_='card-image-grid-item-card-title').string
            try:
                rarity = pokemon.find('span', class_ = 'card-image-controls-item-rarity').find('img')['alt']
            except:
                rarity = 'Common'

            l = preprocess_pokemon_info(pokeinfo)
            l.append(rarity)
            pokelist.append(l)

    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
    return pokelist

def write_pokelist(pokelist):
    with open('pokemons.csv', 'w', newline='', encoding='utf-8') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerow(['Card Name', 'Index', 'Rarity'])

        for pokemon in pokelist:
            spamwriter.writerow(pokemon)
import csv
URL = 'https://www.tcgcollector.com/sets/114/base-set-2?releaseDateOrder=newToOld&displayAs=images'

def preprocess_pokemon_info(div):
    div = div.split(sep='(')
    return ([div[0].strip(), '(' + div[1].split()[3]])

def get_pokelist(url):
    pokelist = []
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        pokemons = soup.find_all('div', class_='card-image-grid-item card-search-result-item has-image')

        for pokemon in pokemons:
            pokeinfo = pokemon.find('div', class_='card-image-grid-item-card-title').string
            try:
                rarity = pokemon.find('span', class_ = 'card-image-controls-item-rarity').find('img')['alt']
            except:
                rarity = 'Common'

            l = preprocess_pokemon_info(pokeinfo)
            l.append(rarity)
            pokelist.append(l)

    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
    return pokelist

def write_pokelist(pokelist):
    with open('pokemons.csv', 'w', newline='', encoding='utf-8') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerow(['Card Name', 'Index', 'Rarity'])

        for pokemon in pokelist:
            spamwriter.writerow(pokemon)

pokelist = get_pokelist(URL)
write_pokelist(pokelist)
