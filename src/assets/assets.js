import logo from './logo.png';
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';
import header_img from './header_img.webp';
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg';
import project_img_2 from './project_img_2.jpg';    
import project_img_3 from './project_img_3.jpg';
import project_img_4 from './project_img_4.jpg';    
import project_img_5 from './project_img_5.webp';
import project_img_6 from './project_img_6.jpg';
import project_img_7 from './project_img_7.webp';
import profile_img_1 from './profile_img_1.jpg';
import profile_img_2 from './profile_img_2.jpg';
import profile_img_3 from './profile_img_3.avif';


export const assets = {
    logo,
    cross_icon,
    menu_icon,
    star_icon,
    left_arrow,
    right_arrow,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    project_img_5,
    project_img_6,
    project_img_7,
    profile_img_1,
    profile_img_2,
    profile_img_3,
}

export  const projectsData = [
    {
        title: "Luxury Villa",
        price: "R20 000 000",
        location: "Sandton, Johannesburg",
        image: project_img_6
    },
    {
        title: "Modern Apartment",
        price: "R25 500 000",
        location: "Cape Town City Centre",
        image: project_img_2
    },
    {
        title: "Beachfront House",
        price: "R15 000 000",
        location: "Durban, KwaZulu-Natal",
        image: project_img_3
    },
    {
        title: "Contemporary Loft",
        price: "R18 000 000",
        location: "Johannesburg, Maboneng",
        image: project_img_4
    },
    {
        title: "Suburban Family Home",
        price: "R32 500 000",
        location: "Pretoria, Gauteng",
        image: project_img_7
    },
    {
        title: "Penthouse Suite",
        price: "R12 000 000",
        location: "Cape Town, Waterfront",
        image: project_img_1
    },
    
]

export const TestimonialsData = [
    {
        name : "Eva Baloyi",
        title: "CEO, Example Corp",
        image: profile_img_1,
        alt: "Profile Picture",
        rating: 5,
        text : "The service was exceptional and the team was very professional. Highly recommend!",
    },
    
    {
        name : "Doris Ndhlovu",
        title: "Marketing Director, Another Co",
        image: profile_img_2,
        alt: "Profile Picture",
        rating: 4,
        text : "Great experience! The team was attentive and delivered on time.",
    },
    {
        name : "John Louw",
        title: "Product Manager, Tech Solutions",
        image: profile_img_3,
        alt: "Profile Picture",
        rating: 5,
        text : "Absolutely loved working with them. They exceeded our expectations!",
    }
]