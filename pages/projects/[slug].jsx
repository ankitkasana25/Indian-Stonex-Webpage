import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { Separator } from "../../components/ui/separator"
import { motion, AnimatePresence } from 'framer-motion'

// Project data with different images for each category
const projectCategories = [
    {
        id: 'Corporate',
        name: 'Corporate',
        bannerImage: '/coporateBg.jpg',
        displayName: 'Corporate Projects',
        description: 'Community-focused architectural marvels that bring people together',
        projects: [
            {
                id: 1,
                title: 'Shri 1008 Munisuvratnath Jain Temple',
                address: '5, Pandurang Marg, Satellite, Ahmedabad, Gujarat 380015',
                architect: 'Master Craftsman Rishab Jain',
                duration: '18 Months',
                image: '/img5.png'
            },
            {
                id: 2,
                title: 'Shri Adinath Bhagwan Temple Complex',
                address: 'Jain Temple Road, Paldi, Ahmedabad, Gujarat 380007',
                architect: 'Vastu Expert Priya Sharma',
                duration: '24 Months',
                image: '/img2.jpg'
            },
            {
                id: 3,
                title: 'Community Marble Temple',
                address: '34, MG Road, Bangalore, Karnataka 560001',
                architect: 'Arun Kumar',
                duration: '16 Months',
                image: '/img6.png'
            },
            {
                id: 4,
                title: 'Shri Parshvanath Digambar Jain Mandir',
                address: 'Civil Lines, Jaipur, Rajasthan 302006',
                architect: 'Rajendra Mehta',
                duration: '20 Months',
                image: '/img10.jpg'
            },
            {
                id: 5,
                title: 'Swaminarayan Marble Temple',
                address: 'Ring Road, Surat, Gujarat 395002',
                architect: 'Chirag Patel',
                duration: '30 Months',
                image: '/img4.png'
            },
            {
                id: 6,
                title: 'Shri Mahavir Swami Jain Derasar',
                address: 'Station Road, Udaipur, Rajasthan 313001',
                architect: 'Sunita Trivedi',
                duration: '22 Months',
                image: '/img9.jpg'
            },

        ]
    },
    {
        id: 'Luxury-Living',
        name: 'Luxury Living',
        bannerImage: '/luxuryBg.jpg',
        displayName: 'Luxury Living Projects',
        description: 'Beautiful living spaces designed for comfort and elegance',
    projects: [
  {
    id: 1,
    title: 'Luxury Villa Home Temple',
    address: '67, Marine Drive, Mumbai, Maharashtra 400020',
    architect: 'Neha Patel',
    duration: '3 Months',
    image: '/gallery10.jpg'
  },
  {
    id: 2,
    title: 'Modern Apartment Temple',
    address: '23, Golf Course Road, Gurgaon, Haryana 122002',
    architect: 'Rahul Verma',
    duration: '2 Months',
    image: '/gallery11.jpg'
  },
  {
    id: 3,
    title: 'Garden Temple Pavilion',
    address: '45, Green Valley, Pune, Maharashtra 411001',
    architect: 'Sanjay Mehta',
    duration: '4 Months',
    image: '/gallery12.jpg'
  },
  {
    id: 4,
    title: 'Contemporary Marble Pooja Room',
    address: '12, C Scheme, Jaipur, Rajasthan 302001',
    architect: 'Priya Sharma',
    duration: '2.5 Months',
    image: '/gallery13.jpg'
  },
  {
    id: 5,
    title: 'Grand Bungalow Temple Design',
    address: '88, Banjara Hills, Hyderabad, Telangana 500034',
    architect: 'Vivek Rao',
    duration: '3.5 Months',
    image: '/gallery14.jpg'
  },
  {
    id: 6,
    title: 'Traditional Home Mandir',
    address: '14, Ashok Nagar, Chennai, Tamil Nadu 600083',
    architect: 'Meera Iyer',
    duration: '2 Months',
    image: '/gallery15.jpg'
  },
  {
    id: 7,
    title: 'Rooftop Temple Installation',
    address: '9, Alkapuri, Vadodara, Gujarat 390007',
    architect: 'Harshad Desai',
    duration: '3 Months',
    image: '/gallery16.jpg'
  },
  {
    id: 8,
    title: 'Luxury Farmhouse Mandir',
    address: '51, Vasant Vihar, New Delhi 110057',
    architect: 'Sneha Kapoor',
    duration: '4.5 Months',
    image: '/gallery17.jpg'
  },
  {
    id: 9,
    title: 'Temple with Marble Inlay Work',
    address: '33, Civil Lines, Kanpur, Uttar Pradesh 208001',
    architect: 'Rohit Sinha',
    duration: '3 Months',
    image: '/gallery18.jpg'
  },
  {
    id: 10,
    title: 'Minimalist Marble Temple',
    address: '76, Salt Lake, Kolkata, West Bengal 700091',
    architect: 'Isha Banerjee',
    duration: '2.5 Months',
    image: '/gallery19.jpg'
  },
  {
    id: 11,
    title: 'Grand Heritage Temple',
    address: '21, Fatehpura, Udaipur, Rajasthan 313001',
    architect: 'Kunal Joshi',
    duration: '5 Months',
    image: '/gallery20.jpg'
  },
  {
    id: 12,
    title: 'Classic White Marble Mandir',
    address: '18, Sector 17, Chandigarh 160017',
    architect: 'Nisha Gupta',
    duration: '3 Months',
    image: '/gallery21.jpg'
  },
  {
    id: 13,
    title: 'Courtyard Marble Temple',
    address: '102, BTM Layout, Bengaluru, Karnataka 560076',
    architect: 'Amit Nair',
    duration: '3.5 Months',
    image: '/gallery22.jpg'
  },
  {
    id: 14,
    title: 'Royal Style Temple Room',
    address: '5, Lalbagh Road, Lucknow, Uttar Pradesh 226001',
    architect: 'Pooja Singh',
    duration: '4 Months',
    image: '/gallery23.jpg'
  },
  {
    id: 15,
    title: 'Custom Marble Sculpture Temple',
    address: '29, Race Course Road, Coimbatore, Tamil Nadu 641018',
    architect: 'Manoj Kumar',
    duration: '2.5 Months',
    image: '/gallery24.jpg'
  },
  {
    id: 16,
    title: 'Elegant Apartment Mandir',
    address: '56, Koregaon Park, Pune, Maharashtra 411001',
    architect: 'Shruti Deshmukh',
    duration: '3 Months',
    image: '/gallery25.jpg'
  },
  {
    id: 17,
    title: 'Marble Wall Art Temple',
    address: '40, Navrangpura, Ahmedabad, Gujarat 380009',
    architect: 'Jay Mehta',
    duration: '2 Months',
    image: '/gallery26.jpg'
  },
  {
    id: 18,
    title: 'Compact Home Pooja Room',
    address: '22, Indiranagar, Bengaluru, Karnataka 560038',
    architect: 'Anita Reddy',
    duration: '1.5 Months',
    image: '/gallery27.jpg'
  },
  {
    id: 19,
    title: 'Designer Duplex Temple',
    address: '7, Jubilee Hills, Hyderabad, Telangana 500033',
    architect: 'Ritesh Patel',
    duration: '3.5 Months',
    image: '/gallery28.jpg'
  },
  {
    id: 20,
    title: 'Temple with Lotus Ceiling Design',
    address: '16, Mansarovar, Jaipur, Rajasthan 302020',
    architect: 'Divya Agarwal',
    duration: '4 Months',
    image: '/gallery29.jpg'
  }
]

    },
    {
        id: 'Overseas',
        name: 'Overseas',
        bannerImage: '/home-decor.jpg',
        displayName: 'Overseas Projects',
        description: 'Global architectural excellence across continents',
      projects: [
  {
    id: 1,
    title: 'Shree Krishna Temple',
    address: 'Thamel, Kathmandu, Nepal',
    architect: 'Nepal Heritage Designs',
    duration: '5 Months',
    image: '/gallery21.jpg'
  },
  {
    id: 2,
    title: 'Peaceful Meditation Mandir',
    address: 'Colombo 07, Sri Lanka',
    architect: 'Island Architects Studio',
    duration: '4 Months',
    image: '/gallery22.jpg'
  },
  {
    id: 3,
    title: 'Lotus Temple Pavilion',
    address: 'Muscat Hills, Muscat, Oman',
    architect: 'Gulf Stoneworks',
    duration: '6 Months',
    image: '/gallery23.jpg'
  },
  {
    id: 4,
    title: 'Harmony Marble Shrine',
    address: 'Doha Corniche, Doha, Qatar',
    architect: 'Qatar Design Collective',
    duration: '5 Months',
    image: '/gallery24.jpg'
  },
  {
    id: 5,
    title: 'Divine Heritage Temple',
    address: 'Downtown, Dubai, UAE',
    architect: 'Emirates Art & Design',
    duration: '7 Months',
    image: '/gallery25.jpg'
  },
  {
    id: 6,
    title: 'Marble Meditation Hall',
    address: 'Kuwait City, Kuwait',
    architect: 'Arabian Craft Studios',
    duration: '6 Months',
    image: '/gallery26.jpg'
  },
  {
    id: 7,
    title: 'Global Peace Center',
    address: 'New York City, USA',
    architect: 'Harmony Architecture Group',
    duration: '8 Months',
    image: '/gallery27.jpg'
  },
  {
    id: 8,
    title: 'Lotus Spiritual Hall',
    address: 'Los Angeles, California, USA',
    architect: 'Pacific Design Works',
    duration: '7 Months',
    image: '/gallery28.jpg'
  },
  {
    id: 9,
    title: 'Divine Retreat Temple',
    address: 'Toronto, Ontario, Canada',
    architect: 'Northern Stone Arts',
    duration: '6 Months',
    image: '/gallery29.jpg'
  },
  {
    id: 10,
    title: 'Temple of Serenity',
    address: 'Zurich, Switzerland',
    architect: 'European Marble Creations',
    duration: '7 Months',
    image: '/gallery30.jpg'
  },
  {
    id: 11,
    title: 'Spiritual Center of Harmony',
    address: 'Paris, France',
    architect: 'Classic Design Atelier',
    duration: '6 Months',
    image: '/gallery31.jpg'
  },
  {
    id: 12,
    title: 'Divine Energy Temple',
    address: 'Berlin, Germany',
    architect: 'Continental Design Studio',
    duration: '5 Months',
    image: '/gallery32.jpg'
  },
  {
    id: 13,
    title: 'Sacred Lotus Pavilion',
    address: 'London, UK',
    architect: 'Global Architects Inc.',
    duration: '4 Months',
    image: '/gallery33.jpg'
  }
]

    },
    {
        id: 'Sculptures',
        name: 'Sculptures',
        bannerImage: '/HDimg2.jpg',
        displayName: 'SCULPTURES PROJECTS',
        description: 'Carving stories into stone for generations',
        projects: [
            {
                id: 1,
                title: 'Royal Paidalstain Sculpture',
                address: 'Amber Fort Road, Jaipur, Rajasthan',
                sculptor: 'Rajendra Sharma',
                duration: '6 Months',
                image: '/img2.jpg'
            },
            {
                id: 2,
                title: 'Marble Ganesha Statue',
                address: 'Civil Lines, Kota, Rajasthan',
                sculptor: 'Manoj Prajapati',
                duration: '8 Months',
                image: '/Murti2.jpg'
            },
            {
                id: 3,
                title: 'Krishna Sculpture',
                address: 'Connaught Place, New Delhi',
                sculptor: 'Aarav Mehta',
                duration: '5 Months',
                image: '/murti1.jpg'
            },
            {
                id: 4,
                title: 'Sacred Ganesha Idol',
                address: 'Worli Seaface, Mumbai, Maharashtra',
                sculptor: 'Prakash Deshmukh',
                duration: '7 Months',
                image: '/project3.jpg'
            },
        ]
    },
]

const cities = [
    "Jaipur", "Ahmedabad", "Delhi", "Bangalore", "Mumbai",
    "Chennai", "Kolkata", "Hyderabad", "Pune", "Surat"
]

const Projects = () => {
    const router = useRouter()
    const [currentCategory, setCurrentCategory] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCity, setSelectedCity] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {
        const slug = router.query.slug
        const category = projectCategories.find(cat => cat.id === slug)

        if (category) {
            setCurrentCategory(category)
            setFilteredProjects(category.projects)
        }
    }, [router.query.slug])

    useEffect(() => {
        if (!currentCategory) return

        let filtered = currentCategory.projects

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.architect.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedCity && selectedCity !== 'all') {
            filtered = filtered.filter(project =>
                project.address.toLowerCase().includes(selectedCity.toLowerCase())
            )
        }

        setFilteredProjects(filtered)
    }, [searchTerm, selectedCity, currentCategory])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    const bannerVariants = {
        initial: { scale: 1.1, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    if (!currentCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-theme"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Animated Banner Section */}
            <motion.section
                className="relative h-[85vh] w-full overflow-hidden"
                initial="initial"
                animate="animate"
            >
                <motion.div
                    variants={bannerVariants}
                    style={{ backgroundImage: `url(${currentCategory.bannerImage})` }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end pb-20">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-white max-w-3xl"
                        >
                            <h1 className="mt-6 font-extralight tracking-tight text-3xl sm:text-5xl md:text-6xl animate-slide-up">
                                <span className="">
                                    {currentCategory.displayName}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl font-extralight text-gray-200 mb-8 leading-relaxed">
                                {currentCategory.description}
                            </p>
                            <div className="flex items-center space-x-6 text-sm">
                                <span className="bg-theme text-black px-4 py-2 rounded-full font-semibold">
                                    {filteredProjects.length} Divine Creations
                                </span>
                                <span className="text-theme">•</span>
                                <span className="text-gray-300">Crafted with Devotion</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white text-sm mb-2">Explore Projects</span>
                        <div className="w-6 h-10 border-2 border-theme rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-theme rounded-full mt-2" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Projects Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    {/* Search and Filter */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* City Selector */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Filter by City
                                    </label>
                                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="All Cities" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Cities</SelectLabel>
                                                <SelectItem value="all">All Cities</SelectItem>
                                                {cities.map(city => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Search Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Search Projects
                                    </label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Search by project name or architect..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="flex-1"
                                        />
                                        <Button
                                            onClick={() => {
                                                setSearchTerm('')
                                                setSelectedCity('all')
                                            }}
                                            variant="outline"
                                            className="whitespace-nowrap"
                                        >
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-8"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <motion.h2
                                variants={itemVariants}
                                className="mt-6  tracking-tight text-3xl sm:text-5xl md:text-6xl animate-slide-up"
                            >
                                <span className="bg-gradient-to-r from-theme to-[#ffb380] bg-clip-text text-transparent">
                                    Featured Projects
                                </span>
                            </motion.h2>
                            <motion.span
                                variants={itemVariants}
                                className="text-gray-600"
                            >
                                Showing {filteredProjects.length} of {currentCategory.projects.length} projects
                            </motion.span>
                        </div>

                        {filteredProjects.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-500">
                                    Try adjusting your search criteria or filters
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                <AnimatePresence>
                                    {filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            variants={itemVariants}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                                                {/* Project Image */}
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Content Overlay */}
                                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="space-y-3">
                                                        <h3 className="text-xl font-bold leading-tight">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-200 leading-relaxed">
                                                            {project.address}
                                                        </p>
                                                        <Separator className="bg-white/30" />
                                                        <div className="flex justify-between text-sm">
                                                            <span>Architect: {project.architect}</span>
                                                            <span>{project.duration}</span>
                                                        </div>
                                                    </div>

                                                    {/* View More */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileHover={{ opacity: 1, y: 0 }}
                                                        className="mt-4"
                                                    >
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            className="bg-white text-black hover:bg-gray-100"
                                                        >
                                                            View Details
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Projects;
