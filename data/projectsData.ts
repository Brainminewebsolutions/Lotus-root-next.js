export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  city: string;
  sqft?: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "New Parliament Building",
    description: "LOD 300 Architectural, Structural, MEPF coordinated models",
    image: "/projects/001.webp",
    city: "Delhi",
    sqft: "800,000",
    status: "Completed"
  },
  {
    id: 2,
    title: "Morgan Stanley's Project Parivartan",
    description: "LOD 300 Architectural, Structural, MEPF coordinated models",
    image: "/projects/002.webp",
    city: "Mumbai",
    sqft: "1,100,000",
    status: "Completed"
  },
  {
    id: 3,
    title: "Jeddah Central Development",
    description: "LOD 300 Landscape models",
    image: "/projects/003.webp",
    city: "Saudi Arabia",
    sqft: "5 km²",
    status: "Completed"
  },
  {
    id: 4,
    title: "Microsoft Data Center (HYD-11)",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/004.webp",
    city: "Hyderabad",
    sqft: "350,000",
    status: "Completed"
  },
  {
    id: 5,
    title: "Adani Data Center",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/005.webp",
    city: "Hyderabad",
    status: "On-Going"
  },
  {
    id: 6,
    title: "Tata Memorial Hospital",
    description: "LOD 300 MEPF models",
    image: "/projects/006.webp",
    city: "Mumbai",
    sqft: "1,100,000",
    status: "Completed"
  },
  {
    id: 7,
    title: "CG Semi Semiconductor Assembly Plant",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/007.webp",
    city: "Sanand",
    status: "On-Going"
  },
  {
    id: 8,
    title: "IIT Kanpur Medical College",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/008.webp",
    city: "Kanpur",
    sqft: "850,000",
    status: "On-Going"
  },
  {
    id: 9,
    title: "AIIMS Madurai",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/009.webp",
    city: "Madurai",
    status: "On-Going"
  },
  {
    id: 10,
    title: "4GW PV module Manufacturing unit",
    description: "Construction progress monitoring by Drones and 360 cameras",
    image: "/projects/010.webp",
    city: "Chennai",
    status: "Completed"
  },
  {
    id: 11,
    title: "Datwyler Pharma",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/011.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 12,
    title: "A Raymond",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/012.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 13,
    title: "Digital Edge Data Center",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/013.webp",
    city: "Mumbai",
    status: "On-Going"
  },
  {
    id: 14,
    title: "Nxtra Data Center",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/014.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 15,
    title: "Nxtra Data Center",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/015.webp",
    city: "Mumbai",
    status: "Completed"
  },
  {
    id: 16,
    title: "Birla Housing",
    description: "LOD 300 Architectural models",
    image: "/projects/016.webp",
    city: "Gurgaon",
    status: "On-Going"
  },
  {
    id: 18,
    title: "National Law University",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/018.webp",
    city: "Nagpur",
    status: "Completed"
  },
  {
    id: 20,
    title: "Kaynes Semiconductor Facility",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/020.webp",
    city: "Sanand",
    status: "On-Going"
  },
  {
    id: 21,
    title: "Micron Semiconductor Facility",
    description: "LOD 350 Electrical models",
    image: "/projects/021.webp",
    city: "Sanand",
    status: "On-Going"
  },
  {
    id: 22,
    title: "Kohinoor World Towers",
    description: "LOD 350 Electrical models",
    image: "/projects/022.webp",
    city: "Pune",
    sqft: "1,100,000",
    status: "Completed"
  },
  {
    id: 23,
    title: "VCV Tower",
    description: "LOD 500 Structural models with rebar",
    image: "/projects/023.webp",
    city: "Sanand",
    status: "Completed"
  },
  {
    id: 24,
    title: "Palm Beach Towers",
    description: "LOD 500 MEPF models",
    image: "/projects/024.webp",
    city: "Dubai",
    status: "Completed"
  },
  {
    id: 25,
    title: "Inorbit Mall",
    description: "LOD 350 Architectural models",
    image: "/projects/025.webp",
    city: "Hyderabad",
    status: "On-Going"
  },
  {
    id: 26,
    title: "Citywalk Phase 3",
    description: "LOD 350 Architectural models",
    image: "/projects/026.webp",
    city: "Dubai",
    status: "Completed"
  },
  {
    id: 27,
    title: "Microsoft Data Center (HYD-01)",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/027.webp",
    city: "Hyderabad",
    status: "Completed"
  },
  {
    id: 28,
    title: "JCB design Center expansion",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/028.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 29,
    title: "Diriyah Gate District Authority",
    description: "LOD 350 Architectural models",
    image: "/projects/029.webp",
    city: "Saudi Arabia",
    status: "Completed"
  },
  {
    id: 30,
    title: "New R&D Center for Philips",
    description: "LOD 500 Architectural, Structural, MEPF coordinated models",
    image: "/projects/030.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 31,
    title: "L&T Convention Center Chennai",
    description: "LOD 350 Architectural models",
    image: "/projects/031.webp",
    city: "Chennai",
    status: "Completed"
  },
  {
    id: 32,
    title: "Adani Business Lounge, Guwahati Airport",
    description: "LOD 350 Architectural models",
    image: "/projects/032.webp",
    city: "Guwahati",
    status: "Completed"
  },
  {
    id: 33,
    title: "Pune Metro",
    description: "LOD 300 Electrical models",
    image: "/projects/033.webp",
    city: "Pune",
    sqft: "20 stations",
    status: "Completed"
  },
  {
    id: 34,
    title: "Life Republic",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/034.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 35,
    title: "Presidentia Residential Project",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/035.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 36,
    title: "Legend Resorts",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/036.webp",
    city: "Srinagar",
    status: "Completed"
  },
  {
    id: 37,
    title: "AIIMS Hyderabad",
    description: "LOD 300 MEPF coordinated models",
    image: "/projects/037.webp",
    city: "Hyderabad",
    status: "Completed"
  },
  {
    id: 38,
    title: "Residential Complex by Godrej Properties",
    description: "BIM Management",
    image: "/projects/038.webp",
    city: "Bangalore",
    status: "On-Going"
  },
  {
    id: 39,
    title: "Residential Complex by Godrej Properties",
    description: "BIM Management",
    image: "/projects/039.webp",
    city: "Noida",
    status: "Completed"
  },
  {
    id: 40,
    title: "Dassault Systems Office",
    description: "LOD 350 Architectural, Structural, MEPF coordinated models",
    image: "/projects/040.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 41,
    title: "Ashokban Residential Project",
    description: "IGBC Silver Certification for the project",
    image: "/projects/041.webp",
    city: "Pune",
    status: "Completed"
  },
  {
    id: 45,
    title: "Dreamsmiths Residence",
    description: "LOD 350 Architectural, MEPF coordinated models",
    image: "/projects/045.webp",
    city: "Panaji",
    status: "Completed"
  },
  {
    id: 47,
    title: "Mann + Hummel Industrial facility",
    description: "MEP Design Audits for the facility",
    image: "/projects/047.webp",
    city: "Bawal",
    status: "On-Going"
  },
  {
    id: 49,
    title: "Facebook Building X",
    description: "LOD 500 Architectural and Mechanical models",
    image: "/projects/049.webp",
    city: "California",
    sqft: "650,000",
    status: "Completed"
  },
  {
    id: 50,
    title: "Digital Twin for Bangalore Pumping Station",
    description: "Creation of models and Integration of Digital Twin",
    image: "/projects/050.webp",
    city: "Bangalore",
    status: "Completed"
  },
  {
    id: 51,
    title: "Amazon Data Center",
    description: "Creation of LOD 350 Dry wall models for the data center",
    image: "/projects/051.webp",
    city: "USA",
    status: "Completed"
  },
  {
    id: 52,
    title: "BHP Jansen",
    description: "Energy Simulation for the buildings",
    image: "/projects/052.webp",
    city: "Canada",
    status: "On-Going"
  },
  {
    id: 53,
    title: "DEWA Headquarters",
    description: "Thermal bridging analysis for the project",
    image: "/projects/053.webp",
    city: "Dubai",
    sqft: "556,000",
    status: "Completed"
  },
  {
    id: 54,
    title: "Melbourne Polytechnic",
    description: "Project details not specified",
    image: "/projects/054.webp",
    city: "Melbourne",
    status: "Completed"
  },
  {
    id: 55,
    title: "RAK Hospital",
    description: "LOD 350 Architectural models",
    image: "/projects/055.webp",
    city: "Ras Al Khaimah",
    status: "Completed"
  },
  {
    id: 57,
    title: "Mukaab",
    description: "LOD 300 Landscape models",
    image: "/projects/057.webp",
    city: "Saudi Arabia",
    status: "Completed"
  },
  {
    id: 58,
    title: "Barry Farm",
    description: "LOD 350 Architectural, Structural and MEPF models",
    image: "/projects/058.webp",
    city: "USA",
    status: "Completed"
  },
  {
    id: 59,
    title: "Clara",
    description: "LOD 350 Architectural, Structural and MEPF models",
    image: "/projects/059.webp",
    city: "USA",
    status: "Completed"
  },
  {
    id: 63,
    title: "Cosmic Gate Neom Trojena",
    description: "LOD 300 Landscape models",
    image: "/projects/063.webp",
    city: "Saudi Arabia",
    status: "Completed"
  },
  {
    id: 64,
    title: "Mann + Hummel Industrial facility",
    description: "MEPF Design for the Project",
    image: "/projects/064.webp",
    city: "Tumkur",
    status: "Completed"
  },
  {
    id: 65,
    title: "Falcon",
    description: "LOD 350 Architectural, Structural and MEPF models",
    image: "/projects/065.webp",
    city: "Pune",
    status: "Completed"
  }
];
