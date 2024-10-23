import { Rocket } from 'lucide-react';

const RocketLoader = () => {
    return (
        <div className="flex justify-center items-center w-full py-4 relative h-16">
            <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .orbit-container {
          width: 40px;
          height: 40px;
          position: relative;
          animation: orbit 2s linear infinite;
        }
        .rocket-position {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(-20px) rotate(90deg);
        }
      `}</style>
            <div className="orbit-container">
                <div className="rocket-position">
                    <Rocket size={24} className="text-blue-500"/>
                </div>
            </div>
        </div>
    );
};

export default RocketLoader;