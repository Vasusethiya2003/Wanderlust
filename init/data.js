const sampleListings =[
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    }
  },
  {
    title: "Rustic Lakehouse Escape",
    description: "A tranquil lakehouse with a fireplace and canoe.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "rusticlakehouse"
    },
    price: 150,
    location: "Lake Tahoe, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-120.0441, 39.0968]
    }
  },
  {
    title: "Historic Stone Cottage",
    description: "Charming old-world cottage in the countryside.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "stonecottage"
    },
    price: 110,
    location: "Cotswolds",
    country: "UK",
    geometry: {
      type: "Point",
      coordinates: [-1.7767, 51.8330]
    }
  },
  {
    title: "Modern Glass Treehouse",
    description: "Stay among the treetops with full-glass views.",
    image: {
      url: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "glasstreehouse"
    },
    price: 280,
    location: "Portland, OR",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    }
  },
  {
    title: "Colorful Mexican Hacienda",
    description: "Authentic experience in a traditional Mexican home.",
    image: {
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mexicanhacienda"
    },
    price: 130,
    location: "San Miguel de Allende",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-100.7417, 20.9144]
    }
  },
  {
    title: "Arctic Glass Igloo",
    description: "Watch the northern lights in comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "arcticigloo"
    },
    price: 400,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039]
    }
  },
  {
    title: "Tropical Jungle Retreat",
    description: "Eco-lodge deep in the rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jungleretreat"
    },
    price: 170,
    location: "Uvita",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7312, 9.2094]
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    }
  },
  {
    title: "Rustic Lakehouse Escape",
    description: "A tranquil lakehouse with a fireplace and canoe.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "rusticlakehouse"
    },
    price: 150,
    location: "Lake Tahoe, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-120.0441, 39.0968]
    }
  },
  {
    title: "Historic Stone Cottage",
    description: "Charming old-world cottage in the countryside.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "stonecottage"
    },
    price: 110,
    location: "Cotswolds",
    country: "UK",
    geometry: {
      type: "Point",
      coordinates: [-1.7767, 51.8330]
    }
  },
  {
    title: "Modern Glass Treehouse",
    description: "Stay among the treetops with full-glass views.",
    image: {
      url: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "glasstreehouse"
    },
    price: 280,
    location: "Portland, OR",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    }
  },
  {
    title: "Colorful Mexican Hacienda",
    description: "Authentic experience in a traditional Mexican home.",
    image: {
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mexicanhacienda"
    },
    price: 130,
    location: "San Miguel de Allende",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-100.7417, 20.9144]
    }
  },
  {
    title: "Arctic Glass Igloo",
    description: "Watch the northern lights in comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "arcticigloo"
    },
    price: 400,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039]
    }
  },
  {
    title: "Tropical Jungle Retreat",
    description: "Eco-lodge deep in the rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jungleretreat"
    },
    price: 170,
    location: "Uvita",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7312, 9.2094]
    }
  }, {
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  {
    title: "Desert Dome Getaway",
    description: "Off-grid dome house with desert views.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "desertdome"
    },
    price: 140,
    location: "Joshua Tree, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347]
    }
  },
  {
    title: "Rustic Lakehouse Escape",
    description: "A tranquil lakehouse with a fireplace and canoe.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "rusticlakehouse"
    },
    price: 150,
    location: "Lake Tahoe, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-120.0441, 39.0968]
    }
  },
  {
    title: "Historic Stone Cottage",
    description: "Charming old-world cottage in the countryside.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "stonecottage"
    },
    price: 110,
    location: "Cotswolds",
    country: "UK",
    geometry: {
      type: "Point",
      coordinates: [-1.7767, 51.8330]
    }
  },
  {
    title: "Modern Glass Treehouse",
    description: "Stay among the treetops with full-glass views.",
    image: {
      url: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "glasstreehouse"
    },
    price: 280,
    location: "Portland, OR",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    }
  },
  {
    title: "Colorful Mexican Hacienda",
    description: "Authentic experience in a traditional Mexican home.",
    image: {
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mexicanhacienda"
    },
    price: 130,
    location: "San Miguel de Allende",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-100.7417, 20.9144]
    }
  },
  {
    title: "Arctic Glass Igloo",
    description: "Watch the northern lights in comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "arcticigloo"
    },
    price: 400,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039]
    }
  },
  {
    title: "Tropical Jungle Retreat",
    description: "Eco-lodge deep in the rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jungleretreat"
    },
    price: 170,
    location: "Uvita",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-83.7312, 9.2094]
    }
  }
];


module.exports = { data: sampleListings };