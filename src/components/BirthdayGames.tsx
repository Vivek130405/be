import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GameProps {
  onUnlock: (wish: string) => void;
}

// 1. Balloon Popping Game
const BalloonGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [poppedCount, setPoppedCount] = useState(0);
  const [balloons, setBalloons] = useState<{ id: number; color: string; left: number }[]>([]);

  useEffect(() => {
    const colors = ['#f472b6', '#c084fc', '#818cf8', '#60a5fa', '#fbcfe8'];
    const newBalloons = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 80 + 10,
    }));
    setBalloons(newBalloons);
  }, []);

  const popBalloon = (id: number) => {
    setBalloons(prev => prev.filter(b => b.id !== id));
    setPoppedCount(prev => {
      const next = prev + 1;
      if (next === 18) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff69b4', '#ffffff', '#eab308']
        });
        onComplete();
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col items-center min-h-[400px]">
      <div className="mb-4 text-slate-600 font-medium">Balloons Popped: {poppedCount} / 18</div>
      <div className="relative w-full h-[300px] bg-sky-50/50 rounded-2xl border-2 border-dashed border-sky-200 overflow-hidden">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            initial={{ y: 350 }}
            animate={{ y: -50 }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ left: `${balloon.left}%`, backgroundColor: balloon.color }}
            className="absolute w-12 h-16 rounded-[100%] cursor-pointer shadow-inner flex items-center justify-center group"
            onClick={() => popBalloon(balloon.id)}
          >
            <div className="w-0.5 h-12 bg-white/30 absolute -bottom-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px] font-bold">POP</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 2. Quiz Game
const QuizGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const questions = [
    { q: "How long have we known each other?", a: ["1 Year", "2 Years", "6 Months"], correct: 0 },
    { q: "When is Nancy's birthday?", a: ["April 19", "April 20", "April 21"], correct: 1 },
    { q: "What's our common vibe?", a: ["Chaotic", "Emotional & Magical", "Just Boring"], correct: 1 },
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[step].correct) {
      if (step === questions.length - 1) {
        onComplete();
      } else {
        setStep(step + 1);
      }
    } else {
      alert("Wrong answer! But I know you know it 😉");
    }
  };

  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto p-4">
      <div className="mb-6 text-pink-500 font-bold uppercase tracking-widest text-sm">Question {step + 1} / 3</div>
      <h3 className="text-xl font-bold mb-8 text-slate-700">{questions[step].q}</h3>
      <div className="flex flex-col gap-4 w-full">
        {questions[step].a.map((ans, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="w-full py-4 px-6 rounded-xl glass hover:bg-pink-500 hover:text-white transition-all text-slate-600 font-medium border-2 border-pink-100"
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
};

// 3. Simple Puzzle Game (Assemble birthday cake)
const PuzzleGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [pieces, setPieces] = useState<number[]>([1, 0, 2, 3]); // Shuffled state
  const target = [0, 1, 2, 3];

  const swap = (i1: number, i2: number) => {
    const newPieces = [...pieces];
    [newPieces[i1], newPieces[i2]] = [newPieces[i2], newPieces[i1]];
    setPieces(newPieces);
    
    if (newPieces.every((v, i) => v === target[i])) {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <p className="mb-6 text-slate-500 italic">Arrange the pieces to fix the cake! 🍰</p>
      <div className="grid grid-cols-2 gap-2 p-2 glass rounded-xl">
        {pieces.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swap(i, (i + 1) % 4)}
            className="w-24 h-24 bg-pink-100 rounded-lg overflow-hidden cursor-pointer"
          >
            <img 
              src={`https://picsum.photos/seed/cake${p}/200/200`} 
              alt="puzzle" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface GameProps {
  onAllComplete: () => void;
}

export const BirthdayGames: React.FC<GameProps> = ({ onAllComplete }) => {
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean[]>([false, false, false]);

  const handleGameComplete = (index: number) => {
    const nextCompleted = [...completed];
    nextCompleted[index] = true;
    setCompleted(nextCompleted);
    setActiveGame(null);
    
    if (nextCompleted.every(v => v)) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
      onAllComplete();
    }
  };

  return (
    <section className="py-24 px-6 relative bg-editorial-white border-y border-editorial-purple/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-6 text-editorial-text uppercase tracking-widest font-bold">Magical Games</h2>
        <p className="text-center text-editorial-text mb-16 italic opacity-70">Complete all challenges to unlock Nancy's special surprise! ✨</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Balloon Pop", desc: "Pop 18 birthday balloons", icon: "🎈" },
            { title: "Friendship Trivia", desc: "How well do you know us?", icon: "💡" },
            { title: "Mystery Puzzle", desc: "Fix the birthday cake", icon: "🧩" }
          ].map((game, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[20px] glass flex flex-col items-center text-center ${completed[i] ? 'opacity-80 border-editorial-accent border-2' : ''}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl border-2 border-dashed border-editorial-accent ${completed[i] ? 'bg-editorial-accent text-white' : 'bg-editorial-sky text-editorial-accent shadow-inner'}`}>
                {completed[i] ? <CheckCircle2 size={32} /> : <span>{game.icon}</span>}
              </div>
              <h3 className="text-xl font-bold mb-2 text-editorial-text">{game.title}</h3>
              <p className="text-xs text-editorial-text opacity-70 mb-6 font-bold uppercase tracking-wider">{game.desc}</p>
              
              {!completed[i] ? (
                <button
                  onClick={() => setActiveGame(i)}
                  className="editorial-button w-full"
                >
                  Play now
                </button>
              ) : (
                <span className="text-editorial-accent font-bold italic">Unlocked!</span>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeGame !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-white/80 backdrop-blur-xl flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[40px] shadow-2xl p-8 max-w-xl w-full relative"
              >
                <button 
                  onClick={() => setActiveGame(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-800"
                >
                  <RotateCcw size={24} />
                </button>
                
                {activeGame === 0 && <BalloonGame onComplete={() => handleGameComplete(0)} />}
                {activeGame === 1 && <QuizGame onComplete={() => handleGameComplete(1)} />}
                {activeGame === 2 && <PuzzleGame onComplete={() => handleGameComplete(2)} />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
