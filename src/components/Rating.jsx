import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ label = "¿Te fue útil esta página?" }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-3">{label}</h3>
            <div className="flex justify-center">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={ratingValue}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                className="hidden"
                            />
                            <FaStar
                                size={40}
                                className="cursor-pointer transition-transform duration-150 hover:scale-110"
                                color={ratingValue <= (hover || rating) ? "#FFD700" : "#E5E7EB"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            {rating && (
                <p className="mt-2 text-gray-700">
                    Gracias por tu valoración: {rating} estrella{rating > 1 ? "s" : ""}
                </p>
            )}
        </div>
    );
}
