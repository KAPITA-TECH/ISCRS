export interface Speaker {
  id: number;
  name: string;
  country: string;
  affiliations: string;
  image: string;
  bio?: string;
  specialty?: string;
  experience?: string;
  achievements?: string[];
}



export const speakers = [
{ 
  name: "Dr. Farida Lafdjah",
  country: "France",
  affiliations: "Professor of Ophthalmology, University of Paris",
  image: "/images/fareda.png",
  bio: "Dr. Farida Lafdjah is a renowned ophthalmologist specializing in retinal surgery with over 20 years of experience in the field.",
  specialty: "Retinal Surgery",
  experience: "20+ years",
  achievements: ["International Recognition", "Research Publications", "Surgical Innovation"]},

{ name: "Dr. Osama Al Giledi",
    country: "UAE",
    affiliations: "Chief of Ophthalmology, Dubai Health Authority",
    image: "/images/Dr. Osama Al Giledi.png",
    bio: "Dr. Osama Al Giledi is a leading expert in corneal and refractive surgery, with extensive experience in advanced surgical techniques.",
    specialty: "Corneal & Refractive Surgery",
    experience: "15+ years",
    achievements: ["Chief Position", "Advanced Techniques", "Regional Leadership"]},


{name: "Dr. Nihal Shakankiry",
    country: "Egypt",
    affiliations: "Director of Retinal Services, Cairo University Hospital",
    image: "/images/Dr. Nihal Shakankiry.png",
    bio: "Dr. Nihal Shakankiry is a distinguished retinal specialist known for her innovative approaches to complex retinal disorders.",
    specialty: "Retinal Disorders",
    experience: "18+ years",
    achievements: ["Innovation Award", "Complex Cases", "Teaching Excellence"]},




]



