const sampleListings =[
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Enjoy the scenic beauty with a relaxing stay.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States"
  },
  {
    "title": "Luxury City Hotel",
    "description": "Perfect location for your dream vacation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 3200,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Alpine Mountain Retreat",
    "description": "Escape to nature with this cozy mountain lodge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Interlaken",
    "country": "Switzerland"
  },
  {
    "title": "Desert Oasis Resort",
    "description": "Experience the luxury in the heart of the desert.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2100,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Tokyo Highrise Hotel",
    "description": "Modern comforts in the heart of Tokyo.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2700,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Rustic Lakeside Cabin",
    "description": "Perfect for fishing and nature lovers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "Lake Tahoe",
    "country": "United States"
  },
  {
    "title": "Greek Island Villa",
    "description": "Stay near the sea in a white-washed villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/2716243/pexels-photo-2716243.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2000,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Scandinavian Cabin",
    "description": "Enjoy northern lights in comfort and style.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1900,
    "location": "Tromsø",
    "country": "Norway"
  },
  {
    "title": "Rainforest Eco Lodge",
    "description": "Sustainable stay surrounded by jungle.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417174/pexels-photo-417174.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 1600,
    "location": "Costa Rica",
    "country": "Costa Rica"
  },
  {
    "title": "NYC Central Apartment",
    "description": "Live the big city life near Times Square.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Coastal Surf Shack",
    "description": "Chill by the waves with this rustic surf shack.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 1400,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Modern Downtown Loft",
    "description": "Stylish loft in the heart of the city.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "London",
    "country": "United Kingdom"
  },
  {
    "title": "Historic Castle Suite",
    "description": "Live like royalty in this ancient castle.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 4000,
    "location": "Edinburgh",
    "country": "United Kingdom"
  },
  {
    "title": "Tropical Treehouse",
    "description": "Relax in a treehouse surrounded by palms.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2500,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Snowy Chalet Retreat",
    "description": "Cozy up in a snowy mountain chalet.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2300,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Rooftop Urban Studio",
    "description": "Enjoy city views from this modern studio.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Countryside Vineyard Villa",
    "description": "Wine country luxury in a private villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2800,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Urban Minimalist Apartment",
    "description": "Sleek and simple city living.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=600"
    },
    "price": 2000,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Beachfront Infinity Pool Villa",
    "description": "Private infinity pool facing the ocean.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4500,
    "location": "Phuket",
    "country": "Thailand"
  }
  // … total 50 in file
]

module.exports = { data: sampleListings };