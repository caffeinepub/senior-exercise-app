import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Exercise } from "./data/exercises";
import { useAllExercises } from "./hooks/useQueries";

type View = "home" | "library" | "detail" | "active";

const CATEGORY_INFO: Record<
  string,
  { icon: string; color: string; description: string }
> = {
  Strength: {
    icon: "💪",
    color: "bg-orange-50 border-orange-200",
    description: "Build muscle and make everyday tasks easier",
  },
  Flexibility: {
    icon: "🧘",
    color: "bg-green-50 border-green-200",
    description: "Improve your range of motion and ease stiffness",
  },
  Balance: {
    icon: "⚖️",
    color: "bg-blue-50 border-blue-200",
    description: "Improve steadiness and help prevent falls",
  },
  Breathing: {
    icon: "🌬️",
    color: "bg-purple-50 border-purple-200",
    description: "Calm your mind and strengthen your lungs",
  },
};

const BODY_PART_ICONS: Record<string, string> = {
  "Legs & Core": "🦵",
  "Arms & Chest": "💪",
  "Legs & Hip Flexors": "🦵",
  "Neck & Shoulders": "🧍",
  "Back of Legs": "🦵",
  "Shoulders & Upper Back": "🦾",
  "Legs & Ankles": "🦶",
  "Hips & Ankles": "🦶",
  "Lungs & Diaphragm": "🫁",
  "Lungs & Airways": "🫁",
  "Whole Body": "🌟",
};

function getBodyIcon(bodyPart: string): string {
  return BODY_PART_ICONS[bodyPart] ?? "🏃";
}

// ─── LOADING ────────────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <div className="text-6xl animate-bounce">🌸</div>
      <p className="text-3xl font-bold text-foreground">Loading exercises...</p>
      <p className="text-xl text-muted-foreground">Just a moment, please!</p>
    </div>
  );
}

// ─── ERROR ───────────────────────────────────────────────────────────────────
function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <div className="text-6xl">😟</div>
      <p className="text-3xl font-bold text-foreground">Something went wrong</p>
      <p className="text-xl text-muted-foreground max-w-sm">
        We couldn't load the exercises. Please check your connection and try
        again.
      </p>
      <button
        type="button"
        data-ocid="error.primary_button"
        onClick={onRetry}
        className="mt-4 bg-primary text-primary-foreground text-xl font-bold px-10 py-5 rounded-2xl min-h-[64px] hover:opacity-90 active:scale-95 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function HomePage({
  onSelectCategory,
  onViewAll,
}: {
  onSelectCategory: (cat: string) => void;
  onViewAll: () => void;
}) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-8 rounded-b-3xl shadow-warm">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-5xl mb-3">🌅</div>
          <h1 className="text-3xl font-bold leading-tight">Welcome!</h1>
          <p className="text-xl mt-2 opacity-90">Ready to feel great today?</p>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-5 py-8 max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Choose a category
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Pick what feels right for you today.
        </p>

        {/* Category Cards */}
        <div className="flex flex-col gap-4">
          {Object.entries(CATEGORY_INFO).map(([cat, info], idx) => (
            <button
              type="button"
              key={cat}
              data-ocid={`home.${cat.toLowerCase()}.button`}
              onClick={() => onSelectCategory(cat)}
              className={`w-full flex items-center gap-5 ${info.color} border-2 rounded-2xl px-6 py-5 min-h-[80px] text-left hover:shadow-card active:scale-[0.98] transition-all`}
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <span
                className="text-5xl flex-shrink-0"
                role="img"
                aria-label={cat}
              >
                {info.icon}
              </span>
              <div>
                <div className="text-xl font-bold text-foreground">{cat}</div>
                <div className="text-base text-muted-foreground mt-1">
                  {info.description}
                </div>
              </div>
              <span className="ml-auto text-3xl text-muted-foreground">›</span>
            </button>
          ))}
        </div>

        {/* View All */}
        <button
          type="button"
          data-ocid="home.view_all.primary_button"
          onClick={onViewAll}
          className="w-full mt-8 bg-secondary text-secondary-foreground text-xl font-bold py-5 rounded-2xl min-h-[64px] hover:opacity-90 active:scale-95 transition-all"
        >
          View All Exercises →
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center px-6 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()}.{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Built with ❤️ using caffeine.ai
        </a>
      </footer>
    </motion.div>
  );
}

// ─── EXERCISE LIBRARY ────────────────────────────────────────────────────────
function ExerciseLibraryPage({
  exercises,
  initialCategory,
  onSelectExercise,
  onBack,
}: {
  exercises: Exercise[];
  initialCategory: string;
  onSelectExercise: (ex: Exercise) => void;
  onBack: () => void;
}) {
  const [activeFilter, setActiveFilter] = useState(initialCategory || "All");
  const categories = ["All", "Strength", "Flexibility", "Balance", "Breathing"];

  const filtered =
    activeFilter === "All"
      ? exercises
      : exercises.filter((e) => e.category === activeFilter);

  return (
    <motion.div
      key="library"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-5 py-6 shadow-warm">
        <div className="max-w-lg mx-auto">
          <button
            type="button"
            data-ocid="library.back.button"
            onClick={onBack}
            className="flex items-center gap-2 text-lg font-semibold opacity-90 hover:opacity-100 mb-4 min-h-[48px]"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Exercise Library</h1>
          <p className="text-base opacity-80 mt-1">
            {exercises.length} exercises to choose from
          </p>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="bg-card border-b border-border px-5 py-3">
        <div className="max-w-lg mx-auto flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid={`library.${cat.toLowerCase()}.tab`}
              onClick={() => setActiveFilter(cat)}
              className={`flex-shrink-0 px-5 py-3 rounded-xl text-base font-semibold min-h-[52px] transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat === "All" ? "All" : `${CATEGORY_INFO[cat]?.icon} ${cat}`}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise List */}
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full">
        {filtered.length === 0 ? (
          <div
            data-ocid="library.empty_state"
            className="text-center py-16 text-muted-foreground text-xl"
          >
            No exercises in this category yet.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((exercise, idx) => (
              <button
                type="button"
                key={String(exercise.id)}
                data-ocid={`library.exercise.item.${idx + 1}`}
                onClick={() => onSelectExercise(exercise)}
                className="w-full bg-card border border-border rounded-2xl px-6 py-5 text-left hover:shadow-card active:scale-[0.98] transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-4xl flex-shrink-0">
                    {CATEGORY_INFO[exercise.category]?.icon ?? "🏃"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xl font-bold text-foreground leading-snug">
                      {exercise.title}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge
                        className={`text-sm px-3 py-1 ${
                          exercise.difficulty === "Easy"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                        }`}
                      >
                        {exercise.difficulty}
                      </Badge>
                      <Badge className="text-sm px-3 py-1 bg-muted text-muted-foreground border-border">
                        {exercise.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-base text-muted-foreground">
                      <span>{getBodyIcon(exercise.bodyPart)}</span>
                      <span>{exercise.bodyPart}</span>
                    </div>
                    <div className="mt-1 text-base text-foreground font-medium">
                      ⏱ {exercise.repsOrDuration}
                    </div>
                  </div>
                  <span className="text-3xl text-muted-foreground flex-shrink-0">
                    ›
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>
    </motion.div>
  );
}

// ─── EXERCISE DETAIL ─────────────────────────────────────────────────────────
function ExerciseDetailPage({
  exercise,
  onStart,
  onBack,
}: {
  exercise: Exercise;
  onStart: () => void;
  onBack: () => void;
}) {
  const catInfo = CATEGORY_INFO[exercise.category];

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-5 py-6 shadow-warm">
        <div className="max-w-lg mx-auto">
          <button
            type="button"
            data-ocid="detail.back.button"
            onClick={onBack}
            className="flex items-center gap-2 text-lg font-semibold opacity-90 hover:opacity-100 mb-4 min-h-[48px]"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{catInfo?.icon}</span>
            <h1 className="text-2xl font-bold leading-tight">
              {exercise.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/20 text-white border-white/30 text-base px-3 py-1">
              {exercise.category}
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 text-base px-3 py-1">
              {getBodyIcon(exercise.bodyPart)} {exercise.bodyPart}
            </Badge>
            <Badge
              className={`text-base px-3 py-1 ${
                exercise.difficulty === "Easy"
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-orange-100 text-orange-800 border-orange-200"
              }`}
            >
              {exercise.difficulty}
            </Badge>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-5 py-6 max-w-lg mx-auto w-full">
        {/* Description */}
        <p className="text-xl text-foreground leading-relaxed mb-6">
          {exercise.description}
        </p>

        {/* Duration / Reps Box */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl px-6 py-5 mb-6 flex items-center gap-4">
          <span className="text-4xl">⏱</span>
          <div>
            <div className="text-base font-semibold text-muted-foreground uppercase tracking-wide">
              How much to do
            </div>
            <div className="text-xl font-bold text-foreground mt-1">
              {exercise.repsOrDuration}
            </div>
          </div>
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step-by-Step Instructions
        </h2>
        <div className="flex flex-col gap-3 mb-6">
          {exercise.steps.map((step, i) => (
            <div
              key={step.slice(0, 40)}
              data-ocid={`detail.step.item.${i + 1}`}
              className="flex gap-4 bg-card border border-border rounded-2xl px-5 py-4"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {i + 1}
              </span>
              <p className="text-lg text-foreground leading-relaxed pt-1">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="bg-accent border border-yellow-200 rounded-2xl px-6 py-5 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span>⚠️</span> Safety Tips
          </h3>
          <ul className="flex flex-col gap-2">
            {exercise.safetyTips.map((tip) => (
              <li
                key={tip.slice(0, 40)}
                className="flex gap-3 text-lg text-foreground"
              >
                <span className="flex-shrink-0 text-yellow-600">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Start Button */}
        <button
          type="button"
          data-ocid="detail.start_exercise.primary_button"
          onClick={onStart}
          className="w-full bg-primary text-primary-foreground text-2xl font-bold py-6 rounded-2xl min-h-[72px] hover:opacity-90 active:scale-95 transition-all shadow-warm"
        >
          Start Exercise 🚀
        </button>
      </main>
    </motion.div>
  );
}

// ─── ACTIVE EXERCISE ─────────────────────────────────────────────────────────
function ActiveExercisePage({
  exercise,
  onDone,
  onHome,
}: {
  exercise: Exercise;
  onDone: () => void;
  onHome: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = exercise.steps.length;
  const isComplete = currentStep >= totalSteps;
  const progress = Math.round((currentStep / totalSteps) * 100);

  function handleNext() {
    setCurrentStep((prev) => prev + 1);
  }

  function handlePrev() {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }

  if (isComplete) {
    return (
      <motion.div
        key="complete"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col min-h-screen items-center justify-center bg-background px-6 text-center"
      >
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Well Done!</h1>
        <p className="text-xl text-muted-foreground max-w-sm mb-2">
          You completed <strong>{exercise.title}</strong>.
        </p>
        <p className="text-xl text-foreground mb-10">
          That's wonderful — you should be proud of yourself! 🌟
        </p>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            type="button"
            data-ocid="complete.do_another.primary_button"
            onClick={onDone}
            className="w-full bg-primary text-primary-foreground text-xl font-bold py-5 rounded-2xl min-h-[64px] hover:opacity-90 active:scale-95 transition-all shadow-warm"
          >
            Do Another Exercise
          </button>
          <button
            type="button"
            data-ocid="complete.home.secondary_button"
            onClick={onHome}
            className="w-full bg-secondary text-secondary-foreground text-xl font-bold py-5 rounded-2xl min-h-[64px] hover:opacity-90 active:scale-95 transition-all"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="active"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Progress Header */}
      <header className="bg-primary text-primary-foreground px-5 py-5 shadow-warm">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              data-ocid="active.back.button"
              onClick={onHome}
              className="text-base opacity-80 hover:opacity-100 min-h-[44px] flex items-center"
            >
              ✕ Quit
            </button>
            <span className="text-lg font-semibold">
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-white/30" />
          <p className="text-base opacity-80 mt-2 text-center">
            {exercise.title}
          </p>
        </div>
      </header>

      {/* Step Content */}
      <main className="flex-1 flex flex-col justify-between px-5 py-8 max-w-lg mx-auto w-full">
        <div className="flex-1 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="text-center w-full"
            >
              <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                {currentStep + 1}
              </div>
              <p
                data-ocid="active.step.panel"
                className="text-2xl font-semibold text-foreground leading-relaxed max-w-md mx-auto"
              >
                {exercise.steps[currentStep]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 mt-10">
          <button
            type="button"
            data-ocid="active.next_step.primary_button"
            onClick={handleNext}
            className="w-full bg-primary text-primary-foreground text-2xl font-bold py-6 rounded-2xl min-h-[72px] hover:opacity-90 active:scale-95 transition-all shadow-warm"
          >
            {currentStep < totalSteps - 1 ? "Next Step →" : "I'm Done! ✓"}
          </button>
          {currentStep > 0 && (
            <button
              type="button"
              data-ocid="active.prev_step.secondary_button"
              onClick={handlePrev}
              className="w-full bg-card border-2 border-border text-foreground text-xl font-semibold py-5 rounded-2xl min-h-[64px] hover:bg-muted active:scale-95 transition-all"
            >
              ← Previous Step
            </button>
          )}
        </div>
      </main>
    </motion.div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null,
  );
  const [categoryFilter, setCategoryFilter] = useState("All");

  const { data: exercises, isLoading, isError, refetch } = useAllExercises();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen onRetry={() => refetch()} />;

  const allExercises = exercises ?? [];

  function goHome() {
    setView("home");
    setSelectedExercise(null);
    setCategoryFilter("All");
  }

  function openCategory(cat: string) {
    setCategoryFilter(cat);
    setView("library");
  }

  function openExercise(ex: Exercise) {
    setSelectedExercise(ex);
    setView("detail");
  }

  function startExercise() {
    setView("active");
  }

  function backToDetail() {
    setView("detail");
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === "home" && (
          <HomePage
            key="home"
            onSelectCategory={openCategory}
            onViewAll={() => {
              setCategoryFilter("All");
              setView("library");
            }}
          />
        )}
        {view === "library" && (
          <ExerciseLibraryPage
            key="library"
            exercises={allExercises}
            initialCategory={categoryFilter}
            onSelectExercise={openExercise}
            onBack={goHome}
          />
        )}
        {view === "detail" && selectedExercise && (
          <ExerciseDetailPage
            key="detail"
            exercise={selectedExercise}
            onStart={startExercise}
            onBack={() => setView("library")}
          />
        )}
        {view === "active" && selectedExercise && (
          <ActiveExercisePage
            key="active"
            exercise={selectedExercise}
            onDone={backToDetail}
            onHome={goHome}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
