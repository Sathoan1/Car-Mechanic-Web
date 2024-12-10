import header_img from './header_img.png'
import about_img from './about_img.png'
import arrow_icon from './arrow_icon.svg'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import logo from './default.svg'
import profile from './profile_pic.png'
import engine from './specialty_1.png'
import tire from './specialty_3.png'
import oil from './specialty_4.png'
import brake from './spaciality_5.png'
import spare from './specialty_6.png'
import engr1 from './engr1.png'
import engr2 from './engr2.png'
import engr3 from './engr3.png'
import engr4 from './engr4.png'
import engr5 from './engr5.png'
import engr6 from './engr6.png'
import engr7 from './engr11-removebg-preview.png'
import engr8 from './engr8.png'
import engr9 from './engr9.png'
import s_eng4 from './s_engr4.png'
import s_eng4b from './s_engr4(B).png'
import s_eng4c from './s_engr4(C).png'
import serv_e1 from './serv_img8.png'
import serv_e2 from './serv_img4.png'
import serv_e3 from './serv_img9.png'
import servimg4 from './serv_img8.png'
import servimg5 from './serv_img6.png'
import servimg6 from './serv_img15.png'
import spare1 from './spare_img1.png'

export const assets = {
    header_img,
    about_img,
    arrow_icon,
    cross_icon,
    dropdown_icon,
    menu_icon,
    logo,
    profile
}

export const specialData = [
    {
        specialty: 'Engine Diagnostics',
        image: engine
    },
    {
        specialty: 'Tire Services',
        image: tire
    },
    {
        specialty: 'Lubrication Services',
        image: oil
    },
    {
        specialty: 'Brake Inspection',
        image: brake
    },
    {
        specialty: 'Spare Parts Replacements',
        image: spare
    },
]

export const engineers = [
    {
        _id: 'engr1',
        name: 'Engr. James Fayode',
        image: engr1,
        degree: 'B.Eng',
        experience: '5 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr2',
        name: 'Engr. Chima Falaka',
        image: engr2,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr3',
        name: 'Engr. Samuel Adeyemi',
        image: engr3,
        degree: 'B.Eng',
        experience: '4 Years',
        about: 'Samuel specializes in advanced diagnostics and electrical system repairs, bringing over 9 years of experience to the team. Using state-of-the-art tools, he quickly identifies faults and offers effective solutions. Samuel’s expertise ensures all vehicles’ electrical components, from wiring to sensors, function flawlessly.',
        fees: 50,
    },
    {
        _id: 'engr4',
        name: 'Engr. Emily Larson',
        image: engr4,
        degree: 'B.Eng',
        experience: '6 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr5',
        name: 'Engr. Richard James',
        image: engr5,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr6',
        name: 'Engr. Richard James',
        image: engr6,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr7',
        name: 'Engr. Richard James',
        image: engr7,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr8',
        name: 'Engr. Richard James',
        image: engr3,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr9',
        name: 'Engr. Richard James',
        image: engr9,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
    {
        _id: 'engr10',
        name: 'Engr. Richard James',
        image: engr8,
        degree: 'B.Eng',
        experience: '4 Years',
        about : 'Engr. James has over 5 years of experience in engine diagnostics and repair, with expertise in identifying and resolving complex engine issues efficiently. He holds certifications in advanced automotive diagnostics and has worked on a wide range of vehicles, from sedans to heavy-duty trucks.',
        fees: 50,
    },
]

export const services = [
    {
        _id: 'serv1',
        name: 'Engr. Jane Doe',
        image: [s_eng4, s_eng4b, s_eng4c],
        speciality: 'Tire Services and Alignment',
        experience: '5 Years',
        about: 'Jane is an expert in tire replacements, balancing, and wheel alignment, with over 8 years of experience in ensuring vehicles achieve optimal road safety and performance. She has a keen eye for identifying wear and tear and provides professional advice on maintaining tire health. Jane’s precision and dedication ensure that every customer leaves with a smoother, safer ride.',
        fees: 50
    },
    {
        _id: 'serv2',
        name: 'Engr. Emeka Okoro',
        image: [serv_e1, engr8],
        speciality: 'Engine Diagnostics and Repairs',
        experience: '5 Years',
        about: 'Emeka has 12 years of experience in diagnosing and repairing engine issues, ranging from minor faults to major overhauls. Certified in advanced engine technologies, he is dedicated to ensuring each engine operates at peak efficiency. Emeka’s expertise and transparency build trust with customers, tackling one of the biggest challenges in the industry.',
    },
    {
        _id: 'serv3',
        name: 'Engr. Ahmed Yusuf',
        image: serv_e2,
        speciality: 'Oil Changes and Lubrication Services',
        experience: '5 Years',
        about: 'Ahmed specializes in oil changes and vehicle lubrication, ensuring engines run smoothly and efficiently. With 7 years of experience in the field, he’s skilled at selecting high-quality engine oils and preventing common issues caused by counterfeit products. His commitment to using only certified lubricants helps customers maintain their vehicles longevity and performance.',
        fees: 50
    },
    {
        _id: 'serv4',
        name: 'Engr. Samuel Adeyemi',
        image: serv_e3,
        speciality: 'Vehicle Diagnostics and Electrical Systems',
        experience: '5 Years',
        fees: 50
    },
    {
        _id: 'serv5',
        speciality: 'Oil Changes and Lubrication Services',
        image: servimg4
    },
    {
        _id: 'serv6',
        speciality: 'Brake Inspections',
        image: servimg5
    },
    {
        _id: 'serv7',
        speciality: 'Tire Services and Alignment',
        image: servimg6
    },
    {
        _id: 'serv8',
        speciality: 'Spare Parts Replacement',
        image: spare1
    }
]