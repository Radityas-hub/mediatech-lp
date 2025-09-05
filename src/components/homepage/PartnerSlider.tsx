import React from 'react';
import { PARTNERS_DATA } from '@/constants/partners';

/**
 * PartnerSlider component displays partner logos in an infinite scroll animation.
 * 
 * @returns React functional component
 */
const PartnerSlider: React.FC = () => {
    return (
        <section className="w-full bg-[#0C192B] py-8" role="region" aria-label="Partner section">
            <div className="w-full overflow-hidden" aria-hidden="true">
                <div className="flex animate-infinite-scroll">
                    {[...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA].map((partner, index) => (
                        <div 
                            key={`${partner.id}-${index}`}
                            className="flex-shrink-0 mx-12 flex justify-center items-center min-w-[120px]"
                        >
                            <img 
                                src={partner.logo} 
                                alt=""
                                className="h-10 md:h-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-80 transition-opacity duration-300"
                                loading="lazy"
                                onError={(e) => {
                                    console.warn(`Failed to load partner logo: ${partner.name}`);
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(PartnerSlider);
