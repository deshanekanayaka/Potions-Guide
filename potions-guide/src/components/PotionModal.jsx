import React from "react";

const PotionModal = ({ potion, onClose }) => {
    if (!potion) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-slate-800 rounded-xl shadow-xl p-8 max-w-2xl w-full relative text-gray-200">
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Potion image */}
                <div className="flex flex-col items-center mb-6">
                    {potion.image ? (
                        <img
                            src={potion.image}
                            alt={potion.name}
                            className="w-[200px] h-[200px] object-contain rounded-lg"
                        />
                    ) : (
                        <div className="flex flex-col items-center text-gray-400">
                            <span className="text-5xl mb-2">⚗️</span>
                            <p className="text-sm">No image available</p>
                            <p className="italic text-xs mt-1">({potion.name})</p>
                        </div>
                    )}
                </div>

                {/* Potion name */}
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    {potion.name}
                </h2>

                {/* Potion details */}
                <div className="space-y-3 text-base">
                    {potion.slug && (
                        <p>
                            <span className="font-semibold text-purple-300">Slug:</span>{" "}
                            {potion.slug}
                        </p>
                    )}
                    {potion.characteristics && (
                        <p>
                            <span className="font-semibold text-purple-300">Characteristics:</span>{" "}
                            {potion.characteristics}
                        </p>
                    )}
                    {potion.effect && (
                        <p>
                            <span className="font-semibold text-purple-300">Effect:</span>{" "}
                            {potion.effect}
                        </p>
                    )}
                    {potion.difficulty && (
                        <p>
                            <span className="font-semibold text-purple-300">Difficulty:</span>{" "}
                            {potion.difficulty}
                        </p>
                    )}
                    {potion.ingredients && (
                        <p>
                            <span className="font-semibold text-purple-300">Ingredients:</span>{" "}
                            {potion.ingredients}
                        </p>
                    )}
                    {potion.side_effects && (
                        <p>
                            <span className="font-semibold text-purple-300">Side Effects:</span>{" "}
                            {potion.side_effects}
                        </p>
                    )}
                    {potion.time && (
                        <p>
                            <span className="font-semibold text-purple-300">Brewing Time:</span>{" "}
                            {potion.time}
                        </p>
                    )}
                    {potion.inventors && (
                        <p>
                            <span className="font-semibold text-purple-300">Inventors:</span>{" "}
                            {potion.inventors}
                        </p>
                    )}
                    {potion.manufacturers && (
                        <p>
                            <span className="font-semibold text-purple-300">Manufacturers:</span>{" "}
                            {potion.manufacturers}
                        </p>
                    )}
                </div>

                {/* Wiki link */}
                {potion.wiki && (
                    <div className="mt-8 text-center">
                        <a
                            href={potion.wiki}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-200 underline text-lg"
                        >
                            Learn more on the Harry Potter Wiki
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PotionModal;
