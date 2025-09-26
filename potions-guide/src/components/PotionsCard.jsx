import React, { useState } from "react";

const PotionCard = ({ potion, onClick }) => {
    const { name, characteristics, effect, image, ingredients } = potion;
    const [imgError, setImgError] = useState(false);

    return (
        <div
            onClick={onClick}
            className="cursor-pointer bg-slate-800 rounded-xl shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-1
                       w-full max-w-sm flex flex-col items-center"
        >
            {/* Potion image / placeholder */}
            <div className="w-full aspect-square flex items-center justify-center rounded-lg overflow-hidden bg-slate-900">
                {!imgError && image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 text-center">
                        <span className="text-4xl sm:text-5xl mb-2">⚗️</span>
                        <p className="text-xs sm:text-sm">No image available</p>
                        <p className="italic text-xs mt-1">({name})</p>
                    </div>
                )}
            </div>

            {/* Potion details */}
            <div className="mt-4 w-full text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    {name}
                </h3>

                <div className="space-y-1 text-sm sm:text-base md:text-lg text-gray-300">
                    <p>
                        <span className="font-semibold text-purple-300">Effect:</span>{" "}
                        {effect || "Unknown"}
                    </p>
                    <p>
                        <span className="font-semibold text-purple-300">Characteristics:</span>{" "}
                        {characteristics || "Unknown"}
                    </p>
                    <p>
                        <span className="font-semibold text-purple-300">Ingredients:</span>{" "}
                        {ingredients || "Not listed"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PotionCard;
