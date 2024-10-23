

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-slate-900">
            <style>{`
        .static-stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 50px 160px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 90px 40px, white, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 130px 80px, white, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
        }

        @keyframes tail-fade {
          0% {
            width: 0;
            opacity: 0;
          }
          
          50% {
            width: 100px;
            opacity: 1;
          }
          
          100% {
            width: 0;
            opacity: 0;
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          
          100% {
            transform: translateX(-500px) translateY(500px);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          height: 2px;
          background: white;
          border-radius: 50%;
          transform-origin: right;
          opacity: 0;
          overflow: hidden;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, white, transparent);
          animation: tail-fade 3s ease-in-out infinite;
        }

        ${Array.from({ length: 8 }, (_, i) => {
                const top = Math.random() * 40;
                const right = Math.random() * 40 + 20;
                const delay = Math.random() * 15;

                return `
            .shooting-star:nth-child(${i + 1}) {
              top: ${top}%;
              right: ${right}%;
              animation: shooting 3s ease-in infinite;
              animation-delay: ${delay}s;
            }
          `;
            }).join('\n')}
      `}</style>

            <div className="static-stars" />
            {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="shooting-star" />
            ))}

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
                    Cosmos Explorer
                </h1>
                <p className="text-xl md:text-2xl text-center max-w-2xl">
                    Votre voyage visuel à travers l’univers
                </p>
            </div>

            <div className="absolute bottom-12 left-0 right-0 text-center text-white/60 text-sm z-10">
                Images issues de l'API APOD de la NASA
            </div>
        </div>
    );
};

export default HeroSection;