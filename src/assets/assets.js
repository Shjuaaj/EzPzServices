import cart from './cart.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import header_image from './header_image.png'
import cross_icon from './cross_icon.png'
import orders_icon from './orders_icon.png'
import logout_icon from './logout_icon.png'

import appliance_repair from './appliance_repair.jpeg'
import car_cleaning from './car_cleaning.jpeg'
import carpentry from './carpentry.jpeg'
import cleaning from './cleaning.jpeg'
import customize from './customize.jpeg'
import delivery from './delivery.jpeg'
import dog_walking from './dog_walking.jpeg'
import electrician from './electrician.jpeg'
import gardening from './gardening.jpeg'
import laundry from './laundry.jpeg'
import mechanic from './mechanic.jpeg'
import plumber from './plumber.jpeg'
import pool_cleaning from './pool_cleaning.jpeg'
import snow_removing from './snow_removing.jpeg'
import baby_sitting from './baby_sitting.jpg'
import private_chef from './private_chef.jpeg'

import placeholder_image_1 from './placeholder_image_1.jpg'
import placeholder_image_2 from './placeholder_image_2.jpg'
import placeholder_image_3 from './placeholder_image_3.jpg'
import placeholder_image_4 from './placeholder_image_4.jpg'
import placeholder_image_5 from './placeholder_image_5.jpg'
import placeholder_image_6 from './placeholder_image_6.jpeg'

export const assets = {
    cart,
    logo,
    search_icon,
    profile_icon,
    appliance_repair,
    car_cleaning,
    carpentry,
    cleaning,
    customize,
    delivery,
    dog_walking,
    electrician,
    gardening,
    laundry,
    mechanic,
    plumber,
    pool_cleaning,
    snow_removing,
    baby_sitting,
    header_image,
    private_chef,
    cross_icon,
    orders_icon,
    logout_icon
}

export const list_of_heroes = [
    {
        hero_name: "Alex",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Bianca",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Charlie",
        hero_image: placeholder_image_4
    },
    {
        hero_name: "David",
        hero_image: placeholder_image_6
    },
    {
        hero_name: "Evelyn",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Frank",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Grace",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Hannah",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Isaac",
        hero_image: placeholder_image_2
    },
    {
        hero_name: "Jack",
        hero_image: placeholder_image_4
    }
]

export const getHeroImage = (heroName) => {
    const hero = list_of_heroes.find(h => h.hero_name === heroName);
    return hero ? hero.hero_image : null;
};

export const services = [
    {
        service_name: "Cleaning",
        service_image: cleaning
    },
    {
        service_name: "Carpentry",
        service_image: carpentry
    },
    {
        service_name: "Plumbing",
        service_image: plumber
    },
    {
        service_name: "Baby Sitting",
        service_image: baby_sitting
    },
    {
        service_name: "Appliance Repair",
        service_image: appliance_repair
    },
    {
        service_name: "Laundry",
        service_image: laundry
    },
    {
        service_name: "Electrician",
        service_image: electrician
    },
    {
        service_name: "Mechanic",
        service_image: mechanic
    },
    {
        service_name: "Pool Cleaning",
        service_image: pool_cleaning
    },
    {
        service_name: "Private Chef",
        service_image: private_chef
    },
    {
        service_name: "Snow Removing",
        service_image: snow_removing
    },
    {
        service_name: "Gardening",
        service_image: gardening
    },
    {
        service_name: "Dog Walking",
        service_image: dog_walking
    },
    {
        service_name: "Delivery",
        service_image: delivery
    },
    {
        service_name: "Car Cleaning",
        service_image: car_cleaning
    },
    {
        service_name: "Custom Service",
        service_image: customize
    }]

export const services_list = [
    {
        service_image: cleaning,
        service_name: "Cleaning",
        service_description: "Clean my whole house",
        service_price: "10",
    }]

export const services_to_image = [
    { service_name: "Cleaning", service_image: cleaning, cost: 50, description: "", date: "", time: "" },
    { service_name: "Carpentry", service_image: carpentry, cost: 100, description: "", date: "", time: "" },
    { service_name: "Plumbing", service_image: plumber, cost: 80, description: "", date: "", time: "" },
    { service_name: "Baby Sitting", service_image: baby_sitting, cost: 15, description: "", date: "", time: "" },
    { service_name: "Appliance Repair", service_image: appliance_repair, cost: 70, description: "", date: "", time: "" },
    { service_name: "Laundry", service_image: laundry, cost: 20, description: "", date: "", time: "" },
    { service_name: "Electrician", service_image: electrician, cost: 90, description: "", date: "", time: "" },
    { service_name: "Mechanic", service_image: mechanic, cost: 120, description: "", date: "", time: "" },
    { service_name: "Pool Cleaning", service_image: pool_cleaning, cost: 60, description: "", date: "", time: "" },
    { service_name: "Private Chef", service_image: private_chef, cost: 200, description: "", date: "", time: "" },
    { service_name: "Snow Removing", service_image: snow_removing, cost: 50, description: "", date: "", time: "" },
    { service_name: "Gardening", service_image: gardening, cost: 40, description: "", date: "", time: "" },
    { service_name: "Dog Walking", service_image: dog_walking, cost: 25, description: "", date: "", time: "" },
    { service_name: "Delivery", service_image: delivery, cost: 30, description: "", date: "", time: "" },
    { service_name: "Car Cleaning", service_image: car_cleaning, cost: 45, description: "", date: "", time: "" },
    { service_name: "Custom Service", service_image: customize, cost: 150, description: "", date: "", time: "" }
];

export const getServiceImage = (serviceName) => {
    const service = services_to_image.find(s => s.service_name === serviceName);
    return service ? service.service_image : null;
};

export const getServiceCost = (serviceName) => {
    const service = services_to_image.find(service => service.service_name === serviceName);
    return service ? service.cost : null;
};