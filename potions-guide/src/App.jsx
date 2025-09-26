import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import PotionCard from "./components/PotionsCard.jsx";
import PotionModal from "./components/PotionModal.jsx";
import { useDebounce } from 'react-use';

const API_BASE_URL = "https://api.potterdb.com";
const API_OPTIONS = {
    method: 'GET',
    headers: { accept: 'application/json' },
};

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [potionsList, setPotionsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPotion, setSelectedPotion] = useState(null);

    // Debounce logic
    useDebounce(() => {
        setDebouncedSearchTerm(searchTerm);
    }, 500, [searchTerm]);

    const fetchPotions = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const endpoint = query
                ? `${API_BASE_URL}/v1/potions?filter[name_cont]=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/v1/potions`;

            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) throw new Error('Failed to fetch potions');

            const data = await response.json();

            if (data.data?.length === 0) {
                setErrorMessage("No potions found.");
                setPotionsList([]);
                return;
            }

            setPotionsList(data.data || []);
        } catch (error) {
            console.error("Error fetching potions:", error);
            setErrorMessage("Error fetching potions. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPotions(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return (
        <main className="pattern">
            <div className="wrapper">
                <header>
                    <h1>
                        Your guide to every <span className="text-gradient">Potion</span> at Hogwarts
                    </h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className="all-potions">
                    <h2 className={"mt-2"}>All Potions</h2>

                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {potionsList.map((potion) => (
                                <PotionCard
                                    key={potion.id}
                                    potion={potion.attributes}
                                    onClick={() => setSelectedPotion(potion.attributes)}
                                />
                            ))}
                        </ul>


                    )}
                </section>

                {/* Modal with outside click support */}
                {selectedPotion && (
                    <PotionModal
                        potion={selectedPotion}
                        onClose={() => setSelectedPotion(null)}
                    />
                )}
            </div>
        </main>
    );
}

export default App;
