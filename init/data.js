const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Relax in this peaceful beachfront cottage with stunning sea views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=400&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Studio Apartment",
        description: "A stylish studio apartment located in the city center.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=60",
        },
        price: 2000,
        location: "Mumbai",
        country: "India",
    },
    {
        title: "Mountain View Cabin",
        description:
            "A wooden cabin surrounded by beautiful mountains and nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=60",
        },
        price: 1800,
        location: "Manali",
        country: "India",
    },
    {
        title: "Luxury Pool Villa",
        description: "Private villa with pool, garden, and modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=60",
        },
        price: 5500,
        location: "Goa",
        country: "India",
    },
    {
        title: "Budget Room Stay",
        description: "Affordable and clean room for short stays.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=60",
        },
        price: 700,
        location: "Pune",
        country: "India",
    },
    {
        title: "Desert Camp Experience",
        description: "Enjoy desert camping with cultural activities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60",
        },
        price: 2200,
        location: "Jaisalmer",
        country: "India",
    },
    {
        title: "Lake View Villa",
        description:
            "Beautiful villa with amazing lake views and peaceful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=60",
        },
        price: 3000,
        location: "Udaipur",
        country: "India",
    },
    {
        title: "Countryside Farmhouse",
        description:
            "Stay in a farmhouse surrounded by greenery and fresh air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=60",
        },
        price: 1300,
        location: "Nashik",
        country: "India",
    },
    {
        title: "Luxury Penthouse",
        description: "Top-floor penthouse with panoramic city views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=60",
        },
        price: 7000,
        location: "Bangalore",
        country: "India",
    },
    {
        title: "Heritage Haveli",
        description: "Experience royal living in this heritage property.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=400&q=60",
        },
        price: 3200,
        location: "Jaipur",
        country: "India",
    },
    {
        title: "Forest Treehouse",
        description: "Stay in a unique treehouse surrounded by forest.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=60",
        },
        price: 2500,
        location: "Kerala",
        country: "India",
    },
    {
        title: "Beach Shack",
        description: "Simple beach shack just steps away from the ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60",
        },
        price: 1200,
        location: "Goa",
        country: "India",
    },
    {
        title: "Hilltop Cottage",
        description: "Cozy cottage located on a hilltop with scenic views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=60",
        },
        price: 2100,
        location: "Shimla",
        country: "India",
    },
    {
        title: "City Luxury Hotel Room",
        description: "Premium hotel room with top-class facilities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=60",
        },
        price: 4000,
        location: "Delhi",
        country: "India",
    },
    {
        title: "Riverside Cottage",
        description: "Peaceful cottage located beside a flowing river.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
        },
        price: 1900,
        location: "Rishikesh",
        country: "India",
    },
    {
        title: "Studio Flat",
        description: "Compact and modern studio perfect for solo travelers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=400&q=60",
        },
        price: 1600,
        location: "Hyderabad",
        country: "India",
    },
    {
        title: "Cliffside Villa",
        description: "Luxury villa on a cliff with breathtaking views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=60",
        },
        price: 6000,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Snow Cabin",
        description: "Cabin covered in snow for a perfect winter experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=400&q=60",
        },
        price: 2800,
        location: "Kashmir",
        country: "India",
    },
    {
        title: "Eco Bamboo House",
        description: "Sustainable bamboo house in a peaceful environment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=60",
        },
        price: 1700,
        location: "Assam",
        country: "India",
    },
    {
        title: "Island Resort Stay",
        description: "Enjoy luxury stay on a private island resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b9?auto=format&fit=crop&w=400&q=60",
        },
        price: 8000,
        location: "Maldives",
        country: "Maldives",
    },
];

module.exports = { data: sampleListings };
