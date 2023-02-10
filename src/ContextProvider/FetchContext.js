import React, { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

export const DataContext = createContext()

const FetchContext = ({ children }) => {
    // allProducts Section
    const { data: allProducts = [], isLoading: allProductsLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/allProducts');
            const data = await res.json();
            return data
        }
    })

    // Laptops Section
    const { data: laptops = [], isLoading: laptopsLoading } = useQuery({
        queryKey: ['laptop'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/laptop');
            const data = await res.json();
            return data
        }
    })

    // Laptop Battery Section
    const { data: laptopsBattery = [], isLoading: laptopsBatteryLoading } = useQuery({
        queryKey: ['laptopsBattery'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/laptopsBattery');
            const data = await res.json();
            return data
        }
    })

    // Televisions Section
    const { data: televisions = [], isLoading: televisionsLoading } = useQuery({
        queryKey: ['televisions'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/televisions');
            const data = await res.json();
            return data
        }
    })

    // Phones Section
    const { data: phones = [], isLoading: phonesLoading } = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/phones');
            const data = await res.json();
            return data
        }
    })

    // Tablets Section
    const { data: tablets = [], isLoading: tabletsLoading } = useQuery({
        queryKey: ['tablets'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/tablets');
            const data = await res.json();
            return data
        }
    })

    // SmartWatches Section
    const { data: smartWatches = [], isLoading: smartWatchesLoading } = useQuery({
        queryKey: ['smartWatches'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/smartWatches');
            const data = await res.json();
            return data
        }
    })

    // Graphics Card Section
    const { data: gpus = [], isLoading: gpusLoading } = useQuery({
        queryKey: ['gpus'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/gpus');
            const data = await res.json();
            return data
        }
    })

    // Headphones Section
    const { data: headphones = [], isLoading: headphonesLoading } = useQuery({
        queryKey: ['headphones'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/headphones');
            const data = await res.json();
            return data
        }
    })

    // Speakers Section
    const { data: speakers = [], isLoading: speakersLoading } = useQuery({
        queryKey: ['speakers'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/speakers');
            const data = await res.json();
            return data
        }
    })

    // Ear Phones Section
    const { data: earPhones = [], isLoading: earPhonesLoading } = useQuery({
        queryKey: ['earPhones'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/earPhones');
            const data = await res.json();
            return data
        }
    })

    // Controllers Section
    const { data: controllers = [], isLoading: controllersLoading } = useQuery({
        queryKey: ['controllers'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/controllers');
            const data = await res.json();
            return data
        }
    })

    // Consoles Section
    const { data: consoles = [], isLoading: consolesLoading } = useQuery({
        queryKey: ['consoles'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/consoles');
            const data = await res.json();
            return data
        }
    })

    // Drones Section
    const { data: drones = [], isLoading: dronesLoading } = useQuery({
        queryKey: ['drones'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/drones');
            const data = await res.json();
            return data
        }
    })

    // Decks Section
    const { data: decks = [], isLoading: decksLoading } = useQuery({
        queryKey: ['decks'],
        queryFn: async () => {
            const res = await fetch('https://jizziby-server.vercel.app/decks');
            const data = await res.json();
            return data
        }
    })

    // TopSelling Section
    const { data: topSelling = [], isLoading: topSellingLoading } = useQuery({
        queryKey: ['topSelling'],
        queryFn: async () => {
            const res = await fetch('topSelling.json');
            const data = await res.json();
            return data
        }
    })

    const value = {
        allProducts,
        allProductsLoading,
        laptops,
        laptopsLoading,
        laptopsBattery,
        laptopsBatteryLoading,
        televisions,
        televisionsLoading,
        phones,
        phonesLoading,
        tablets,
        tabletsLoading,
        smartWatches,
        smartWatchesLoading,
        gpus,
        gpusLoading,
        headphones,
        headphonesLoading,
        speakers,
        speakersLoading,
        earPhones,
        earPhonesLoading,
        controllers,
        controllersLoading,
        consoles,
        consolesLoading,
        drones,
        dronesLoading,
        decks,
        decksLoading,
        topSelling,
        topSellingLoading,
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export default FetchContext;