const sampleListings = [
  {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful retreat surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "cozycabinwoods"
    },
    price: 120,
    location: "Asheville, NC",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-82.5515, 35.5951]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Beachside Bungalow",
    description: "Walk to the beach and enjoy ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "beachbungalow"
    },
    price: 200,
    location: "Maui, Hawaii",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Luxury Villa with Pool",
    description: "Modern design and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "luxuryvillapool"
    },
    price: 350,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Mountain View Chalet",
    description: "Stunning views of the Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      filename: "mountainchalet"
    },
    price: 180,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Rooftop Loft in the City",
    description: "Chic modern space in the heart of downtown.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "cityloft"
    },
    price: 220,
    location: "New York, NY",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154084-341ff9e8df33",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
   {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful retreat surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "cozycabinwoods"
    },
    price: 120,
    location: "Asheville, NC",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-82.5515, 35.5951]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Beachside Bungalow",
    description: "Walk to the beach and enjoy ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "beachbungalow"
    },
    price: 200,
    location: "Maui, Hawaii",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Luxury Villa with Pool",
    description: "Modern design and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "luxuryvillapool"
    },
    price: 350,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Mountain View Chalet",
    description: "Stunning views of the Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      filename: "mountainchalet"
    },
    price: 180,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Rooftop Loft in the City",
    description: "Chic modern space in the heart of downtown.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "cityloft"
    },
    price: 220,
    location: "New York, NY",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154084-341ff9e8df33",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
   {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful retreat surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "cozycabinwoods"
    },
    price: 120,
    location: "Asheville, NC",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-82.5515, 35.5951]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Beachside Bungalow",
    description: "Walk to the beach and enjoy ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "beachbungalow"
    },
    price: 200,
    location: "Maui, Hawaii",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Luxury Villa with Pool",
    description: "Modern design and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "luxuryvillapool"
    },
    price: 350,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Mountain View Chalet",
    description: "Stunning views of the Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      filename: "mountainchalet"
    },
    price: 180,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Rooftop Loft in the City",
    description: "Chic modern space in the heart of downtown.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "cityloft"
    },
    price: 220,
    location: "New York, NY",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154084-341ff9e8df33",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
   {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful retreat surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "cozycabinwoods"
    },
    price: 120,
    location: "Asheville, NC",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-82.5515, 35.5951]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Beachside Bungalow",
    description: "Walk to the beach and enjoy ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "beachbungalow"
    },
    price: 200,
    location: "Maui, Hawaii",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Luxury Villa with Pool",
    description: "Modern design and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "luxuryvillapool"
    },
    price: 350,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Mountain View Chalet",
    description: "Stunning views of the Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
      filename: "mountainchalet"
    },
    price: 180,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Rooftop Loft in the City",
    description: "Chic modern space in the heart of downtown.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "cityloft"
    },
    price: 220,
    location: "New York, NY",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    },
    owner: "687d04dee0c0d45eb3892006"
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154084-341ff9e8df33",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    },
    owner: "687d04dee0c0d45eb3892006"
  }
];


module.exports = { data: sampleListings };